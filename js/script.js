// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a triangle.
 */
function calculateAreaOfTriangle () {
  // input
  const lengthOfRectangle = parseInt(document.getElementById('height-of-triangle').value)
  const heightOfRectangle = parseInt(document.getElementById('base-of-triangle').value)

  // process
  const areaOfRectangle = lengthOfRectangle * heightOfRectangle
  const perimeterOfRectangle = (lengthOfRectangle + heightOfRectangle) * 2

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + calculateAreaOfTriangle+ ' cm²'
}
