# Create an API of webstore products 

In this project we will create our own API of webstore products. 

## What you will be doing

This project will allow you to practise using:

> - HTTP methods
> - Database MongoDB CRUDE operations

This project assumes you've already had experience with:

> - Routing Express
> - MongoDB Schemas

## Tasks

Before starting run `npm install` to install all the required packages. 


## Task 1 - Complete the .env file

1. Create a new `.env` file to store the database environment variables.
   
2. Configure your database env variables. 


## Task 2 - Create a new Product Schema. 

We have to create a new Product Schema with the following fields: 

- name - String 
- price - Number
- category - String (example "INDOORS", "OUTDOORS")
- instock - Boolean (true or false)


## Task 3 - Add new product  (CREATE)

  1. Create a new `post` endpoint `/create` in `productsRoutes`. 

  2. Use the `create` or  `save` method to create a new product in the database. 

Example using save

 ```javascript
const tea = new Tea({ name: 'Sencha', type: 'GREENTEA' });
await tea.save();
   ```

Example using create

 ```javascript
const tea = await Tea.create({ name: 'Sencha', type: 'GREENTEA' });
   ```

## Task 4 - Get list of products  (READ)
  1. Create a new `get` endpoint `/list` in `productsRoutes`. 

  2. Use the `find` method to get return a list of all products in the database. 

Example using find

 ```javascript
const teas = await Tea.find(); // all the teas
   ```

## Task 5 - Get product by id (READ)
  1. Create a new `get` endpoint `/product/:id` in `productsRoutes`. 

  2. Use the `findById` method to return the product with the id specified in the parameters. 

Example using findById

 ```javascript
const teas = await Tea.findById('dsf5464sdsms5d');
   ```

## Task 6 - Get products by category (READ)
  1. Create a new `get` endpoint `/product/category/:category` in `productsRoutes`. 

  2. Use the `find` method to return the products with the category specified in the parameters. 

Example using find 

 ```javascript
const teas = await Tea.find({ type: 'GREENTEA' });
   ```

## Task 7 - Update category of product (UPDATE)
  1. Create a new `put` endpoint `/update/category/:id` in `productsRoutes`. 

  2. Use the `findByIdAndUpdate` method to update the product 

Example using find 

 ```javascript
const cats = await Cat.findByIdAndUpdate('dfsdfqsfdsfqsd', { type: 'BLACKTEA' });
   ```

## Task 8 - Add middleware for a DELETE request to 'api/cars/delete/:id'
Write some middleware that will respond to the path `api/cars/update`. This middleware should delete the car by id and should return a json `response` with the list of cars (excluding the car that was deleted) and a status code 200.

- If a faulty id paramater was supplied it should return status code 400 (Bad Request). 
- If an id was supplied but it can't be found in the array return status code 404.








