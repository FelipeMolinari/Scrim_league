import styled from 'styled-components';

const SeparatorForm = styled.span`
	height: 50px;
	align-items: center;
	display: flex;

	&:before {
		content: "";
		margin-right: 1em;
		flex: 1;
		height: 1px;
		background: white;
	}
	&:after {
		content: "";
		margin-left: 1em;
		flex: 1;
		height: 1px;
		background: white;
	}

	span {
		font: 18px 'Source Sans Pro', sans-serif;
		font-weight: 100;
		margin: 200px 0em;
		color: white;
	}
`;

export default SeparatorForm;
