use("companyDB");

db.students.updateMany(
    { age: { $gt: 23 } },
    { $set: { course: "DevOps" } }
);

print("Students updated successfully");
