import {ImageSourcePropType} from 'react-native';

export type NewData = {
  name: string;
  location: string;
  image: ImageSourcePropType;
  about: string;
};


const newData: NewData[] = [
  {
    name: 'Bikaner',
    location: 'Rajasthan, India',
    image: require('../assets/Rajasthan.jpg'),
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis nulla tortor, at viverra augue venenatis eget. Nam magna ligula, consequat sit amet purus eu, eleifend maximus elit. Aliquam rhoncus fringilla venenatis. In pulvinar lacus quis urna suscipit, placerat commodo turpis molestie. Cras tristique suscipit nisl, eu porttitor ex.',
  },
  {
    name: 'Goa Beach',
    location: 'Maharashtra, India',
    image: require('../assets/Goa.jpg'),
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis nulla tortor, at viverra augue venenatis eget. Nam magna ligula, consequat sit amet purus eu, eleifend maximus elit. Aliquam rhoncus fringilla venenatis. In pulvinar lacus quis urna suscipit, placerat commodo turpis molestie. Cras tristique suscipit nisl, eu porttitor ex.',
  },
  {
    name: 'Ajmer Sharif',
    location: 'Rajasthan, India',
    image: require('../assets/Ajmer.jpg'),
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis nulla tortor, at viverra augue venenatis eget. Nam magna ligula, consequat sit amet purus eu, eleifend maximus elit. Aliquam rhoncus fringilla venenatis. In pulvinar lacus quis urna suscipit, placerat commodo turpis molestie. Cras tristique suscipit nisl, eu porttitor ex.',
  },
  {
    name: 'Himalayas',
    location: 'Himalayas, India',
    image: require('../assets/Himalayas.jpg'),
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis nulla tortor, at viverra augue venenatis eget. Nam magna ligula, consequat sit amet purus eu, eleifend maximus elit. Aliquam rhoncus fringilla venenatis. In pulvinar lacus quis urna suscipit, placerat commodo turpis molestie. Cras tristique suscipit nisl, eu porttitor ex.',
  },
];

export default newData;
