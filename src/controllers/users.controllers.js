import DB from "../models/db.js";

const pool = DB();

export const getUsers = async (req, res) => {
  try {
    const users = await pool.query(`SELECT * FROM users`);
    res.send(users.rows);
  } catch (e) {
    console.log(e);
  }
};

export const getUsersById = async (req, res) => {
  try {
    const { id } = req.params;
    const idNumber = parseInt(id);
    const userById = await pool.query("SELECT * FROM users WHERE id = $1", [
      idNumber,
    ]);
    res.send(userById.rows);
  } catch (e) {
    console.log(e);
  }
};

export const createUsers = async (req, res) => {
  try {
    const { name, lastname, age, email } = req.body;
    const verifyUsers = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );
    if (verifyUsers.rowCount === 1) {
      return res.send("Upps el usuario ya existe.");
    }

    const createUsers = await pool.query(
      `INSERT INTO users (name, lastname, age, email) VALUES ($1, $2, $3, $4)`,
      [name, lastname, age, email]
    );
    res.send("User created successfully");
  } catch (e) {
    console.log(e);
  }
};

export const updateData = async (req, res) => {
  try {
    const { name, lastname, age, email } = req.body;
    const id = parseInt(req.params.id);

    const verifyUsers = await pool.query("SELECT * FROM users WHERE id = $1", [
      id,
    ]);
    if (verifyUsers.rowCount === 0) {
      return res.send(
        "Upps el usuario que esta intentando actualizar no existe"
      );
    }

    const updateData = await pool.query(
      "UPDATE users SET name = $1, lastname = $2",
      [name, lastname]
    );

    res.send("The user's data has been updated.");
  } catch (error) {
    console.log(error);
  }
};

export const deleteUsers = async (req, res) => {
  const id = parseInt(req.params.id);

  const verifyUsers = await pool.query("SELECT * FROM users WHERE id = $1", [
    id,
  ]);
  if (verifyUsers.rowCount === 0) {
    return res.send("Upps el usuario que esta intentando actualizar no existe");
  }

  const deleteUsers = pool.query("DELETE FROM users WHERE id = $1", [id]);
  res.send("The user has been delete.");
};
