const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/plantr')


const Gardener = db.define('gardener', {
    name: Sequelize.STRING,
    age: Sequelize.INTEGER,
})

const Plot = db.define('plot', {
    size: Sequelize.INTEGER,
    shaded: Sequelize.BOOLEAN,
})

const Vegetable = db.define('vegetable', {
    name: Sequelize.STRING,
    color: Sequelize.STRING,
    planted_on: Sequelize.DATE,
})

Plot.belongsTo(Gardener);
Gardener.hasOne(Plot);

Plot.belongsToMany(Vegetable, {through: 'vegPlot'})
Vegetable.belongsToMany(Plot, {through: 'vegPlot'});

Gardener.belongsTo(Vegetable, {as: 'favoriteVegetableId'})

module.exports = {db, Vegetable};

