import { User } from "../data-access/models/users";
export class UserService {
  public async createUser(userData: User): Promise<JSON> {
    const newUser: User = { id: userData.id, name: userData.name };
    const jsonObj = JSON.parse(JSON.stringify(newUser));
    return await jsonObj;
  }
}
