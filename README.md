# Hublo Shop (in NestJS)

# Introduction 
Hublo has decided ta launch a shop to sell equipment for hospital.
In this Kata you will implement Hublo shop Rest API.

This kata offers a set of features to practice your API programming skills. It covers basic HTTP verbs and codes.

### Requirements 

  * REST API design 
  * NestJS

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
- Product can be added by an admin or employee

### Orders

Can be : created, listed, updated and deleted

#### Definition

Order have:

* a status 
* a product list with a quantity per product
* a shipment amount
* a total amount and a weight


#### Rules

* Orders status can be pending, paid or canceled
* Are offered 5% discount when the price exceeds 1000€
* Shipment costs 25€ for every 10 more kg (50€ for 20kg, 75€ for 30kg, etc.)

* Order can only be created by customer role

#### Bills

Can be listed

#### Definition

Have an:
* amount 
* creation 
* date

#### Rules

* Are automatically generated when an order status is set to paid
* Bills can only be deleted by admin


## Code 

### Advices

#### Class validator 

You can use decorator from this package to validate your input data. [see class validator](https://github.com/typestack/class-validator)

#### Class transformer

You can use [class transformer](https://github.com/typestack/class-transformer) to transform domain object into DTO.

