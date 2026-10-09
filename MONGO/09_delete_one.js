use("companyDB");

db.students.deleteOne({
    name: "Rahul"
});

print("Student deleted successfully");
