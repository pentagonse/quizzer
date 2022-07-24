//Question bank
var questionBank= [
    {
        question : 'What is full meaning of CSS?',
        option : ['Cascading Style Sheet','Ceasing Style Sheet','Ceiling Stylesheet','Coding Stylesheet'],
        answer : 'Cascading Style Sheet'
    },
    {
        question : 'ASP Stands for?',
        option : ['Ascend JavaScript Port','Asynchronous Server Page','Ascending Page Line','Assert Pages'],
        answer : 'Asynchronous Server Page'
    },
    {
        question : 'For which of the following disciplines is Nobel Prize awarded?',
        option : ['Physics and Chemistry','Physiology or Medicine','Literature, Peace and Economics','All of the above'],
        answer : 'All of the above'
    },
    {
        question : 'Hitler party which came into power in 1933 is known as',
        option : ['Labour Party','Nazi Party','Ku-Klux-Klan','Democratic Party'],
        answer : 'Nazi Party'
    },
    {
        question : 'First human heart transplant operation conducted by Dr. Christiaan Barnard on Louis Washkansky, was conducted in',
        option : ['1967','1968','1958','1922'],
        answer : '1967'
    },

     {
        question : 'The First Governor of Eastern Nigeria is:',
        option : ['Dr. Nnamdi Azikiwe','Dr. Akanu Ibiam','Mrs. Okonjo Iweala','Johns Apiah'],
        answer : 'Dr. Akanu Ibiam'
    },

     {
        question : 'Johnson Nkama is a graduated of which of these institutions?',
        option : ['Ahmadu Bello University','University of Nigeria Nsukka','Akanu Ibiam Federal Polytechnic','Abia State University.'],
        answer : 'University of Nigeria Nsukka'
    },

     {
        question : 'What is the full meaning of HTML?',
        option : ['Hypertext Markup Language','Hypertext Makeup Language','Hypertext Mark Language','Hypertext Markup Langua'],
        answer : 'Hypertext Markup Language'
    }


]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');

var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' : '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'limegreen';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


function submitAnswer(){
    alert("Your score is "+$score+" is about to be submitted as well");
}

displayQuestion();