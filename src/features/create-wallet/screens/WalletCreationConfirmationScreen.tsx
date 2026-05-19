import ConfirmationView from '@/components/ConfirmationView/ConfirmationView';
import ScreenHeader from '@/components/ScreenHeader/ScreenHeader';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Wallet from '../../../../assets/wallet.svg';

type Props = {
  onBack: () => void;
  onFundWallet: () => void;
  onCancel: () => void;
};


export default function WalletCreationConfirmationScreen({ onBack, onFundWallet, onCancel }: Props) {
  return (
    <SafeAreaView className="flex-1 bg-gray-100" edges={['top', 'bottom']}>
      <ScreenHeader onBack={onBack} />

      <View className='flex-1 px-6 pt-2'>
        <Text className="text-2xl mb-8">
          Wallet Creation Confirmation
        </Text>
        <ConfirmationView
          message="Your VALA Wallet has been created!"
          icon={<Wallet />}
          primaryAction={{ label: 'Fund wallet', onPress: onFundWallet }}
          secondaryAction={{ label: 'Cancel', onPress: onCancel }}
        />
      </View>
    </SafeAreaView>
  );
}
