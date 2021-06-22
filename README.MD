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
- category - String
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

## Task 4 - Add middleware for a GET request to '/api/cars'
Write some middleware that will respond to the path `/api/cars`. This middleware should return a json `response` with the list of cars and a status code 200. 


## Task 5 - Add middleware for a GET request to 'api/cars/:id'
Write some middleware that will respond to the path `/cars/:id`. This middleware should return a json `response` with a car by parameter id and a status code 200. 
- If a faulty id parameter was supplied it should return status code 400 (Bad Request). 
- If an id was supplied but it can't be found in the array return status code 404.

## Task 6 - Add middleware for a POST request to 'api/cars/add'
Write some middleware that will respond to a post request to the path `api/cars/add`. 
A car object should be added to the array of cars. This middleware should return a json `response` with the added car object and status code 200.  The body of the request can look like this and should contain the necessary fields to create the new car object: 
 ```json
{
    "id":"4",
    "name":"Renault"
}
 ```



## Task 7 - Add middleware for a PUT request to 'api/cars/update/:id'
Write some middleware that will respond to the path `api/cars/update/:id`. This middleware should update an existing car and return a json `response` with the list of cars (including the newly added one) and a status code 200. 

- If a faulty id parameter was supplied it should return status code 400 (Bad Request). 
- If an id was supplied but it can't be found in the array return status code 404.

## Task 8 - Add middleware for a DELETE request to 'api/cars/delete/:id'
Write some middleware that will respond to the path `api/cars/update`. This middleware should delete the car by id and should return a json `response` with the list of cars (excluding the car that was deleted) and a status code 200.

- If a faulty id paramater was supplied it should return status code 400 (Bad Request). 
- If an id was supplied but it can't be found in the array return status code 404.








