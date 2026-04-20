import { router } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native';

export default function HowItWorksRoute() {
  return (
    <View className="flex-1 bg-white items-center justify-center px-8">
      <Text className="text-2xl font-bold mb-4">HOW IT WORKS</Text>
      <TouchableOpacity onPress={() => router.push('/(onboarding)/future-self')}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
