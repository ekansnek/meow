import { getDefaultTamaguiConfig } from '@tamagui/config-default';
import { createTamagui } from 'tamagui';

export const tamaguiConfig = createTamagui(getDefaultTamaguiConfig('web'));

export type TamaguiConfig = typeof tamaguiConfig;
