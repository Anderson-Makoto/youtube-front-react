import React from 'react';
import Topbar from '../components/top_bar/Top-bar'
import LeftBar from '../components/leftBar/LeftBar'
import Inicio from '../components/inicio/Inicio'
import { styles } from './style'

function App() {
  return(
    <div>
      <Topbar>

      </Topbar>
      <styles.content>
         <LeftBar>
          
          </LeftBar>
          <Inicio>
            
          </Inicio>
      </styles.content>
        
    </div>

  );
}

export default App;
