import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Routes } from './routes';
import { ScreensProps } from './screensProps';

type Navigation = NativeStackNavigationProp<ScreensProps, Routes>;

export class Navigate {
  navigation: Navigation;

  constructor(navigation: Navigation) {
    this.navigation = navigation;
    this.goToHomeInner = this.goToHomeInner.bind(this);
  }

  goToHomeInner() {
    this.navigation.push(Routes.HomeInner);
  }
}
