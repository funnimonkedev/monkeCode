function tokenizer(input) {
  let current = 0;
  let tokens = [];
  while (current < input.length) {
    let char = input[current];
    if (char === '(') {
      tokens.push({
        type: 'paren',
        value: '(',
      });
      current++;
      continue;
    }

    if (char === ')') {
      tokens.push({
        type: 'paren',
        value: ')',
      });
      current++;
      continue;
    }

    let WHITESPACE = /\s/;
    if (WHITESPACE.test(char)) {
      current++;
      continue;
    }
    
    if(char === '☻') {
      console.log("you found the hidden secret!");
      tokens.push({
        type: 'easterEgg(will mess up code though)',
        value: '☻',
      });
      current++;
      continue;
    }

    let NUMBERS = /[0-9]/;
    if (NUMBERS.test(char)) {

      let value = '';

      while (NUMBERS.test(char)) {
        value += char;
        char = input[++current];
      }

      tokens.push({ type: 'number', value });

      // And we continue on.
      continue;
    }


    if (char === '"') {

      let value = '';

      char = input[++current];

      while (char !== '"') {
        value += char;
        char = input[++current];
      }

      char = input[++current];

      tokens.push({ type: 'string', value });

      continue;
    }

    let LETTERS = /[a-z]/i;
    if (LETTERS.test(char)) {
      let value = '';

      while (LETTERS.test(char)) {
        value += char;
        char = input[++current];
      }

      tokens.push({ type: 'name', value });

      continue;
    }


    throw new TypeError('valid character expected: ' + `uncaught char = ${char}`);
  }
  //console.log(tokens);
  return tokens;
}

function parser(tokens) {
 
  let current = 0;


  function walk() {

    let token = tokens[current];
    //if number
    if(token.type === 'number') {

      current++;

      return {
        type: 'NumberLiteral',
        value: token.value,
      };

    }

  }
  
}

