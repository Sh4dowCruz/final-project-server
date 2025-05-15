/*==================================================
/database/utils/seedDB.js

It seeds the database with several initial students and campuses.
==================================================*/
const { Campus, Student } = require('../models');  // Import database models

// Seed database
const seedDB = async () => {
	// Create a new campus
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		address: "695 Park Ave, New York, NY 10065",
		description: "This is a school in New York, New York."
	});
	// Create a new campus
	const dummy_campus2 = await Campus.create({
		name: "Queens College",
		address: "65-30 Kissena Blvd, Queens, NY 11367",
		description: "This is a school in Queens, New York."
	});
	// Create a new campus
	const dummy_campus3 = await Campus.create({
		name: "Brooklyn College",
		address: "2900 Bedford Ave, Brooklyn, NY 11210",
		description: "This is a school in Brooklyn, New York."
	});
	
	// Create a new student for a campus
	const dummy_student = await Student.create({
		firstname: "Joe",
    	lastname: "Smith",
		email: "joe@example.com",
		imageUrl: "https://i.ebayimg.com/images/g/F94AAOSw5lRnB~Aa/s-l1600.jpg",  
  		gpa: 3.5
	});
	// Create a new student for a campus
	const dummy_student2 = await Student.create({
		firstname: "Mary",
    	lastname: "Johnson",
		email: "mary@example.com",
		imageUrl: "https://ih1.redbubble.net/image.5029773344.9757/st,medium,507x507-pad,600x600,f8f8f8.u2.jpg",
		gpa: 3.8
	});

	// Add students to campuses
	await dummy_student.setCampus(dummy_campus);
	await dummy_student2.setCampus(dummy_campus2);
}

// Export the database seeding function
module.exports = seedDB;