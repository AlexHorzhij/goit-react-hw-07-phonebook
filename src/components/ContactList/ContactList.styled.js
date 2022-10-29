import styled from "styled-components";
// import { Oval } from 'react-loader-spinner';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const Item = styled.li`
    display: flex;
    justify-content: space-between;
    font-size: ${p=>p.theme.fontSize.l}; 
    `
export const Button = styled.button`
    display: flex;
    font-size: ${p=>p.theme.fontSize.m}; 
    background-color: ${p=>p.theme.colors.white};
    padding: ${p=>p.theme.space[0]} ${p=>p.theme.space[4]};
    border-radius: ${p=>p.theme.radii.normal};
    margin-left: ${p=>p.theme.space[4]};
    :hover, :focus{
        background-color: ${p=>p.theme.colors.hover};
        color: ${p=>p.theme.colors.white};
    }
`
export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: ${p=>p.theme.space[3]};
    font-size: ${p=>p.theme.fontSize.l}; 
`