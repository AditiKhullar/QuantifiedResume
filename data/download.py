import oauth2 as oauth
import httplib2
import time, os, simplejson
 
# Fill the keys and secrets you retrieved after registering your app
consumer_key      =   '77698t309hxr59'
consumer_secret  =   'gKtXM0tQbyp0IKDH'
user_token           =   '41ce505f-c059-433d-af46-dc2440db6799'
user_secret          =   'fe2ea905-42d3-4112-b111-539c11c6147a'
 
# Use your API key and secret to instantiate consumer object
consumer = oauth.Consumer(consumer_key, consumer_secret)

# Use the consumer object to initialize the client object
client = oauth.Client(consumer)
 
# Use your developer token and secret to instantiate access token object
access_token = oauth.Token(
            key=user_token,
            secret=user_secret)
 
client = oauth.Client(consumer, access_token)
 
# Make call to LinkedIn to retrieve your own profile
resp,content = client.request("https://api.linkedin.com/v1/people/~:(id,first-name,last-name,skills,positions,educations)", "GET", "")
# By default, the LinkedIn API responses are in XML format. If you prefer JSON, simply specify the format in your call
# resp,content = client.request("https://api.linkedin.com/v1/people/~?format=json", "GET", "")

print resp

with open("data.xml", "wb+") as fp:
	print >> fp, content

