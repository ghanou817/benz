import express from 'express';

const router = express.Router();

// إنشاء مستخدم جديد (تسجيل)
import bcrypt from 'bcrypt';
import pool from '../utils/db.js';

router.post('/register', async (req, res) => {
  try {
    const { full_name, wilaya, baladia, shop_location, phone, password, shop_type } = req.body;
    if (!full_name || !wilaya || !baladia || !phone || !password) {
      return res.status(400).json({ error: 'يرجى ملء جميع الحقول الأساسية' });
    }
    // تحقق من عدم وجود الهاتف مسبقاً
    const exists = await pool.query('SELECT id FROM users WHERE phone = $1', [phone]);
    if (exists.rows.length > 0) {
      return res.status(409).json({ error: 'رقم الهاتف مستخدم بالفعل' });
    }
    // تشفير كلمة المرور
    const password_hash = await bcrypt.hash(password, 10);
    // إدراج المستخدم الجديد
    const result = await pool.query(
      `INSERT INTO users (full_name, wilaya, baladia, shop_location, phone, password_hash, shop_type)
       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id, full_name, phone, role, created_at`,
      [full_name, wilaya, baladia, shop_location || '', phone, password_hash, shop_type || '']
    );
    res.status(201).json({ user: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: 'خطأ في تسجيل المستخدم' });
  }
});

// تسجيل الدخول
import jwt from 'jsonwebtoken';
import pool from '../utils/db.js';
import bcrypt from 'bcrypt';

router.post('/login', async (req, res) => {
  try {
    const { phone, password } = req.body;
    if (!phone || !password) {
      return res.status(400).json({ error: 'يرجى إدخال رقم الهاتف وكلمة المرور' });
    }
    // البحث عن المستخدم
    const result = await pool.query('SELECT * FROM users WHERE phone = $1', [phone]);
    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'رقم الهاتف أو كلمة المرور غير صحيحة' });
    }
    const user = result.rows[0];
    // تحقق من كلمة المرور
    const valid = await bcrypt.compare(password, user.password_hash);
    if (!valid) {
      return res.status(401).json({ error: 'رقم الهاتف أو كلمة المرور غير صحيحة' });
    }
    // إنشاء توكن JWT
    const token = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });
    // إرجاع بيانات المستخدم مع التوكن
    res.json({
      token,
      user: {
        id: user.id,
        full_name: user.full_name,
        phone: user.phone,
        role: user.role,
        created_at: user.created_at
      }
    });
  } catch (err) {
    res.status(500).json({ error: 'خطأ في تسجيل الدخول' });
  }
});

// جلب جميع المستخدمين (للمدير)
router.get('/', (req, res) => {
  // سيتم التنفيذ لاحقًا
  res.send('قائمة المستخدمين');
});

// جلب مستخدم محدد
router.get('/:id', (req, res) => {
  // سيتم التنفيذ لاحقًا
  res.send('تفاصيل مستخدم');
});

// تحديث بيانات مستخدم
router.put('/:id', (req, res) => {
  // سيتم التنفيذ لاحقًا
  res.send('تحديث بيانات مستخدم');
});

// حذف مستخدم
router.delete('/:id', (req, res) => {
  // سيتم التنفيذ لاحقًا
  res.send('حذف مستخدم');
});

export default router;
