import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const fetchData = async (setWeatherData, setLocationData) => {
    const url = 'https://yahoo-weather5.p.rapidapi.com/weather?location=Rostov&format=json&u=c';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '9eae4b9b12msh6456b54b4a34685p1cbffajsna2bed76af12c',
            'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        setWeatherData(result.current_observation); 
        setLocationData(result.location); 
    } catch (error) {
        console.error(error);
    }
};

export default function ScreenWeather() {
  const [weatherData, setWeatherData] = useState(null);
  const [locationData, setLocationData] = useState(null);

  useEffect(() => {
    fetchData(setWeatherData, setLocationData);
  }, []);

  return (
    <View style={styles.container}>
      {weatherData && locationData ? ( 
        <>
          <View style={styles.section}>
            <Text style={styles.title}>Местоположение:</Text>
            <Text>Город: {locationData.city}</Text> 
            <Text>Страна: {locationData.country}</Text> 
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>Погода:</Text>
            <Text>Температура: {weatherData.condition.temperature}°C</Text> 
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>Ветер:</Text>
            <Text>Скорость: {weatherData.wind.speed} км/ч</Text> 
            <Text>Температура: {weatherData.wind.chill}°C</Text> 
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>Атмосфера:</Text>
            <Text>Влажность: {weatherData.atmosphere.humidity}%</Text> 
            <Text>Видимость: {weatherData.atmosphere.visibility} км</Text> 
            <Text>Давление: {weatherData.atmosphere.pressure} мм рт. ст.</Text> 
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>Астрономия:</Text>
            <Text>Восход: {weatherData.astronomy.sunrise}</Text>
            <Text>Закат: {weatherData.astronomy.sunset}</Text>
          </View>
        </>
      ) : (
        <Text>Загрузка данных о погоде...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 20,
    backgroundColor: '#F5F5F5',
  },
  section: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
