const {db, Vegetable} = require('./models');

db.sync({force: true})
    .then(() => {
        console.log('Database synced!')
        return Promise.all([ 
            Vegetable.create({
            name: 'cucumber',
            color: 'green',
            planted_on: 8/6/2018
        
        }),
        Vegetable.create({
            name: 'kale',
            color: 'green',
            planted_on: 8/6/2018
         }),
        Vegetable.create({
        name: 'celery',
        color: 'green',
        planted_on: 8/6/2018
        })
    ])   
    .then(db.close())
    .catch(err => {
        console.log('something when wrong');
        console.log(err)
        db.close();
    })

// const veggieOne = db.Vegetable.create({
//     name: 'cucumber',
//     color: 'green',
//     planted_on: 8/6/2018

// })