#!/usr/bin/python
print "Content-type: text/html"       # set up header
print

# Author oldham@centre.edu



import cgi				# need the cgi module
import cgitb

cgitb.enable()

form = cgi.FieldStorage()		# get the data


txt = form['theText'].value
print type(txt)

print "<H2>Hello</H2>\n<P>You entered <font color=red><i>" + txt + "</P>\n"

