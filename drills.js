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
// knex
//   .select('id', 'name', 'address_zipcode')
//   .from('restaurants')
//   .where('cuisine', 'Italian')
//   .whereIn('address_zipcode', [10012, 10013, 10014])
//   .orderBy('name', 'asc')
//   .limit(5)
//   .then(res => console.log(res));

//8

// knex.insert({
//   name: 'Byte Cafe',
//   borough: 'Brooklyn',
//   cuisine: 'coffee',
//   address_building_number: '123',
//   address_street: 'Atlantic Avenue',
//   address_zipcode: '11231'
// })
//   .into('restaurants').then(results => console.log(JSON.stringify(results, null, 2)));

//9
// knex.insert({
//   name: 'Byte Pizzeria',
//   borough: 'Queens',
//   cuisine: 'pizza',
//   address_building_number: '171',
//   address_street: 'Pacific Avenue',
//   address_zipcode: '11014'
// })
//   .into('restaurants')
//   .returning(['id', 'name'])
//   .then(results => console.log(results));

//10
// knex.insert([
//   {
//     name: 'Byte Pizzeria',
//     borough: 'Queens',
//     cuisine: 'pizza',
//     address_building_number: '171',
//     address_street: 'Pacific Avenue',
//     address_zipcode: '11014'
//   },

//   {
//     name: 'Byte Pizzeria',
//     borough: 'Queens',
//     cuisine: 'pizza',
//     address_building_number: '171',
//     address_street: 'Pacific Avenue',
//     address_zipcode: '11014'
//   },

//   {
//     name: 'Byte Pizzeria',
//     borough: 'Queens',
//     cuisine: 'pizza',
//     address_building_number: '171',
//     address_street: 'Pacific Avenue',
//     address_zipcode: '11014'
//   }
// ])
//   .into('restaurants')
//   .returning(['id', 'name'])
//   .then(results => console.log(results));

//11
// knex('restaurants')
//   .where('nyc_restaurant_id', 30191841)
//   .update({
//     name: 'DJ Reynolds Pub and Restaurant'
//   })
//   .then(res => console.log(res));

//12
// knex('grades')
//   .where('id', 10)
//   .del()
//   .then(results => console.log('Deleted object'));

//13
// knex('restaurants')
//   .where('id', 22)
//   .del()
//   .then(results => console.log(results));


// Destroy the connection pool
knex.destroy().then(() => {
  console.log('database connection closed');
});