-- بنية قاعدة البيانات لموقع benz shop

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    wilaya VARCHAR(100) NOT NULL,
    baladia VARCHAR(100) NOT NULL,
    shop_location VARCHAR(255),
    phone VARCHAR(20) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    shop_type VARCHAR(100),
    role VARCHAR(20) DEFAULT 'user', -- user/admin
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price NUMERIC(10,2) NOT NULL,
    stock INT DEFAULT 0,
    image_url VARCHAR(255),
    category_id INT REFERENCES categories(id),
    flavors TEXT, -- نكهات المنتج (JSON أو نص)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    status VARCHAR(30) DEFAULT 'pending', -- pending, not_received, received
    total NUMERIC(10,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INT REFERENCES orders(id) ON DELETE CASCADE,
    product_id INT REFERENCES products(id),
    quantity INT NOT NULL,
    unit_price NUMERIC(10,2) NOT NULL
);

CREATE TABLE notifications (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    message TEXT NOT NULL,
    type VARCHAR(30),
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE contact_info (
    id SERIAL PRIMARY KEY,
    phone VARCHAR(20),
    email VARCHAR(100),
    telegram VARCHAR(100),
    whatsapp VARCHAR(100),
    instagram VARCHAR(100),
    facebook VARCHAR(100)
);

CREATE TABLE settings (
    id SERIAL PRIMARY KEY,
    admin_phone VARCHAR(20),
    admin_password_hash VARCHAR(255),
    site_name VARCHAR(100) DEFAULT 'benz shop'
);
