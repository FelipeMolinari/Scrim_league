import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkForm = styled(Link)`
text-decoration: none;
color: white;
position: absolute;
right: 10px;
  
span{
  font: 16px 'Source Sans Pro', sans-serif;
	font-weight: 200;
}


`;

export default LinkForm;
