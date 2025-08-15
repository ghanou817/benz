import React from 'react';
import { Box, Heading, Text, Input, Button, Stack, FormControl, FormLabel } from '@chakra-ui/react';

function LoginPage() {
  return (
    <Box maxW="sm" mx="auto" mt={16} p={8} bg="white" boxShadow="xl" borderRadius="2xl">
      <Heading mb={6} color="brand.700" textAlign="center">تسجيل الدخول</Heading>
      <form>
        <Stack spacing={5}>
          <FormControl>
            <FormLabel>رقم الهاتف</FormLabel>
            <Input type="tel" placeholder="أدخل رقم الهاتف" size="lg" />
          </FormControl>
          <FormControl>
            <FormLabel>كلمة المرور</FormLabel>
            <Input type="password" placeholder="********" size="lg" />
          </FormControl>
          <Button colorScheme="brand" size="lg" rounded="full" fontWeight="bold">دخول</Button>
        </Stack>
      </form>
    </Box>
  );
}

export default LoginPage;
