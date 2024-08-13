import AppGradient from "@/components/AppGradient";
import GuidedAffirmationsGallery from "@/components/GuidedAffirmationsGallery";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery";
import React from "react";
import { View, Text, ScrollView } from "react-native";

const Affirmations = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#2e1f58", "#54426b", "#a790af"]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text className="text-zinc-50 text-3xl font-bold">
            Cambia tus creencias con afirmaciones
          </Text>
          <View>
            {AFFIRMATION_GALLERY.map((g) => (
              <GuidedAffirmationsGallery
                key={g.title}
                title={g.title}
                products={g.data}
              />
            ))}
          </View>
        </ScrollView>
      </AppGradient>
    </View>
  );
};

export default Affirmations;
