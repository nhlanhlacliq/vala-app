import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Wallet, MoreVertical } from 'lucide-react-native';
import TransactionItem, { type Transaction } from '../components/TransactionItem';
import Button from '@/components/Button/Button';

type FilterTab = 'All' | 'Money in' | 'Money out';

const MOCK_TRANSACTIONS: Transaction[] = [
  { id: '1', source: 'FNB Account 124...', type: 'Deposit', amount: 1000, date: 'Monday, 21 May 2025' },
  { id: '2', source: 'OZOW Instant EFT', type: 'Deposit', amount: 430, date: 'Sunday, 23 March 2025' },
  { id: '3', source: 'FNB Account 124...', type: 'Deposit', amount: 100, date: 'Tuesday, 11 Feb 2025' },
  { id: '4', source: 'FNB Account 124...', type: 'Deposit', amount: 200, date: 'Tuesday, 11 Feb 2025' },
];

const GROUPED = MOCK_TRANSACTIONS.reduce<Record<string, Transaction[]>>((acc, tx) => {
  (acc[tx.date] ??= []).push(tx);
  return acc;
}, {});

type Props = {
  walletId: string;
  walletName: string;
  balance: number;
  onBack: () => void;
  onDeposit: () => void;
};

export default function WalletDetailScreen({ walletId, walletName, balance, onBack, onDeposit }: Props) {
  const [activeTab, setActiveTab] = useState<FilterTab>('All');

  const tabs: FilterTab[] = ['All', 'Money in', 'Money out'];

  const filteredGroups = Object.entries(GROUPED).map(([date, txs]) => ({
    date,
    txs: txs.filter(tx => {
      if (activeTab === 'Money in') return tx.amount > 0;
      if (activeTab === 'Money out') return tx.amount < 0;
      return true;
    }),
  })).filter(g => g.txs.length > 0);

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      {/* Header */}
      <View className="flex-row items-center justify-between px-5 py-4">
        <TouchableOpacity onPress={onBack} hitSlop={8}>
          <ArrowLeft size={22} color="#111" />
        </TouchableOpacity>
        <View className="flex-row items-center gap-2">
          <Wallet size={16} color="#9CA3AF" />
          <Text className="text-base font-semibold text-gray-900">{walletName}</Text>
        </View>
        <TouchableOpacity hitSlop={8}>
          <MoreVertical size={20} color="#111" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1" contentContainerClassName="px-5 pb-32" showsVerticalScrollIndicator={false}>
        {/* Balance */}
        <Text className="text-4xl font-bold text-gray-900 mt-4 mb-6">
          R{balance.toLocaleString('en-ZA', { minimumFractionDigits: 2 })}
        </Text>

        <Button label="Deposit into wallet" onPress={onDeposit} />

        {/* Filter tabs */}
        <View className="flex-row bg-gray-100 rounded-full p-1 mt-8 mb-4">
          {tabs.map(tab => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              className={`flex-1 py-2 rounded-full items-center ${activeTab === tab ? 'bg-cyan-400' : ''}`}
            >
              <Text className={`text-sm font-medium ${activeTab === tab ? 'text-white' : 'text-gray-500'}`}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Transactions grouped by date */}
        {filteredGroups.map(({ date, txs }) => (
          <View key={date} className="mb-2">
            <Text className="text-xs font-semibold text-gray-400 uppercase mb-1">{date}</Text>
            {txs.map(tx => (
              <TransactionItem key={tx.id} transaction={tx} />
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
