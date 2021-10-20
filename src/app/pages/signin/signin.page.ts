import { NavController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import Swal from "sweetalert2";
import { environment } from '../../../environments/environment';

 

@Component({
  selector: "app-signin",
  templateUrl: "./signin.page.html",
  styleUrls: ["./signin.page.scss"]
})
export class SigninPage implements OnInit {
  validations_form: FormGroup;
  errorMessage: string = '';
  apiURL = environment.apiUrl;
  url = this.apiURL+'login'
  submitted = false;
  ress: any = {};
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router, private http: HttpClient,

    private navCtrl: NavController,
 

  ) { }

  ngOnInit() {

    this.validations_form = this.formBuilder.group({
      username: new FormControl('', Validators.compose([
        Validators.required,
        // Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(3),
        Validators.required
      ])),
    });
  }


  validation_messages = {
    'username': [
      { type: 'required', message: 'username is required.' },
      { type: 'pattern', message: 'Please enter a valid username.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  };

  forgotPassword(){

  }

  signIn(){
    
  }
  // loginUser(value) {
   

    
    // this.authService.loginUser(value)
    //   .then(res => {
    //     console.log(res);
    //     this.errorMessage = "";
    //     this.navCtrl.navigateForward('/dashboard');
    //   }, err => {
    //     this.errorMessage = err.message;
    //   })
  // }
  showErrorAlert() {
    Swal.fire('!', 'username or password  went wrong!', 'error')
  }
  loginUser(value) 

  {
    console.log('mark ',value);
    this.submitted = true;

    // stop here if form is invalid
    if (value.invalid) {


      return;
    } else {



        this.http.post(this.url, value).subscribe(
          res => {
            console.log(res);
            this.ress = res
            localStorage.setItem('username', this.ress.username);
            localStorage.setItem('userid', this.ress.id);
            localStorage.setItem('usertoken', this.ress.token);
            localStorage.setItem('userrole', this.ress.role);
            localStorage.setItem('mainurl', this.apiURL);

            console.log('userrole', this.ress.role);
            // tslint:disable-next-line: triple-equals
            if (this.ress.role == 'Admin'){
              this.router.navigate(['/home']);


              }
              else if (this.ress.role == 'Supervisor'){
                this.router.navigate(['/home']);

              }else{
                this.router.navigate(['/home']);

              }
          },
          (err: HttpErrorResponse) => {
            console.log(err.error);
            this.showErrorAlert();
            console.log(err.name);
            console.log(err.message);
            console.log(err.status);
          }
        );


    }
  }


  goToRegisterPage() {
   
    this.navCtrl.navigateForward('/register');
  }
}
