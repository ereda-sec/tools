## PoC Steps:

Clone this folder 

npm install required modules

node server.js

Intercept requests, decode the cookie and change the username value in the cookie with the payload

Use the serlialize.js or serialize-rs.js to generate the payload

make it self invoking by adding () at the end


## To run using ubuntu docker to simulate the reverse shell:

docker build . -t ereda/deserialize

docker run -p 8000:8000 -d ereda/deserialize

### Follow the same steps for exploitation with docker