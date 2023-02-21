export interface IQuestItemProps {
	cover: string;
	id: number;
	title: string;
	skillTree: string;
	difficulty: number;
	skill: string;
	experience: number;
	type: string;
	gold: number;
}

export interface IRewardProps {
	experience: number;
	gold: number;
}

export interface IQuestSingleItemProps {
	cover: string;
	description: string;
	id: number;
	title: string;
	skillTree: string;
	difficulty: number;
	skill: string;
	experience: number;
	type: string;
	gold: number;
	rewards: IRewardProps;
}
