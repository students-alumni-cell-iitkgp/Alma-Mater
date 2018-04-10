# Alma-Mater

This is the cross-platform Android/IOS app created to used during AAM. 

![screenshot_2018_04_1_mupvf](https://user-images.githubusercontent.com/20748662/38539311-3a9235e0-3cb5-11e8-9048-d9253e9981e9.jpg)
![screenshot_2018_04_1_xhocd](https://user-images.githubusercontent.com/20748662/38539312-3ae50928-3cb5-11e8-847a-bde6f1b6e013.jpg)


## Getting Started

Follow the getting started instruction to setup CRNA project from [React-Native Website](https://facebook.github.io/react-native/docs/getting-started.html) 

Set up [Expo project](https://docs.expo.io/versions/v26.0.0/) 
 
Optional: Get gist of the scripts from [here](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md)

### Setting up and running

```
git clone https://github.com/students-alumni-cell-iitkgp/Alma-Mater.git
cd Alma-Mater
npm install
npm start
```
Install [EXPO](https://play.google.com/store/apps/details?id=host.exp.exponent) on your android/ios device
See url/QR code in console and paste it in Emulator/Device 



## Features

* **Navigate** - Interactive Map Interface with Event Carousel centered at Current ongoing event.

![screenshot_2018_04_1_qyq4g](https://user-images.githubusercontent.com/20748662/38538143-0c2544c2-3cb0-11e8-8e5e-5c3c95c68f94.jpg)
![screenshot_2018_04_1_ufydk](https://user-images.githubusercontent.com/20748662/38538147-10cc768a-3cb0-11e8-8576-8c443709d727.jpg)

>>to do
>>* add google navigate api to show direction from current location
>>* center position the ongong event from curent time
>>* add all event and description 

* **Gallery** - Place where everyone can share/download pictures of the meet. Upload directly using camera or selecting from your phone/drive/cloud

![screenshot_2018_04_1_5kdm3](https://user-images.githubusercontent.com/20748662/38538307-ce8c0eba-3cb0-11e8-8683-ad33bf761a3d.jpg)
![screenshot_2018_04_1_z2xie](https://user-images.githubusercontent.com/20748662/38538308-cee69c86-3cb0-11e8-87ec-f2d981413224.jpg)

>>to do
>>* authenticate user and create personal gallery for their upload  (add delete button for their uploads)
>>* download/share button

* **Notification** - Notification for events and notice. Badges, Floating, Lockscreen Notification.

![screenshot_2018_04_0_j7qdq](https://user-images.githubusercontent.com/20748662/38538728-bb257832-3cb2-11e8-80a5-c71053fcd59b.jpg)
![screenshot_2018_04_0_rnu9w](https://user-images.githubusercontent.com/20748662/38538730-bb7a95d8-3cb2-11e8-81a1-e64aedde6fdb.jpg)
![screenshot_2018_04_0_gkvi5](https://user-images.githubusercontent.com/20748662/38538727-baf75d8a-3cb2-11e8-9c0b-92d9d162ce46.jpg)
![screenshot_2018_04_1_rc70a](https://user-images.githubusercontent.com/20748662/38538783-f1423c66-3cb2-11e8-977e-4174cf4b512a.jpg)


>>to do
>>* Currently using expo push notification service to be transfered to [onesignal](https://documentation.onesignal.com/docs) for better interface

* **Locate a friend** - Shows your location and your friends location on map.

![screenshot_2018_04_1_rcfw2](https://user-images.githubusercontent.com/20748662/38538964-b164e05c-3cb3-11e8-97dd-43d9d6d60387.jpg)

>>to do
>>* waiting for next expo sdk release to retrieve location data in background
>>* to be combined with navigate

* **Events** - List of Events planned for AAM.

![screenshot_2018_04_1_ctlmv](https://user-images.githubusercontent.com/20748662/38539195-b4e31784-3cb4-11e8-8578-f820259817bb.jpg)

>>to do
>>* add all event and description

* **NewsFeed** - Recent updates about varous events and news in campus.

![screenshot_2018_04_1_xpwp5](https://user-images.githubusercontent.com/20748662/38539272-0dfddc0a-3cb5-11e8-84c0-9b3e65df1303.jpg)

>>to do
>>* Change interface/styling

## Fearures to Add/Suggestion

* **Login/Authentication** - To use firebase features **important**
* **User Details** - provide accomodation details and general info here. Also add screen if some alumni require water bottle/blanket/towels etc.
* **Interface for cab booking** - update sheets of transport portfolio. Maybe needed in future for 1000+ alumni 

## Authors

* **Yugam** - *Proposed and Developed 2017-2018* - [yugam1](https://github.com/yugam1)
* **Other Contributers** - [list](https://github.com/students-alumni-cell-iitkgp/Alma-Mater/graphs/contributors)
