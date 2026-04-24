import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Lock, TrendingUp, Bell } from 'lucide-react-native';
import ScreenHeader from '@/components/ScreenHeader/ScreenHeader';
import Button from '@/components/Button/Button';

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
          <Text className="text-6xl">🐷</Text>
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
