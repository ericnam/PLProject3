"use strict";

var Person = function() {
	var data = {
		// private data
        firstName:'firstName',
        $firstName: function(n){data.firstName = n;},
        lastName:'lastName',
        $lastName: function(n){data.lastName = n},
        email:'email',
        $email: function(n){data.email = n}
	}

	var F = function () {}; // constructor
	var f = new F(); // create instance

	// public data
	f.sname = 'Person'
    f.run = function (e) { // runs whatever is put in e
        return data[e];
    };
    f.toString = function() {
    	return "Name: " + data.firstName + " " + data.lastName + "\nEmail: " + data.email
    }

    return f;
}(); // create object

var Employee = function(p) {
		var data = {
		// private data; all commented out is already built in the Person Class
        // firstName:'firstName',
        // $firstName: function(n){data.firstName = n},
        // lastName:'lastName',
        // $lastName: function(n){data.lastName = n},
        // email:'email',
        // $email: function(n){data.email = n},
        socialSecurityNumber:'1234567890',
        $socialSecurityNumber: function(n){data.socialSecurityNumber = n}
	}

	var F = function () {}; // constructor
	F.prototype = p; // assigns Person as the superclass; inherits from Person
	var f = new F(); // create instance

	// public data
	f.sname = 'Person'
    f.run = function (e) {
        var r = data[e];
        if(r === undefined) return F.prototype.run(e); // if method does not exist here, run in superclass
        else return r;
    };
    f.toString = function() {
    	return F.prototype.toString() + "\nSocial security number: " + data.socialSecurityNumber
    }

    return f;
}(Person);

var Customer = function(p) {
		var data = {
		// private data; all commented out is already built in the Person Class
        // firstName:'firstName',
        // $firstName: function(n){data.firstName = n},
        // lastName:'lastName',
        // $lastName: function(n){data.lastName = n},
        // email:'email',
        // $email: function(n){data.email = n},
        customerNumber:'M01234',
        $customerNumber: function(n){data.customerNumber = n}
	}

	var F = function () {}; // constructor
	F.prototype = p; // assigns Person as the superclass; inherits from Person
	var f = new F(); // create instance

	// public data
    f.run = function (e) {
        var r = data[e];
        if(r === undefined) return F.prototype.run(e); // if method does not exist here, run in superclass
        else return r;
    };
    f.toString = function() {
    	return F.prototype.toString() + "\nCustomer Number: " + data.customerNumber
    }

    return f;
}(Person);

// var a1 = Object.create(Person);

// a1.run('$firstName')('asdf')
// document.writeln(a1.toString());

// var a2 = Object.create(Employee);
// a2.run('$firstName')('Richard');
// a2.run('$')
// document.writeln("<br>" +a2.toString());

// var a3 = Object.create(Customer);
// a2.run('$firstName')('Richj money');
// a2.run('$')
// document.writeln("<br>" +a2.toString());