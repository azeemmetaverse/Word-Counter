import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function countWords(text: string): number {
  const words = text.split(/\s+/);
  return words.length;
}

rl.question('Enter a text: ', (inputText) => {
  const wordCount = countWords(inputText);
  console.log(`Word Count: ${wordCount}`);
  rl.close();
});
