import styled from 'styled-components'

export const styles = {
    content: styled.div`
        height: 30vh;
        width: 80px;
        background-color: blue;
        display: flex;
        flex-direction: column;
        align-items: center;
        .texto {
            display: flex;
            justify-content: center;
            margin-top: 5px;
            color: red;
            font-size: 11px;
            height: 11px;
            width: 100%;
        };
        #inicio {
            :hover {
                background-color: green;
            }
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 25%;
            width: 100%;
            background-color: yellow;

        };
        #em-alta {
            :hover {
                background-color: green;
            }
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 25%;
            width: 100%;
            background-color: yellow;

        };
        #inscricoes {
            :hover {
                background-color: green;
            }
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 25%;
            width: 100%;
            background-color: yellow;

        };
        #bibliotecas {
            :hover {
                background-color: green;
            }
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 25%;
            width: 100%;
            background-color: yellow;

        };
    `,
    icone: styled.div`
        margin-top: 15px;
        height: 24px;
        width: 24px;
        background-color: ${props => props.cor};
    `
}