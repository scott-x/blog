import styled from 'styled-components';
import pic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    max-width: 1160px;
    margin:0 auto;
	position:relative;
	height: 56px;
	border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
	background: url(${pic});
	width:140px;
	height:76px;
	background-size:contain;
	float:left;
`;

export const Nav = styled.div`
	margin-left:20px;
	margin-right:20px;
	float:left;
	font-weight: 300;
	margin-top:30px;

`