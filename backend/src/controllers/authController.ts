// backend/src/controllers/authController.ts
import { Request, Response, NextFunction } from 'express';
import { authService } from '../services/authService';
import { validateResult } from '../middlewares/validationMiddleware';
import axios from 'axios';

export const authController = {
  register: async (req: Request, res: Response, next: NextFunction) => {
    try {
      validateResult(req, res, next);
      const { email, password, full_name } = req.body;
      const result = await authService.register(email, password, full_name);
      res.status(201).json(result);
    } catch (err) {
      next(err);
    }
  },

  login: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      const result = await authService.login(email, password);
      res.json(result);
    } catch (err) {
      next(err);
    }
  },

  // ఇది కచ్చితంగా authController లోపలే ఉండాలి
  googleLogin: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { token } = req.body;

      if (!token) {
        return res.status(400).json({ message: "Google Token is required" });
      }

      // 1. గూగుల్ సర్వర్ నుండి యూజర్ డీటెయిల్స్ తెచ్చుకోవడం
      const googleResponse = await axios.get(`https://www.googleapis.com/oauth2/v3/userinfo`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      const { email, name, picture } = googleResponse.data;

      if (!email) {
        return res.status(400).json({ message: "Invalid Google Token" });
      }

      // 2. మనం రాసిన ఒరిజినల్ authService ని కాల్ చేయడం
      const result = await authService.googleLogin(email, name, picture);
      
      // 3. సక్సెస్ ఫుల్ గా ఫ్రంట్‌ఎండ్ కి డేటా పంపడం
      res.status(200).json(result);

    } catch (err) {
      console.error("Google Auth Error:", err);
      res.status(401).json({ message: "Google authentication failed" });
    }
  },
};