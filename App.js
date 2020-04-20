import React from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/store/configureStore";
import {Root} from "native-base"


import { createSwitchNavigator, createAppContainer, } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Navigation from './src/Navigation/Navigation'
import Nav from './src/Navigation/Nav'

import Login from './src/screens/Login'
import MySurveyList from './src/screens/MySurveyList'
import SurveyAdd from'./src/screens/SurveyAdd.js'
import Profile from './src/screens/Profile'
import Loading from './src/screens/Loading'
import TopBar from "./src/Component/TopBar"
import SimpleFace from './src/screens/SimpleFace'

//La LoginStack contient uniquement l'écran Login
const LoginStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions:{
      headerShown: false
    },
  },
});

//L'AppStack avec tous les écrans, accessible une fois que l'on est loggué
const AppStack = createStackNavigator({
  MySurveyList: {
    screen: MySurveyList,
    navigationOptions: ({ navigation }) => ({
      header : () => (
        <TopBar
                navigation={ navigation }
                title = "Mes Surveys"
                leftActionIcon="searchSurvey"
                rightActionIcon="seeProfile"
        />
      ),
    }),
  },
  SurveyAdd: {
    screen: SurveyAdd,
    navigationOptions: ({ navigation }) => ({
      header : () => (
        <TopBar
                navigation={ navigation }
                title = "Ajouter un survey"
                leftActionIcon="goBack"
                
        />
      ),
    }),
  },
  Profile: {
		screen: Profile,
		navigationOptions: ({ navigation }) => ({
			header: () => (
				<TopBar
					navigation={navigation}
					title="Profile"
					leftActionIcon="goBack"
					rightActionIcon="logout"
				/>
			),
		}),
	},
})

 var AppContainer = createAppContainer(
	createSwitchNavigator(
		{
			Loading: Loading,
			Login: LoginStack,
			App: AppStack,
		},
		{
			initialRouteName: "Loading",
		}
	)
);





class App extends React.Component {
  render(){  
    return (
      <Provider store={store}>
        <PersistGate loading = {null} persistor={persistor}>
          <AppContainer/>
        </PersistGate>
      </Provider>
    );
  } 
}

export default App;

