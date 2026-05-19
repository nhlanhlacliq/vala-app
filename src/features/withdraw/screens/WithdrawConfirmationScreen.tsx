import ConfirmationView from '@/components/ConfirmationView/ConfirmationView';
import ScreenHeader from '@/components/ScreenHeader/ScreenHeader';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Wallet from '../../../../assets/wallet.svg';

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
    <SafeAreaView className="flex-1 bg-gray-100" edges={['top', 'bottom']}>
      <ScreenHeader onBack={onBack} />

      <View className='flex-1 px-6 pt-2'>
        <Text className="text-2xl mb-8">
          Wallet Creation Confirmation
        </Text>
        <ConfirmationView
          message="Your funds have been successfully sent to your chosen account"
          icon={<Wallet />}
          primaryAction={{ label: 'Complete', onPress: onComplete }}
          secondaryAction={{ label: 'Cancel', onPress: onCancel }}
        />
      </View>
    </SafeAreaView>
  );
}
