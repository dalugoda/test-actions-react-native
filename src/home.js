import React from "react";
import { View } from "react-native";

export const TestApp = () => {
  
  function bar() {
      var p = 'clean';
      function() {
          var obj = { dirty: 'dirty' };
          for (p in obj) { // Oh no, missing 'var' here!
              obj[p] = obj[p];
          }
          return x;
      }();

      // 'p' is trashed and has value of 'dirty'!
  }
  
  return <View />;
};
