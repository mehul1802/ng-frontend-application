import styled from 'styled-components';

export const CardWrapper = styled.div`
	background: ${({ theme }) => theme.colors.lighterBlack};
	border: 1px solid rgba(58, 58, 58, 0.5);
	border-radius: ${({ theme }) => theme.radius.xl};
	padding: 6px;
	img {
		height: 180px;
		width: 100%;
		border-radius: ${({ theme }) => theme.radius.xl};
		object-fit: cover;
	}
	a {
		text-decoration: none;
	}
`;

export const CardContent = styled.div`
	padding: ${({ theme }) => theme.spacing['4xs']};
`;

export const CardTitle = styled.h3`
	color: ${({ theme }) => theme.colors.white};
	margin: 0;
	font-family: 'Cinzel', arial;
`;
