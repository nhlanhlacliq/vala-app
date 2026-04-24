import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenHeader from '@/components/ScreenHeader/ScreenHeader';
import ConfirmationView from '@/components/ConfirmationView/ConfirmationView';

type Props = {
  onBack: () => void;
  onComplete: () => void;
  onTransferToWallet: () => void;
};

function CelebrationIcon() {
  return (
    <View className="w-24 h-24 items-center justify-center">
      <Text className="text-6xl">🎉</Text>
    </View>
  );
}

export default function PaymentConfirmationScreen({ onBack, onComplete, onTransferToWallet }: Props) {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top', 'bottom']}>
      <ScreenHeader onBack={onBack} title="Payment Confirmation" />
      <ConfirmationView
        message="Your deposit into your VALA account has been successful!"
        icon={<CelebrationIcon />}
        primaryAction={{ label: 'Complete', onPress: onComplete }}
        secondaryAction={{ label: 'Transfer to VALA wallet', onPress: onTransferToWallet }}
      />
    </SafeAreaView>
  );
}
