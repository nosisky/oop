const assert = require('chai').assert;

const User = require('./lib/oop.js').User;

const Admin = require('./lib/oop.js').Admin;

describe("Test the methods in the User Class", function() {
	let Bola = new User("Bolaji Amusan", 23, "male", "Banking", "bola123", "bola");
  it("should return 'Hello World, my name is Bolaji Amusam, I am an Administrator' for getProfile() ", function() {
    assert(
      Bola.getProfile(), 'Hello World, my name is Bolaji Amusan, I am 23 and i do Banking for a living')
  });
  it("should return 'logout successful' for logout() ", function() {
    assert(
      Bola.logout(), "Logout successful!")
  });
   it("should return 'Profile edited successfully! for editProfile()", function() {
    assert(
      Bola.editProfile("Bolaji Usain", 24, "Trader", "bola234"), "Profile edited successfully!")
  });
   it("should return 'Hi bola, welcome back home for login() ", function() {
    assert(
      Bola.login("bola", "bola123"), "Hi bola, welcome to the admin panel")
  });
});

describe("Test the methods in the Admin Class", function() {
	let Bola = new Admin("Bolaji Amusan", 23, "male", "Banking", "bola123", "bola");
  it("should return 'Hello World, my name is Bolaji Amusam, I am an Administrator' for getProfile() ", function() {
    assert(
      Bola.getProfile(), 'Hello World, my name is Bolaji Amusan, I am 23 years and i do Banking for a living')
  });
  it("should return 'Logout successful!' for logout() ", function() {
    assert(
      Bola.logout(), "Logout successful!")
  });
   it("should return 'Profile edited successfully! for editProfile()", function() {
    assert(
      Bola.editProfile("Bolaji Usain", 24, "Trader", "bola234"), "Profile edited successfully!")
  });
   it("should return 'Hi bola, welcome to the admin panel", function() {
    assert(
      Bola.login("bola", "bola123"), "Hi bola, welcome to the admin panel")
  });
  it("should return true for instanceof Admin", function() {
    assert(
      Bola instanceof Admin, true)
	});
  it("should return 'Bola has been deleted successfully' for deleteAUser()", function() {
    assert(
      Bola.deleteAUser("John"), "John has been deleted successfully")
  });
  it("should return 'Bisola has been Banned successfully' for banAUser()", function() {
    assert(
      Bola.banAUser("Bisola"), "Bisola has been deleted successfully")
  });
});