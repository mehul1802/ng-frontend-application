import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
	position: relative;
	display: flex;
	flex-wrap: nowrap;
	padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.m};
	align-items: center;
	width: 100%;
	height: 100%;
	@media only screen and (max-width: 600px) {
		padding-left: ${({ theme }) => theme.spacing['2xs']};
		padding-right: ${({ theme }) => theme.spacing['2xs']};
	}
`;

export default function Header() {
	return (
		<HeaderWrapper>
			<Link href='/'>
				<Image src='/logo.svg' alt='logo' width='280' height='40' />
			</Link>
		</HeaderWrapper>
	);
}
