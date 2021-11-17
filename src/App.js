import './App.css';
import { IonApp, IonContent, IonRouterOutlet, IonHeader, IonToolbar, IonTitle } from '@ionic/react'
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { Route } from 'react-router'
import Tab1 from './components/Tab1'
import Tab2 from './components/Tab2'
import Tab3 from './components/Tab3'


function App() {

  return (
    <IonApp>
      <IonReactRouter>
        <IonHeader >
          <IonToolbar>
            <IonTitle>
              test app
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
      <IonTabs>
          <IonRouterOutlet id = 'menu'>
            <Route path = '/tab1' component = {Tab1} exact/>
            <Route path = '/tab2' component = {Tab2} exact/>
            <Route path = '/tab3' component = {Tab3} exact/>
          </IonRouterOutlet>
      <IonTabBar slot ='top'>
              <IonTabButton tab = 'tab1' href = '/tab1' >
                <IonTitle>
                  tab1
                </IonTitle>
              </IonTabButton>
              <IonTabButton tab = 'tab2' href = '/tab2' >
                <IonTitle>
                  tab2
                </IonTitle>
              </IonTabButton>
              <IonTabButton tab = 'tab3' href = '/tab3' >
                <IonTitle>
                  tab3
                </IonTitle>
              </IonTabButton>
      </IonTabBar>
      </IonTabs>
      </IonContent>
      </IonReactRouter>
    </IonApp>
  );
}

export default App

