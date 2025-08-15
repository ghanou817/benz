import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

function HomePage() {
  return (
    <Box p={8} textAlign="center">
      <Heading size="2xl" mb={4}>benzshop</Heading>
      <Text fontSize="xl" color="gray.600">
        منصة بيع بالجملة للحلويات والمواد الغذائية لأصحاب المحلات
      </Text>
    </Box>
  );
}

export default HomePage;
