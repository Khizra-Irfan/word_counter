#! /usr/bin/env node

import inquirer from "inquirer"

const wordCounter : {
    Sentence: string
} = await inquirer .prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word: "
    }
])
//.split method is used to make an array and separate all the words not letters.
//.trim method is used for removing white spaces from the start and end of the sentence but not from between the words.
const words = wordCounter.Sentence.trim().split(" ");

console.log(words);

console.log(`Your sentence word count is ${words.length}`);

