export enum Pages {
	HOME = 'HOME',
	EMOTION = 'EMOTION',
	STATS = 'STATS'
}

export interface Factor {
	id: number;
	name: string;
	grade?: number;
}

export interface Emotion {
	id: number;
	name: string;
	factors: Factor[];
}
