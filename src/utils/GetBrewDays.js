import React from 'react';

export function getBrewDays(value) {
  switch(value) {
    case 'key0':
      return 1;
    case 'key1':
      return 2;
    case 'key2':
      return 3;
    case 'key3':
      return 4;
  }
}