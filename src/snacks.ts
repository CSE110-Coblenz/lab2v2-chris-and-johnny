const snacksList = ["Reeses", "Snickers", "Lays", "Oreos", "Doritos", "Skittles"];
	
export function printSnacks(snacksList){
	for (let i in snacksList){
		console.log(snacksList[i]);
	}
}

printSnacks(snacksList);
