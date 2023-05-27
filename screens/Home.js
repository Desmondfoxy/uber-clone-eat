import { View, Text, SafeAreaView, ScrollView } from "react-native";
// import { Divider } from "react-native-elements";
import React, { useEffect, useState } from "react";
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import RestaurantItems from "../components/home/RestaurantItems";
import { localRestaurants } from "../LocalData";
import BottomTabs from "../components/home/BottomTabs";

const myLocalRestaurants = [
  {
    id: 1,
    name: "Beachside Bar",
    image_url:
      "https://cache.marriott.com/content/dam/marriott-renditions/XMNSI/xmnsi-prince-restaurant-6803-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
    mins: "30-45 • min",
  },
  {
    id: 2,
    name: "Benihana",
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhp-GpVJ0gW9-7NfLdzUOqN0NvA-xjXJ87zw&usqp=CAU",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
    mins: "15-25 • min",
  },
  {
    id: 3,
    name: "India's Grill",
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhp-GpVJ0gW9-7NfLdzUOqN0NvA-xjXJ87zw&usqp=CAU",
    categories: ["India", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
    mins: "20-30 • min",
  },
];

const YELP_API_KEY = "YOUR YELP API KEY";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("San Francisco");
  // console.log(city);
  const [activeTab, setActiveTab] = useState("Delivery");

  const getDatafromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    // console.log(yelpUrl);
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => setRestaurantData(json.businesses.filter((business) => business.transactions.includes(activeTab.toLocaleLowerCase()))));
  };

  useEffect(() => {
    getDatafromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar setCity={setCity} city={city} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} navigation={navigation} />
      </ScrollView>
      {/* <Divider width={1} /> */}
      <BottomTabs />
    </SafeAreaView>
  );
}
