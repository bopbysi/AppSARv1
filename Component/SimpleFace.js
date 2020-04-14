import React from 'react'
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements'

import SupportQuestion from './Question/SupportQuestion'
import EtatGeneralQuestion from './Question/EtatGeneralQuestion'
import { TouchableOpacity } from 'react-native-gesture-handler';


class SimpleFace extends React.Component{
  constructor(props){
    super(props)
    state = {}
  }  



    render() {

      // console.log("SIMPLE FACE PROPS =", this.props)
      
        
        return(
           
           <View style={styles.main_container}>
             
            
              <TouchableOpacity 
                style = {styles.TouchableOpacity}
                onPress={() => this.props.navigation.navigate('SupportReponse')}
              > 
                  <SupportQuestion/>
              </TouchableOpacity>

              <TouchableOpacity 
                style = {styles.TouchableOpacity}
                onPress={() => this.props.navigation.navigate('SupportReponse')}
              > 
                  <EtatGeneralQuestion/>
              </TouchableOpacity>



           </View>
           

        )
    }
}

export default ( SimpleFace )

const styles = StyleSheet.create ({
    TouchableOpacity:{ 
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width:"100%",
    },
    main_container: {   
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width:"100%",
    },  
    
})