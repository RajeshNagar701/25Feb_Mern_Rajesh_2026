
/*

The module.exports is a special object which is included in every JavaScript 
file in the Node.js application by default. The module is a variable that represents 
the current module, and exports is an object that will be exposed as a module. 
So, whatever you assign to module.exports will be exposed as a module.

Let's see how to expose different types as a module using module.exports.


*/

// this my custome own /local module

//  module.exports = 'Hello world';   // export any string


// module.exports = { firstName: 'James', lastName: 'Bond' } // export any object



//export any function
var todayDate=()=>{
	
	var today = new Date();
	var date = (today.getDate())+'-'+ (today.getMonth()+1) +'-'+(today.getFullYear());
	return date;
}

// local module export
module.exports = todayDate ;


/*
//Export Function as a Class


module.exports = function (firstName, lastName) { 
	this.firstName = firstName; 
	this.lastName = lastName; 
	this.fullName = function () { 
	return this.firstName + ' ' + this.lastName; 
	} 
}
*/