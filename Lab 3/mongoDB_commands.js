//create db

use student

//create collection

db.createCollection("students")

show collections

//insert into collection

db.students.insert({

    rollNo:19,

    age:18,

    contact:9244061984,

    emailId:"vineeth.cs18@bmsce.ac.in"

})

db.students.find().pretty()

db.students.insertMany([{

    rollNo:18,

    age:18,

    contact:9243061984,

    emailId:"kavya.cs18@bmsce.ac.in"

},

{

    rollNo:10,

    age:18,

    contact:7243061984,

    emailId:"sanjay.cs18@bmsce.ac.in"

},

{

    rollNo:31,

    age:18,

    contact:7443061984,

    emailId:"nanma.cs18@bmsce.ac.in"

}])

//find all

db.students.find().pretty()

//update

db.students.updateOne({rollNo:10},

{ $set: { emailId:"sanjana.cs18@bmsce.ac.in"}})

//find specific

db.students.find({rollNo:10}).pretty()

//insert and then replace

db.students.insert({

    rollNo:11,

    age:18,

    contact:9243861984,

    emailId:"abs.cs18@bmsce.ac.in",

    name:"ABC"

})

db.students.replaceOne({rollNo:11},

 {  rollNo:11,

    age:18,

    contact:9243861984,

    emailId:"abs.cs18@bmsce.ac.in",

    name:"FEM"})

db.students.find({rollNo:11}).pretty()

//remove row

db.students.remove({name:"FEM"})



//find all

db.students.find().pretty();



//mongoexport --db=student --collection=students --type=csv --fields=rollNo,age,contact,emailId,name --out=D:\studentinfo.csv



//drop databse

db.dropDatabase()



mongoimport --db student --collection students --type csv --drop D:\studentinfo.csv --headerline  
