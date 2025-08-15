import React from 'react';
import { Box, Heading, Text, SimpleGrid, Card, CardBody, Image, Stack, Button } from '@chakra-ui/react';
import { FaCartPlus } from 'react-icons/fa';

import { useEffect, useState } from 'react';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <Box>
      <Heading color="brand.600" mb={6} fontWeight="extrabold">المنتجات</Heading>
      {loading ? (
        <Text>جاري التحميل...</Text>
      ) : products.length === 0 ? (
        <Text color="gray.500">لا توجد منتجات متاحة حالياً</Text>
      ) : (
        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          {products.map(product => (
            <Card key={product.id} boxShadow="lg" borderRadius="2xl" _hover={{ boxShadow: '2xl', transform: 'translateY(-4px)' }} transition="all 0.2s">
              <Image src={product.img || 'https://placehold.co/400x300'} alt={product.name} borderTopRadius="2xl" h={56} w="100%" objectFit="cover" />
              <CardBody>
                <Stack spacing={3}>
                  <Heading size="md" color="brand.700">{product.name}</Heading>
                  <Text color="gray.600">{product.desc}</Text>
                  <Text color="brand.600" fontWeight="bold">{product.price} د.ج / كرتونة</Text>
                  <Button leftIcon={<FaCartPlus />} colorScheme="brand" size="md" rounded="full">إضافة إلى السلة</Button>
                </Stack>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
}

export default ProductsPage;
