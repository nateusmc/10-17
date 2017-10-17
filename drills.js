'use strict';

require('dotenv').config();
const { DATABASE } = require('./config');
const knex = require('knex')({
  client: 'pg',
  connection: process.env.DATABASE_URL
});

// clear the console before each run
process.stdout.write('\x1Bc');

// Sample select 
// knex
//   .select()
//   .from('restaurants')
//   .limit(2)
//   .debug(true)
//   .then(results => console.log(results));


//1
// knex
//   .select()
//   .table('restaurants')
//   .then(res => console.log(res))


//2
// knex
//   .select()
//   .from('restaurants')
//   .where( {cuisine: 'Italian'} )
//   .then(res => console.log(res));

//3
// knex
//   .select('id', 'name')
//   .from('restaurants')
//   .where('cuisine', 'Italian')
//   .limit(10)
//   .then(res => console.log(res));

//4
// knex
//   .select()
//   .from('restaurants')
//   .where('cuisine', 'Thai')
//   .count()
//   .then(res => console.log(res));

//5
// knex
//   .select()
//   .from('restaurants')
//   .count()
//   .then(res => console.log(res))

//6
// knex 
  // .select()
  // .from('restaurants')
  // .where({cuisine: 'Thai', address_zipcode: 11372})
  // .count()
  // .then(res => console.log(res))

//7
knex
  .select('id', 'name')
  .from('restaurants')
  .where({cuisine: 'Italian', address_zipcode: (10012, 10013, 10014)})
  .limit(5)
  .then(res => console.log(res))

//8

//9

//10

//11

//12

//13



// Destroy the connection pool
knex.destroy().then(() => {
  console.log('database connection closed');
});