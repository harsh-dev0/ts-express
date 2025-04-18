import { Request, Response } from 'express';
import users from '../models/users.json';

// Get all users
export const getAllUsers = (req: Request, res: Response) => {
  res.json(users);
};

// Get user by ID
export const getUserById = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);

  if (!user) {
    res.status(404).json({ message: 'User not found' });
return; // Ensure the function exits after sending a response
  }

  res.json(user);
};
