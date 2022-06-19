import "@testing-library/jest-dom/extend-expect";
import { useState } from "react";
import { CheckWord } from "../components/api/api";
import { Word } from "../interfaces/interfaces";

// Prerequisite: For this test the word-service has to be running
test("Check Word (Doesn't Exists)", async () => {
    // Arrange
    let word: string = "charmander";
    let wordObject: Word;

    // Act
    wordObject = await CheckWord(word);
    console.log(wordObject);

    // Assert
    expect(wordObject?.exists).toEqual(false);
});

// Prerequisite: For this test the word-service has to be running
// jest.setTimout increases the max time a test can use before exceeding the limit
jest.setTimeout(10000);
test("Check Word (Exists)", async () => {
    // Arrange
    let word: string = "help";
    let wordObject: Word;

    // Act
    await new Promise((r) => setTimeout(r, 5000));
    wordObject = await CheckWord(word);
    console.log(wordObject);

    // Assert
    expect(wordObject?.exists).toEqual(true);
});