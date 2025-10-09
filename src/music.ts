const musicList = ["Ordinary", "Daisies", "I Got Better"];
	
export function printMusic(musicList){
	for (let i in musicList){
		console.log(musicList[i]);
	}
}

printMusic(musicList);
