import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

function ContactPage() {
  return (
    <Box p={8} textAlign="center">
      <Heading size="xl" mb={4}>اتصل بنا</Heading>
      <Text fontSize="lg" color="gray.600">
        تواصل معنا لأي استفسار أو اقتراح عبر النموذج أو معلومات الاتصال.
      </Text>
    </Box>
  );
}

export default ContactPage;
