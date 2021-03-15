import React, { createContext, useCallback, useEffect, useState } from 'react';
import axios from 'axios';

export const AppContext = createContext(null);

export const AppContextProvider = (props) => {

  const [brewList, setBrewList] = useState(null);
  const [selectedBrew, setSelectedBrew] = useState(null);

  useEffect(() => {
    getData();
  }, [])

  const getData = (selectedBrewId) => {
      axios({
        url: 'http://127.0.0.1:3000/api/brews',
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        params: { _id: selectedBrewId }
      })
        .then((response) => {
          if (Array.isArray(response.data)) {
            setBrewList(response.data);
            console.log('array brew list', brewList);
          } else {
            setSelectedBrew(response.data);
            console.log('obj selected brew', selectedBrew);
          }
        })
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
    <AppContext.Provider value={{ brewList, getData, postData, selectedBrew }}>
      {props.children}
    </AppContext.Provider>
  );
};




