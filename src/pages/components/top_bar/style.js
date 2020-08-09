import styled from 'styled-components'
import menu from '../../../assets/menu.png'
import camera from '../../../assets/camera.png'
import logo from '../../../assets/logo.png';
import search from '../../../assets/search.png'
import keyboard from '../../../assets/keyboard.png'
import noUser from '../../../assets/no_user.png'
import app from '../../../assets/app.png'
import {
    bell0, 
    bell1, 
    bell2, 
    bell3, 
    bell4, 
    bell5, 
    bell6, 
    bell7, 
    bell8, 
    bell9, 
    bell9p} from '../../../assets/bell/mutiple_export'

export const styles = {
    DivTopbar: styled.div`
        padding-left: 24px;
        padding-right: 24px;
        width: 100%;
        height: 56px;
        display: flex;
    `,

    LeftSpace: styled.div`
        flex: 1;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    `,

    CenterSpace: styled.div`
        font-weight: bold;
        flex: 6;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        @media (max-width: 700px) {
            flex: 0.5;
        }
        @media (max-width: 1000px) {
            flex: 2;
        }
    `,

    RightSpace: styled.div`
        display: flex;
        justify-content: flex-end;
        flex: 1;
        display: flex;
        align-items: center;
    `,

    ButtonMenu: styled.div`
        border: none;
        background-image: url(${menu});
        background-size: cover;
        background-repeat: no-repeat;
        height: 24px;
        width: 24px;
    `,

    LogoYoutube: styled.div`
        background-image: url(${logo});
        background-size: cover;
        background-repeat: no-repeat;
        height: 48px;
        margin-left: 10%;
        width: 86px;
    `,

    SearchBar: styled.input`
        border: solid;
        border-width: 1px;
        border-color: #cccccc;
        :focus{
            
        };
        ::placeholder{
            color: gray;
            font-family: 'Roboto','Noto',sans-serif;
        };
        font-size: 16px;
        font-weight: 550;
        font-family: Arial;
        height: 24px;
        width: 41%;
        min-width: 200px;
        padding-right: 11px;
        margin-left: -60px;
        @media (max-width: 700px) {
            display: none;
        };
    `,

    SearchButtonSmaller: styled.button`
        height: 24px;
        width: 24px;
        @media (min-width: 700px) {
            display: none;
        };
    `,

    KeyboardIcon: styled.div`
        background-image: url(${keyboard});
        background-size: cover;
        background-repeat: no-repeat;
        height: 14px;
        width: 20px;
        margin-left: -34px;
        @media (max-width: 700px) {
            display: none;
        };
    `,

    SearchButton: styled.div`
        border: solid;
        border-width: 1px;
        border-color: #cccccc;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f9f9f9;
        height: 24px;
        width: 65px;
        margin-left: 10px;
        @media (max-width: 700px) {
            display: none;
        };
    `,

    SearchIcon: styled.div`
        background-image: url(${search});
        background-size: cover;
        background-repeat: no-repeat;
        height: 17px;
        width: 17px;
    `,

    CameraIcon: styled.div`
        margin-right: 30px;
        height: 24px;
        width: 24px;
        background-image: url(${camera});
        background-size: cover;
        background-repeat: no-repeat;
    `,

    AppYoutube: styled.div`
        background-image: url(${app});
        background-size: cover;
        background-repeat: no-repeat;
        margin-right: 30px;
        height: 24px;
        width: 24px;
    `,

    BellButton: styled.div`
    background-image: url(${bell0});
    background-size: cover;
    background-repeat: no-repeat;
    margin-right: 30px;
    height: 24px;
    width: 24px;
    `,

    LoginButton: styled.div`
        :hover{
            cursor: pointer;
        };
        display: flex;
        align-items: center;
        margin-right: 25px;
        height: 36px;
        width: 140px;
        border: solid;
        border-color: #065fd4;
        border-width: 1px;
        #icon {
            margin-left: 10px;
            height: 20px;
            width: 20px;
            background-image: url(${noUser});
            background-size: cover;
            background-repeat: no-repeat;
        };
        #login {
            margin-left: 10px;
            color: #065fd4;
            font-weight: 550;
        }
    `
}
 