## Week #5 - The "Rhyme Generator"

Start Date: 2020.04.08
End Date: 2020.04.15

## Challenge Description

The challenge this week was to create a web page that consists of six buttons, each of which plays a part in constructing the nursery rhyme "Mary had a little lamb." The first four buttons allow the user to construct pieces of the nursery rhyme, one phrase at a time, one button displays the results on the screen, and a third button clears out the rhyme being displayed and restarts the rhyme constructor. 
 

## Explain your solution

I first created the html, which consisted of a header, six buttons, and a place where the rhyme would print to. In my first iteration of this challenge, I added the onclick function in the HTML for each button (onclick="functionName()") to execute it's intended task. In the JavaScript file, I created a variable called rhyme as an empty string, that updated when any of the first four buttons were clicked, which called their associated functions. Each of their functions added to that string of text using += to keep what had been added to the string previously. The display button, when clicked, used document.getElementById('output').innerHTML = rhyme; to print the text string. The clear button behaved similarly, except it reset the text string in the rhyme variable back to empty before displaying the innerHTML.

After learning more about event listeners though, I changed my code so that each button has a unique ID and an event listener is added by referencing tag in the JavaScript. The other piece of code I updated after recent lessons was changing the way the code displays the text. Instead of using .innerHTML, I used innerText and changed the code in the line break button from <br/> to \n. My code does the same thing it did before, but in a way that's more inline with acceptable practices in coding because of the separation of concerns design principle.


## What are you thoughts about this challenge? Did you like it?

I had fun completing this challenge. It felt great to look at the task and immediately have an understanding of what to do to accomplish it. I really enjoy these coding challenges.


## What have you learned from it?

Through completing this challenge, I have become more familiar with using event listeners instead of writing onclick function execution into my HTML. I've also become more skilled at changing the inner text and HTML through functions. Additionally, I got to practice working with the DOM by utilizing querySelector in my code. 
