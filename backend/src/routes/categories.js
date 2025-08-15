import express from 'express';

const router = express.Router();

// إضافة فئة
router.post('/', (req, res) => {
  // سيتم التنفيذ لاحقًا
  res.send('إضافة فئة');
});

// جلب جميع الفئات
router.get('/', (req, res) => {
  // سيتم التنفيذ لاحقًا
  res.send('قائمة الفئات');
});

// حذف فئة
router.delete('/:id', (req, res) => {
  // سيتم التنفيذ لاحقًا
  res.send('حذف فئة');
});

export default router;
