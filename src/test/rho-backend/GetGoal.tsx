// import "@testing-library/jest-dom/extend-expect";
// import { useState } from "react";
// import { CheckWord, GetGoal, GetLives } from "../../components/api/api";
// import { Word } from "../../interfaces/interfaces";

// JEST-DOM DOESN'T SUPPORT DISABLING CORS POLICY, THEREFORE THESE TESTS ARE USELESS FOR NOW

// // Prerequisite: For this test reverse-hangman-online-backend has to be running
// test("Get Goal (even: 4))", async () => {
//     // Arrange
//     let word: string = "help";
//     let goal: string;

//     // Act
//     goal = await GetGoal(word);

//     // Assert
//     expect(goal).toEqual("8");
// });

// // Prerequisite: For this test reverse-hangman-online-backend has to be running
// test("Get Goal (odd: 5))", async () => {
//     // Arrange
//     let word: string = "horse";
//     let goal: number;

//     // Act
//     goal = await GetGoal(word);

//     // Assert
//     expect(goal).toEqual(10);
// });

// // Prerequisite: For this test reverse-hangman-online-backend has to be running
// test("Get Goal (even: 6))", async () => {
//     // Arrange
//     let word: string = "clover";
//     let goal: number;

//     // Act
//     goal = await GetGoal(word);

//     // Assert
//     expect(goal).toEqual(12);
// });