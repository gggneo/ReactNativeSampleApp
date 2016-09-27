import React from 'react';

import {
  BackAndroid,
} from 'react-native';

import AppActions    from '../Actions/AppActions';
// import DrawerStore   from '../Stores/DrawerStore';

const Back = {
  setNavigator(navigator) {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      // if (DrawerStore.get().open === true) {
      //   AppActions.toggleDrawer();
      //   return true;
      // }
      if (navigator && navigator.getCurrentRoutes().length > 1) {
        AppActions.goBack(navigator);
        return true;
      }
      return false;
    });
  },
};

export default Back;
