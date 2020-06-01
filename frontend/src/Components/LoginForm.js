import React from 'react';
import { useForm } from 'react-hook-form';

import { FormButton, LinkButton } from './Buttons';
import SeparatorForm from './AuthComponents/SeparatorForm';
import LinkForm from './AuthComponents/LinkForm';
import Container from './AuthComponents/Container';
import InputForm from './ImputForm';
import Form from './Form';

import { FaFacebookSquare } from 'react-icons/fa';
import { RiLoginBoxLine } from 'react-icons/ri';
import { MdPersonAdd } from 'react-icons/md';

import * as yup from 'yup';

const SignInSchema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().required().min(6)
});

function LoginForm() {
	const { register, errors, handleSubmit } = useForm({ validationSchema: SignInSchema });

	const onSubmit = async (data) => console.log(data);

	return (
		<Container className="container-form">
			<Form onSubmit={handleSubmit(onSubmit)}>
				<FormButton>
					<FaFacebookSquare size={20} />
					<span>Entrar com o Facebook </span>
				</FormButton>

				<SeparatorForm>
					<span>ou</span>
				</SeparatorForm>

				{errors.email && <span className="error-message">Your Email is required</span>}
				<InputForm placeholder={'Email'} type="email" name="email" ref={register} />

				{errors.password && <span className="error-message">Your Password is required</span>}
				<InputForm placeholder={'Password'} type="password" name="password" ref={register} />

				<div style={{ marginBottom: '26px', position: 'relative' }}>
					<LinkForm to="/password/reset">
						<span>Esqueceu a senha?</span>
					</LinkForm>
				</div>

				<FormButton type="submit" style={{ background: '#169487 ' }}>
					<RiLoginBoxLine size={20} />

					<span>Entrar</span>
				</FormButton>

				<SeparatorForm>
					<span>Não possuí conta?</span>
				</SeparatorForm>
			</Form>

			<LinkButton to="/register" style={{ background: '#D3455B ', width: '70%', alignSelf: 'center' }}>
				<MdPersonAdd size={20} />

				<span>Criar uma conta</span>
			</LinkButton>
		</Container>
	);
}
export default LoginForm;
