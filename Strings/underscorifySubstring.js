function underscorifySubstring(string, substring) {
	let matches = [];
	const k = substring.length;
	let j = k;
	for (let i=0; i<=string.length - k; i++) {
		j = i + k;
		if (string.substring(i, j) === substring) {
			matches.push([i, j-1]);
		}
	}
	if (!matches.length) return string;
	let newString = ''
	if(matches.length === 1) {
		if (matches[0][0] === 0) {
			newString += '_';
		}
		else {
			newString += string.substring(0, matches[0][0]);
			newString += '_';
		}
		newString += substring;
		newString += '_';
		if (matches[0][1] !== string.length) {
			newString += string.substring(matches[0][1]+1, string.length);
		}
		return newString;
	}
	let addPlaces = [];
	addPlaces.push(matches[0]);
	for (let j=1; j<matches.length; j++) {
		if (matches[j][0] > addPlaces[addPlaces.length-1][1] &&
			 matches[j][0] !== addPlaces[addPlaces.length-1][1]+1) {
			addPlaces.push(matches[j]);
		} else {
			addPlaces[addPlaces.length-1] = [addPlaces[addPlaces.length-1][0],
																			matches[j][1]];
		}
	}

	j = 0;
	newString = string;
	for (i=0; i<addPlaces.length; i++) {
		const m = addPlaces[i][0] + j;
		const n = addPlaces[i][1] + j;
		let temp = newString.substring(0, m) + '_' + newString.substring(m, n+1) + '_' +
				newString.substring(n+1, newString.length);
		newString = temp;
		j += 2;
	}
	return newString;
}

// Do not edit the line below.
exports.underscorifySubstring = underscorifySubstring;
