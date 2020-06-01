const Yup = require('yup');

const schema = Yup.object().shape({
	firstName: Yup.string(),
	lastName: Yup.string(),
	oldpassword: Yup.string().min(6),
	password: Yup.string().min(6).when('oldpassword', (oldpassword, field) => (oldpassword ? field.required() : field)),
	confirmPassword: Yup.string().when(
		'password',
		(password, field) => (password ? field.required().oneOf([ Yup.ref('password') ]) : field)
	),
	birthday: Yup.date(),
	bio: Yup.string().max(100),
	mainRole: Yup.string().oneOf([ 'Top', 'Jungler', 'Mid', 'AD Carry', 'Support', 'Coach' ]),
	secondRole: Yup.string().oneOf([ 'Top', 'Jungler', 'Mid', 'AD Carry', 'Support', 'Coach' ]),
	gender: Yup.string().oneOf([ 'male', 'female' ])
});

async function validation(body) {
	if (!await schema.isValid(body)) {
		return false;
	}
	return true;
}

module.exports = validation;
