class User{
  constructor(full_name, age, sex, job, password, username){
    this.name = full_name;
    this.age = age;
    this.sex = sex;
    this.job = job;
    this._password = password; //Private property
    this.username = username;
    this.isLoggedIn = 0;
  }
  getProfile(){
    return `Hello World, my name is ${this.name}, I am ${this.age} and i do ${this.job} for a living`;
  }
  editProfile(name, age, job, password){
    if(this.isLoggedIn !== 1){
      return "Insufficient Permission to perform operation";
    }
    this.name = name;
    this.age = age;
    this.job = job;
    this._password = password;
    return "Profile edited successfully!";
  }
  login(username, password){
    if(username === this.username && password
     === this._password){
       this.isLoggedIn = 1;
       return `Hi ${this.username}, welcome back home`;
     }
    else{
      return "Invalid username or password supplied";
    }
  }
  logout(){
    if(this.isLoggedIn === 1){
      this.isLoggedIn = 0;
      return  "Logout successful!";
    }
    else{
      return "You are not logged in";
    }
  }
}

class Admin extends User { //Inherit from the User class
  constructor(full_name, age, sex, job, password, username){
    super(full_name, age, sex, job, password, username) //Import the parent constructor
    this._isAdmin = 1;
  }
  getProfile(){
     return `Hello World, my name is ${this.name}, I am an Administrator`;
  }
  login(username, password){
    if(username === this.username && password
     === this._password && this.isAdmin === 1){
       this.isLoggedIn = 1;
       return `Hi ${this.username}, welcome to the admin panel`;
     }
     else if(username === this.username && password
     === this._password && this.isAdmin !== 1){
       return `Hi, ${this.username}, Access denied. Yo cant access the Admin Panel`;
     }
    else{
      return "Invalid username or password supplied";
    }
  }
  deleteAUser(username){
    if(this._isAdmin === 1){
      return `${username} has been deleted successfully`;
    }
    else{
      return "Insufficient Permission";
    }
  }
  banAUser(username){
    return `${username} has been banned successfully`;
  }
} 

module.exports = { //Export the Classes to be used in our test file
  User, Admin
};