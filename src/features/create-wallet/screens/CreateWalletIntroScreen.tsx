import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Lock, TrendingUp, Bell } from 'lucide-react-native';
import Svg, { Path, Circle, Ellipse } from 'react-native-svg';
import ScreenHeader from '@/components/ScreenHeader/ScreenHeader';
import Button from '@/components/Button/Button';

function PiggyBankIllustration() {
  return (
    <Svg width={80} height={80} viewBox="0 0 80 80" fill="none">
      {/* Body */}
      <Ellipse cx="38" cy="46" rx="26" ry="22" stroke="#22d3ee" strokeWidth="2.5" fill="none" />
      {/* Head */}
      <Circle cx="62" cy="34" r="12" stroke="#22d3ee" strokeWidth="2.5" fill="none" />
      {/* Snout */}
      <Ellipse cx="67" cy="38" rx="5" ry="3.5" stroke="#22d3ee" strokeWidth="2" fill="none" />
      <Circle cx="65.5" cy="38" r="1" fill="#22d3ee" />
      <Circle cx="68.5" cy="38" r="1" fill="#22d3ee" />
      {/* Eye */}
      <Circle cx="59" cy="30" r="1.5" fill="#22d3ee" />
      {/* Ear */}
      <Path d="M56 24 Q54 18 60 20 Q62 24 58 26 Z" stroke="#22d3ee" strokeWidth="2" fill="none" />
      {/* Coin slot */}
      <Path d="M34 24 Q38 22 42 24" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round" />
      {/* Legs */}
      <Path d="M22 64 L20 72" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round" />
      <Path d="M30 67 L29 75" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round" />
      <Path d="M46 67 L47 75" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round" />
      <Path d="M54 64 L56 72" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round" />
      {/* Tail */}
      <Path d="M12 42 Q6 38 10 32 Q14 26 12 22" stroke="#22d3ee" strokeWidth="2" fill="none" strokeLinecap="round" />
    </Svg>
  );
}

type Props = {
  onBack: () => void;
  onNext: () => void;
  onCancel: () => void;
};

const BENEFITS = [
  { icon: <Lock size={18} color="#22d3ee" />, text: 'Helps you lock away funds securely, conveniently at the click of a button' },
  { icon: <TrendingUp size={18} color="#22d3ee" />, text: 'Track your progress' },
  { icon: <Bell size={18} color="#22d3ee" />, text: 'Built in savings notifications to remind you of your goals and nudge you to save more' },
];

export default function CreateWalletIntroScreen({ onBack, onNext, onCancel }: Props) {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top', 'bottom']}>
      <ScreenHeader onBack={onBack} />

      <View className="flex-1 px-6 pt-4">
        <Text className="text-2xl font-bold text-gray-900 mb-2">
          Create a new VALA wallet that enables you to set new savings goals
        </Text>

        <View className="bg-gray-50 rounded-2xl px-5 py-6 mt-4 mb-6 items-center">
          <Text className="text-gray-500 text-sm text-center mb-4">
            Create a new wallet and access your money in November or December
          </Text>
          <PiggyBankIllustration />
        </View>

        <Text className="text-gray-900 font-semibold mb-4">Why use VALA?</Text>
        <View className="gap-4 mb-10">
          {BENEFITS.map(({ icon, text }) => (
            <View key={text} className="flex-row items-start gap-3">
              <View className="mt-0.5">{icon}</View>
              <Text className="text-gray-600 text-sm flex-1 leading-5">{text}</Text>
            </View>
          ))}
        </View>

        <View className="flex-row gap-4">
          <View className="flex-1">
            <Button label="Next" onPress={onNext} />
          </View>
          <View className="flex-1">
            <Button label="Cancel" onPress={onCancel} variant="ghost" showArrow={false} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
