const Questions = [{
	q: "Who host the Worldcup 2023?",
	a: [{ text: "Pakistan", isCorrect: false },
	{ text: "Englend", isCorrect: false },
	{ text: "India", isCorrect: true },
	{ text: "Australia", isCorrect: false }
	]

},
{
	q: "Who is the caption of team india in WC2023?",
	a: [{ text: "Virat Kohli", isCorrect: false, isSelected: false },
	{ text: "Ravindra Jadeja", isCorrect: false },
	{ text: "Hardik Pandya", isCorrect: false },
	{ text: "Rohit Sharma", isCorrect: true }
	]

},
{
	q: "How many worldcup india have",
	a: [{ text: "1", isCorrect: false },
	{ text: "2", isCorrect: true },
	{ text: "3", isCorrect: false },
	{ text: "4", isCorrect: false }
	]

},
{
	q: "Who is the headcoach of indian cricket team?",
	a: [{ text: "Rahul Dravid", isCorrect: true },
	{ text: "Ravi Shastri", isCorrect: false },
	{ text: "Ajay Jadeja", isCorrect: false },
	{ text: "Saurav Ganguly", isCorrect: false }
	]

}

]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
