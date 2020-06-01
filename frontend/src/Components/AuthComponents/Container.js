import styled from 'styled-components';

const Container = styled.div`
	width: 432px;

	position: absolute;
	right: 98px;
	top: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #ddd;
	padding: 16px;
	background-color: rgba(0, 0, 33, 0.4);
	transform: translateY(-50%);

	.name-lastname {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		input {
			width: 47%;
		}
	}
`;

export default Container;
