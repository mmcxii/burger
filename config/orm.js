const db = require('./connection');

const selectAll = (table) => {
    const sql = `SELECT * FROM ${table}`;

    db.query(sql, (err, res) => {
        if (err) throw err;

        db.end();
    });
};

const insertOne = (table, newRow) => {
    const sql = `INSERT INTO ${table}(name)
                 VALUES ("${newRow}")`;

    db.query(sql, (err) => {
        if (err) throw err;

        db.end();
    });
};

const updateOne = (table, id, column, newVal) => {
    const sql = `UPDATE ${table} SET ${column} = ${newVal} WHERE id = ${id}`;

    db.query(sql, (err, res) => {
        if (err) throw err;

        db.end();
    });
};

module.exports = { selectAll, insertOne, updateOne };
