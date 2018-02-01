

## Install Java ##

Don't rely on Oracle to install Java properly on your Mac !

Use Homebrew:

brew update

brew cask install java


If you want to manage multiple versions of Java on your Mac, consider using jenv.
UPDATE: Now that Java 8 is no longer the most current version, we need to install it this way:


brew tap caskroom/versions
brew cask install java8


To get a list of all older versions of java: brew cask search java



## if SDK location not found: Add SDK location: ##

android/local.properties

sdk.dir = /Users/USER/Library/Android/sdk

## How to reload in the default Android emulator for react native app ##

For android one can use CTRL +R For apple one can use R+R(two times R).

For developers options : One can also use the Command⌘ + D keyboard shortcut when your app is running in the iPhone Simulator, or Command⌘ + M when running in an Android emulator.


## Release ##:
http://facebook.github.io/react-native/docs/signed-apk-android.html

Generating the release APK
Simply run the following in a terminal:

$ cd android && ./gradlew assembleRelease

Generate key
 keytool -genkey -v -keystore mafia.keystore -alias mafia_main -keyalg RSA -keysize 2048 -validity 10000
 
 ## We use React Native Elements UI Toolkit for UI ##
 
 * Take a look documentation:
 
 * https://react-native-training.github.io/react-native-elements/
 
 ## We use react-native-indicators for Spinner ##
 
 * Take a look documentation:
 
 * https://github.com/n4kz/react-native-indicators
 
 ## We use React Native Debugger ##
 
 * Take a look documentation:
 
 * https://github.com/jhen0409/react-native-debugger/blob/master/docs/getting-started.md
 
 ## We use ESLint autofix and Prettier for better code ##
 
 * Take a look documentation:
 
 * https://blog.jetbrains.com/webstorm/2016/08/using-external-tools/

 * https://medium.com/@jm90mm/adding-prettier-to-webstorm-a218eeec04d2

