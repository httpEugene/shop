

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

