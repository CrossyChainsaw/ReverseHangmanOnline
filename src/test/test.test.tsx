import "@testing-library/jest-dom/extend-expect";

test("Existing word", () => {
    let word: string = "cool";
    expect(true).toEqual(existingWords.includes(word));
});

test("Not existing word", () => {
    let word: string = "Santa";
    expect(false).toEqual(existingWords.includes(word));
});

const existingWords: string[] = ["cool", "help"];