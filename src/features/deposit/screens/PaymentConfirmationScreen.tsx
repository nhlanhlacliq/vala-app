import ConfirmationView from '@/components/ConfirmationView/ConfirmationView';
import ScreenHeader from '@/components/ScreenHeader/ScreenHeader';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Confirmation from '../../../../assets/Confirmation.svg';


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
    <SafeAreaView className="flex-1 bg-gray-100" edges={['top', 'bottom']}>
      <ScreenHeader onBack={onBack} />

      <View className='flex-1 px-6 pt-2'>
        <Text className="text-2xl mb-8">
          Payment Confirmation
        </Text>
        <ConfirmationView
          message="Your deposit into your VALA account has been successful!"
          icon={<Confirmation />}
          primaryAction={{ label: 'Complete', onPress: onComplete }}
          secondaryAction={{ label: 'Transfer to VALA wallet', onPress: onTransferToWallet }}
          />
      </View>
    </SafeAreaView>
  );
}
