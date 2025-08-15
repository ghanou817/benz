import express from 'express';

const router = express.Router();

// إضافة منتج جديد
router.post('/', (req, res) => {
  // سيتم التنفيذ لاحقًا
  res.send('إضافة منتج');
});

import pool from '../utils/db.js';

// جلب جميع المنتجات مع دعم البحث بالاسم أو الوصف
router.get('/', async (req, res) => {
  const search = req.query.q;
  try {
    let result;
    if (search) {
      result = await pool.query(
        `SELECT * FROM products WHERE name ILIKE $1 OR description ILIKE $1 ORDER BY id DESC`,
        [`%${search}%`]
      );
    } else {
      result = await pool.query('SELECT * FROM products ORDER BY id DESC');
    }
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'خطأ في جلب المنتجات' });
  }
});

// جلب منتج محدد حسب ID
router.get('/:id', (req, res) => {
  // سيتم التنفيذ لاحقًا
  res.send('تفاصيل منتج محدد');
});

// تحديث منتج
router.put('/:id', (req, res) => {
  // سيتم التنفيذ لاحقًا
  res.send('تحديث منتج');
});

// حذف منتج
router.delete('/:id', (req, res) => {
  // سيتم التنفيذ لاحقًا
  res.send('حذف منتج');
});

export default router;
