import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

function RegisterPage() {
  return (
    <Box p={8} textAlign="center">
      <Heading size="xl" mb={4}>إنشاء حساب</Heading>
      <Text fontSize="lg" color="gray.600">
        أنشئ حسابك مجانًا للاستفادة من جميع ميزات الموقع.
      </Text>
    </Box>
  );
}

export default RegisterPage;
