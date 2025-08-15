import express from 'express';

const router = express.Router();

// جلب إعدادات الموقع
router.get('/', (req, res) => {
  // سيتم التنفيذ لاحقًا
  res.send('إعدادات الموقع');
});

// تحديث إعدادات الموقع
router.put('/', (req, res) => {
  // سيتم التنفيذ لاحقًا
  res.send('تحديث إعدادات الموقع');
});

export default router;
