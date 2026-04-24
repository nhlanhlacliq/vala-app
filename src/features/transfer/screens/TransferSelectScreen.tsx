import { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Wallet, ChevronRight } from 'lucide-react-native';
import ScreenHeader from '@/components/ScreenHeader/ScreenHeader';
import Button from '@/components/Button/Button';

export type WalletOption = {
  id: string;
  name: string;
  balance: number;
};

const WALLETS: WalletOption[] = [
  { id: '1', name: "Parent's house", balance: 3400 },
  { id: '2', name: "Kid's stationary", balance: 850 },
  { id: '3', name: 'Car maintenance', balance: 1890 },
];

type Props = {
  onBack: () => void;
  onNext: (from: WalletOption, to: WalletOption) => void;
  onCancel: () => void;
};

export default function TransferSelectScreen({ onBack, onNext, onCancel }: Props) {
  const [from, setFrom] = useState<WalletOption | null>(null);
  const [to, setTo] = useState<WalletOption | null>(null);
  const [picking, setPicking] = useState<'from' | 'to' | null>(null);

  const canProceed = from && to && from.id !== to.id;

  const pickWallet = (wallet: WalletOption) => {
    if (picking === 'from') setFrom(wallet);
    else setTo(wallet);
    setPicking(null);
  };

  const available = (slot: 'from' | 'to') =>
    WALLETS.filter(w => {
      if (slot === 'from') return !to || w.id !== to.id;
      return !from || w.id !== from.id;
    });

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top', 'bottom']}>
      <ScreenHeader onBack={onBack} />

      <View className="flex-1 px-6 pt-4">
        <WalletPicker
          label="From"
          selected={from}
          description="Please select the wallet you are transferring from"
          onPress={() => setPicking('from')}
        />
        <View className="h-4" />
        <WalletPicker
          label="To"
          selected={to}
          description="Please select the wallet you are transferring to"
          onPress={() => setPicking('to')}
        />

        <View className="flex-row gap-4 mt-8">
          <View className="flex-1">
            <Button label="Next" onPress={() => canProceed && onNext(from!, to!)} disabled={!canProceed} />
          </View>
          <View className="flex-1">
            <Button label="Cancel" onPress={onCancel} variant="ghost" showArrow={false} />
          </View>
        </View>
      </View>

      {/* Wallet picker sheet */}
      <Modal visible={!!picking} transparent animationType="slide" onRequestClose={() => setPicking(null)}>
        <Pressable className="flex-1 bg-black/40" onPress={() => setPicking(null)} />
        <View className="bg-white rounded-t-3xl px-5 pt-6 pb-10">
          <View className="w-12 h-1.5 rounded-full bg-gray-300 self-center mb-4" />
          <ScrollView>
            {available(picking!).map(wallet => (
              <TouchableOpacity
                key={wallet.id}
                onPress={() => pickWallet(wallet)}
                className="flex-row items-center justify-between border border-gray-200 rounded-xl px-4 py-4 mb-3"
              >
                <View className="flex-row items-center gap-3">
                  <Wallet size={16} color="#9CA3AF" />
                  <Text className="text-gray-900 font-medium">{wallet.name}</Text>
                </View>
                <Text className="text-gray-600">R {wallet.balance.toLocaleString('en-ZA', { minimumFractionDigits: 2 })}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

type PickerProps = {
  label: string;
  selected: WalletOption | null;
  description: string;
  onPress: () => void;
};

function WalletPicker({ label, selected, description, onPress }: PickerProps) {
  return (
    <View>
      <Text className="text-gray-500 text-sm font-medium mb-2">{label}</Text>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        className="flex-row items-center justify-between border border-gray-200 rounded-xl px-4 py-4"
      >
        {selected ? (
          <View className="flex-row items-center gap-3 flex-1">
            <Wallet size={16} color="#9CA3AF" />
            <View className="flex-1">
              <Text className="text-gray-900 font-medium">{selected.name}</Text>
              <Text className="text-gray-400 text-sm">R {selected.balance.toLocaleString('en-ZA', { minimumFractionDigits: 2 })}</Text>
            </View>
          </View>
        ) : (
          <Text className="text-gray-400 text-sm flex-1">{description}</Text>
        )}
        <ChevronRight size={16} color="#9CA3AF" />
      </TouchableOpacity>
    </View>
  );
}
