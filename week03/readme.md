## Week #2 - Remove the BugBear!

Start Date: 2020.03.25
End Date: 2020.04.01

## Challenge Description
The challenge is to fix and edit the provided code to make the initial image (the bugbear with the door closed) change to a different image (the bugbear with the door open) when clicked. The displayed image should toggle back and forth with each click. Additionally, the given code contained many formatting and coding errors and typos that needed to be corrected. The CSS and JavaScript files had to be properly linked to the html page as well.  


## Explain your solution
After fixing many of the coding errors and typos, my major challenge in completing this challenge was figuring out how to make the picture toggle back and forth between the closed and open-door images when clicked. I didn't have any trouble getting the picture to change on the initial click, but it took me a while to figure out how to make it switch back and forth with additional clicks. I figured out my issue was in my JavaScript "if" statement. I originally had the following as my "if" statement within the funtion as: 

function changeBugImage() {
    let image = document.getElementById("thisImage");
     if (image.src = "./closedBug.png") {
         image.src = "./freeBug.png"
     } else {
         image.src = "./closedBug.png";
     }
};

After much Googling and reading on the internet, I tried out the following, and my code executed as I intended it to:

function changeBugImage() {
    let image = document.getElementById("thisImage");
    if (image.getAttribute('src') == "./closedBug.png") {
        image.src = "./freeBug.png";
    } else {
        image.src = "./closedBug.png";
    }
}

## What are you thoughts about this challenge? Did you like it?
I did enjoy this challenge, although it was frustrating because I still don't fully understand why my original code wasn't working. I think it has to do with the file path in the conditional statement, but I'm not sure. I usually love finding the solution to something I was previously stuck on, but I also usually come out understanding what I'd done wrong. I'm still not sure in this case. 


## What have you learned from it?
I have become more comfortable with using document.getElementByID to replace/change html elements through JavaScript. I've also become more aware of the various platforms where programmers who are stuck can get help from other programmers willing to troubleshoot. I think it's amazing that there is such a large community of helpers out there who are providing feedback for free. I can't remember the particular site that helped me figure out this solution (I didn't ask a new question, but was able to find the needed information among questions that had already been asked and answered.), but it's amazing to see all of the help being provided out there. 







Remove the BugBear!
There is a BugBear in your home and it is ruining your life!

You would like to destroy it completely, but due to some life changes you became vegan and no longer have the desire to kill any living creature.
So, you will just release it into the wild where it can be removed from this planet naturally by some other predator.

The Goal
You want to find and fix all the "bugs" in this project so an image of a BugBear will be shown inside the house (behind a closed door).
You should be able to click the door and release the BugBear into the wild.
You should also be able to click the door again to close it (trapping the BugBear again inside your home).

The Criteria... or CREATURE-ia...
1.	Make sure all tags and variables are consistent.
2.	Have any relevant files connected properly.
3.	Fix any grammatical errors
4.	Ensure the images show on the browser
5.	Fix the code to make sure the image can change when you click door
6.	You are welcome to change the CSS to change/add more styling
7.	You are welcome to change code to make it cleaner and dryer.
8.	Use git and GitHub to save different versions when you make mistakes OR delete something you would regret.
