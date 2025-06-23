BEGIN;
DROP TABLE IF EXISTS invoice_details, invoice, receipt;

CREATE TABLE receipt (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  is_recept BOOLEAN NULL,
  brand_name VARCHAR(25) NOT NULL,
  recept_number INTEGER NOT NULL,
  total INTEGER NOT NULL
);

CREATE TABLE invoice (
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

CREATE TABLE invoice_details (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  product VARCHAR(50),
  quantity INTEGER,
  unit_price INTEGER,
  invoice_id INTEGER
);

ALTER TABLE invoice_details 
ADD CONSTRAINT fk_invoice_id_constraint 
FOREIGN KEY (invoice_id) 
REFERENCES invoice(id);

COMMIT;