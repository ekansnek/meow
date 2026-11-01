'use client';

import { TamaguiProvider as Provider } from 'tamagui';
import { tamaguiConfig } from '@/libs/TamaguiConfig';

export function TamaguiProvider(props: { children: React.ReactNode }) {
  return (
    <Provider config={tamaguiConfig} defaultTheme="light">
      {props.children}
    </Provider>
  );
}
