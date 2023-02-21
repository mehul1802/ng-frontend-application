import Head from 'next/head';
import { server } from '../config';
import Layout from '@/components/layout';
import styled from 'styled-components';
import Card from '@/components/Card';
import { useQuery } from '@tanstack/react-query';
import { GridWrapper, Loading } from '@/styles/SharedStyles';

export const SectionWrapper = styled.div`
	max-width: 66.25rem;
	margin: 0 auto;
	padding: 7.5rem 0;
	@media (max-width: ${({ theme }) => theme.size.laptop}) {
		padding: 2.5rem 2rem;
	}
	@media (max-width: ${({ theme }) => theme.size.mobile}) {
		padding-left: 1rem;
		padding-right: 1rem;
	}
`;

const fetchQuestListFromAPI = async () => {
	const res = await fetch(`${server}/api/quests`);
	return res.json();
};

function Home() {
	const { data, status, isLoading } = useQuery({ queryKey: ['quests'], queryFn: fetchQuestListFromAPI });

	return (
		<Layout title='Node Guardians'>
			<SectionWrapper>
				{/* Implement loader with icon */}
				{isLoading && <Loading style={{ color: '#fff' }}>Loading...</Loading>}
				<GridWrapper className='quest-wrapper'>
					{status === 'success' &&
						data &&
						data.map((item: any) => {
							return <Card key={item.id} {...item} />;
						})}
				</GridWrapper>
			</SectionWrapper>
		</Layout>
	);
}

export default Home;
