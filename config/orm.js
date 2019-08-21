const db = require('./connection');

const selectAll = () => {
    const sql = 'SELECT * FROM burgers';

    db.query(sql, (err, res) => {
        if (err) throw err;

        console.log(res);

        db.end();
    });
};

const insertOne = (newBurger) => {
    const sql = `INSERT INTO burgers(name)
                 VALUES ("${newBurger}")`;

    db.query(sql, (err) => {
        if (err) throw err;

        console.log(`${newBurger} successfully inserted into burgers.`);

        db.end();
    });
};

const updateOne = (id, newVal) => {
    const sql = `UPDATE burgers SET devoured = ${newVal} WHERE id = ${id}`;

    db.query(sql, (err, res) => {
        if (err) throw err;

        console.log('Successfully updated burger.');

        db.end();
    });
};

updateOne(2, 0);

module.exports = { selectAll, insertOne, updateOne };
