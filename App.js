import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import VoteForTheGood from './Voting/votingscreens'
import Score from './Voting/scorescreen'
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
export default function App() {
  return (
    <View>
<AppContainer/>
    </View>
  );
}


const switchNavigator = createSwitchNavigator({
    Vote:{screen:VoteForTheGood},
      Score:{screen:Score},
  
   

 
  

   
    
   
  
 
     
     

  

  

   
      




})


const AppContainer = createAppContainer(switchNavigator)




