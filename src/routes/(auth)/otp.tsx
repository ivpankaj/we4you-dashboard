import { createFileRoute } from '@tanstack/react-router'

import PremiumRegistrationForm from '@/features/auth/registration1/Registration1'

export const Route = createFileRoute('/(auth)/otp')({
  component: PremiumRegistrationForm,
})
