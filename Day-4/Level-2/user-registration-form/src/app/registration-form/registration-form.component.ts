import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent {
  userModel = new User('', '', '', '', '', '', '','' );
  public passError: string = '';
  public isPassError: boolean = false;
  public isPassMatch: boolean = false;
  public passMatch: string = '';
  public imagePreview: string | null = null;
  public isUnder18: boolean = false;

  onFileChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imagePreview = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    } else {
      this.imagePreview = null;
    }
  }

  validatePassword() {
    const hasUppercase = /[A-Z]/.test(this.userModel.password);
    const hasDigit = /\d/.test(this.userModel.password);
    const hasSpecialChar = /[!@#%^&*()_+{}:"?/<>,.]/.test(
      this.userModel.password
    );

    if (this.userModel.password !== '') {
      if (this.userModel.password == '') {
        this.passError = 'Password is required.';
        this.isPassError = true;
      } else if (!hasUppercase) {
        this.passError = 'Should Contain one UpperCase';
        this.isPassError = true;
      } else if (!hasDigit) {
        this.passError = 'Should Contain one Digit';
        this.isPassError = true;
      } else if (!hasSpecialChar) {
        this.passError = 'Should Conatin one Special Character';
        this.isPassError = true;
      } else if (this.userModel.password.length < 6) {
        this.passError = 'Password must be at least 6 characters long.';
        this.isPassError = true;
      } else {
        this.passError = '';
        this.isPassError = false;
      }
    } else {
      this.isPassError = false;
    }
  }

  confirmPasswordChecker() {
    if (this.userModel.confirm_password !== '') {
      if (this.userModel.password !== this.userModel.confirm_password) {
        this.passMatch = 'Password must match';
        this.isPassMatch = true;
      } else {
        console.log(this.userModel);
        this.isPassMatch = false;
        this.passMatch = '';
      }
    } else {
      this.isPassMatch = false;
      this.passMatch = '';
    }
  }

  checkAge(dateOfBirth: string) {
    const selectedDate = new Date(dateOfBirth);
    const today = new Date();
    const age = today.getFullYear() - selectedDate.getFullYear();

    if (age < 18) {
      this.isUnder18 = true;
    } else {
      this.isUnder18 = false;
    }
  }

  onSubmit() {
    this.validatePassword();
    console.log(this.userModel);
    alert("Registration Successfull")
  }
}
