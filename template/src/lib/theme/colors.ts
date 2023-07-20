export interface ColorsScheme {
  bg: string;
  mainText: string;
  transparent: string;
  headerBackgroundColor: string;
  headerTitle: string;
  success: string;
  error: string;
  info: string;
  warning: string;
}

export const lightColors: ColorsScheme = {
  bg: '#f4f4f4',
  mainText: '#020202',
  transparent: 'transparent',
  headerBackgroundColor: 'blue.400',
  headerTitle: 'white',
  success: '#26b23a',
  error: '#d54743',
  info: '#3374F9',
  warning: '#FC7C12',
};

export const darkColors: ColorsScheme = {
  bg: '#020202',
  mainText: '#f4f4f4',
  transparent: 'transparent',
  headerBackgroundColor: 'blue.400',
  headerTitle: 'white',
  success: '#26b23a',
  error: '#d54743',
  info: '#3374F9',
  warning: '#FC7C12',
};
