# Hublo Shop (in NestJS)

# Introduction 
Hublo has decided to launch a shop to sell equipments for Hublers.
In this Kata you will implement Hublo shop Rest API.

In this Kata you will be asked to use your knowledge in NestJs and Rest API to build this API following all the business
rules. It offers a set of features to practice your API programming skills. It covers basic HTTP verbs and codes.

### Requirements 

  * REST API design 
  * NestJS 
  * Software design

### Features
  * Shopping API with products, orders and bills.

## Business Rules 

### Products

A product can be: 

* created
* updated
* found by id
* deleted

#### Definition

A product have a(n):

* id
* name
* price
* weight

#### Rules

Products can be sorted by name, price or weight

- Products name must be longer than 3 characters or throw an error if shorter
- Products id cannot be updated
- Product can be managed by an admin or employee role

## Questions 

1. Following the business rules create an endpoint to add a product in the database.
2. How can you ensure that only an admin can add a product to a shop.

## Advices

#### Class validator 

You can use decorator from this package to validate your input data. [see class validator](https://github.com/typestack/class-validator)

#### Class transformer

You can use [class transformer](https://github.com/typestack/class-transformer) to transform domain object into DTO.

