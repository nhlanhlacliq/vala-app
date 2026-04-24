import { TouchableOpacity, Text, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

type Variant = 'primary' | 'outline' | 'ghost';

type Props = {
  label: string;
  onPress: () => void;
  variant?: Variant;
  disabled?: boolean;
  showArrow?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
};

export default function Button({
  label,
  onPress,
  variant = 'primary',
  disabled = false,
  showArrow = true,
  icon,
  fullWidth = true,
  className,
}: Props) {
  const base = `rounded-full flex-row items-center px-6 py-4 ${fullWidth ? 'justify-between' : 'gap-3 self-start'}`;

  const variantClasses: Record<Variant, string> = {
    primary: disabled ? 'bg-gray-300' : 'bg-cyan-400',
    outline: 'bg-white border border-gray-300',
    ghost: 'bg-transparent',
  };

  const textClasses: Record<Variant, string> = {
    primary: disabled ? 'text-gray-500 font-semibold text-sm' : 'text-white font-semibold text-sm',
    outline: 'text-gray-900 font-semibold text-sm',
    ghost: 'text-gray-500 text-sm',
  };

  const iconClasses: Record<Variant, string> = {
    primary: disabled ? 'text-gray-500' : 'text-white',
    outline: 'text-gray-900',
    ghost: 'text-gray-500',
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
      className={`${base} ${variantClasses[variant]} ${className || ''}`}>
      {icon && <View className="mr-1">{icon}</View>}
      <Text className={textClasses[variant]}>{label}</Text>
      {showArrow && <Feather name="arrow-right" size={22} className={iconClasses[variant]} />}
    </TouchableOpacity>
  );
}
