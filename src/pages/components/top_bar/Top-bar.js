import React, { Component } from 'react'
import { styles } from './style'

class Topbar extends Component {
    render() {
        return(
            <styles.DivTopbar>
                <styles.LeftSpace>
                    <styles.ButtonMenu>

                    </styles.ButtonMenu>

                    <styles.LogoYoutube>

                    </styles.LogoYoutube>
                </styles.LeftSpace>
                <styles.CenterSpace>
                    <styles.SearchBar placeholder={'Pesquisar'}>

                    </styles.SearchBar>
                    <styles.KeyboardIcon>

                    </styles.KeyboardIcon>
                    <styles.SearchButton>
                        <styles.SearchIcon>

                        </styles.SearchIcon>
                    </styles.SearchButton>
                </styles.CenterSpace>
                <styles.RightSpace>
                    <styles.SearchButtonSmaller>

                    </styles.SearchButtonSmaller>
                    <styles.CameraIcon>

                    </styles.CameraIcon>
                    <styles.AppYoutube>

                    </styles.AppYoutube>
                    <styles.BellButton>

                    </styles.BellButton>
                    <styles.LoginButton>
                        <div id='icon'>

                        </div>
                        <p id='login'>
                            FAZER LOGIN
                        </p>
                    </styles.LoginButton>
                </styles.RightSpace>
            </styles.DivTopbar>
            
        )
    }
}

export default Topbar