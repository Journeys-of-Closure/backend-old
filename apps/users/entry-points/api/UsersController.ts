import { Request, Response } from "express";
import { UserService } from "../../domain/UserService";
import User from "../../../../libraries/authenticator/tokenUtils";
class UsersController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public home(req: Request, res: Response) {
    const userData: User = req.body;
    return this.userService.createUser(userData);
  }
}
export const usersController = new UsersController();
