import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const createAccessToken = (user) => {
  return jwt.sign({ id_user: user.id_user }, "secretKey");
};

export const register = (req, res) => {
  const { username, password } = req.body;

  if (!username) return res.status(400).json("Podaj nazwę użytkownika.");
  if (!password) return res.status(400).json("Podaj hasło.");

  //Sprawdzenie czy user istnieje
  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, username, (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("Użytkownik już istnieje.");

    // Zahashowanie hasła
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    // Zapytanie dodania usera do bazy
    const q = "INSERT INTO users(`username`,`password`) VALUES (?)";
    const values = [username, hash];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Konto zostało utworzone.");
    });
  });
};

export const login = (req, res) => {
  //CHECK USER

  const q = "SELECT id_user, is_admin, password, username FROM users WHERE username = ?";

  const { username, password } = req.body;

  db.query(q, username, (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("Nie ma takiego użytkownika.");

    const user = data[0];

    // Sprawdzenie zgodności hasła
    const passwordVerified = bcrypt.compareSync(password, user.password);
    if (!passwordVerified) return res.status(400).json("Niepoprawna nazwa użytkownika lub hasło.");

    // Utworzenie tokenu JWT
    const accessToken = createAccessToken(user);

    res.json({
      id: user.id_user,
      access: accessToken,
      isAdmin: !!user.is_admin,
      username: user.username,
    });
  });
};

export const verify = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, "secretKey", (err, user) => {
      if (err) return res.status(403).json("Token jest nieprawidłowy.");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("Nie jesteś zalogowany.");
  }
};

export const logout = (req, res) => {};

export const getMyData = (req, res) => {
  const q = "SELECT id_user, username, user_img, is_admin FROM users WHERE id_user = ?";
  db.query(q, [req.user.id_user], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};
