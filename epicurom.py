# -*- coding: UTF-8 -*-
from google.appengine.ext import webapp
from google.appengine.ext.webapp.util import run_wsgi_app
from google.appengine.ext import db
from google.appengine.ext.webapp import template
import os
import re
from xml.dom.minidom import parseString
from appengine_utilities.sessions import Session
import urllib


class UserMod(db.Model):
    login = db.StringProperty()
    pwd = db.StringProperty()
    role = db.StringProperty()


class CategoryMod(db.Model):
    name = db.StringProperty()
    title = db.StringProperty()
    #position = db.StringProperty()
    #pooling = db.StringProperty()


class ReceipeMod(db.Model):
    name             = db.StringProperty()
    quantity         = db.StringProperty()
    toughness        = db.IntegerProperty()
    mark             = db.IntegerProperty()
    price            = db.IntegerProperty()
    advice           = db.StringProperty(multiline=True)
    date             = db.DateTimeProperty(auto_now_add=True)
    ingredient       = db.TextProperty()
    preparation      = db.TextProperty()
    category         = db.ReferenceProperty(CategoryMod)
    #preparation_time = db.StringProperty()
    #bakiing_time      = db.StringProperty()
    #rest_time        = db.StringProperty()
    #garnish          = db.StringProperty(multiline=True)


def url_encode(url, additional_args):
    url = url_decode(url)
    for arg in additional_args:
        if not url['args'].has_key(arg[0]):
            url['args_order'].append(arg[0])
    url['args'].update(dict(additional_args))
    args = [(arg, url['args'][arg]) for arg in url['args_order']]
    args = urllib.urlencode(args)
    args = '?%s' %args if args else ''
    url = '%s%s' %(url['url'], args)
    return url

def url_decode(url):
    decode = {'url': '', 'args': {}, 'args_order': []}
    m = re.match('(?P<url>[^?]*)\??(?P<args>[^?]*)', url) 
    decode['url'] = re.sub('(.*)/$', r'\1', m.group('url'))
#    raise  '>>> %s' %decode['url']
    args = m.group('args')
    if args:
        args = re.split('&', args)
        args = [arg.split('=') for arg in args]
        decode['args'] = dict(args)
        decode['args_order'] = [arg[0] for arg in args]
    return decode

def get_base_namespace(self):
    namespace = {}
    namespace['menus'] = get_menu(self)
    if is_connected(self):
       namespace['connected_user'] = self.session['user'].login
    if self.request.get('msg'):
        namespace['msg'] = self.request.get('msg')
        namespace['msg_type'] = self.request.get('msg_type')
    return namespace

def is_connected(self):
    self.session = Session()
    return self.session.has_key('user')

def is_admin(self):
    if is_connected(self):
        return self.session['user'].role == 'admin'

def get_connected_user(self):
    return self.session['user']


class Application(webapp.RequestHandler):

    def get(self, *kw):
        kw = list(kw)
        namespace = get_base_namespace(self)
        path = os.path.join(os.path.dirname(__file__), 'homepage.html')
        self.response.out.write(template.render(path, namespace))

    def post(self, *kw):
        kw = list(kw)
        if kw and kw.pop() == 'connect':
            login = self.request.get('login')
            pwd = self.request.get('pwd')
            query = db.Query(UserMod)
            query.filter('login =', login)
            query.filter('pwd =', pwd)
            user = query.fetch(limit=2)
            if user:
                msg = 'Connection réussie !'
                msg_type = 'standard_msg'
                self.session = Session()
                self.session['user'] = user[0]
            else:
                msg = 'Connection échouée !'
                msg_type = 'error_msg'
            referer = self.request.headers['Referer']
            args = (('msg', msg), ('msg_type', msg_type))
            redirect_url = url_encode(referer, args)
#            raise  '>>> %s' %redirect_url
            self.redirect(redirect_url)

class Receipe(webapp.RequestHandler):

    dtd_ingredient = """
        <!ELEMENT ingredients(receipe?, subreceipe*)>
        <!ELEMENT receipe(ingredient+)>
        <!ELEMENT subrecipe(ingedient+)>
        <!ELEMENT ingredient(quantity, name)>
        <!ELEMENT quantity(#PCDATA)>
        <!ELEMENT name(#PCDATA)>
        """

    def get(self):
        namespace = {}
        namespace = get_base_namespace(self)

        # Recover parameters
        key = self.request.get('key')
        action = self.request.get('action')
        if not action:
            action = 'receipe_view' if key else 'receipe_list_view'

        # Build pages to show
        if action == "receipe_view":
            if key:
                receipe = db.get(key)
#                namespace['key'] = key
#                receipe = db.GqlQuery("""
#                    SELECT * FROM ReceipeMod
#                    WHERE __key__ = key('%s')
#                    """ %key)
            elif self.request.get('name'):
                query = db.Query(ReceipeMod)
                query.filter('name = ', self.request.get('name'))
                receipe = query.fetch(limit=1000)[0]
            else:
                raise "receipe key or name not specified"
            if not receipe:
                raise "Not matching receipe"
            namespace['receipe'] = receipe
            ingredients = self.get_ingredient_ns(receipe.ingredient) if receipe.ingredient else []
            namespace['ingredients'] = ingredients
            preparation = self.get_preparation_ns(receipe.preparation) if receipe.preparation else []
            namespace['preparation'] = preparation
            file_template = 'receipe_view.html'
        elif action == 'test':
            category = CategoryMod()
            category.name = 'meat'
            category.title = 'Viande'
            category.put()
            receipe = ReceipeMod()
            receipe.ingredient = u"<receipe> <ingredient>1 poulet</ingredient> <ingredient>2 cl d'huile</ingredient> <ingredient>100 g de sucre</ingredient> <ingredient>200 g de petits oignons surgelés</ingredient> <ingredient>25 cl de vinaigre de xérès</ingredient> <ingredient>1 litre de fond de volaille</ingredient> <ingredient>1 coeur de laitue</ingredient> <ingredient>120 g de cerneaux de noix</ingredient> <ingredient>1 botte de ciboulette</ingredient> <ingredient>sel, poivre</ingredient> </receipe>"
            receipe.preparation = u"<preparation> <step>Coupez le poulet en 4 morceaux. Dans une grosse cocotte sur feu vif, faites revenir le poulet dans 2 cl d'huile pendant 5 minutes, puis retirez-les et égouttez-les sur du papier absorbant.</step> <step>Mettez le sucre dans la cocotte, laissez-le cuire jusqu'à ce quil prenne une belle teinte caramel. Ajoutez les oignons puis le vinaigre.</step> <step>Remettez les morceaux de viande dans la cocotte et verser le fond de volaille. Laissez cuire pendant environ 35 minutes à couvert, sur feu moyen.</step> <step>Disposez la volaille dans un plat. Faites réduire la sauce aux deux tiers sur feu vif, assaisonnez-la et versez-la sur la viande.</step> <step>Placez autour les quartiers de coeur de laitue. Saupoudrez de cerneaux de noix et de ciboulette hachée.</step> <step>Servez froid.</step> </preparation> "
            receipe.mark = 4
            receipe.name = u'Poulet froid au vinaigre de xérès'
            receipe.put()
            user = UserMod()
            user.login = 'rcr'
            user.pwd = 'admin'
            user.role = 'admin'
            user.put()
        elif action == "receipe_edit":
            namespace['key'] = key
            receipe = db.GqlQuery("""
                SELECT * FROM ReceipeMod
                WHERE __key__ = key('%s')
                """ %key)
            receipe = receipe[0]
            namespace['receipe'] = receipe
            namespace['mark'] = []
            for x in range(1, 6):
                selected = 'selected' if x == receipe.mark else ''
                namespace['mark'].append({'level': x, 'selected':selected})
            namespace['toughness'] = []
            for x in range(1, 4):
                selected = 'selected' if x == receipe.toughness else ''
                namespace['toughness'].append({'level': x, 'selected':selected})
            namespace['price'] = []
            for x in range(1, 4):
                selected = 'selected' if x == receipe.price else ''
                namespace['price'].append({'level': x, 'selected':selected})
            namespace['categories'] = []
            for category in db.GqlQuery("SELECT * FROM CategoryMod"):
                selected = 'selected' if category == receipe.category else ''
                namespace['categories'].append({'value':category.key() , 'selected':selected, 'title':category.title})
            file_template = 'receipe_edit.html'
        elif action == "receipe_add":
            namespace['mark'] = range(1, 6)
            namespace['toughness'] = range(1, 4)
            namespace['price'] = range(1, 4)
            namespace['categories'] = db.GqlQuery("SELECT * FROM CategoryMod")
            file_template = 'receipe_add.html'
        elif action == "receipe_list_view":
#            import pdb, sys; pdb.Pdb(stdin=getattr(sys,'__stdin__'),stdout=getattr(sys,'__stderr__')).set_trace(sys._getframe().f_back)
            filter_operator = ''
            filter_value = ''
            category = self.request.get('category')
            search = self.request.get('search')
            if category:
                filter_operator = 'category ='
                filter_value = CategoryMod.gql("WHERE name = '%s'" %category)[0]
            elif search:
                filter_operator = 'ingredient in'
                filter_value = search
            query = db.Query(ReceipeMod)
            if filter_operator:
                query.filter(filter_operator, filter_value)
            query.order('name')
            receipes = query.fetch(limit=1000)
            namespace['receipes'] = receipes
            file_template = 'receipe_list_view.html'
        elif action == 'receipe_list_edit':
            receipes = db.GqlQuery("SELECT * FROM ReceipeMod ORDER BY name")
            namespace['receipes'] = receipes
            file_template = 'receipe_list_edit.html'
        elif action == 'receipe_seek':
            ingredient = self.request.get('ingredient')
            query = db.query(ReceipeMod)
            query.filter('ingredient IN', query).order('name')
            receipes = query.fetch(limit=1000)
            namespace['receipes'] = receipes
            file_template = 'receipe_list_view.html'
        else:
            self.response.out.write('Action incorrecte avec la méthode GET')
            return None

        if action not in ['test']:
            # Build html page
            path = os.path.join(os.path.dirname(__file__), file_template)
            self.response.out.write(template.render(path, namespace))

    def post(self):

        # Recover parameters
        key = self.request.get('key')
        action = self.request.get('action')
        if action == "receipe_add":
            receipe = ReceipeMod()
            receipe.name = self.request.get('name')
            receipe.quantity = self.request.get('quantity')
            receipe.mark = int(self.request.get('mark'))
            receipe.toughness = int(self.request.get('toughness'))
            receipe.price = int(self.request.get('price'))
            receipe.advice = self.request.get('advice')
            xml_ingredient = self.request.get('ingredient')
            if xml_ingredient:
                parseString(xml_ingredient.encode('utf-8'))
            receipe.ingredient = xml_ingredient
            xml_preparation = self.request.get('preparation')
            if xml_preparation:
                parseString(xml_preparation.encode('utf-8'))
            receipe.preparation = xml_preparation
            receipe.category = db.get(self.request.get('category'))
            receipe.put()
            self.redirect('/receipe?action=receipe_list_edit')
        elif action == 'receipe_edit':
            receipe = db.GqlQuery("""
                SELECT * FROM ReceipeMod
                WHERE __key__ = key('%s')
                """ %key)
            receipe = receipe[0]
            receipe.name = self.request.get('name')
            receipe.quantity = self.request.get('quantity')
            receipe.mark = int(self.request.get('mark'))
            receipe.toughness = int(self.request.get('toughness'))
            receipe.price = int(self.request.get('price'))
            receipe.advice = self.request.get('advice')
            receipe.category = db.get(self.request.get('category'))
            xml_ingredient = self.request.get('ingredient')
            if xml_ingredient:
                parseString(xml_ingredient.encode('utf-8'))
            receipe.ingredient = xml_ingredient
            xml_preparation = self.request.get('preparation')
            if xml_preparation:
                parseString(xml_preparation.encode('utf-8'))
            receipe.preparation = xml_preparation
            receipe.put()
            self.redirect('/receipe?action=receipe_edit&key=%s' %key)
        elif action == "receipe_delete":
            receipe = db.GqlQuery("""
                SELECT * FROM ReceipeMod
                WHERE __key__ = key('%s')
                """ %key)
            receipe[0].delete()
            self.redirect('/receipe?action=receipe_list_edit')
        else:
            self.response.out.write("Action '%s' ou key '%s' incorrecte avec la méthode POST" %(str(action), str(key)))

    def get_ingredient_ns(self, xml_ingredient):
        ns = {}
        dom = parseString(xml_ingredient.encode('utf-8'))
        node_receipe = dom.getElementsByTagName('receipe')[0]
        if node_receipe:
            ingredients = []
            nodes_ingredient =  node_receipe.getElementsByTagName('ingredient')
            for node in nodes_ingredient:
                ingredients.append(node.firstChild.nodeValue)
            ns['receipe'] = ingredients
        ns['subreceipes'] = []
        link_nodes = dom.getElementsByTagName('link')
#        raise '>>>%s' %link_nodes
        if link_nodes:
            links = []
            url_pattern = 'receipe?action=receipe_view&name=%s'
            for link_node in link_nodes:
                url = url_pattern %link_node.getElementsByTagName('receipe_name')[0].firstChild.nodeValue
                value = link_node.getElementsByTagName('value')[0].firstChild.nodeValue
                links.append({'url': url, 'value': value}) 
            ns['links'] = links
        nodes_subreceipe = dom.getElementsByTagName('subreceipe')
        if nodes_subreceipe:
            for node_subreceipe in nodes_subreceipe:
                ingredients = []
                name = node_subreceipe.getElementsByTagName('name')[0].firstChild.nodeValue
                for node_ingredient in node_subreceipe.getElementsByTagName('ing'):
                    ingredients.append(node_ingredient.firstChild.nodeValue)
                ns['subreceipes'].append({'name': name, 'ingredients': ingredients})
        return ns

    def get_preparation_ns(self, xml_preparation):
        dom = parseString(xml_preparation.encode('utf-8'))
        steps = []
        step_nodes = dom.getElementsByTagName('step')
        for step_node in step_nodes:
            steps.append(step_node.firstChild.nodeValue)
        return steps

application = webapp.WSGIApplication([
    ('/',                  Application  ),
    ('/(connect)',         Application  ),
    ('/accueil',           Receipe      ),
    ('/receipe',           Receipe      ),
    ],
    debug=True)

def get_menu(self):
    
    menus = [
        {'url': '/',                         'title': 'Accueil'    },
        {'url': 'receipe?category=starter',  'title': 'Entrees'    },
        {'url': '#',                         'title': 'Plats',     'submenus': (
            {'url': 'receipe?category=meat',     'title': 'Viandes'   },
            {'url': 'receipe?category=fish',     'title': 'Poissons'  },
            )},
        {'url': '#',                         'title': 'Desserts',  'submenus': (
            {'url': 'receipe?category=desert',        'title': 'Desserts'          },
            {'url': 'receipe?category=desert_base',   'title': 'Bases de dessert'  },
            )},
        {'url': 'receipe?category=cocktail', 'title': 'Cocktails'  },
        ]

    # Receipe categories menu
    #query = db.Query(CategoryMod) 
    #query = query.order('position')
    #categories = query.fetch(limit=100)
    #current_pooling = ''
    #for cat in categories:
    #    pooling = cat.get('pooling')
    #    if pooling != current_pooling:
    #        current_pooling = pooling
    #        menus.append(
    #            {'name': '', 'url': '#',          'title': current_pooling,     'submenus': ()})
    #    item_menu = {'name': cat['name'],  'url': 'receipe?category=%s' %cat['name'],     'title': cat['title']  }
    #    if pooling:
    #        menus[-1]['submenus'].append(item_menu)
    #    else:
    #        menus.append(item_menu)

    # Admin menu
    if is_admin(self):
        menus.append(
            {'name': 'admin',  'url': 'receipe?action=receipe_list_edit', 'title': 'Edition'  },
            )
    return menus

def main():
  run_wsgi_app(application)

if __name__ == "__main__":
  main()
