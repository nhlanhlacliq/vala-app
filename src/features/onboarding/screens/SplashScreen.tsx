import { View, Text, Image, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '@/components/Button/Button';

const clipPath = require('../../../../assets/Clip path group.png');
const logoMark = require('../../../../assets/vala-logo.png');
const logoWord = require('../../../../assets/vala-word.png');

type Props = {
  readonly onGetStarted: () => void;
};

export default function SplashScreen({ onGetStarted }: Props) {
  return (
    <View className="flex-1 bg-cyan-400">
      <StatusBar barStyle="light-content" backgroundColor="#22d3ee" />

      {/* Decorative background overlay */}
      <Image
        source={clipPath}
        style={{ position: 'absolute', width: '100%', height: '100%' }}
        resizeMode="cover"
      />

      <SafeAreaView className="flex-1 justify-between px-8 pb-10">
        <View className="flex-1 flex-row items-center justify-center gap-4">
          <Image source={logoMark} style={{ width: 91, height: 91 }} resizeMode="contain" />
          <View className="flex items-start gap-1.5">
            <Image source={logoWord} style={{ width: 180, height: 44 }} resizeMode="contain" />
            <Text className="mt-1 text-xs font-medium tracking-[2px] text-white">
              PLAN BETTER, LIVE BETTER
            </Text>
          </View>
        </View>

        <View className="ml-auto">
          <Button label="Get started" onPress={onGetStarted} variant="outline" fullWidth={false} />
        </View>
      </SafeAreaView>
    </View>
  );
}
