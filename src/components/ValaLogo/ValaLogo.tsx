import { View, Text } from 'react-native';

type Props = {
  size?: 'sm' | 'lg';
  color?: 'white' | 'cyan';
};

export default function ValaLogo({ size = 'lg', color = 'white' }: Props) {
  const isSmall = size === 'sm';
  const isCyan = color === 'cyan';

  const textColor = isCyan ? 'text-cyan-400' : 'text-white';
  const symbolSize = isSmall ? 'text-2xl' : 'text-5xl';
  const wordSize = isSmall ? 'text-xl' : 'text-5xl';

  return (
    <View className="flex-row items-center gap-1">
      <Text className={`${textColor} ${symbolSize} font-thin`}>✳</Text>
      <Text className={`${textColor} ${wordSize} font-bold tracking-widest`}>VALA</Text>
    </View>
  );
}
