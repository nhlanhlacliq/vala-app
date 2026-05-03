import { Image, Text, View } from 'react-native';

const logoMark = require('../../../assets/vala-logo.png');
const logoWord = require('../../../assets/vala-word.png');

type Props = {
  size?: 'xs' | 'sm' | 'lg';
};

const SIZES = {
  xs: { mark: 36, wordWidth: 60, wordHeight: 15, tagWidth: 80 },
  sm: { mark: 36, wordWidth: 90, wordHeight: 22, tagWidth: 120 },
  lg: { mark: 72, wordWidth: 180, wordHeight: 44, tagWidth: 240 },
};

export default function ValaLogo({ size = 'lg' }: Props) {
  const { mark, wordWidth, wordHeight, tagWidth } = SIZES[size];

  return (
    <View className="flex-row items-center gap-2">
      <Image source={logoMark} style={{ width: mark, height: mark, tintColor: '#22d3ee' }} resizeMode="contain" />
      <View className="gap-0.5">
        <Image source={logoWord} style={{ width: wordWidth, height: wordHeight, tintColor: '#111827' }} resizeMode="contain" />
        <Text className="font-medium text-gray-500" style={{ width: wordWidth, fontSize: wordWidth * 0.07 }}>
          PLAN BETTER, LIVE BETTER
        </Text>
      </View>
    </View>

  );
}
