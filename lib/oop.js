class User{
  constructor(full_name, age, sex, job, password, username){
    this.name = full_name;
    this.age = age;
    this.sex = sex;
    this.job = job;
    _.this.password = password;
    this.username = username;
    this.isLoggedIn = 0;
  }
  getProfile(){
    return `Hello World, my name is ${this.name}, I am ${this.age} and i do ${this.job} for a living`;
  }
  editProfile(name, age, job, password){
    this.name = name;
    this.age = age;
    this.job = job;
    _.this.password = password;
  }
  login(username, password){
    if(username === this.username && password
     === _.this.password){
       this.isLoggedIn = 1;
       return `Hi, ${this.username}, welcome back home`;
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

class Admin extends User {
  constructor(){
    super(full_name, age, sex, job, password, username)
    this.isAdmin = 1;
  }
  getProfile(){
     return `Hello World, my name is ${this.name}, I am an Administrator`;
  }
  login(username, password){
    if(username === this.username && password
     === _.this.password && this.isAdmin === 1){
       this.isLoggedIn = 1;
       return `Hi, ${this.username}, welcome to the admin panel`;
     }
     else if(username === this.username && password
     === _.this.password && this.isAdmin !== 1){
       return `Hi, ${this.username}, Access denied. Yo cant access the Admin Panel`;
     }
    else{
      return "Invalid username or password supplied";
    }
  }
  deleteAUser(username){
    return `${username} has been deleted successfully`;
  }
  banAUser(username){
    return `${username} has been banned successfully`;
  }
} 