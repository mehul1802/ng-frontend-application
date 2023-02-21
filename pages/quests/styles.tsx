import styled from 'styled-components';

export const SectionWrapper = styled.div`
	max-width: 748px;
	margin: ${({ theme }) => theme.spacing.xl} auto 0;
	border: 1px solid rgba(58, 58, 58, 0.5);
	border-radius: ${({ theme }) => theme.radius.xl};
	padding: ${({ theme }) => theme.spacing['5xs']};
	height: 84vh;
	overflow: auto;
	color: ${({ theme }) => theme.colors.white};
	@media (max-width: ${({ theme }) => theme.size.laptop}) {
		margin-left: ${({ theme }) => theme.spacing.m};
		margin-right: ${({ theme }) => theme.spacing.m};
		height: auto;
		max-width: 100%;
	}
	@media (max-width: ${({ theme }) => theme.size.mobile}) {
		margin-left: ${({ theme }) => theme.spacing['2xs']}
		margin-right: ${({ theme }) => theme.spacing['2xs']}
	}
`;

export const BannerWrapper = styled.div`
	max-height: 270px;
	min-height: 270px;
	overflow: hidden;
	position: relative;
	.poster-img {
		width: 100%;
		object-fit: cover;
		height: 270px;
		border-radius: ${({ theme }) => theme.radius.xl};
	}
	button {
		position: absolute;
		background: transparent;
		box-shadow: none;
		margin: 0;
		border: none;
		right: ${({ theme }) => theme.spacing['4xs']};
		top: ${({ theme }) => theme.spacing['4xs']};
		cursor: pointer;
		span {
			position: absolute;
			width: 100%;
			height: 3px;
			background-color: rgb(202, 202, 202);
		}
	}
`;

export const TitleWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 6px;
	img {
		width: 25%;
		&:last-child {
			transform: rotate(180deg);
		}
		@media (max-width: ${({ theme }) => theme.size.mobile}) {
			width: auto;
		}
	}
`;

export const Title = styled.h3`
	margin: 0;
	padding: 0 ${({ theme }) => theme.spacing.xs};
	font-family: 'Cinzel', arial;
	font-size: 20px;
	text-align: center;
`;

export const ListWrapper = styled.ul`
	position: relative;
	display: flex;
	flex-flow: row nowrap;
	justify-content: flex-start;
	align-items: flex-start;
	padding: 0;
	margin-bottom: 0;
`;

export const ListItem = styled.li`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 60px;
	height: 60px;
	border: 1px solid rgb(190, 167, 126);
	background: linear-gradient(180deg, rgba(7, 15, 29, 0) 0%, rgba(54, 77, 137, 0.4) 100%);
	flex-direction: column;
	margin-right: ${({ theme }) => theme.spacing['3xs']};
	span {
		margin-top: ${({ theme }) => theme.spacing['4xs']};
		font-size: 10px;
		font-wight: 700;
	}
	p {
		margin: 0;
	}
`;

export const RewardWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	margin-top: ${({ theme }) => theme.spacing.l};
`;

export const ContentWrapper = styled.div`
	padding: ${({ theme }) => theme.spacing['4xs']} ${({ theme }) => theme.spacing['2xs']};
`;

export const Description = styled.p`
	font-size: 14px;
	font-weight: 400;
	color: ${({ theme }) => theme.colors.grey};
`;

export const QuestTitle = styled.h4`
	font-size: 14px;
	font-weight: 700;
	font-family: 'Cinzel', arial;
`;
