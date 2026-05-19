import Button from '@/components/Button/Button';
import ScreenHeader from '@/components/ScreenHeader/ScreenHeader';
import { getIcon } from '@/utils/getIcon';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
  BottomSheetView,
  type BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';
import { ChevronRight } from 'lucide-react-native';
import { useCallback, useRef, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export type WalletOption = {
  id: string;
  name: string;
  balance: number;
};

type Props = {
  wallets: WalletOption[];
  onBack: () => void;
  onNext: (from: WalletOption, to: WalletOption, amount: number) => void;
  onCancel: () => void;
};

const TAB_BAR_HEIGHT = 88;

export default function TransferSelectScreen({ wallets, onBack, onNext, onCancel }: Props) {
  const [from, setFrom] = useState<WalletOption | null>(null);
  const [to, setTo] = useState<WalletOption | null>(null);
  const [picking, setPicking] = useState<'from' | 'to' | null>(null);
  const [amount, setAmount] = useState('');
  const sheetRef = useRef<BottomSheet>(null);

  const bothSelected = !!(from && to && from.id !== to.id);
  const parsed = parseFloat(amount);
  const isValid = bothSelected && !isNaN(parsed) && parsed > 0 && !!from && parsed <= from.balance;
  const canProceed = isValid;

  const openPicker = (slot: 'from' | 'to') => {
    setPicking(slot);
    sheetRef.current?.expand();
  };

  const pickWallet = (wallet: WalletOption) => {
    if (picking === 'from') setFrom(wallet);
    else setTo(wallet);
    sheetRef.current?.close();
  };

  const available = (slot: 'from' | 'to') =>
    wallets.filter(w => {
      if (slot === 'from') return !to || w.id !== to.id;
      return !from || w.id !== from.id;
    });

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} pressBehavior="close" style={styles.backdrop} />
    ),
    []
  );

  const renderBackground = useCallback(() => <BottomSheetView><View /></BottomSheetView>, []);

  return (
    <SafeAreaView className="flex-1 bg-gray-100" edges={['top', 'bottom']}>
      <ScreenHeader onBack={onBack} />

      <View className="flex-1 px-6 pt-4 gap-2">
        <WalletPicker
          label="From"
          selected={from}
          description="Please select the wallet you are transferring from"
          onPress={() => openPicker('from')}
        />
        <View className="h-4" />
        <WalletPicker
          label="To"
          selected={to}
          description="Please select the wallet you are transferring to"
          onPress={() => openPicker('to')}
        />

        {bothSelected && (
          <View className="mt-6">
            <Text className=" text-xl mb-3">Choose the amount you would like to transfer</Text>
            <View className="flex-row items-center border border-gray-200 rounded-xl px-4 py-3.5 bg-white">
              <Text className="text-gray-400 text-base mr-2">R</Text>
              <TextInput
                className="flex-1 text-base text-gray-900"
                placeholder="0.00"
                placeholderTextColor="#9CA3AF"
                value={amount}
                onChangeText={setAmount}
                keyboardType="decimal-pad"
                autoFocus
              />
            </View>
          </View>
        )}

        <View className="flex-row ml-auto gap-4 mt-8">
          <Button label="Next" onPress={() => canProceed && onNext(from!, to!, parsed)} disabled={!canProceed} fullWidth={false} />
          <Button label="Cancel" onPress={onCancel} variant="ghost" showArrow={false} fullWidth={false} />
        </View>
      </View>

      <BottomSheet
        ref={sheetRef}
        index={-1}
        enableDynamicSizing
        enablePanDownToClose
        bottomInset={TAB_BAR_HEIGHT}
        backdropComponent={renderBackdrop}
        backgroundComponent={renderBackground}
        onChange={(index) => { if (index === -1) setPicking(null); }}
        handleIndicatorStyle={{ backgroundColor: '#D1D5DB', width: 48 }}
        backgroundStyle={{ borderTopLeftRadius: 24, borderTopRightRadius: 24, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      >
        <BottomSheetScrollView contentContainerStyle={styles.sheet}>
          {picking && available(picking).map(wallet => (
            <TouchableOpacity
              key={wallet.id}
              onPress={() => pickWallet(wallet)}
              activeOpacity={0.8}
              className="flex-row items-center gap-4 rounded-xl p-4 py-5 bg-white"
            >
              <View className='opacity-50'>
              {getIcon('wallet', 18)}
              </View>
                <Text className="text-base font-semibold capitalize">{wallet.name}</Text>
                <Text className="ml-auto">
                  R {wallet.balance.toLocaleString('en-ZA', { minimumFractionDigits: 2 })}
                </Text>
            </TouchableOpacity>
          ))}
        </BottomSheetScrollView>
      </BottomSheet>
    </SafeAreaView>
  );
}

type PickerProps = {
  label: string;
  selected: WalletOption | null;
  description: string;
  onPress: () => void;
};

const styles = StyleSheet.create({
  sheet: { paddingHorizontal: 20, paddingTop: 8, paddingBottom: 24, gap: 12 },
  backdrop: { backgroundColor: 'rgba(0, 0, 0, 1)' },
});

function WalletPicker({ label, selected, description, onPress }: PickerProps) {
  return (
    <View>
      <Text className="text-xl mb-2">{label}</Text>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        className="w-full flex-row items-center justify-between bg-white rounded-xl px-4 py-6"
      >
        {selected ? (
          <View className="flex-row items-center gap-3 flex-1">
            <View className='mb-auto mt-0.5'>
            {getIcon('wallet', 16, '#9CA3AF')}
            </View>
            <View className="flex-1">
              <Text className="font-semibold">{selected.name}</Text>
              <Text className="">
                R {selected.balance.toLocaleString('en-ZA', { minimumFractionDigits: 2 })}
              </Text>
            </View>
          </View>
        ) : (
          <Text className="flex-1 text-gray-400">{description}</Text>
        )}
        <ChevronRight size={16} color="#9CA3AF" />
      </TouchableOpacity>
    </View>
  );
}
