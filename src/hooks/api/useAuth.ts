import { useMutation } from '@tanstack/react-query';
import { register, type RegisterPayload } from '@/lib/api/auth';

export function useRegister() {
  return useMutation({
    mutationFn: (payload: RegisterPayload) => register(payload),
  });
}
