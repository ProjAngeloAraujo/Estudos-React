import sqlite3 from 'sqlite3';

export const db = new sqlite3.Database('banco.db');

db.run(`
  CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    senha TEXT NOT NULL
  )
`);