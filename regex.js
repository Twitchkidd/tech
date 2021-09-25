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
