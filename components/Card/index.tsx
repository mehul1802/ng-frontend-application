import { CardWrapper, CardTitle, CardContent } from './styles';
import { Label, ItemWrapper, Item, ItemVal } from '@/styles/SharedStyles';
import Link from 'next/link';
import StarsList from '../StarList/StarsList';
import { IQuestItemProps } from './type';

export default function Card(item: IQuestItemProps) {
	return (
		<CardWrapper className='quest-item'>
			<img src={item.cover} alt='quest-image' />
			<CardContent>
				<Link href={`/quests/${item.id}`}>
					<CardTitle>{item.title}</CardTitle>
				</Link>
				<ItemWrapper>
					<Item>
						<Label fontType='small'>Skill tree</Label>
						<ItemVal color='#98A7F5' fontType='small'>
							{item.skillTree}
						</ItemVal>
					</Item>
					<Item>
						<Label fontType='small'>Difficulty</Label>
						<StarsList count={item.difficulty} />
					</Item>
				</ItemWrapper>
				<ItemWrapper>
					<Item>
						<Label fontType='small'>Skill</Label>
						<ItemVal fontType='small'>{item.skill}</ItemVal>
					</Item>
					<Item>
						<Label fontType='small'>Experience</Label>
						<ItemVal fontType='small'>{item.experience}</ItemVal>
					</Item>
				</ItemWrapper>
				<ItemWrapper>
					<Item>
						<Label fontType='small'>Type</Label>
						<ItemVal fontType='small'>{item.type}</ItemVal>
					</Item>
					<Item>
						<Label fontType='small'>Gold</Label>
						<ItemVal fontType='small'>{item.gold}</ItemVal>
					</Item>
				</ItemWrapper>
			</CardContent>
		</CardWrapper>
	);
}
