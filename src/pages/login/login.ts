import { Component } from "@angular/core";
import { IonicPage, NavController, ToastController } from "ionic-angular";

import { User } from "../../providers";
// import { LocationTracker } from "../../providers";
import { MainPage, SignupPage } from "../";

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  /*
  account: { email: string, password: string } = {
    email: 'test@example.com',
    password: 'test'
  };
*/
  account: { usuario: string; senha: string } = {
    usuario: "",
    senha: ""
  };

  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    // public locationTracker: LocationTracker,
    public toastCtrl: ToastController) {
      this.loginErrorString = "Não foi possível entrar na sua conta. Por favor confirme os seus dados e tente novamente.";
  }

  // Attempt to login in through our User service
  doLogin() {
    this.user.login(this.account).subscribe(
      resp => {
        //this.navCtrl.pop();
        this.navCtrl.setRoot(MainPage);
        //this.startTracking()
        //this.navCtrl.push(MainPage);
        //if (this.user._user['setpassword'] == 'N'){
        //  this.navCtrl.push(MainPage);
        //} else {
        //  this.navCtrl.push(SignupPage);
        //}

      },
      err => {
        //this.navCtrl.push("LoginPage");
        // Unable to log in
        let toast = this.toastCtrl.create({
          message: this.loginErrorString,
          duration: 3000,
          position: "top"
        });
        toast.present();
      }
    );
  }

  // startTracking(){
  //   this.locationTracker.startTracking(this.user._user[0]);
  // }
}
