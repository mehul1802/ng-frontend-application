import Layout from '@/components/layout';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';
import StarsList from '@/components/StarList/StarsList';
import { Label, ItemWrapper, Item, ItemVal, Button } from '@/styles/SharedStyles';
import { IQuestSingleItemProps, IRewardProps } from '@/types/questType';
import { server } from '@/config';
import {
	SectionWrapper,
	TitleWrapper,
	Title,
	BannerWrapper,
	Description,
	ListWrapper,
	ListItem,
	RewardWrapper,
	ContentWrapper,
	QuestTitle
} from './styles';

// Generates `/quests/1` and `/quests/2`
export const getStaticPaths: GetStaticPaths = async () => {
	// Call an external API endpoint to get posts
	const res = await fetch(`${server}/api/quests`);
	const posts = await res.json();

	// Get the paths we want to prerender based on posts
	const paths = posts.map((post: any) => ({
		params: { id: post.id.toString() }
	}));

	// { fallback: false } means other routes should 404
	return { paths, fallback: false };
};

// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps: GetStaticProps = async (context) => {
	const res = await fetch(`${server}/api/quests/${context?.params?.id}`);
	const post = await res.json();

	// By returning { props: { posts } }, the Blog component
	// will receive `posts` as a prop at build time
	return {
		props: {
			post
		}
	};
};

export default function Post(props: { post: IQuestSingleItemProps }) {
	const { post } = props;
	const router = useRouter();

	return (
		<Layout title={`${post.title} | Node Guradian`}>
			{post && (
				<SectionWrapper className='quest-single'>
					<BannerWrapper>
						<img src={post.cover} className='poster-img' />
						<button onClick={() => router.back()}>
							<Image src='/close.svg' width='20' height='20' alt='close' />
						</button>
					</BannerWrapper>
					<ContentWrapper>
						<TitleWrapper>
							<img src='/title-decoration.svg' alt='title' />
							<Title>{post.title}</Title>
							<img src='/title-decoration.svg' alt='title' />
						</TitleWrapper>
						<ItemWrapper>
							<Item>
								<Label>Skill tree</Label>
								<ItemVal>{post.skillTree}</ItemVal>
							</Item>
							<Item>
								<Label>Difficulty</Label>
								<StarsList count={post.difficulty} />
							</Item>
						</ItemWrapper>
						<ItemWrapper>
							<Item>
								<Label>Skill</Label>
								<ItemVal>{post.skill}</ItemVal>
							</Item>
							<Item>
								<Label>Quest Type</Label>
								<ItemVal>{post.type}</ItemVal>
							</Item>
						</ItemWrapper>
						<Description>{post.description}</Description>

						<RewardWrapper>
							<div>
								<QuestTitle>Quest reward</QuestTitle>
								<ListWrapper>
									{Object.keys(post.rewards).map((item, index) => (
										<ListItem key={index}>
											{item === 'experience' ? (
												<Image src='/experiance.svg' alt='exp' width='28' height='18' />
											) : (
												<p>{item}</p>
											)}
											<span>+ {post.rewards[item as keyof IRewardProps]}</span>
										</ListItem>
									))}
								</ListWrapper>
							</div>

							<Button onClick={() => router.back()}>Go Back</Button>
						</RewardWrapper>
					</ContentWrapper>
				</SectionWrapper>
			)}
		</Layout>
	);
}
