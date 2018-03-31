import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import MainScreenNavigator from "../Locate/index.js";
import screens from "../Events/index.js";
import Upload from "../Upload/index.js";
import SideBar from "../SideBar/SideBar.js";
import Notify from "../Notification/index.js";
import { DrawerNavigator } from "react-navigation";

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Events:{ screen: screens },
    'Locate a friend': { screen: MainScreenNavigator },
    'Notifications': { screen: Notify },
    'Upload Picture' : { screen: Upload },
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
