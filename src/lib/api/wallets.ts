import { apiClient } from './client';

export type ApiMoney = {
  amount: number;
  currency: string;
  displayName: string;
};

export type ApiWallet = {
  walletId: string;
  userId: string;
  name: string;
  description?: string;
  balance: ApiMoney;
  targetAmount?: ApiMoney;
  linkedAccountId: string;
  createdAt: string;
  modifiedAt: string;
};

export type CreateWalletPayload = {
  userId: string;
  name: string;
  description: string;
  targetAmount: number;
};

export type FundWalletPayload = {
  currency: string;
  amount: number;
  fromAccountId: string;
  walletId: string;
};

export type WithdrawPayload = {
  currency: string;
  amount: number;
  toAccountId: string;
  walletId: string;
};

export function fetchWallets(userId: string) {
  return apiClient<ApiWallet[]>(`/wallets/${userId}`);
}

export function createWallet(payload: CreateWalletPayload) {
  return apiClient<ApiWallet>('/wallets', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export function fundWallet(walletId: string, payload: FundWalletPayload) {
  return apiClient<ApiWallet>(`/fund/${walletId}`, {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export function withdrawFromWallet(walletId: string, payload: WithdrawPayload) {
  return apiClient<ApiWallet>(`/withdraw/${walletId}`, {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}
