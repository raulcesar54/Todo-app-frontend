import styled, { css } from 'styled-components'

export const ListItem = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    justify-content:space-between;
    align-items:center;
`
export const Body = styled.div`
max-height:400px;
overflow-y:scroll;
&::-webkit-scrollbar {
    display: none;
}
`

export const Text = styled.input`
border:none;
outline:none;
margin-top:14px; 
font-size:16px;
color:#626262;
padding:8px 0px;
`
interface IText {
    isClosed?:boolean;
}
export const Description = styled.p<IText>`
${({isClosed}) => isClosed && css`text-decoration:line-through`};
    margin-top:14px; 
    font-size:16px;
    color:#626262;
`