
    let pronoun = ["I", "you", "they"];
    let adj = ["good", "free", "happy"];
    let noun = ['dog', 'Carla', 'guitar'];
    let action = ['eat', 'bark', 'sing'];
    let counter = 0;
  
    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let n =0; n < noun.length; n++){
          for(let a = 0; a <action.length; a++){
            console.log(pronoun[i] + adj[j] + noun[n]+action[a]+'.com');
            counter++;
          }
        }
      }
    }
  

  console.log("combinaciones:", counter);