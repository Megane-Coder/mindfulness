import AppGradient from "@/components/AppGradient";
import React, { useContext } from "react";
import { View, Text, Pressable } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import CustomButton from "@/components/CustomButton";
import { TimerContext } from "@/context/timerContext";

const AdjustMeditationDuration = () => {
  const { setDuration } = useContext(TimerContext);

  const handlePress = (duration: number) => {
    setDuration(duration);
    router.back();
  };

  return (
    <View className="flex-1 relative">
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <Text>Test</Text>
        <Pressable
          onPress={() => router.back()}
          className="absolute top-8 left-6 z-10"
        >
          <AntDesign name="leftcircleo" size={50} color="white" />
        </Pressable>
        <View className="justify-center h-4/5">
          <Text className="text-center font-bold text-3xl text-white mb-8">
            Ajusta la duración de tu sesión de meditación
          </Text>

          <View>
            <CustomButton
              title="1 minuto"
              onPress={() => handlePress(60)}
              containerStyles="mb-5"
            />
            <CustomButton
              title="5 minutos"
              onPress={() => handlePress(5 * 60)}
              containerStyles="mb-5"
            />
            <CustomButton
              title="10 minutos"
              onPress={() => handlePress(10 * 60)}
              containerStyles="mb-5"
            />
            <CustomButton
              title="15 minutos"
              onPress={() => handlePress(15 * 60)}
              containerStyles="mb-5"
            />
            <CustomButton
              title="20 minutos"
              onPress={() => handlePress(20 * 60)}
              containerStyles="mb-5"
            />
          </View>
        </View>
      </AppGradient>
    </View>
  );
};

export default AdjustMeditationDuration;
