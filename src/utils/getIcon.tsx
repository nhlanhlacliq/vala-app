import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export function getIcon(name: string, size = 24, color = 'black') {
  if (name === 'wallet') {
    return <MaterialIcons name="wallet" size={size} color={color} />;
  }
  if (name === 'arrows-lr') {
    return <FontAwesome6 name="arrows-left-right" size={size} color={color} />;
  }
  if (name === 'arrow-r') {
    return <AntDesign name="arrow-right" size={size} color={color} />
  }
  if (name === 'arrow-r-long') {
    return <FontAwesome6 name="arrow-right-long" size={size} color={color} />
  }
  if (name === 'lock') {
    return <MaterialIcons name="lock-outline" size={size} color={color} />
  }
}
