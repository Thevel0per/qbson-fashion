import styled from 'styled-components';

export const BaseButton = styled.button`
    height: 50px;
    width: 200px;
    font-size: 18px;
    border: 1px solid black;
    border-radius: 8px;
    background-color: black;
    color: white;
    transition: color .5s ease, background-color .7s ease;
    &:hover {
        cursor: pointer;
        background-color: white;
        color: black
    }
`;

export const GoogleSignInButton = styled(BaseButton)`
    background-color: #118AB2;
    border-color: #118AB2;
`;

export const InvertedButton = styled(BaseButton)`
    background-color: white;
    color: black;

    &:hover {
        background-color: black;
        color: white;
    }
`;
