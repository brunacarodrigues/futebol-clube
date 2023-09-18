import * as bcrypt from 'bcryptjs';
import JWT from '../utils/JWT';
import { ILogin } from '../Interfaces/ILogin';
import UserModel from '../models/UserModel';

export default class UserService {
  constructor(private model = new UserModel()) {}

  login = async (user: ILogin) => {
    const findUser = await this.model.findUserByEmail(user.email);

    if (!findUser || !bcrypt.compareSync(user.password, findUser.password)) {
      return { code: 401, message: 'Invalid email or password' };
    }

    const token = JWT.sign({ email: user.email });
    return { code: 200, token };
  };

  validateLogin = async (token: string | undefined) => {
    if (!token) return { code: 401, message: 'Token not found' };

    try {
      const checkToken = JWT.verify(token);
      const checkUser = await this.model.findUserByEmail(checkToken.email);
      if (!checkUser) return { code: 401, message: 'User not found' };
      return { code: 200, role: checkUser.role };
    } catch (error) {
      return { code: 401, message: 'Token must be a valid token' };
    }
  };

  getRoleObject = async (email: string) => {
    const user = await this.model.findUserByEmail(email);
    if (!user) return { status: 'UNAUTHORIZED', data: { message: 'Invalid email' } };
    return { status: 'SUCCESSFUL', data: user.role };
  };
}
