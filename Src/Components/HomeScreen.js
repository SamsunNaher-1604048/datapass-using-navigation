import { View, Text,TextInput,StyleSheet,Dimensions ,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'


const HomeScreen = ({navigation}) => {
  const[name,setname]=useState('');
  const[email,setemail]=useState('');
  const[Password,setpassword]=useState('');

  const changename=(text)=>{
    setname(text)
  }

  const changemail=(text)=>{
    setemail(text)
  }

  const changepassword=(text)=>{
    setpassword(text)
  }

  const submit=()=>{
    //pass object
     navigation.navigate("Profile",{
       username:name,
       useremail:email,
       userpassword:Password,
     });
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.text}>Enter youe information</Text>
      <TextInput style={styles.Textinput} placeholder='Name' value={name} onChangeText={changename}/>
      <TextInput style={styles.Textinput} placeholder='Email' value={email} onChangeText={changemail}/>
      <TextInput style={styles.Textinput} placeholder='Password' secureTextEntry={true}  value={Password} onChangeText={changepassword}/>
      <TouchableOpacity style={styles.submit} onPress={submit}>
        <Text style={{textAlign:'center',paddingTop:15}}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}
const{width}=Dimensions.get('screen')

const styles =StyleSheet.create({
  Textinput:{
    width:width-20,
    borderWidth:2,
    marginBottom:10
    
  },
  text:{
    textAlign:'center',
    marginBottom:20
  },
  submit:{
    width:150,
    height:50,
    backgroundColor:'lightblue',
    borderRadius:10
  }

})
export default HomeScreen;