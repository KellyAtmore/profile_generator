const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Whats your name? ', (answer1) => {
  console.log(`Your name is ${answer1}`);
  rl.question('Where do you live? ', (answer2) => {
    console.log(`You live in ${answer2}`);
    rl.question('Whats your dogs name? ', (answer3) => {
      console.log(`Your dogs name is ${answer3}`);
      rl.question('Whats your favorite meal? ', (answer4) => {
        console.log(`Your favorite meal is ${answer4}`);
        rl.close();
        console.log(`Your name is ${answer1}, you live in ${answer2}, your dogs names is ${answer3}, your favorite meal is ${answer4}`);
      });
      
    });
    
  });
  
});