import User from '../database/models/UserModel';
import { IUser } from '../Interfaces/IUser';

export default class UserModel {
  protected model = User;

  async findUserByEmail(email: string): Promise<IUser | null> {
    const user = await this.model.findOne({ where: { email } });
    if (!user) return null;
    return user.dataValues;
  }
}
