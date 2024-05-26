import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View, StyleSheet, Image, ScrollView } from "react-native";

export default function ScreenHome() {
  const navigation = useNavigation()

  const handleNavigationToScreen = (screenName) => {
    navigation.navigate(screenName);
  }

  return(
    <ScrollView style={styles.container}>
        <View style={styles.screenBlock}>
            <Text style={styles.title}>Разделы:</Text>
              
      <TouchableOpacity style={styles.button} onPress = {() => handleNavigationToScreen('Новости')}>
        <Text style={styles.buttonText}>Новости</Text> 
        <Image
          source={require('../../assets/news.jpg')}
          style={styles.image}
        ></Image>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress = {() => handleNavigationToScreen('Погода')}>
        <Text style={styles.buttonText}>Погода</Text>
        <Image
          source={require('../../assets/weather.jpg')}
          style={styles.image}
        ></Image>
      </TouchableOpacity>
</View>

      <InfoBlock title="Информация о приложении:" text="Это приложение предоставляет актуальные новости и прогноз погоды." />
      <InfoBlock title="Контакты:" text="Если у вас есть вопросы или предложения, свяжитесь с нами по адресу IThub@mail.com" />
      <InfoBlock title="Поддержка" text="Если у вас возникли проблемы, свяжитесь с нами по адресу IThub@mail.com" />
    </ScrollView>
  );
};

const InfoBlock = ({title, text}) => (
  <View style={styles.infoBlock}>
    <Text style={styles.infoTitle}>{title}</Text>
    <Text>{text}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  screenBlock:{
    display:"flex",
    alignItems: 'center',
    justifyContent: 'center',
    width: "400px"
  },
  button: {
    display:"flex",
    alignItems: 'center',
    justifyContent: 'center',
    width: "90%",
    gap: 10,
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#1E90FF',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
  },
  image: {
    width: "90%", 
    height: 200, 
    borderRadius: 10, 
  },
  infoBlock: {
    width: "400px",
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
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  title: {

    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
