import { Text } from 'react-native';
import OnboardingSlide from '../components/OnboardingSlide';

type Props = {
  onNext: () => void;
};

const image = require('../../../../assets/onb-1.png');

export default function WelcomeToValaScreen({ onNext }: Props) {
  return (
    <OnboardingSlide
      image={image}
      title="WELCOME TO VALA"
      activeIndex={0}
      totalSlides={3}
      onNext={onNext}
      subtitle="The money app that helps you lock away savings until you really need them."
    />
  );
}
