import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'Cairo, Tajawal, sans-serif',
    body: 'Cairo, Tajawal, sans-serif',
  },
  colors: {
    brand: {
      50: '#e3f9f6',
      100: '#c1ece4',
      200: '#9fdfd2',
      300: '#7dd2c0',
      400: '#5bc5ae',
      500: '#39b89c',
      600: '#2e937a',
      700: '#226e58',
      800: '#164936',
      900: '#0a2414',
    },
    accent: {
      100: '#fffbe6',
      200: '#ffe082',
      300: '#ffd54f',
      400: '#ffb300',
    },
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.900' : 'brand.50',
        color: props.colorMode === 'dark' ? 'gray.100' : 'gray.800',
        fontFamily: 'Cairo, Tajawal, sans-serif',
        transition: 'background 0.3s',
      },
      'a': {
        color: 'brand.600',
        fontWeight: 'bold',
        _hover: { color: 'brand.400', textDecoration: 'underline', transition: 'color 0.2s' },
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        rounded: 'full',
        fontWeight: 'bold',
        letterSpacing: 'wide',
        boxShadow: 'md',
        transition: 'all 0.2s',
      },
      variants: {
        solid: (props) => ({
          bg: props.colorMode === 'dark' ? 'brand.600' : 'brand.500',
          color: 'white',
          _hover: { bg: 'brand.600', boxShadow: 'xl', transform: 'translateY(-2px)' },
        }),
        outline: {
          borderColor: 'brand.500',
          color: 'brand.600',
          _hover: { bg: 'brand.50', borderColor: 'brand.600' },
        },
      },
    },
    Input: {
      baseStyle: {
        rounded: 'md',
        fontWeight: 'medium',
        bg: 'white',
        _focus: {
          borderColor: 'brand.500',
          boxShadow: '0 0 0 1px #39b89c',
        },
        _placeholder: {
          color: 'gray.400',
        },
      },
    },
    Card: {
      baseStyle: {
        boxShadow: 'lg',
        borderRadius: '2xl',
        bg: 'white',
        transition: 'all 0.2s',
        _hover: {
          boxShadow: '2xl',
          transform: 'translateY(-4px) scale(1.01)',
        },
      },
    },
    Menu: {
      baseStyle: {
        list: {
          bg: 'white',
          boxShadow: 'lg',
          borderRadius: 'lg',
        },
      },
    },
  },
  direction: 'rtl',
});

export default theme;
