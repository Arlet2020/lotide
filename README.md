# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @arletvazquez/lotide`

**Require it:**

`const _ = require('@arletvazquez/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:


* `assertArraysEqual( )`: for asserting that two arrays are equal
* `assertEqual( )`: displays assertions
* `assertObjecstEqual( )`: compares two objects
* `countLetters( )`: returns count of each letter in sentence
* `countOnly( )`: returning object containing counts of everything it contains
* `eqArrays( )`: compares two arrays for a perfect match
* `eqObjects( )`: tests functions that return objects
* `findKey( )`: compares by the key
* `findKeyByValue( )`: scan the object and returns the first key which contains the given value
* `head( )`: returns only the first object in an array
* `letterPositions( )`: Function comparing two objects
* `map( )`: returns new array based on the callback function
* `middle( )`: returns middle elements in array
* `tail( )`: returns all but the first element in array
* `takeUntil( )`: shows objects in an array until truthy value
* `without( )`: returns subset of a given array, removing unwanted items