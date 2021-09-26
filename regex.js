// * Regex! To get everything using exec():
const regexp = new RegExp('foo[a-z]*', 'g');
const str = 'table football, foosball';
let match;

while ((match = regexp.exec(str)) !== null) {
	console.log(
		`Found ${match[0]} start=${match.index} end=${regexp.lastIndex}.`
	);
	// expected output: "Found football start=6 end=14."
	// expected output: "Found foosball start=16 end=24."
}

// * But check out this syntax with matchAll()!:

const regexp = new RegExp('foo[a-z]*', 'g');
const str = 'table football, foosball';
const matches = str.matchAll(regexp);

for (const match of matches) {
	console.log(
		`Found ${match[0]} start=${match.index} end=${
			match.index + match[0].length
		}.`
	);
}
// expected output: "Found football start=6 end=14."
// expected output: "Found foosball start=16 end=24."

// matches iterator is exhausted after the for..of iteration
// Call matchAll again to create a new iterator
Array.from(str.matchAll(regexp), m => m[0]);
// Array [ "football", "foosball" ]

// * And!:

let regexp = /t(e)(st(\d?))/g;
let str = 'test1test2';

let array = [...str.matchAll(regexp)];

array[0];
// ['test1', 'e', 'st1', '1', index: 0, input: 'test1test2', length: 4]
array[1];
// ['test2', 'e', 'st2', '2', index: 5, input: 'test1test2', length: 4]
