import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

function AboutPage() {
  return (
    <Box p={8} textAlign="center">
      <Heading size="xl" mb={4}>من نحن</Heading>
      <Text fontSize="lg" color="gray.600">
        benzshop هو منصة لبيع الحلويات والمواد الغذائية بالجملة لأصحاب المحلات مع أفضل الأسعار والخدمات.
      </Text>
    </Box>
  );
}

export default AboutPage;
