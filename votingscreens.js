import React from 'react'


import {View,Text,ImageBackground,TouchableOpacity,TextInput} from 'react-native'

import firebase from 'firebase'

import db from '../config'

export default class Vote extends React.Component{

constructor(){
  super();
  this.state={
    p1:0,
    p2:0,
    p3:0,
    p4:0,
    p5:0,
    text:'checkwhoisthemajority',
    checktext:'',
        text2:'wrong',
    checktext2:'',
    partyName:'',
    isdisabled:false
  }
}
intializing(){
  this.setState({
    p1:0,
      p2:0,
        p3:0,
          p4:0,
            p5:0,
  })
}

//   deletingAllTheDocuments(){
//      db.collection('Party1').get().then(snapshot=>{
//   snapshot.forEach(doc=>{
// db.collection('Party1').doc(doc.id).delete()
//   })
//    })
//         db.collection('Party2').get().then(snapshot=>{
//   snapshot.forEach(doc=>{
// db.collection('Party2').doc(doc.id).delete()
//   })
//    })
//         db.collection('Party3').get().then(snapshot=>{
//   snapshot.forEach(doc=>{
// db.collection('Party3').doc(doc.id).delete()
//   })
//    })
//         db.collection('Party4').get().then(snapshot=>{
//   snapshot.forEach(doc=>{
// db.collection('Party4').doc(doc.id).delete()
//   })
//    })
//         db.collection('Party5').get().then(snapshot=>{
//   snapshot.forEach(doc=>{
// db.collection('Party5').doc(doc.id).delete()
//   })
//    })
// }
componentDidMount(){
// this.deletingAllTheDocuments()
  this.intializing()

}



checking(a,b){
if (a==b){
this.props.navigation.navigate('Score')
}
else{
  alert('Enter the correct code!')
}
}
checking2(a,b){
if (a==b){
alert('Now enter the party name')
}
else{
  alert('Enter the correct code!')
}
}


reduce(a){
  if(this.state.checktext2=='wrong'){
if(a=='p1'&& this.state.p1>0){
  this.setState({p1:this.state.p1-1})
}
if(a=='p2'&& this.state.p2>0){
  this.setState({p2:this.state.p2-1})
}
if(a=='p3'&& this.state.p3>0){
  this.setState({p3:this.state.p3-1})
}
if(a=='p4'&& this.state.p4>0){
  this.setState({p4:this.state.p4-1})
}
if(a=='p5'&& this.state.p5>0){
  this.setState({p5:this.state.p5-1})
}
  }
  else{
    alert('First Enter the secret code!')
  }
}

  render(){

    return(
      <View>
<ImageBackground source={require('../assets/bg.jpg')} style={{ 
           flex: 1,
        resizeMode: 'cover',
        alignItems:'center',
        width:1350,
        height:800,
        }}>
<Text style={{textAlign:'center',marginTop:10,fontSize:50,fontWeight:'bold',marginLeft:-20,color:'white',padding:20}}>Vote for the right!</Text>

<Text style={{textAlign:'center',marginTop:20,fontSize:35,fontWeight:'bold',marginLeft:-1080}}>Party Name</Text>
<Text style={{textAlign:'center',marginTop:-45,fontSize:35,fontWeight:'bold',marginLeft:-550,}}>Party Name</Text>
<Text style={{textAlign:'center',marginTop:-45,fontSize:35,fontWeight:'bold',marginLeft:-20}}>Party Name</Text>
<Text style={{textAlign:'center',marginTop:-45,fontSize:35,fontWeight:'bold',marginLeft:520}}>Party Name</Text>
<Text style={{textAlign:'center',marginTop:-45,fontSize:35,fontWeight:'bold',marginLeft:1040}}>Party Name</Text>
<TouchableOpacity style={{backgroundColor:'yellow',marginTop:140,marginLeft:-1100,padding:20,borderRadius:10,width:150,height:50,}} onPress={()=>{
  this.setState({p1:this.state.p1+1})
this.adding('Party1')
alert('Vote Casted')
  this.setState({isdisabled:true})
  }} disabled={this.state.isdisabled}><Text style={{fontSize:20,textAlign:'center',justifyContent:'center',marginTop:-10}}>Vote</Text></TouchableOpacity>
<TouchableOpacity style={{backgroundColor:'yellow',marginTop:-50,marginLeft:-570,padding:20,borderRadius:10,width:150,height:50,}}onPress={()=>{
  this.setState({p2:this.state.p2+1})
this.adding('Party2')
alert('Vote Casted')
 this.setState({isdisabled:true})
}}disabled={this.state.isdisabled}><Text style={{fontSize:20,textAlign:'center',justifyContent:'center',marginTop:-10}}>Vote</Text></TouchableOpacity>
<TouchableOpacity style={{backgroundColor:'yellow',marginTop:-50,marginLeft:-20,padding:20,borderRadius:10,width:150,height:50,}}onPress={()=>{
  this.setState({p3:this.state.p3+1})
this.adding('Party3')
alert('Vote Casted')
 this.setState({isdisabled:true})
}}disabled={this.state.isdisabled}><Text style={{fontSize:20,textAlign:'center',justifyContent:'center',marginTop:-10}}>Vote</Text></TouchableOpacity>
<TouchableOpacity style={{backgroundColor:'yellow',marginTop:-50,marginLeft:520,padding:20,borderRadius:10,width:150,height:50,}}onPress={()=>{
  this.setState({p4:this.state.p4+1})
this.adding('Party4')
alert('Vote Casted')
 this.setState({isdisabled:true})
  }}disabled={this.state.isdisabled}><Text style={{fontSize:20,textAlign:'center',justifyContent:'center',marginTop:-10}}>Vote</Text></TouchableOpacity>
<TouchableOpacity style={{backgroundColor:'yellow',marginTop:-50,marginLeft:1060,padding:20,borderRadius:10,width:150,height:50,}}onPress={()=>{
  this.setState({p5:this.state.p5+1})
this.adding('Party5')
alert('Vote Casted')
 this.setState({isdisabled:true})
  }} disabled={this.state.isdisabled}><Text style={{fontSize:20,textAlign:'center',justifyContent:'center',marginTop:-10}}>Vote</Text></TouchableOpacity>

<TextInput placeholder='Enter the secret code for revealing the majority !' style={{borderWidth:2,marginTop:130,padding:10,width:460,fontSize:19,fontWeight:'bold',marginLeft:60}} placeholderTextColor={'white'} onChangeText={(text)=>{
  this.setState({checktext:text})
}}

secureTextEntry={true}
/>
<TouchableOpacity style={{width:110,height:30,backgroundColor:'lightpink',marginTop:30,padding:20,borderRadius:10,marginLeft:60}} onPress={()=>{this.checking(this.state.checktext,this.state.text)}}><Text style={{marginLeft:8,marginTop:-13,fontSize:20}}>Check</Text></TouchableOpacity>









<Text style={{marginTop:-190,marginLeft:60,fontSize:25,color:'black',fontWeight:'bold'}}>Use this when everyone finishes voting</Text>


</ImageBackground>
      </View>
    )
  }
adding(a){
  db.collection(a).add({
    whatIsThis:'vote'
  })
  
}
}