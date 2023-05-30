let munstersDescription = "The Munsters are creepy and spooky.";
let newMunster = "";

for (let i = 0; i < munstersDescription.length; i++) {
  let letter = munstersDescription.charAt(i);
  if (letter.match(/[A-Z]/g)) {
    newMunster += letter.toLowerCase();
  } else {
    newMunster += letter.toUpperCase();
  }
}

console.log(newMunster);
