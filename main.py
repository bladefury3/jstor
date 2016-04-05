#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import os
import urllib


import jinja2
from google.appengine.api import users
import webapp2

JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape','jinja2.ext.with_'],
    autoescape=True)

class MainHandler(webapp2.RequestHandler):
  def get(self):    
    template_values = {};  
    user = users.get_current_user()
    if user:
      template_values.update({'user': user.nickname()})
    else:
      template_values.update({'request_user': 'true'});
    search_term = self.request.get('search')
    if search_term:
      template_values.update({'search': search_term, 'request': self.request})
      template = JINJA_ENVIRONMENT.get_template('templates/search.html')
      self.response.write(template.render(template_values))      	
    else:
      template_values.update({'request': self.request})
      template = JINJA_ENVIRONMENT.get_template('templates/index.html')
      self.response.write(template.render(template_values))
  

class CategoryHandler(webapp2.RequestHandler):
	def get(self):
		template_values = {'request': self.request}
		template = JINJA_ENVIRONMENT.get_template('templates/categories.html')
		self.response.write(template.render(template_values))

class SignInHandler(webapp2.RequestHandler):
  def get(self):
    template_values = {'request': self.request}
    template = JINJA_ENVIRONMENT.get_template('templates/login.html')
    self.response.write(template.render(template_values))
  def register(self):
    template_values = {'request': self.request}
    template = JINJA_ENVIRONMENT.get_template('templates/register.html')
    self.response.write(template.render(template_values))
class CheckoutHandler(webapp2.RequestHandler):
  def get(self):
    template_values = {'request': self.request}
    template = JINJA_ENVIRONMENT.get_template('templates/checkout.html')
    self.response.write(template.render(template_values))
class ProfileHandler(webapp2.RequestHandler):
  def get(self):
    template_values = {'request': self.request}
    template = JINJA_ENVIRONMENT.get_template('templates/profile.html')
    self.response.write(template.render(template_values))
app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/categories', CategoryHandler),
    ('/login', SignInHandler),    
    webapp2.Route('/register', handler=SignInHandler, handler_method='register'),
    webapp2.Route('/checkout', handler=CheckoutHandler, handler_method='get'),
], debug=True)
