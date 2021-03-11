import React, { createContext, useCallback, useEffect, useState } from 'react';
import axios from 'axios';

export const AppContext = createContext(null);

export const AppContextProvider = (props) => {

  const [brewList, setBrewList] = useState(null);

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

  return (
    <AppContext.Provider value={{ brewList, setBrewList }}>
      {props.children}
    </AppContext.Provider>
  );
};

export const useBrewList = () => {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error('must be used within provider')
  }
  return context;
 };




