import SQLite from 'react-native-sqlite-storage';

const db=SQLite.openDatabase({name : 'MyData.db',location : 'default'});


const createTab = () => {
    db.transaction((tx) => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, usermail Text, password Text)',
            [],
            (_, results) => {
                console.log('Table Created Sucess');
            },
            (_, error) => {
                console.log('Error Create Table', error);
            }
        );
    });
};


const insertUser = (username, usermail, password, onSuccess, onError) => {
    db.transaction((tx) =>{
        tx.executeSql(
            'INSERT INTO users (username,usermail,password) VALUES(?, ?, ?)',
            [username, usermail, password],
            (_, results) => {
                onSuccess(results);
            },
            (_, error) => {
                onError(error);
            }
        );
    });
};


const getUser = (username, password, onSuccess, onError) => {
    db.transaction((tx) => {
        tx.executeSql(
            'SELECT * FROM users WHERE username = ? AND password = ?',
            [username, password],
            (_, results) => {
                onSuccess(results);
            },
            (_, error) => {
                onError(error);
            }
        );
    });
};


export {createTab, insertUser, getUser};