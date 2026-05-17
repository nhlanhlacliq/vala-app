import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export function getIcon(name: 'wallet', size = 24, color = 'black') {
  if (name === 'wallet') {
    return <MaterialIcons name="wallet" size={size} color={color} />;
  }
}
