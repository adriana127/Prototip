
import {NextFunction, Request, Response} from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";


export class AuthorizationController {
    private userRepository = getRepository(User);

    public async login(request: Request, response: Response, next: NextFunction) {
        
        await this.userRepository.findOne(
            { where:
                { username: request.body.username }
            }).then(
            user => {
                if (!user) {
            response.json({
              message: 'Failed: User Not Found',
            });
         } else
            {
                if(user.password=== request.body.password)
                return response.json({
                    message: 'Amazing: Fella was Found'

                  });
                  else
                  return response.json({
                    message: 'Amazing: Fella was Found but  has different pass'

                  });
            }}
        ).catch(err => {
        console.log(err);
        return response.status(401).json(err);
      });
    }



    
}