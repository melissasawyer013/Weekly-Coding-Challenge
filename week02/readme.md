## Week #2 - Looping a Pattern

Start Date: 2020.03.18
End Date: 2020.03.25

## Challenge Description

The challenge was to utilize a flow chart to develop code that printed out the following in the console using a "for loop" nested in another "for loop":

*
**
***
****
*****

## Explain your solution

I used the flow chart to work through this problem, trying out different techniques until I got the code to work correctly. I first created a for loop to represent the first "No/Yes" decision. The second "yes/no" decision was represented by a for loop nested in the original loop. I then used the code provided at the bottom of the flow chart to get my code to print out the correct number of asterisks on each line. This was after some experimenting with where the provided code went in my for loops. 

My code works by creating a variable called "chr" and then creating a "for loop" that sets variable "x" to the value of 1, executes the code when "x" is less than or equal to 6, and when the entire loop completes a cycle, "x" is increased by 1. Within this first "for loop," I have another "for loop" that sets a variable of "y" to the value of 1, executes the code if "y" is less than "x," and then increases the value of "y" by 1 when that loop finishes executing. The nested loop executes code that adds an asterisk to the value of the variable "chr" each time it loops. In the original "for loop," the code prints the variable "chr" in the console before resetting that variable to an empty string. 

## What are you thoughts about this challenge? Did you like it?

This was an interesting challenge because if I had just been given the task to write code to make the asterisks, I probably would have approached this much differently. But I imagine that one of the main goals of the challenge was to learn to code based on a given flow chart. At first, even with the code provided, I was getting the console log to print the right sequence, but it didn't stop after just 5 asterisks. I think the original problem was that I didn't have code outside of the nested loop to reset the "chr" variable. I was also making my code too complicated by trying to include if...then statements instead of relying on the nested loop to complete that action. Overall, I enjoyed this challenge very much! 

## What have you learned from it?

I've learned a lot from this challenge. I learned how to read a flow chart to organize my code instead of just being given a written directive for the outcome. I've also gained more comfort in writing loops and especially with nesting a loop within another one. Through this challenge I was also reminded that if I keep at it, I can figure out how to solve a problem, even if it's something I've never seen before. 
