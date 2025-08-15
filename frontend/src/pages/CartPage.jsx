import React from 'react';
import { Box, Heading, Text, Table, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';

const cartDemo = [
  { id: 1, name: 'شوكولاتة فاخرة', qty: 2, price: 120 },
  { id: 2, name: 'بسكويت مغلف', qty: 1, price: 40 },
];

function CartPage() {
  const total = cartDemo.reduce((acc, item) => acc + item.qty * item.price, 0);
  return (
    <Box>
      <Heading color="brand.700" mb={6}>سلة الطلبات</Heading>
      <Table variant="simple" bg="white" borderRadius="xl" boxShadow="md">
        <Thead bg="brand.100">
          <Tr>
            <Th>المنتج</Th>
            <Th>الكمية</Th>
            <Th>السعر للوحدة</Th>
            <Th>الإجمالي</Th>
          </Tr>
        </Thead>
        <Tbody>
          {cartDemo.map(item => (
            <Tr key={item.id}>
              <Td>{item.name}</Td>
              <Td>{item.qty}</Td>
              <Td>{item.price} د.ج</Td>
              <Td>{item.qty * item.price} د.ج</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Text mt={4} fontWeight="bold" fontSize="xl" color="brand.600">المجموع الكلي: {total} د.ج</Text>
      <Button colorScheme="brand" size="lg" mt={6} rounded="full">تأكيد الطلب</Button>
    </Box>
  );
}

export default CartPage;
