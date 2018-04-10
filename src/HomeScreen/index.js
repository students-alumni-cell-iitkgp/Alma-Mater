import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import MainScreenNavigator from "../Locate/index.js";
import Events from "../Events/index.js";
import screens from "../Navigate/index.js";
import Upload from "../Upload/index.js";
import SideBar from "../SideBar/SideBar.js";
import Notify from "../Notification/index.js";
import { DrawerNavigator } from "react-navigation";
import Newsfeed from "../Newsfeed/index.js";

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Events:{ screen: Events },
    Navigate:{ screen: screens },
    Newsfeed:{ screen: Newsfeed },
    'Locate a friend': { screen: MainScreenNavigator },
    'Notifications': { screen: Notify },
    'Gallery' : { screen: Upload },
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
