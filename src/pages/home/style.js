/*
* @Author: sottxiong
* @Date:   2019-12-25 13:38:29
* @Last Modified by:   sottxiong
* @Last Modified time: 2019-12-27 07:59:07
*/
import styled from 'styled-components';

export const HomeWrapper = styled.div`
	width: 620px;
	margin: 0 auto;
	text-align:left;
	overflow: hidden;
	box-sizing: border-box;
	.title{
		margin: 40px 0 20px 0;
		line-height: 44px;
		font-size: 30px;
        font-weight: 700;
        word-break: break-word;
        color:#404040;
	}
`;

export const Content = styled.div`
	color: #2f2f2f;
	img {
		max-width:100%;
	}
	p{
		margin: 15px 0;
		font-size:16px;
		line-height:30px;
	}
	b{
		margin: 15px 0;
		font-size:18px;
		line-height:24px;
		font-weight: bold;
		display:block;
	}
`;