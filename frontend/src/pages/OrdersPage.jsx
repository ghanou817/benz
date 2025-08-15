import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

function OrdersPage() {
  return (
    <Box p={8} textAlign="center">
      <Heading size="xl" mb={4}>طلباتي</Heading>
      <Text fontSize="lg" color="gray.600">
        هنا تظهر جميع طلباتك السابقة والحالية.
      </Text>
    </Box>
  );
}

export default OrdersPage;
