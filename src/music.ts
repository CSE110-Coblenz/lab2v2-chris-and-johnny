import { animateFeature } from "./animation.ts";

export const musicList = ["Ordinary", "Daisies", "I Got Better"];
	
export function printMusic(musicList){
	animateFeature("Party! Party! Party! - Music Time", "bold");
	for (let i in musicList){
		animateFeature(musicList[i], "italic");
	}
}

printMusic(musicList);
