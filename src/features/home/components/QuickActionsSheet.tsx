import { getIcon } from '@/utils/getIcon';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
  type BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';
import { ArrowDownToLine, CreditCard } from 'lucide-react-native';
import { forwardRef, useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  onAddMoney: () => void;
  onAddWallet: () => void;
  onTransfer: () => void;
  onWithdraw: () => void;
  canWithdraw?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
};

// Tab bar is 72px tall + 16px marginBottom
const TAB_BAR_HEIGHT = 88;

const QuickActionsSheet = forwardRef<BottomSheet, Props>(function QuickActionsSheet(
  { onAddMoney, onAddWallet, onTransfer, onWithdraw, canWithdraw = false, onOpen, onClose },
  ref
) {
  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} pressBehavior="close" style={styles.backdrop} />
    ),
    []
  );

  const renderBackground = useCallback(
    () => (
        <BottomSheetView>
          <View></View>
        </BottomSheetView>
    ),
    []
  );

  const actions = [
    { icon: <CreditCard size={18} color="#fff" />, label: 'Add money to VALA', onPress: onAddMoney },

    { icon: getIcon('wallet', 18, '#fff'), label: 'Add new wallet', onPress: onAddWallet },
    { icon: getIcon('arrows-lr', 18, '#fff'), label: 'Transfer money between wallets', onPress: onTransfer },
    {
      icon: <ArrowDownToLine size={18} color={canWithdraw ? '#fff' : '#9CA3AF'} />,
      label: 'Withdraw',
      onPress: canWithdraw ? onWithdraw : undefined,
      disabled: !canWithdraw,
    },
  ];

  return (
    <BottomSheet
      ref={ref}
      index={-1}
      enableDynamicSizing
      enablePanDownToClose
      onChange={(index) => (index >= 0 ? onOpen?.() : onClose?.())}
      bottomInset={TAB_BAR_HEIGHT}
      backdropComponent={renderBackdrop}
      backgroundComponent={renderBackground}
      handleIndicatorStyle={{ backgroundColor: '#D1D5DB', width: 48 }}
      backgroundStyle={{ borderTopLeftRadius: 24, borderTopRightRadius: 24, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    >
      <BottomSheetView 
      style={styles.bottomSheet}
      
      >
        {actions.map((action) => (
          <TouchableOpacity
            key={action.label}
            onPress={action.onPress}
            disabled={action.disabled}
            activeOpacity={0.8}
            className={`flex-row items-center justify-center gap-4 rounded-lg py-6 ${
              action.disabled ? 'bg-gray-200' : 'bg-cyan-500'
            }`}
          >
            {<View className={`${action.disabled ? 'opacity-50' : ''}`}>{action.icon}</View>}
            <Text className={`text-center text-base font-semibold ${action.disabled ? 'text-gray-300' : 'text-white'}`}>
              {action.label}
            </Text>
          </TouchableOpacity>
        ))}
      </BottomSheetView>
    </BottomSheet>
  );
});

export default QuickActionsSheet;

const styles = StyleSheet.create({
  bottomSheet: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 24,
    gap: 12,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 1)',
  },
})