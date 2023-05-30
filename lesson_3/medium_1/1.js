let str = 'The Flintstones Rock!';
for (let padding = 0; padding < 10; padding++) {
  console.log(str.padStart(padding + str.length, ' '));
}
