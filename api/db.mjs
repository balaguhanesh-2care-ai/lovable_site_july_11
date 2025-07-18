import mysql from 'mysql2/promise';

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is not set in the production environment.");
}

const connectionUrl = new URL(process.env.DATABASE_URL);

const config = {
  host: connectionUrl.hostname,
  user: connectionUrl.username,
  password: connectionUrl.password,
  database: connectionUrl.pathname.substring(1), // Removes the leading '/'
  port: connectionUrl.port || 3306,

  ssl: {
    // This enforces the secure connection.
    rejectUnauthorized: true,
  }
};

const pool = mysql.createPool(config);

/**
 * Initializes the database by creating the 'form_submissions' table if it doesn't exist.
 */
export const initDatabase = async () => {
  const connection = await pool.getConnection();
  try {
    await connection.query(`
      CREATE TABLE IF NOT EXISTS form_submissions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        form_type VARCHAR(50) NOT NULL,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
  } catch (error) {
    console.error("Failed to initialize database:", error);
    throw error;
  } finally {
    connection.release();
  }
};

export default pool;