// Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.

{
    function countWordOccurrences(sentence: string, word: string): number {
    
    const lowerCaseSentence = sentence.toLowerCase().split(' ');
    const lowerCaseWord = word.toLowerCase();

    let count = 0;
    for (const word of lowerCaseSentence) {
        if (word === lowerCaseWord) {
            count++;
        }
    }
    return count;
}

const result = countWordOccurrences("hello  world! Hello rehad. hello saiful", "Hello");
// console.log(result); 
}