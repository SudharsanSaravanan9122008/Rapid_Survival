import * as Font from 'expo-font';

export default async function loadFonts (object){
    await Font.loadAsync(object);
}