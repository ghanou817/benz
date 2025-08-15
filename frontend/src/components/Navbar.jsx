import React, { useState, useCallback } from 'react';
import { Box, Flex, Link, Spacer, Button, IconButton, Badge, useToast } from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { BellIcon } from '@chakra-ui/icons';
import useSocketNotifications from '../utils/useSocketNotifications';

const navLinks = [
  { label: 'الرئيسية', path: '/' },
  { label: 'من نحن', path: '/about' },
  { label: 'المنتجات', path: '/products' },
  { label: 'سلة الطلبات', path: '/cart' },
  { label: 'طلباتي', path: '/orders' },
  { label: 'اتصل بنا', path: '/contact' },
];

function Navbar() {
  // يفترض أن لديك userId من السياق أو التخزين المحلي
  const userId = localStorage.getItem('userId');
  const [notifCount, setNotifCount] = useState(0);
  const toast = useToast();

  const handleNotification = useCallback((notif) => {
    setNotifCount((c) => c + 1);
    toast({
      title: notif.title || 'إشعار جديد',
      description: notif.body || notif.message || '',
      status: 'info',
      duration: 5000,
      isClosable: true,
      position: 'top-left',
      dir: 'rtl',
    });
  }, [toast]);

  useSocketNotifications(userId, handleNotification);

  const location = useLocation();
  return (
    <Box bg="white" boxShadow="md" py={3} px={6} mb={6}>
      <Flex align="center" direction="row-reverse">
        <Box fontWeight="bold" fontSize="2xl" color="teal.500">
          بنزارة شوب
        </Box>
        <Spacer />
        <Flex gap={4}>
          {navLinks.map(link => (
            <Link
              as={RouterLink}
              key={link.path}
              to={link.path}
              color={location.pathname === link.path ? 'teal.600' : 'gray.700'}
              fontWeight={location.pathname === link.path ? 'bold' : 'normal'}
              fontSize="lg"
              _hover={{ color: 'teal.400', textDecoration: 'none' }}
            >
              {link.label}
            </Link>
          ))}
        </Flex>
        <Spacer />
        <Box position="relative" mr={3}>
          <IconButton icon={<BellIcon />} colorScheme="brand" variant="ghost" aria-label="الإشعارات" fontSize="2xl" />
          {notifCount > 0 && (
            <Badge colorScheme="red" borderRadius="full" position="absolute" top={0} right={0} fontSize="0.8em">{notifCount}</Badge>
          )}
        </Box>
        <Button as={RouterLink} to="/login" colorScheme="teal" variant="outline" ml={4}>
          دخول
        </Button>
      </Flex>
    </Box>
  );
}

export default Navbar;
