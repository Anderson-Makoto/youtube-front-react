import styled from 'styled-components'

export const styles = {
    container: styled.div`
        height: 100%;
        padding-top: 30px;
        padding-left: 28px;
        width: 100%;
        background-color: #f9f9f9;
        h1 {
            font-size: 20px;
        }
    `,
    item: styled.div`
        display: flex;
        flex-direction: column;
        .thumb {
            height: 60%;
            width: 100%;
            background-color: yellow;
        }
        height: 300px;
        width: 330px;
        background-color: blue;
    `
}