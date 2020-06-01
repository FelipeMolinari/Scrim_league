import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { FormButton } from './Buttons';
import SeparatorForm from './AuthComponents/SeparatorForm';
import Container from './AuthComponents/Container';
import InputForm from './ImputForm';
import Form from './Form';

import { FaFacebookSquare } from 'react-icons/fa';
import { MdPersonAdd } from 'react-icons/md';

const SignOnSchema = yup.object().shape({
	fullName: yup.string().required(),

	email: yup.string().email().required(),
	password: yup.string().min(6),
	confirmPassword: yup
		.string()
		.required('Your Confirm password is required')
		.oneOf([ yup.ref('password') ], 'Passowrd must match')
});

function RegisterForm() {
	const { register, errors, handleSubmit } = useForm({ validationSchema: SignOnSchema });

	const onSubmit = async (data) => console.log(data);
	console.log(errors.confirmPassword);
	return (
		<Container className="container-form" style={{ width: '480px' }}>
			<FormButton>
				<FaFacebookSquare size={20} />
				<span>Cadastrar com o Facebook </span>
			</FormButton>

			<Form onSubmit={handleSubmit(onSubmit)}>
				<SeparatorForm>
					<span>ou</span>
				</SeparatorForm>

				{errors.fullName && <span className="error-message">Your Name is required</span>}
				<InputForm placeholder={'Full Name'} type="text" name="fullName" ref={register} />

				{errors.email && <span className="error-message">Your Email is required</span>}
				<InputForm placeholder={'Email'} type="email" name="email" ref={register} />

				{errors.password && <span className="error-message">Your password must be at least 6 characteres</span>}
				<InputForm placeholder={'Senha'} type="password" name="password" ref={register} />

				{errors.confirmPassword && <span className="error-message">{errors.confirmPassword.message}</span>}
				<InputForm placeholder={'Confirme sua senha'} type="password" ref={register} name="confirmPassword" />

				<span style={{ color: 'white', fontSize: '13px' }}>
					Ao clicar em Cadastrar, você concorda com {' '}
					<a href="http://www.google.com" style={{ color: '#6e30f2', fontSize: '14px', fontWeight: 'bold' }}>
						Termos de uso e privacidade.
					</a>
				</span>
				<FormButton type="submit" style={{ background: '#D3455B ', width: '100%', marginTop: '16px' }}>
					<MdPersonAdd size={20} />
					<span>Cadastrar</span>
				</FormButton>
			</Form>
		</Container>
	);
}
export default RegisterForm;
