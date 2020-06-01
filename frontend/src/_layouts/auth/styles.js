import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
	height: 100%;

	@media (max-width: 1200px) {
		.title_app {
			width: 400px;
			span {
				width: 400px;
			}
		}
	}

	@media (max-width: 950px) {
		.title_app {
			margin: 0px;
			left: 0px;
		}
	}

	@media (max-width: 900px) {
		.container-form {
			left: 0;
			right: 0;

			margin: auto;
		}
		.title_app {
			display: none;
		}
	}

	@media (max-width: 800px) {
		.title_app {
			display: none;
		}
		.backgroundmain {
			background-image: none;
			background: #332138;
		}
	}
`;

export const Header = styled.header`
	width: 100%;
	height: 70px;
	background: #fff;
	border: none;
	display: flex;
	flex-direction: row;
	align-items: center;
	img {
		margin-left: 80px;
		width: 50px;
	}
	h1 {
		font-family: 'Righteous', cursive;
		color: #111;
		margin-left: 6px;
		font-family: 50px;
	}
`;
export const TopPage = styled.div`
	position: relative;
	height: auto;
`;
export const BackgroundImage = styled.img`
	border: none;

	width: 100%;
	height: 700px;
	object-fit: cover;
`;

export const TitleContent = styled.div`
	position: absolute;
	left: 80px;
	top: 50%;
	width: 600px;
	transform: translateY(-50%);
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	h1 {
		text-align: center;
		color: white;
		font-family: 'Bebas Neue', cursive;
		font-weight: 900;
		font-size: 75px;
		color: white;
	}

	span {
		margin-top: 36px;
		display: inline-block;
		text-align: left;
		width: 70%;
		color: white;
		font: 30px 'Cormorant Garamond', sans-serif;
		font-weight: 300;
	}
`;

const pulse = keyframes`
		0% {
			transform: scale(0.9);
		}
		50%,
		100% {
			transform: scale(1);
		}
`;
export const AboutUs = styled.span`
	display: flex;
	flex-direction: row;
	align-items: center;
	position: absolute;
	bottom: 26px;

	right: 40%;
	transform: translateX(50%);
	color: #fff;
	font: 24px 'Source Sans Pro', sans-serif;
	font-weight: 400;

	svg {
		margin-left: 9px;
	}

	animation: ${pulse} 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite alternate;
`;
