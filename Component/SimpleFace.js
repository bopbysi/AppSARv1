import React from 'react'
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements'

import SupportQuestion from './Question/SupportQuestion'
import EtatGeneralQuestion from './Question/EtatGeneralQuestion'


class SimpleFace extends React.Component{
  constructor(props){
    super(props)
  }  
    _goToSupportReponse = (navigation)=>{
      this.props.navigation.actions.navigate("SuppportReponse", {navigation:navigation} )
      
    }


    render() {
      
      
      console.log("SimpleFacePros =", this.props.navigation.actions.navigate)
        return(
           
           <View style={styles.main_container}>
             
              <SupportQuestion goToSupportReponse = {this._goToSupportReponse} />


              <ListItem style= {styles.list_item_container}
                    title="TEST"
                    bottomDivider
                    topDivider
                    chevron
                    onPress
                    onPress={()=>{this.props.navigation.navigate("SupportReponse")}}
              />
             
             
                  
      
             
             
             
             
             
             
            
             
             
             
       

           </View>
           

        )
    }
}

export default ( SimpleFace )

const styles = StyleSheet.create ({
    scrollview_container:{
      flex: 1,  
    },
    main_container: {  
      flex:1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width:"100%",
    },  
    list_item_container: {
      flex:1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width:"100%",
    }
})