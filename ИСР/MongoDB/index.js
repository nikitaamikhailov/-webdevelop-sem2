const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Подключение к созданной БД
mongoose.connect("mongodb+srv://Nikitabukin:Nikitabukin@cluster0.wcetp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true });

// Создание схемы
const personSchema = new Schema({
    name: { type: String, default: 'anonymous' },
    age: { type: Number, min: 18, index: true },
    bio: { type: String, match: /[a-zA-Z ]/ },
    date: { type: Date, default: Date.now },
});

// Использование Mongoose
const personModel = mongoose.model('users', personSchema);

// Вставка
const insert = new personModel({
    name: 'Nikita',
    age: '20',
    bio: 'Description',
});
insert.save(function (err, comment) {
    mongoose.disconnect();

    if (err) console.log(err);

    else console.log('saved', comment);
});

// Вывод всех данных
personModel.find({}, function(err, docs){
    mongoose.disconnect();
     
    if(err) return console.log(err);
     
    console.log(docs);
});
// Вывод по имени
personModel.findOne({name: "Nikita"}, function(err, doc){
    mongoose.disconnect();
     
    if(err) return console.log(err);

    console.log(doc);
});
// Вывод по id
const id = '60db2d751545b10098c14ed9'
personModel.findById(id, function(err, doc){
    mongoose.disconnect();
     
    if(err) return console.log(err);
     
    console.log(doc);
});

// Удаление
personModel.deleteOne({name: "Nikita"}, function(err, result){
    mongoose.disconnect();
     
    if(err) return console.log(err);
     
    console.log(result);
});

// Обновление
personModel.updateOne({name: "Nikita"}, {name: "Nikita Bukin"}, function(err, result){
     
    mongoose.disconnect();
    if(err) return console.log(err);
    console.log(result);
});

