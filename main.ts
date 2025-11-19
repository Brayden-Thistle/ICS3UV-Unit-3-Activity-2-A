/**
 * @author Brayden Thistle
 * @version 1.0.0
 * @date 2025-11-11
 * @fileoverview this program.
 */

let StudentName: string;
let Course: string;
let TestMark1: number;
let TestMark2: number;
let TestMark3: number;

StudentName = prompt("What is your name?")!;
Course = prompt("What course are you Taking?")!;

TestMark1 = Number(prompt("what was one of your last test marks?"))!;
TestMark2 = Number(prompt("Can you give me another?"))!;
TestMark3 = Number(prompt("can you give me one last mark?"))!;

let average: number = (TestMark1 + TestMark2 + TestMark3) / 3

console.log("Your name is " + StudentName + ". The subject you are currently taking at school is " + Course + ". Your marks are: " + TestMark1 + ", " + TestMark2 + "and " + TestMark3 + ". Your average mark is " + average);

