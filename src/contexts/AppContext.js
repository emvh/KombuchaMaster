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
            return setBrewList(response.data);
          } else {
            setSelectedBrew(response.data);
          }
        })
        .catch(error => console.log(error));
  };

  const postData = (formResponse) => {
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

  const updateData = (formResponse) => {
    axios({
      url: 'http://127.0.0.1:3000/api/brews',
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: formResponse,
    })
      .then(() => {
        getData();
        setSelectedBrew(formResponse);
      })
      .catch(error => console.log(error));
  }

  return (
    <AppContext.Provider value={{ brewList, selectedBrew, getData, postData, updateData }}>
      {props.children}
    </AppContext.Provider>
  );
};




