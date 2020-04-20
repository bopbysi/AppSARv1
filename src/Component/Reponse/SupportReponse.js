import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, KeyboardAvoidingView, TouchableHighlight, TouchableOpacity } from 'react-native';
import {  CheckBox } from 'react-native-elements';
import { connect } from 'react-redux'
// import { TouchableOpacity } from 'react-native-gesture-handler';



class SupportReponse extends React.Component{ 
  constructor(props){
    super(props);
    this.state = {
      checked:null,
      support: undefined,
      supportlist:[
        {title:'Structure Acier', id:'1'},
        {title:'Bardage Bois', id:'2'}, 
        {title:'Structure Bois',id:'3'},
        {title:'Béton (maçonnerie)',id:'4' },
        {title:'Ondulé',id:'5' },
        {title:'Parpaings',id:'6'},
        {title:'Plan',id:'7'},
        {title:'Briques Creuses',id:'8'},
        {title:'A Cassettes',id:'9'},
        {title:'Pierre',id:'10'},
        {title:'Marbre',id:'11'},
      ]
    }
  }

    _toggleReponse(){
      console.log("clik sur un support")
      const action = { type: "TOGGLE_SUPPORT", value: this.state}
      this.props.dispatch(action)
    }



    handleClick = (index) => () => {
      const { supportlist } = this.state;
      supportlist[index].checked = !this.state.supportlist[index].checked
      this.setState({ supportlist })
      
    }

    componentDidUpdate(){
      console.log("Mes supports sélectionnés ======>", this.props.supportType)
    }

    
    


  

    render(){
       console.log("SUPPORT REPONSE PROPS" , this.props)
      //  console.log("SUPPORT REPONSE STATE" ,this.state)
      
      
        return(
            <KeyboardAvoidingView behavior='' keyboardVerticalOffset='0'   >
            <ScrollView >
              
                {
                  this.state.supportlist.map((item, i) => (
                    <TouchableOpacity key={item.id} style={styles.Item} onPress={this._toggleReponse.bind(this)}>
                    
                    <CheckBox
                      style= {styles.CheckBox}
                      checked={item.checked}
                      onPress={this.handleClick(i)}
                    />
                    
                    <Text  style={styles.checkBoxText}>{item.title}</Text>
                    </TouchableOpacity>   
                  ))
                } 
             
                <View style={styles.Item}>
                    <CheckBox style={styles.CheckBox}/>
                    <TextInput 
                    style={ styles.textInput }
                    placeholder="Autres support plein"
                    placeholderTextColor = "darkgray"
                    autoCapitalize="none"
                    autoCompleteType="off"
                    />
                </View>  
                <View style={styles.Item}>
                    <CheckBox style={styles.CheckBox}/>
                    <TextInput 
                    style={ styles.textInput }
                    placeholder="Autres support creux"
                    placeholderTextColor = "darkgray"
                    autoCapitalize="none"
                    autoCompleteType="off"
                    />
                </View>  

                <View title='BOUTTON VALIDER' style={styles.container}>
                <TouchableHighlight underlayColor="#000" style={styles.selectedItemsButton} onPress={this.getSelectedItems}>
                <Text style={styles.selectedItemsButton_Text}> VALIDER </Text>
                </TouchableHighlight>
                </View>

                <Text style={{ fontSize: 20, color: "#000", marginTop: 20 }}> {this.state.selectedItems} </Text>
                


            </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (action) => { dispatch(action) }
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, mapDispatchToProps)(SupportReponse)

const styles = StyleSheet.create({
    container: {
      
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width:"100%",
    },
    ListItem:{
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width:"100%",
    },
    Item:{
      flexDirection:'row',  
      backgroundColor: 'white',
      width:"100%",
      alignItems:'center',
      borderColor:'#929496',
      borderTopWidth:1,
      borderEndWidth:1,   
    },
    selectedItemsButton:{
      width:300,
      height:40,
      borderRadius:5,
      marginTop: 25,
      backgroundColor: '#AF1E2D',
      marginBottom:10 
    },
    selectedItemsButton_Text:{
      flex:1,
      color: 'white',
      textAlign: 'center',
      alignSelf: 'stretch',
      fontSize: 20,
      textAlignVertical:'center'
    },
  });