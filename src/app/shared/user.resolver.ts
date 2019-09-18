import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from "@angular/router";
import { UserService } from './user.service';
import { FirebaseUserModel } from './user.model';

@Injectable()
export class UserResolver implements Resolve<FirebaseUserModel> {

  constructor(public userService: UserService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot) : Promise<FirebaseUserModel> {

    let user = new FirebaseUserModel();

    return new Promise((resolve, reject) => {
      this.userService.getCurrentUser()
      .then(res => {
        if(res.providerData[0].providerId == 'password'){
          console.log(res);
          return resolve(user);
        }
        else{
          console.log(res);         
          return resolve(user);
        }
      }, err => {
        this.router.navigate(['/signin']);
        return reject(err);
      })
    })
  }
}
