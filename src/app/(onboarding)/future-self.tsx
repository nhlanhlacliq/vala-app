import { router } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native';

export default function FutureSelfRoute() {
  return (
    <View className="flex-1 bg-white items-center justify-center px-8">
      <Text className="text-2xl font-bold mb-4">YOUR FUTURE SELF WILL THANK YOU</Text>
      <TouchableOpacity onPress={() => router.replace('/(auth)/sign-up')}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
