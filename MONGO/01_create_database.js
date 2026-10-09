use("companyDB");

db.employees.insertOne({
    name: "Abdul",
    role: "Linux Administrator",
    experience: "Fresher"
});

print("Database and employee document created");
