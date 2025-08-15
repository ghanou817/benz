import { ensureUploadsDir } from '../utils/ensureUploadsDir.js';

import productsRouter from './products.js';
import categoriesRouter from './categories.js';
import usersRouter from './users.js';

export function setupRoutes(app, io) {
  ensureUploadsDir();
  app.use('/api/products', productsRouter);
  app.use('/api/categories', categoriesRouter);
  app.use('/api/users', usersRouter);
  app.use('/api/orders', ordersRouter);
  app.use('/api/notifications', notificationsRouter);
  app.use('/api/settings', settingsRouter);
  app.use('/api/contact-info', contactInfoRouter);
  // جميع الراوترات الأساسية أصبحت مربوطة
}
