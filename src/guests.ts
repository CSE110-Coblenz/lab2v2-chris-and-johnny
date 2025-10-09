const guestList = ["Jeffrey Epstein", "Drake"];

export function printGuestList(guestList){
	for (let i in guestList){
		console.log(guestList[i]);
	}
}

printGuestList(guestList);
