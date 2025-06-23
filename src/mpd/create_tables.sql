BEGIN;
DROP TABLE IF EXISTS invoices_details, invoices, receipts;

CREATE TABLE receipts (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  is_recept BOOLEAN,
  brand_name VARCHAR(25),
  receipt_number INTEGER,
  total INTEGER
);

CREATE TABLE invoices (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  siret_number INTEGER,
  is_invoice BOOLEAN,
  client_address VARCHAR(50),
  invoice_date DATE,
  invoice_term DATE,
  invoice_number INTEGER,
  total INTEGER,
  TVA_number INTEGER
);

CREATE TABLE invoices_details (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  product VARCHAR(50),
  quantity INTEGER,
  unit_price INTEGER,
  invoices_id INTEGER
);

ALTER TABLE invoices_details 
ADD CONSTRAINT fk_invoice_id_constraint 
FOREIGN KEY (invoices_id) 
REFERENCES invoices(id);

COMMIT;