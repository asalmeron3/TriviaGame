# TriviaGame
For the Javascript/Jquery needed for this game:

1. Make a set of 10 questions that the user can answer; I will use an ordered list to display each question.

2. Each question should have four (4) potential answers; the user can only select 1 of these :use unordered list for the answer choices as well as radio inputs.

3. To store my questions and answer choices, I will create an object that alternates between the question and the potential answers. 

4. For iterative purposes: The name for the element that holds the questions will be 'Q1' , 'Q2', 'Q3', etc. The answer choices will follow a similar pattern: ans1, ans2, ans3...

5. Making a global variable that will store the solutions to the questions in the form of the string  a, b, c, or d. I am chosing these four (4) string characters because I will also be using them later to give each radio input these same values

6.Making a function that will iteratively go through my object and compose the html needed to diplay to the DOM.
	a. Loop through half the length of the object (half because half of the object is questions, the other half is made of arrays of choices)
	b. Store the html in a string; index the question in the object and add as part of html
	c. loop through the array of choices in the object. 
	d. Add the html with each answer choice to the string of HTML.
	e. Add the string of closing tags for your html.
	f. Append the HTML to div that will have the question/answers
	g. repeat (well the loop will repeat for you)

7. Make global variables for the # of correct answers, wrong answers, and unanswered. Also need one for the amount of seconds the user will be given in the game, and once that will store the setInterval 

8. On clicking the button (".start"), run a function that:
	a. hides the start buttion
	b. Will display a countdown to the DOM based on the current time/count. This can be done by adding html to the div ".time". The html should call the current count
	c. run the function that interatively writed your questions/answer-choices to the DOM
	d. Runs a function the keepGoing (shows all questinos and timer)

9. In the keepGoing function:
	a. set the global variable to setInterval. The inputs of this method should be a function and the amount of milliseconds before the method runs again. The input-function will be called "countDown"

10. the countDown fucntion:
	a. will decrease the global-variable count by one
	b. check/compare if the count is equal to 0
	c. clear the setInterval (stop the setInterval function/method)
	d. hide the div that contains all the questions
	e. display the # of correct answers, incorrect ans, and unanswered by...

11. Running a function "grade" that will:
	a.interatively compare the users input.values to the solutions-array
	b. update the global counts for correct,incorrect, unanswered qustions