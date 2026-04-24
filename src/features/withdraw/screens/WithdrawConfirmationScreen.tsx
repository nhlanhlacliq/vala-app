import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenHeader from '@/components/ScreenHeader/ScreenHeader';
import ConfirmationView from '@/components/ConfirmationView/ConfirmationView';

type Props = {
  onBack: () => void;
  onComplete: () => void;
  onCancel: () => void;
};

function WalletIcon() {
  return (
    <View className="w-24 h-24 items-center justify-center bg-cyan-50 rounded-full">
      <Text className="text-5xl">👜</Text>
    </View>
  );
}

export default function WithdrawConfirmationScreen({ onBack, onComplete, onCancel }: Props) {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top', 'bottom']}>
      <ScreenHeader onBack={onBack} title="Wallet Creation Confirmation" />
      <ConfirmationView
        message="Your funds have been successfully sent to your chosen account"
        icon={<WalletIcon />}
        primaryAction={{ label: 'Complete', onPress: onComplete }}
        secondaryAction={{ label: 'Cancel', onPress: onCancel }}
      />
    </SafeAreaView>
  );
}
