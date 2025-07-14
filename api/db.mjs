import mysql from 'mysql2/promise';

// This creates a connection pool, which is better for performance.
const pool = mysql.createPool(process.env.DATABASE_URL);

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
    // Depending on your error handling strategy, you might want to throw the error
    throw error;
  } finally {
    connection.release();
  }
};

export default pool;