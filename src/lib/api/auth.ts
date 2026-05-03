import { apiClient } from './client';

export type RegisterPayload = {
  idOrPassport: string;
  username: string;
  email: string;
  termsAccepted: boolean;
};

export type RegisterResponse = {
  id: string;
  userId: string;
  username: string;
  email: string;
  idOrPassport: string;
  termsAccepted: boolean;
  createdAt: string;
  modifiedAt: string;
};

export function register(payload: RegisterPayload) {
  return apiClient<RegisterResponse>('/register', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}
