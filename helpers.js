// Create array of elements byTagName or byClassName
let title = document.getElementsByClassName('example-title-class');
let links = document.getElementsByClassName('a');

// Template literal processed in VS Code with 'ctrl + a' and 'alt + shift + i' with commas at the end of every line
let words = `
  foo,
  bar,
  foobar,
`;

let titles = words.split(','); // titles = ['foo', 'bar', 'foobar']

// Example of other processing
let newarray = [];
for (let i = 0; i < array.length; i++) {
  let word = array[i].split(':');
  newarray.push(word);
}

// create a global variable from processed text then copy it to your clipboard in the Chrome console
copy(temp1);