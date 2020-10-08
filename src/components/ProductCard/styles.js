import styled from 'styled-components';

export const Group = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 90vw;
	margin: 0 auto;
	padding: 1em;
`;

export const Card = styled.div`
	background: red;
	border: solid 1px grey;
	margin-bottom: 1em;

	&:last-child {
		margin-bottom: 0;
	}
`;

export const Title = styled.h3`
	color: white;
`;

export const Description = styled.p`
	color: white;
`;

export const Price = styled.p`
  color: white;
`;
