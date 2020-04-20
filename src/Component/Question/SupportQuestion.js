import React from 'react'
import { StyleSheet, View, } from 'react-native';
import { ListItem } from 'react-native-elements'





class SupportQuestion extends React.Component{
  constructor(props){
    super(props)
    this.state
  }

    render() {

      console.log('SUPPORT QUESTION PROPS = ',this.props)
      
        return(
           <View style={styles.main_container}> 
             <ListItem style= {styles.list_item_container}
                    title="Support"
                    bottomDivider
                    topDivider
                    chevron
                    rightTitle= "la réponse"        
            />
           </View>
        )
    }
}

export default ( SupportQuestion )

const styles = StyleSheet.create ({
    main_container: {  
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width:"100%",
    },  
    list_item_container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width:"100%",
    }
})