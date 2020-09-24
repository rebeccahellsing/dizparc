const Main = {

	init:function() {
		let button = document.getElementById('calculateButton');
			button.addEventListener('click', Main.initiateSearch);
	},

	initiateSearch:function() {
		let url = 'https://cors-anywhere.herokuapp.com/http://www.rebeccahellsing.com/dizparc/files/input.txt';
		let request = new XMLHttpRequest();

			request.open('GET', url);

			request.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					Main.handleInputs(this.responseText);
				}
			}
			request.send();
	},

	handleInputs:function(inputText) {
		const input = inputText.trim();
		const inputArray = input.split(/\r?\n/);

		let index = 0;
		let partA = document.getElementById('part-a');

		for (let i = 0; i < inputArray.length; i ++) {
			index += parseInt(inputArray[i]);
		}
		partA.innerHTML = index;

		Main.lookForDoubles(inputArray);
	},

	lookForDoubles:function(coordinates) {
		let current = 0;
		let usedValues = [];
		let matchNotFound = true;
		let partB = document.getElementById('part-b');

		while (matchNotFound) {
			for (let i = 0; i < coordinates.length; i++) {
				if (usedValues.includes(current)) {
					matchNotFound = false;
					partB.innerHTML = current;
					return;
				}

				else {
					usedValues.push(parseInt(current));
				}
				current += parseInt(coordinates[i]);
			}
		}
	}
}

document.addEventListener('DOMContentLoaded', Main.init);