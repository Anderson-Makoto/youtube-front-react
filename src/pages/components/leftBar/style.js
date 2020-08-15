import styled from 'styled-components'
import { homeIcon, 
    homeIconSelected, 
    emAltaIcon, 
    emAltaIconSelected, 
    inscricoesIcon, 
    inscricoesIconSelected,
    bibliotecasIcon,
    bibliotecasIconSelected } from '../../../assets/bell/mutiple_export'

export const styles = {
    content: styled.div`
        height: 300px;
        width: 80px;
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
                background-color: #f2f2f2;
                cursor: pointer;
            }
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 25%;
            width: 100%;

        };
        #em-alta {
            :hover {
                background-color: #f2f2f2;
                cursor: pointer;
            }
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 25%;
            width: 100%;

        };
        #inscricoes {
            :hover {
                background-color: #f2f2f2;
                cursor: pointer;
            }
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 25%;
            width: 100%;

        };
        #bibliotecas {
            :hover {
                background-color: #f2f2f2;
                cursor: pointer;
            }
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 25%;
            width: 100%;

        };
    `,
    icone: styled.div`
        margin-top: 15px;
        height: 16px;
        width: 20px;
        background-image: url(${props => {
            if (props.selectedIcon === 1) return homeIcon
            else if (props.selectedIcon === 2) return emAltaIcon
            else if (props.selectedIcon === 3) return inscricoesIcon
            else return bibliotecasIcon
        }});
        background-size: cover;
        background-repeat: no-repeat;
    `
}