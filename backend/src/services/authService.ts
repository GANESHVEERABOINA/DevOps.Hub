import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { userRepository } from '../repositories/userRepository';
import { JWT_SECRET, JWT_EXPIRES_IN, BCRYPT_SALT_ROUNDS } from '../config/auth';
import { AppError } from '../utils/errors';

export const authService = {
  register: async (email: string, password: string, full_name: string) => {
    const existingUser = await userRepository.findByEmail(email);
    if (existingUser) throw new AppError('Email already registered', 409);
    const password_hash = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);
    const newUser = await userRepository.createUser({ email, password_hash, full_name });
    // Generate token
    const token = jwt.sign({ userId: newUser.id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
    return { user: newUser, token };
  },

  login: async (email: string, password: string) => {
    const user = await userRepository.findByEmail(email);
    if (!user) throw new AppError('Invalid credentials', 401);
    const valid = await bcrypt.compare(password, user.password_hash);
    if (!valid) throw new AppError('Invalid credentials', 401);
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
    return { user, token };
  },

  // కొత్తగా యాడ్ చేసిన రియల్ Google Login లాజిక్ 👇
  googleLogin: async (email: string, full_name: string, picture: string) => {
    // 1. ఈ ఈమెయిల్ తో యూజర్ ఉన్నాడా లేదా అని చెక్ చేయడం
    let user = await userRepository.findByEmail(email);

    // 2. యూజర్ లేకపోతే (అంటే కొత్తగా వెబ్‌సైట్ కి వస్తే), ఆటోమాటిక్ గా అకౌంట్ క్రియేట్ చేయడం
    if (!user) {
      // గూగుల్ ద్వారా వచ్చాడు కాబట్టి వాడికి పాస్‌వర్డ్ ఉండదు, సో ఒక రాండమ్ పాస్‌వర్డ్ జనరేట్ చేసి సేవ్ చేస్తున్నాం
      const randomPassword = Math.random().toString(36).slice(-10) + 'Go0gle@123!';
      const password_hash = await bcrypt.hash(randomPassword, BCRYPT_SALT_ROUNDS);
      
      user = await userRepository.createUser({ 
        email, 
        password_hash, 
        full_name 
      });
    }

    // 3. ఇప్పుడు డమ్మీ కాకుండా, నీ ఒరిజినల్ JWT సీక్రెట్ తో రియల్ టోకెన్ జనరేట్ చేస్తున్నాం
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

    // 4. ఫ్రంట్‌ఎండ్‌కి టోకెన్ మరియు యూజర్ డేటాని పంపుతున్నాం
    // (ఒకవేళ నీ ఫ్రంట్‌ఎండ్ లో ప్రొఫైల్ పిక్చర్ కూడా కావాలంటే avatar పంపుకోవచ్చు)
    return { 
      user: { ...user, avatar: picture }, 
      token 
    };
  },
};