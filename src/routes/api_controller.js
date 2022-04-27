import pool from "../database.js";

export const getRaces = async (req, res) => {
  try {
    const userDataQuery = await pool.query("SELECT * FROM userdata");
    const userData = userDataQuery[0];

    return res.json(userData);
  } catch (err) {
    console.log(err);
  }
  return;
};

export const getRace = async (req, res) => {};

export const createRace = async (req, res) => {};

export const deleteRace = async (req, res) => {};

export const updateRace = async (req, res) => {};
