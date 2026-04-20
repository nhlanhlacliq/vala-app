import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {
  onGetStarted: () => void;
};

export default function SplashScreen({ onGetStarted }: Props) {
  return (
    <View className="flex-1 bg-cyan-400">
      <StatusBar barStyle="light-content" backgroundColor="#22d3ee" />
      <SafeAreaView className="flex-1 justify-between px-8 pb-10">

        {/* Logo */}
        <View className="flex-1 items-center justify-center gap-3">
          <ValaLogo />
          <Text className="text-white text-xs tracking-[4px] font-medium mt-1">
            PLAN BETTER, LIVE BETTER
          </Text>
        </View>

        {/* Get Started button */}
        <TouchableOpacity
          onPress={onGetStarted}
          className="bg-white rounded-full flex-row items-center justify-between px-6 py-4"
          activeOpacity={0.85}
        >
          <Text className="text-gray-900 text-base font-semibold">Get started</Text>
          <Text className="text-gray-900 text-base font-semibold">→</Text>
        </TouchableOpacity>

      </SafeAreaView>
    </View>
  );
}

function ValaLogo() {
  return (
    <View className="items-center gap-2">
      {/* Star / asterisk mark */}
      <View className="w-14 h-14 items-center justify-center">
        <Text className="text-white text-5xl font-thin">✳</Text>
      </View>
      <Text className="text-white text-5xl font-bold tracking-widest">VALA</Text>
    </View>
  );
}
