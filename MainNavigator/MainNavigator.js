import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BlogList from '../Screen/BlogList';
import AddBlog from '../Screen/AddBlog';
import BolgListDemo from '../Screen/BolgListDemo';
import { loadBlogs } from '../store/actions';
import BlogService from '../Service.js/Service';
import { useDispatch, useSelector } from 'react-redux';

export default function MainNavigator() {
        const dispatch = useDispatch()
        useEffect(() => {
          BlogService.getApi('')
          .then(json => {
          if(json.status===200){
            dispatch(loadBlogs(json.data))
          }
          else{
           
          }
          }).catch((error)=>{
          })

        }, [])
      
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName='DemoBlogList'
      >
           <Stack.Screen name='DemoBlogList' component={BolgListDemo} />
          <Stack.Screen name='AddBlog' component={AddBlog} />
        <Stack.Screen name='BlogList' component={BlogList} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
