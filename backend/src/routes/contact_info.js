import express from 'express';

const router = express.Router();

// جلب بيانات الاتصال
router.get('/', (req, res) => {
  // سيتم التنفيذ لاحقًا
  res.send('بيانات الاتصال');
});

// تحديث بيانات الاتصال (للإدارة)
router.put('/', (req, res) => {
  // سيتم التنفيذ لاحقًا
  res.send('تحديث بيانات الاتصال');
});

export default router;
