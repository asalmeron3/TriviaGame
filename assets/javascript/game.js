//------------------------------Making the Question/Answers for the Triva Game---------------//



//making an array that will store the value of my pontential answers --> each question will have 4 answer with the respective values ...
var abcd = ["a" , "b", "c", "d"];

//making an object that will store my questions and the potential answers. I will use an iterative function later to loop through this object and to make the needed html code
var allQs = {
	Q1:"What's the core of Harry Potter's wand made of?" ,
	ans1: ["Unicorn Hair" , "Troll Snot" , "Pixie Dust", "Pheonix Feather"],

	Q2:"Who is Harry Potter's godfather?",
	ans2: ["Remus Lupin", "Peter Pettigrew", "Sirius Black", "James Potter"],

	Q3: "What animagus is Rita Skeeter?",
	ans3:["Squirrel", "Dog", "Lady Bug", "ButteryFly"],

	Q4: "In what year of Hogwarts did Hermoine first make PollyJuice potion?",
	ans4: ["Year 1", "Year 2", "Year 3", "Year 4"],

	Q5: "In Harry's 4th year at Hogwarts, who entered his name into the Goblet of Fire?",
	ans5: ["Bartimus Crouch", "Mad-Eye Moody", "Bartimus Crouch Jr.", "Headmaster Dumbledore"],

	Q6: "In his 5th year, which creature has Harry able to see upon his <em>arrival</em> to Hogwarts?",
	ans6: ["Hippogriffs", "Thestrals", "Nargles", "Unicorns"],

	Q7: "What was Professor Umbridge's first name?",
	ans7: ["Susan", "Delfina", "Dolores", "Fleur"],

	Q8: "Who is the self-proclaimed Half-Blood Prince?",
	ans8: ["Harry Potter", "Tom Riddle", "Severus Snape", "Professor Slughorn"],

	Q9: "What was Lord Voldemort researching (then making) during his youth to achieve ''immortality''? ",
	ans9: ["Unicorn Blood", "Deathly Hallows", "PolyJuice Potion", "Horcruxes"],

	Q10: "Who kills Nagini in the 'Battle of Hogwarts'?",
	ans10: ["Neville Longbottom", "Ron Weasley", "Caretaker Finch", "Seamus Finnagan"]
};
//an array that stores the solutions to my questions in the form of a, b, c, or d --> corresponds the order the answers are in and the values I will assign them
var sol = ["d","c","c","b","c","b", "c","c","d","a"];


	//this function will go through my object (which alternates content in the format question, answers, question, answers,)
	function makeQ(){
		//my first loop will go through and select the question to write to the DOM. This needs to happen for HALF the length of my object --> half are questions and half are answers. Because each element is named in a similar fashion, I can index the by name and my iterator 'i'
		for (i = 1; i < (Object.keys(allQs).length+ 1)/2; i++){

			// I will define a local variable that store the current html for the DOM. 
			var htmlQ = undefined;
			htmlQ = "<li id = "+ 'ques' + i+ " > <strong>" + allQs["Q"+i] + "</strong><br><ul>";

				//once a question is picked, I need to loop throught the array of answers and write them as part of the html.
				for (j = 1; j <5; j++){
					//name = q1 q2 q3...    value = a b c or d     id == q1a,q1b, ...q10a, q10c, q10d
					htmlQ += " <input  type = 'radio' name = " + "q" +i + " value = '" + abcd[j-1] + "'" + "id = '" + "q" + i + abcd[j-1] + "'>" + allQs["ans"+i][j-1] + "          ";
				}

			//ending my html unorder-list of answers and adding 2 breaks
			htmlQ += "</ul><br><br>";

			//writing all html to the div .orderedQs (I will hide this div when the timer is up)

			$(".orderedQs").append(htmlQ);
		}
		
	};




// ---------------------Making the Timer for the Trivia Game --------------//
// where to start???

//Making global variables that will store the # of correct answers, wrong answers, and unanswered questions
var cAns = 0;
var wAns = 0;
var uAns = 0;

var count = 60; // will keep track of my count, starting with 80
var down1; //will store the setInterval (I need to figure this one out)
$(".start").on("click",startSetup);

function startSetup(){
	$(".start").hide();
	$(".time").html("<h1> Time remaining: " +count + " seconds </h1>");
	makeQ();
	//call my function so that it executes and writes my questions/answers to the page
	keepGoing();
}


//this function will decrease the count and display it on the screen. if the count reaches 0, it will also print the results of the trivia quiz/game
function countDown(){
	count--;
	$(".time").html("<h1> Time remaining: " +count + " seconds </h1>"); 
	if (count ==0){
		grade();
		var theDisp = "<h1>Time is Up!</h1> <br><br> Correct Answers: " + cAns + "<br> Wrong Answers: " + wAns  + "<br>Unanswered: " + uAns;
		$(".time").html(theDisp);
		clearInterval(down1);
		$(".theQs").hide();
		count = 80;
	}
}

function grade(){
	//going to "GRADE" the users selected answers and modify the counts to be displayed. Going to loop thru all 10 questions to compare the values click to the solutions I have made/stored in the var "sol"

	for(k = 1; k<11; k++){
		if ($("input[name = 'q" + k+ "']:checked ").val() ==sol[k-1]){
			cAns++;
		}
		else if ($("input[name = 'q" + k + "']:checked").val() == undefined){
			uAns++;

		}
		else{
			wAns++;
		}
	}
}

//this functions holds the set interval which runs the countdown function each second
function keepGoing(){
	down1 = setInterval(countDown,1000);
}
