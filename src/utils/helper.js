import { Entypo, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { basicColors, basicShapes, COLORS, NUMBERS } from './constants';
import React from 'react';

export const getIconByName = (name) => {
  switch (name) {
    case 'human-male-female':
      return (
        <MaterialCommunityIcons
          name="human-male-female"
          size={NUMBERS.prefixIconSize}
          color={COLORS.tableFont100}
        />
      );
    case 'lock':
      return <Entypo name="lock" size={NUMBERS.prefixIconSize} color={COLORS.tableFont100} />;
    case 'email':
      return <Entypo name="email" size={NUMBERS.prefixIconSize} color={COLORS.tableFont100} />;
    case 'birthday-cake':
      return (
        <FontAwesome
          name="birthday-cake"
          size={NUMBERS.prefixIconSize}
          color={COLORS.tableFont100}
        />
      );
    case 'timetable':
      return (
        <MaterialCommunityIcons
          name="timetable"
          size={NUMBERS.prefixIconSize}
          color={COLORS.tableFont100}
        />
      );
    case 'weight-kilogram':
      return (
        <MaterialCommunityIcons
          name="weight-kilogram"
          size={NUMBERS.prefixIconSize}
          color={COLORS.tableFont100}
        />
      );
    case 'user':
      return <Entypo name="user" size={NUMBERS.prefixIconSize} color={COLORS.tableFont100} />;
  }
};

export const getListOf144Shapes = () => {
  let res = [];
  for (let shapeBig in basicShapes) {
    for (let colorBig in basicColors) {
      for (let shapeSmall in basicShapes) {
        for (let colorSmall in basicColors) {
          res.push({
            shapeBig: basicShapes[shapeBig],
            colorBig: basicColors[colorBig],
            shapeSmall: basicShapes[shapeSmall],
            colorSmall: basicColors[colorSmall]
          });
        }
      }
    }
  }
  return res;
};
