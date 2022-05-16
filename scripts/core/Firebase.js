import React, {Component} from 'react';
import { View } from 'react-native';

import db from './config';

export default class Firestore_Class{
    constructor(){
        this.db = db;
    }
    a(){
        console.log("Testing");
    }
}