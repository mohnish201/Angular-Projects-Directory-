export class User {
name: any;
  constructor(
    public email: string,
    public password: string,
    public confirm_password: string,
    public first_name:string,
    public last_name:string,
    public phone:string,
    public profile:string,
    public dob:string
  ) {}
}
