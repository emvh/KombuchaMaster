import React from 'react';

export function getBrewDays(value) {
  let days = Number(value.substr(3)) + 1;
  return days;
}