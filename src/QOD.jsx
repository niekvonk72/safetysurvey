// Default V2 theme
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

export default function () {
    const questions = [{
                type: "radiogroup",
                name: "question1",
                title: "Why should you wear high visibility clothing on a jobsite?",
                choices: [
                    "Because it looks cool", "To protect yourself from the sun", "So you can be seen", "Because you have to"
                ],
                correctAnswer: "So you can be seen"
            },
            {
                type: "radiogroup",
                name: "question2",
                title: "When should you wear your hardhat?",
                choices: [
                    "Whenever there's a risk of falling objects", "Always", "Whenever you feel like it", "Never"
                ],
                correctAnswer: "Whenever there's a risk of falling objects"
            },
             {
                type: "radiogroup",
                name: "question3",
                title: "Why should you wear pants instead of shorts on a jobsite?",
                choices: [
                    "To keep warm", "To protect yourself from burns and/or cuts", "Because they look nicer", "To keep your legs clean"
                ],
                correctAnswer: "To protect yourself from burns and/or cuts"
            },
             {
                type: "radiogroup",
                name: "question4",
                title: "Why should you wear safety glasses?",
                choices: [
                    "So you can see better", "Because they look cool", "To keep objects from entering your eyes", "To keep the glare out of your eyes"
                ],
                correctAnswer: "To keep objects from entering your eyes"
            },
             {
                type: "radiogroup",
                name: "question5",
                title: "What is the top speed a vehicle should be driving on a jobsite?",
                choices: [
                    "20 km/h", "40 km/h", "5 km/h", "60 km/h"
                ],
                correctAnswer: "20 km/h"
            },
             {
                type: "radiogroup",
                name: "question6",
                title: "Why should you wear steel toe boots?",
                choices: [
                    "Because they look cool", "Because they are comfortable", "Because they are good for walking", "So your feet don't get crushed by heavy objects"
                ],
                correctAnswer: "So your feet don't get crushed by heavy objects"
            },
             {
                type: "radiogroup",
                name: "question7",
                title: "Who is the person in charge on a jobsite?",
                choices: [
                    "Constructor", "Foreman", "Heavy Machine Operator", "Sign Holder"
                ],
                correctAnswer: "Constructor"
            },
             {
                type: "radiogroup",
                name: "question8",
                title: "What is considered 'working at heights'?",
                choices: [
                    "Working in a place where there could be a risk of falling", "4 feet off the ground", "6 feet off the ground", "10 feet off the ground"
                ],
                correctAnswer: "Working in a place where there could be a risk of falling"
            },
             {
                type: "radiogroup",
                name: "question9",
                title: "Why is it important to drink enough water?",
                choices: [
                    "Because it tastes good", "So you don't get dehydrated", "To keep yourself cool", "So you don't get too thirsty"
                ],
                correctAnswer: "So you don't get dehydrated"
            },
             {
                type: "radiogroup",
                name: "question10",
                title: "When should you complete your WHMIS training?",
                choices: [
                    "Before working on a jobsite", "Whenever you want", "Never", "In 2 months"
                ],
                correctAnswer: "Before working on a jobsite"
            }];
    const nQuestion = Math.floor((Math.random() * questions.length));
    const surveyJson = {
        title: "Jobsite Safety",
        showCorrectAnswer: "always",
        showProgressBar: "bottom",
        firstPageIsStarted: true,
        startSurveyText: "Start Quiz",
        pages: [{
            elements: [{
                type: "html",
                html: "You are about to start a quiz on Jobsite Safety. <br>You will have 30 seconds for every question and 60 seconds to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin."
            }, {
                type: "text",
                name: "username",
                titleLocation: "hidden",
                isRequired: true
            }]
        }, {
            elements: [questions[nQuestion]]
        }]
    };
    const survey = new Model(surveyJson);

    survey.onComplete.add(function (sender) {
        var questions = sender.getAllQuestions();
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            var correctAnswer = question.correctAnswer;
            var userAnswer = question.value;
            var questionTitle = question.title;
            console.log("Question: " + questionTitle);
            console.log("Correct Answer: " + correctAnswer);
            console.log("User Answer: " + userAnswer);
        }
    });

    return <Survey model={survey} />;
}