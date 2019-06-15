// Dataset Format
// const QUESTIONS: [
//     {
//         question: String, 
//          (Will hold the question)
// 
//         options: string[], 
//          (Will hold 4 options for each question, out of which only one will be correct answer)
// 
//         answer: number, 
//          (Will hold the index of the answer in the options string[] array)
// 
//         answerInfo: string 
//          (Additional info of the answer that will be displayed after user submits each answer, when incorrect submission this will help user understand the correct answer),
// 
//         imgSrc: string 
//          (Will hold the value for the url link to an image to be displayed while the question is asked)
//     }
// ]

const STORE = {
    questions: [
        {
            question: "When you are driving along and see a solid yellow line with a broken yellow line on your side of the highway, this means you can:",
            options: [
                "It doesn't mean anything",
                "Not pass unless there is an emergency",
                "Pass if it is safe to do so",
                "Traffic on the other side of the road can pass"
            ],
            answer: 2,
            answerInfo: "A broken yellow line means that it is legal for you to pass, as long as traffic is clear and it is safe for you to do so. The solid yellow line on the other side means that traffic coming the other way cannot pass.",
            img: {
                src: "img/question-1.jpg",
                alt: "A road with solid yellow line on the left and a broken light on the right"
            }
        },
        {
            question: "You decide to pass a car. Are you allowed to exceed the posted speed limit?",
            options: [
                "No, unless it is an emergency",
                "Never",
                "Yes, but no more than 10 mph over",
                "Yes, but no more than 5 mph over"
            ],
            answer: 1,
            answerInfo: "You are never permitted to exceed the posted speed limit, even if you are passing traffic.",
            img: {
                src: "img/question-2.jpg",
                alt: "Car driving at 31mph on a road 35mph posted speed limit"
            }
        },
        {
            question: "When you come to a flashing red light, what should you do?",
            options: [
                "Stop, check your surroundings, and proceed if it is safe",
                "Stop until the light changes",
                "Slow down and stop only if there are other cars",
                "Proceed with caution"
            ],
            answer: 0,
            answerInfo: "A blinking red light acts similar to a stop sign. You must stop regardless of traffic and only proceed once you have checked that it is safe to do so.",
            img: {
                src: "img/question-3.jpg",
                alt: "A traffic light with a blinking red light turned on"
            }
        },
        {
            question: "Can you make a right-hand turn on a red light",
            options: [
                "It depends on the state",
                "Yes, unless a sign prohibits it",
                "No, unless a sign permits it",
                "Always"
            ],
            answer: 1,
            answerInfo: "In 1980, the last state in the U.S. permitted right turns on red, making it legal in all 50 states and the District of Columbia, as well as Guam and Puerto Rico. The only exception is when a sign dictates otherwise.",
            img: {
                src: "img/question-4.jpg",
                alt: "traffic signal with red light turned on"
            }
        },
        {
            question: "How early should you signal if you plan to make a turn?",
            options: [
                "Minimum of 150 feet",
                "Minimum of 100 feet",
                "As you turn",
                "Minimum of 50 feet"
            ],
            answer: 1,
            answerInfo: "For a safe turn, you want to signal early so that other drivers are aware of your intention. You should start to signal at least 100 feet before you make the turn.",
            img: {
                src: "img/question-5.jpg",
                alt: "A car preparing to switch lanes"
            }
        }
    ],
    score: 0
};