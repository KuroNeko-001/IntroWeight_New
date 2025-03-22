import React from 'react';
import { useState } from 'react';
import HomeScreen from './Screen/HomeScreen';
import GenderScreen from './Screen/GenderScreen';
import AgeScreen from './Screen/Age';
import BirthdayScreen from './Screen/BirthdayScreen';
import Home from './home';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Home');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Home':
        return <HomeScreen navigate={setCurrentScreen} />;
      case 'Gender':
        return <GenderScreen navigate={setCurrentScreen} />;
      case 'Age':
        return <AgeScreen navigate={setCurrentScreen} />;
      case 'Birthday':
        return <BirthdayScreen navigate={setCurrentScreen} />;
      default:
        
        return <Home navigate={setCurrentScreen} />;
    }
  };

  return (
    <>
      {renderScreen()}
    </>
  );
}