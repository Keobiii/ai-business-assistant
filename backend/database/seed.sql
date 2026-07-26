INSERT INTO categories (name)
VALUES
('Electronics'),
('Accessories'),
('Office Equipment'),
('Networking');

INSERT INTO products
(
    product_code,
    name,
    category_id,
    price,
    cost
)

VALUES

('PRD-001','Laptop Pro 15',1,1200.00,850.00),

('PRD-002','Wireless Mouse',2,25.00,10.00),

('PRD-003','Mechanical Keyboard',2,80.00,40.00),

('PRD-004','27 Inch Monitor',1,300.00,220.00),

('PRD-005','Office Printer',3,450.00,320.00),

('PRD-006','WiFi Router',4,150.00,90.00);

INSERT INTO inventory
(
    product_id,
    quantity,
    minimum_stock
)

VALUES

(1,25,10),

(2,150,50),

(3,35,20),

(4,8,15),

(5,12,5),

(6,40,10);

INSERT INTO customers
(
    customer_code,
    name,
    email,
    phone,
    address
)

VALUES

(
'CUST-001',
'ABC Corporation',
'contact@abc.com',
'555-1001',
'New York'
),

(
'CUST-002',
'XYZ Trading',
'info@xyz.com',
'555-1002',
'Los Angeles'
),

(
'CUST-003',
'Global Solutions',
'sales@global.com',
'555-1003',
'Chicago'
),

(
'CUST-004',
'Tech World Inc',
'hello@techworld.com',
'555-1004',
'Houston'
);

INSERT INTO suppliers
(
supplier_code,
name,
phone,
email
)

VALUES

(
'SUP-001',
'Tech Supplies Inc',
'555-2001',
'sales@techsupplies.com'
),

(
'SUP-002',
'Global Electronics',
'555-2002',
'contact@globalelectronics.com'
);

INSERT INTO sales_orders
(
order_number,
customer_id,
order_date,
status,
total_amount
)

VALUES

(
'SO-1001',
1,
'2026-01-10',
'COMPLETED',
2450.00
),

(
'SO-1002',
2,
'2026-01-15',
'COMPLETED',
850.00
),

(
'SO-1003',
3,
'2026-02-01',
'PENDING',
1200.00
),

(
'SO-1004',
1,
'2026-02-05',
'COMPLETED',
3000.00
);

INSERT INTO sales_order_items
(
sales_order_id,
product_id,
quantity,
price
)

VALUES


(1,1,2,1200.00),
(1,2,2,25.00),


(2,3,5,80.00),


(3,1,1,1200.00),


(4,4,10,300.00);

INSERT INTO inventory_transactions
(
product_id,
transaction_type,
quantity,
reference,
transaction_date
)

VALUES

(1,'PURCHASE',50,'PO-1001','2026-01-01'),

(1,'SALE',25,'SO-1001','2026-01-10'),

(2,'PURCHASE',200,'PO-1002','2026-01-02'),

(2,'SALE',50,'SO-1001','2026-01-10'),

(4,'PURCHASE',20,'PO-1003','2026-01-05'),

(4,'SALE',12,'SO-1004','2026-02-05');

INSERT INTO purchase_orders
(
po_number,
supplier_id,
order_date,
status,
total_amount
)

VALUES

(
'PO-1001',
1,
'2026-01-01',
'RECEIVED',
42500.00
),

(
'PO-1002',
2,
'2026-01-02',
'RECEIVED',
2000.00
);