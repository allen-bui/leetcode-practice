function frequency(s) {
  /*
  Pseudocode
  ----------
  1. Create a helper function to decode the input string first
  2. Assign function to a variable and invoke on S
  3. Create a hash map for letter and index, and new array to return
  4. Loop through each letter in the decoded string S
  */

  const frequency = new Array(26).fill(0);
  const decodeString = decodeString(s);
  const letterMap = {
     'a': '1',
     'b': '2',
     'c': '3',
     'd': '4',
     'e': '5',
     'f': '6',
     'g': '7',
     'h': '8',
     'i': '9',
     'j': '10',
     'k': '11',
     'l': '12',
     'm': '13',
     'n': '14',
     'o': '15',
     'p': '16',
     'q': '17',
     'r': '18',
     's': '19',
     't': '20',
     'u': '21',
     'v': '22',
     'w': '23',
     'x': '24',
     'y': '25',
     'z': '26',
  };

  for (let i = 0; i < decodeString.length; ++i) {
    const position = letterMap[decodeString[i]];
    frequency[position] += 1;
  }
  return frequency;
}

function decodeString(str) {
  /*
  Pseudocode
  ----------
  1. Create a hash map to carry number as key and letter as value
  2. Create an empty string
  3. loop through each letter in string and check if there are paranthesis or '#' symbol
  4. if pound, add up the two previous numbers together and get value of that in hash map, otherwise get current number
  5. look for the parenthesis and repeat number of times accordingly by keeping track of the open
     paranthesis and closed paranthesis and everything in between
  */

  let result = '';
  let repeat = '';
  const letterMap = {
    '1': 'a',
    '2': 'b',
    '3': 'c',
    '4': 'd',
    '5': 'e',
    '6': 'f',
    '7': 'g',
    '8': 'h',
    '9': 'i',
    '10': 'j',
    '11': 'k',
    '12': 'l',
    '13': 'm',
    '14': 'n',
    '15': 'o',
    '16': 'p',
    '17': 'q',
    '18': 'r',
    '19': 's',
    '20': 't',
    '21': 'u',
    '22': 'v',
    '23': 'w',
    '24': 'x',
    '25': 'y',
    '26': 'z',
  };

  for (let i = 0; i < str.length; ++i) {
    const isPoundSymbol = str[i + 2] === '#';
    if (isPoundSymbol) {
      i += 2;
      let char = letterMap[str[i - 2] + str[i - 1]];
      if (str[i + 1] === '(') {
        i += 2;
        while (str[i] !== ')') {
          repeat += str[i];
          i += 1;
        }
        result += (char.repeat(repeat - 1));
        repeat = 0;
      }
      result += char;
    } else {
      let char = letterMap[str[i]];
      if (str[i + 1] === '(') {
        i += 2;
        while (str[i] !== ')') {
          repeat += str[i];
          i += 1;
        }
        result += (char.repeat(repeat - 1));
        repeat = 0;
      }
      result += char;
    }
  }
  return result;
}

