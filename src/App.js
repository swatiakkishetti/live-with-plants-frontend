import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Header from './components/Header/Header'
import NextHeader from './components/Header/NextHeader'
import Slider from './components/Slider/Slider';
import Welcome from './components/Welcome/Welcome';
import SummerPlants from './components/Categories/SummerPlants/SummerPlants';
import WinterPlants from './components/Categories/WinterPlants/WinterPlants';
import IndoorPlants from './components/Categories/IndoorPlants/IndoorPlants';
import Inventory from './components/Inventory/Inventory';
import OutdoorPlants from './components/Categories/OutdoorPlants/OutdoorPlants';
import FloweringPlants from './components/Categories/FloweringPlants/FloweringPlants';
import FruitPlants from './components/Categories/FruitPlants/FruitPlants';
import SummerPlantsScreen from './components/Categories/SummerPlants/SummerPlantsScreen';
import WinterPlantsScreen from './components/Categories/WinterPlants/WinterPlantsScreen';
import IndoorPlantsScreen from './components/Categories/IndoorPlants/IndoorPlantsScreen';
import OutdoorPlantsScreen from './components/Categories/OutdoorPlants/OutdoorPlantsScreen';
import FloweringPlantsScreen from './components/Categories/FloweringPlants/FloweringPlantsScreen';
import FruitPlantsScreen from './components/Categories/FruitPlants/FruitPlantsScreen';

function App() {
  const client = new ApolloClient({
    link: createHttpLink({ uri: "http://localhost:8050/graphql" }),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <div>
          <Header />
          <NextHeader />
          <Slider />
          <Welcome />
          <Routes>
            <Route exact path="/" element={<Inventory />} />
            <Route path="/summer-plants" element={<SummerPlantsScreen />} />
            <Route exact path="/winter-plants" element={<WinterPlantsScreen />} />
            <Route exact path="/indoor-plants" element={<IndoorPlantsScreen />} />
            <Route exact path="/outdoor-plants" element={<OutdoorPlantsScreen />} />
            <Route exact path="/flowering-plants" element={<FloweringPlantsScreen />} />
            <Route exact path="/fruit-plants" element={<FruitPlantsScreen />} />
          </Routes>
          <SummerPlants />
          <WinterPlants />
          <IndoorPlants />
          <OutdoorPlants />
          <FloweringPlants />
          <FruitPlants />
      </div>
    </ApolloProvider>
  );
}

export default App;