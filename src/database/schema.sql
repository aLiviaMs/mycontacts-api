CREATE DATABASE mycontacts;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS categories (
	id UUID NOT NULL DEFAULT uuid_generate_v4(),
	name VARCHAR NOT NULL
);

ALTER TABLE categories ADD CONSTRAINT categories_pkey PRIMARY KEY (id);

CREATE TABLE IF NOT EXISTS contacts (
	id UUID NOT NULL DEFAULT uuid_generate_v4(),
	name VARCHAR NOT NULL,
	email VARCHAR UNIQUE,
	phone VARCHAR,
	category_id UUID,
	FOREIGN KEY (category_id) REFERENCES categories(id)
);


