import { Modal, View, Text, TouchableOpacity, Pressable } from 'react-native';
import { CreditCard, Wallet, ArrowLeftRight, ArrowDownToLine } from 'lucide-react-native';

type Action = {
  icon: React.ReactNode;
  label: string;
  onPress: () => void;
  disabled?: boolean;
};

type Props = {
  visible: boolean;
  onClose: () => void;
  onAddMoney: () => void;
  onAddWallet: () => void;
  onTransfer: () => void;
  onWithdraw: () => void;
  canWithdraw?: boolean;
};

export default function QuickActionsSheet({
  visible,
  onClose,
  onAddMoney,
  onAddWallet,
  onTransfer,
  onWithdraw,
  canWithdraw = false,
}: Props) {
  const actions: Action[] = [
    {
      icon: <CreditCard size={18} color="#fff" />,
      label: 'Add money to VALA',
      onPress: () => { onClose(); onAddMoney(); },
    },
    {
      icon: <Wallet size={18} color="#fff" />,
      label: 'Add new wallet',
      onPress: () => { onClose(); onAddWallet(); },
    },
    {
      icon: <ArrowLeftRight size={18} color="#fff" />,
      label: 'Transfer money between wallets',
      onPress: () => { onClose(); onTransfer(); },
    },
    {
      icon: <ArrowDownToLine size={18} color={canWithdraw ? '#fff' : '#9CA3AF'} />,
      label: 'Withdraw',
      onPress: () => { if (canWithdraw) { onClose(); onWithdraw(); } },
      disabled: !canWithdraw,
    },
  ];

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <Pressable className="flex-1 bg-black/50" onPress={onClose} />
      <View className="bg-white rounded-t-3xl px-5 pt-6 pb-10 gap-4">
        <View className="w-12 h-1.5 rounded-full bg-gray-300 self-center mb-2" />
        {actions.map((action) => (
          <TouchableOpacity
            key={action.label}
            onPress={action.onPress}
            disabled={action.disabled}
            activeOpacity={0.8}
            className={`flex-row items-center gap-4 rounded-full px-5 py-4 ${
              action.disabled ? 'bg-gray-200' : 'bg-cyan-400'
            }`}
          >
            {action.icon}
            <Text
              className={`text-base font-semibold flex-1 ${
                action.disabled ? 'text-gray-400' : 'text-white'
              }`}
            >
              {action.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </Modal>
  );
}
