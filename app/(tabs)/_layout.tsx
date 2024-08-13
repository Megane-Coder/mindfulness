import Colors from "@/constants/Colors";
import { Tabs } from "expo-router";
import React from "react";
import { View, Text } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
// Define la función de React Native
const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
      }}
    >
      <Tabs.Screen
        name="nature-meditate"
        options={{
          tabBarLabel: "Meditación",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="flower-tulip"
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="affirmations"
        options={{
          tabBarLabel: "Afirmaciones",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-open" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

// Exporta la función
export default TabsLayout;
