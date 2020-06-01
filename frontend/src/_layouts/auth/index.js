import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, BackgroundImage, TopPage, TitleContent, Header, AboutUs } from './styles';
import { FaArrowDown } from 'react-icons/fa';
import img from '../../assets/img/vayneproject1.jpg';
import logo from '../../assets/img/logo.png';

export default function AuthLayout({ children }) {
	return (
		<Wrapper>
			<Header>
				<img src={logo} alt="" />
				<h1>Scrim</h1>
			</Header>
			<TopPage>
				<BackgroundImage src={img} />
				<TitleContent className="title_app">
					<h1 className="mainTitle">TENHA UMA EXPERIÊNCIA PROFISSIONAL</h1>
					<span>Junte-se a maior plataforma de Scrim do Brasil. Evolua, faça novos amigos.</span>
				</TitleContent>
				{children}

				<AboutUs>
					Saiba mais sobre a gente <FaArrowDown />
				</AboutUs>
			</TopPage>
		</Wrapper>
	);
}

AuthLayout.propTypes = {
	children: PropTypes.element.isRequired
};
