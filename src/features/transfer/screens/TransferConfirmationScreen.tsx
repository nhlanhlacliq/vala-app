import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenHeader from '@/components/ScreenHeader/ScreenHeader';
import ConfirmationView from '@/components/ConfirmationView/ConfirmationView';

type Props = {
  onBack: () => void;
  onComplete: () => void;
};

function CelebrationIcon() {
  return (
    <View className="w-24 h-24 items-center justify-center">
      <Text className="text-6xl">🎉</Text>
    </View>
  );
}

export default function TransferConfirmationScreen({ onBack, onComplete }: Props) {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top', 'bottom']}>
      <ScreenHeader onBack={onBack} title="Transfer Confirmation" />
      <ConfirmationView
        message="Your VALA Wallet transfer has been successful!"
        icon={<CelebrationIcon />}
        primaryAction={{ label: 'Complete', onPress: onComplete }}
      />
    </SafeAreaView>
  );
}
