# ecommerceapi_codingninja Skill test3
This is an E-commerce API made using Node.Js & MongoDB.

STEPS TO USE THE API:

# run "npm init" command on terminal in this projects directory
start the server using node app.js
Open postman
Make a GET request on localhost:3000/products
The products should be visible
STEPS TO CREATE A NEW PRODUCT:

# start the server using node app.js
Open postman
put localhost:3000/products/create as the url.
Select Body tab below the url textarea and then select x-www-form-urlencoded
Add name & quantity as the keys and set the desired values for the keys.
Make a POST request.
If you recieve the message saying new product added successfully then you have done everything correct.
The product is created. Check it out by making a GET request at localhost:3000/products

# STEPS TO DELETE A PRODUCT:
copy the object id of the product you want to delete.
add the id after localhost:3000/products/
Make a DELETE request.
You will recieve a message saying deleted successfully.

# STEPS TO UPDATE THE QUANTITY OF A PRODUCT:
Copy the object id of the product whose quantity you want to update
Put the id after localhost:3000/products/
After putting the id add /update_quantity/?number={x} in the url where x is the number by which you want to increase or decrease the quantity.
the url should be looking like localhost:3000/products/{id}/update_quantity/?number={x}
Make a POST request and you should get a message containing the update product
