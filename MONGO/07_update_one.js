use("companyDB");

db.employees.updateOne(
    { name: "Abdul" },
    { $set: { role: "Cloud Engineer" } }
);

print("Employee updated successfully");
