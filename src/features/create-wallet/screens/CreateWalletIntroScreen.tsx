import Button from '@/components/Button/Button';
import ScreenHeader from '@/components/ScreenHeader/ScreenHeader';
import { getIcon } from '@/utils/getIcon';
import { Bell, TrendingUp } from 'lucide-react-native';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PiggyBank from '../../../../assets/pig.svg';


type Props = {
  onBack: () => void;
  onNext: () => void;
  onCancel: () => void;
};

const BENEFITS = [
  { icon: <View>{getIcon('lock', 18, '#22d3ee')}</View>, text: 'Helps you lock away funds securely, conveniently at the click of a button' },
  { icon: <TrendingUp size={18} color="#22d3ee" />, text: 'Track your progress' },
  { icon: <Bell size={18} color="#22d3ee" />, text: 'Built in savings notifications to remind you of your goals and nudge you to save more' },
];

export default function CreateWalletIntroScreen({ onBack, onNext, onCancel }: Props) {
  return (
    <SafeAreaView className="flex-1 bg-gray-100" edges={['top', 'bottom']}>
      <ScreenHeader onBack={onBack} />

      <View className="flex-1 px-6 pt-4">
        <Text className="text-2xl mb-2">
          Create a new VALA wallet that enables you to set new savings goals
        </Text>

        <View className="bg-white rounded-2xl p-6 mt-4 mb-8 pb-10 items-center">
          <Text className="mb-4">
            Create a new wallet and access your money in November or December
          </Text>
          <PiggyBank width={80} height={80} />
        </View>

        <Text className="font-semibold mb-5">Why use VALA?</Text>
        <View className="mb-10 gap-5">
          {BENEFITS.map(({ icon, text }) => (
            <View key={text} className="flex-row items-start gap-3">
              <View className="">{icon}</View>
              <Text className="flex-1 leading-5 text-balance flex-wrap">{text}</Text>
            </View>
          ))}
        </View>

        <View className="flex-row gap-4 ml-auto">
            <Button label="Next" onPress={onNext} className='gap-6' />
            <Button label="Cancel" onPress={onCancel} variant="ghost" showArrow={false} />
        </View>
      </View>
    </SafeAreaView>
  );
}
