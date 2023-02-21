import styled from 'styled-components';

interface ItemProps {
	color?: string;
	fontType?: string;
}

export const ItemWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: ${({ theme }) => theme.spacing.s};
	padding-top: ${({ theme }) => theme.spacing['4xs']};
`;

export const Item = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
`;

export const Label = styled.label<ItemProps>`
	color: ${(props) => (props.color ? props.color : ({ theme }) => theme.colors.gold)};
	font-size: ${(props) => (props.fontType === 'small' ? ({ theme }) => theme.spacing['3xs'] : '14px')};
	font-weight: 400;
`;

export const ItemVal = styled.span<ItemProps>`
	color: ${(props) => (props.color ? props.color : ({ theme }) => theme.colors.white)};
	font-size: ${(props) => (props.fontType === 'small' ? ({ theme }) => theme.spacing['3xs'] : '14px')};
	font-weight: 400;
	text-transform: capitalize;
`;

export const GridWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(332px, 1fr));
	grid-gap: ${({ theme }) => theme.spacing.s};
	@media (max-width: ${({ theme }) => theme.size.mobile}) {
		grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
	}
`;

export const Loading = styled.div`
	display: flex;
	justify-content: center;
	font-size: 3rem;
`;

export const Button = styled.button`
	border-radius: ${({ theme }) => theme.radius.m};
	border: 1px solid rgba(190, 167, 126, 0.5);
	background-color: rgb(29, 28, 26);
	cursor: pointer;
	padding: ${({ theme }) => theme.spacing['4xs']} ${({ theme }) => theme.spacing.s};
	margin-top: ${({ theme }) => theme.spacing.s};
	text-align: center;
	color: ${({ theme }) => theme.colors.white};
	font-family: 'Cinzel', arial;
	&:hover {
		color: rgb(190, 167, 126);
	}
`;
