import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
  `;

export const ModalWindow = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    font-size: ${p=>p.theme.fontSize.l};
    padding: ${p=>p.theme.space[4]} ${p=>p.theme.space[3]};
    border: 1px solid black;        
`

export const FormTitle = styled.h3`
    margin: ${p=>p.theme.space[0]};
    font-size: ${p=>p.theme.fontSize.l};
    margin-bottom: ${p=>p.theme.space[3]};
    line-height: 1.0;
`
export const FormInput = styled.input`
    width: 300px;
    padding: ${p=>p.theme.space[2]};
    margin-bottom: ${p=>p.theme.space[5]};
    border: 1px solid ${p=>p.theme.colors.hover};
`

export const SubmitButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: ${p=>p.theme.colors.white};
    width: 200px;
    padding: ${p=>p.theme.space[1]};
    font-size: ${p=>p.theme.fontSize.m};
    border-radius: ${p=>p.theme.radii.normal};
    :hover, :focus{
        background-color: ${p=>p.theme.colors.hover};
        color: ${p=>p.theme.colors.white};
    }
`