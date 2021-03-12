import React, { createContext, useCallback, useEffect, useState } from 'react';
import axios from 'axios';

export const AppContext = createContext(null);

export const AppContextProvider = (props) => {

  const [brewList, setBrewList] = useState(null);
  const [brew, updateBrew] = useState(null);

  useEffect(() => {
    getData();
  }, [])

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

  const postData = (formResponse) => {
    console.log('updated list of brews...');
    axios({
      url: 'http://127.0.0.1:3000/api/brews',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: formResponse,
    })
      .then(() => getData())
      .catch(error => console.log(error))
  }

  return (
    <AppContext.Provider value={{ brewList, setBrewList, postData }}>
      {props.children}
    </AppContext.Provider>
  );
};




