import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FormButton = styled.button`
	width: 100%;
	height: 50px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	border-radius: 4px;
	background: #6e30f2;
	border: 0px transparent;
	margin: 5px;
	transition: 0.8s;
	color: white;
	padding: 0px 6px;

	span {
		font: 20px 'Source Sans Pro', sans-serif;
		font-weight: 300;
		margin: 0px 16px;
	}
	&:hover {
		box-shadow: inset 0 0 100px 100px rgba(0, 0, 0, 0.2);
	}
`;

export const LinkButton = styled(Link)`
	width: 100%;
	height: 50px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	border-radius: 4px;
	border: 0px transparent;
	margin: 5px;
	transition: 0.8s;
	color: white;
	padding: 0px 6px;

	span {
		font: 20px 'Source Sans Pro', sans-serif;
		font-weight: 300;
		margin: 0px 16px;
	}
	&:hover {
		box-shadow: inset 0 0 100px 100px rgba(0, 0, 0, 0.2);
	}
`;
