import styled from "styled-components";

export const Section = styled.section`
    width: 500px;
    display: flex;
    flex-direction: column;
    margin-bottom: ${p=>p.theme.space[5]};
`
export const Title = styled.h2`
    font-size: ${p=>p.theme.fontSize.xxl};
    margin-bottom: ${p=>p.theme.space[4]};
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
`
export const Message = styled.div`
    font-size: ${p=>p.theme.fontSize.l}; 
`