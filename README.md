RoboHydra server
================

RoboHydra is a testing tool for HTTP-based clients (ie. software that
makes HTTP requests). The idea is, instead of connecting your
clients-under-test to the real server, you connect them to RoboHydra
and make RoboHydra respond with whatever you need for each request.
You can test many different kinds of clients, like Javascript-heavy
web application front-ends, desktop GUI applications that connect to
HTTP-based APIs (eg. the Flickr API), mobile applications that contact
a server to login, etc. It helps answer questions like "how would the
client behave when it receives a certain response from the server?",
"does the client send the correct request to the server when certain
action is performed?", "what would happen if this request takes more
than normal to process", or "what would happen if this request gets
its response before this other request?". See examples of
[use-cases](http://robohydra.org/usecases/) on the website.

A RoboHydra is composed of "heads", pieces of code that listen in a
given path and trigger a certain behaviour when a request for that
path is received. The behaviour can be: checking the incoming request,
returning a static response, serving a file from the file system,
proxy the request to another server, store certain data and return a
canned response, etc. All these different behaviours can be combined
in powerful ways to achieve the results you need.

RoboHydra is written in Javascript, runs under Node and is distributed
under the Apache 2.0 license. See LICENSE for the full text.


Copyright 2012-2015 Esteban Manchado Velázquez

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
