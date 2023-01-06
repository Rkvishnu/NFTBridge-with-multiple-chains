import '../styles/globals.css'

import * as React from 'react';

// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';
import { SSRProvider } from '@react-aria/ssr'
function MyApp({ Component }) {
  // 2. Use at the root of your app
  return (

    <SSRProvider>

      <NextUIProvider>
        <Component />
      </NextUIProvider>


    </SSRProvider>
  );
}
export default MyApp
