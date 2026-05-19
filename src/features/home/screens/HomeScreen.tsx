import Button from '@/components/Button/Button';
import ValaLogo from '@/components/ValaLogo/ValaLogo';
import { getIcon } from '@/utils/getIcon';
import { Bell, Eye, EyeOff, X } from 'lucide-react-native';
import { useState } from 'react';
import { ActivityIndicator, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SavingsCard from '../components/SavingsCard';
import WalletListItem, { type Wallet } from '../components/WalletListItem';

const MOCK_NOTIFICATIONS = ['Withdrawing facilities now available!'];

type Props = {
  userName?: string;
  accountNumber?: string;
  wallets: Wallet[];
  isLoading?: boolean;
  onWalletPress: (wallet: Wallet) => void;
  onAddWallet: () => void;
};

export default function HomeScreen({
  userName = 'John',
  accountNumber,
  wallets,
  isLoading = false,
  onWalletPress,
  onAddWallet,
}: Props) {
  const [walletsHidden, setWalletsHidden] = useState(false);
  const [notifications, setNotifications] = useState(MOCK_NOTIFICATIONS);

  const hasWallets = wallets.length > 0;
  const hasNotifications = notifications.length > 0;
  const savingsTotal = wallets.reduce((sum, w) => sum + w.balance, 0);

  const dismissNotification = (index: number) =>
    setNotifications(n => n.filter((_, i) => i !== index));

  return (
    <SafeAreaView className="flex-1 bg-gray-100" edges={['top']}>
      <ScrollView
        className="flex-1"
        contentContainerClassName="px-5 pb-32 pt-8"
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View className="items-center py-4 mb-4">
          <ValaLogo size="xs" />
        </View>

        <View className="flex-row items-center justify-between mb-5">
          <Text className="text-lg font-semibold text-gray-900">Welcome, {userName}</Text>
          <View>
            <TouchableOpacity hitSlop={8}>
              <Bell size={22} className={hasNotifications ? "text-red-500" : "text-gray-500"} />
            </TouchableOpacity>
            {hasNotifications && (
              <View className="absolute -top-0 right-0.5 w-2.5 h-2.5 rounded-full bg-red-500 border border-white" />
            )}
          </View>
        </View>

        {/* Notification banners */}
        {notifications.map((message, index) => (
          <ImageBackground
            key={index}
            source={require('../../../../assets/Mask group.png')}
            className="rounded-lg mb-4 overflow-hidden"
            style={{ backgroundColor: '#22d3ee' }}
            imageStyle={{ position: 'absolute', left: 11, right: 0, top: 0, width: 365, height: 77, opacity: 0.9 }}
            resizeMode="cover"
          >
            <View className="flex-row items-center justify-between px-4 py-8">
              <Text className="text-white font-semibold flex-1 tracking-[0.75px]">{message}</Text>
              <TouchableOpacity onPress={() => dismissNotification(index)} hitSlop={8} className="ml-3">
                <X size={16} color="#fff" />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        ))}

        <SavingsCard total={savingsTotal} accountNumber={accountNumber} />

        {/* My Wallets */}
        <View className="flex-row items-center justify-between mb-4">
          <Text className="text-[22px] leading-[28px]">My Wallets</Text>
          <TouchableOpacity onPress={() => setWalletsHidden(h => !h)} hitSlop={8}>
            {walletsHidden ? <Eye size={18} color="#9CA3AF" /> : <EyeOff size={18} color="#9CA3AF" />}
          </TouchableOpacity>
        </View>

        {isLoading ? (
          <ActivityIndicator color="#22d3ee" className="my-6" />
        ) : !walletsHidden && (
          hasWallets ? (
            <View>
              {wallets.map(wallet => (
                <WalletListItem key={wallet.id} wallet={wallet} onPress={onWalletPress} />
              ))}
            </View>
          ) : (
            <View className="flex-row gap-4 bg-white rounded-2xl border border-gray-200 px-5 py-8 mb-4">
              <View className='opacity-60'>
                {getIcon("wallet")}
              </View>
              <Text className="opacity-60 leading-6">
                Wallets are a way to categorise your savings. Create a new wallet and start saving.
              </Text>
            </View>
          )
        )}

        <View className="mt-4 ml-auto">
          <Button label="Add a wallet" onPress={onAddWallet} fullWidth={false} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
