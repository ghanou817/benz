import express from 'express';

const router = express.Router();

// إنشاء إشعار جديد
router.post('/', (req, res) => {
  // سيتم التنفيذ لاحقًا
  res.send('إشعار جديد');
});

// جلب جميع الإشعارات (للإدارة)
router.get('/', (req, res) => {
  // سيتم التنفيذ لاحقًا
  res.send('قائمة الإشعارات');
});

// تحديث حالة قراءة الإشعار
router.put('/:id/read', (req, res) => {
  // سيتم التنفيذ لاحقًا
  res.send('تم تحديث حالة القراءة');
});

export default router;
