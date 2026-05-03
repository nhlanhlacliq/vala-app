import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  fetchWallets,
  createWallet,
  fundWallet,
  withdrawFromWallet,
  type CreateWalletPayload,
  type FundWalletPayload,
  type WithdrawPayload,
} from '@/lib/api/wallets';

export function useWallets(userId: string | null) {
  return useQuery({
    queryKey: ['wallets', userId],
    queryFn: () => fetchWallets(userId!),
    enabled: !!userId,
  });
}

export function useCreateWallet() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: CreateWalletPayload) => createWallet(payload),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['wallets', variables.userId] });
    },
  });
}

export function useFundWallet() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ walletId, payload }: { walletId: string; payload: FundWalletPayload }) =>
      fundWallet(walletId, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['wallets'] });
    },
  });
}

export function useWithdrawFromWallet() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ walletId, payload }: { walletId: string; payload: WithdrawPayload }) =>
      withdrawFromWallet(walletId, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['wallets'] });
    },
  });
}
