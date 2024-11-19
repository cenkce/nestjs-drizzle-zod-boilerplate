CREATE TABLE IF NOT EXISTS "contact" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "contact_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" text NOT NULL,
	"email" text NOT NULL,
	"lastname" text NOT NULL,
	"created_at" timestamp NOT NULL,
	"user" text NOT NULL
);
