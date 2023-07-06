/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ["I", "you", "they"];
  let adj = ["good", "free", "happy"];
  // let noun = ['dog', 'Carla', 'guitar'];
  // let action = ['eat', 'bark', 'sing'];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      console.log(pronoun[i] + adj[j] + '.com');

  console.log("Hello Rigo from the console!");
}
  }