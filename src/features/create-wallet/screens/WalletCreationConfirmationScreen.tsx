import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenHeader from '@/components/ScreenHeader/ScreenHeader';
import ConfirmationView from '@/components/ConfirmationView/ConfirmationView';

type Props = {
  onBack: () => void;
  onFundWallet: () => void;
  onCancel: () => void;
};

function WalletIcon() {
  return (
    <View className="w-24 h-24 items-center justify-center bg-cyan-50 rounded-full">
      <Text className="text-5xl">👜</Text>
    </View>
  );
}

export default function WalletCreationConfirmationScreen({ onBack, onFundWallet, onCancel }: Props) {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top', 'bottom']}>
      <ScreenHeader onBack={onBack} title="Wallet Creation Confirmation" />
      <ConfirmationView
        message="Your VALA Wallet has been created!"
        icon={<WalletIcon />}
        primaryAction={{ label: 'Fund wallet', onPress: onFundWallet }}
        secondaryAction={{ label: 'Cancel', onPress: onCancel }}
      />
    </SafeAreaView>
  );
}
