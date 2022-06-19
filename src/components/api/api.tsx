const WORD_SERVICE_PORT: string = "8080";
const REVERSE_HANGMAN_BACKEND_ONLINE_PORT: string = "7071";

export const CheckWord = async (word: string) => {
    const apiUrl = "http://localhost:" + WORD_SERVICE_PORT + "/word/check?word=" + word;
    const data = await fetch(apiUrl);
    const jsonData = await data.json();
    return await jsonData
};

export const GetLives = async (word: string) => {
    console.log("word: " + word);
    const apiUrl = "https://localhost:" + REVERSE_HANGMAN_BACKEND_ONLINE_PORT + "/Lives?word=" + word;
    const data = await fetch(apiUrl);
    const jsonData = await data.json();
    return await (jsonData)
};

export const GetGoal = async (word: string) => {
    console.log("word: " + word);
    const apiUrl = "https://localhost:" + REVERSE_HANGMAN_BACKEND_ONLINE_PORT + "/Goal?word=" + word;
    const data = await fetch(apiUrl);
    const jsonData = await data.json();
    return await (jsonData)
};

export const GetGuessLine = async (word: string) => {
    console.log("word: " + word);
    const apiUrl = "https://localhost:" + REVERSE_HANGMAN_BACKEND_ONLINE_PORT + "/GuessLine?word=" + word;
    const data = await fetch(apiUrl);
    const jsonData = await data.json(); // Error
    return await (jsonData)
};