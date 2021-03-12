import React, { createContext, useCallback, useEffect, useState } from 'react';
import axios from 'axios';

export const AppContext = createContext(null);

export const AppContextProvider = (props) => {

  const [brewList, setBrewList] = useState(null);
  const [brew, updateBrew] = useState(null);

  useEffect(() => {
    getData();
  }, [brewList])

  const getData = () => {
    axios({
      url: 'http://127.0.0.1:3000/api/brews',
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => setBrewList(response.data))
      .catch(error => console.log(error));
  };

  const updateList = () => {
    console.log('updated list of brews...');
    getData();
  }

  return (
    <AppContext.Provider value={{ brewList, setBrewList, updateList }}>
      {props.children}
    </AppContext.Provider>
  );
};




