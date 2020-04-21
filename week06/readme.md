## Week #6 - Phoneme Selection Exercise

Start Date: 2020.04.15
End Date: 2020.04.22

## Challenge Description

The challenge was to create a program to combine every third phoneme from a given list and display it in an HTML page. 
 

## Explain your solution

I approached this challenge by first putting all the given phonemes into an array. I created a variable called string, that started off as an empty string. Then, I created a for loop to add every third phoneme into the string variable. I did this by having the for loop's iterator variable (i) start at 2 (the third array element), and had the iteration statement increase by three each time (i+=3) instead of the usual increment increase of one. I tested the loop and then left the console.logs of the string as it was adding the phonemes in each iteration of the loop because I think it looks cool to see each addition. Finally, I query-selected the name of the <p> tag in the HTML document by it's ID so that I could display the final string of phonemes in it after the loop finished running. I did this by manipulating the element through the .innerText property. 


## What are you thoughts about this challenge? Did you like it?

This was a fun little challenge. I appreciated that it was a relatively quick exercise because I'm so into the coding of my personal project that I want to spend all my time doing that! :) 


## What have you learned from it?

I learned how to work with loops when you don't want the iterator variable to increment or decrement by just 1. I'm also continually becoming more comfortable and confident manipulating the DOM. 
