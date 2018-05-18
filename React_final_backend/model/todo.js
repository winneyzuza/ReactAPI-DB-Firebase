module.exports = {
    async list (db) {
        const [row] = await db.query(`
            SELECT  id,contents
            FROM todos
        `)
        return row.map(t => {
            return {
                id: t.id,
                contents: t.contents,
                completed: t.completed
            }
        });
    },
    async find (db, id) {
        const [row] = await db.query(`
            SELECT id, name
            FROM todos
            WHERE id = ?
        `, [+id]);
        const todo = row[0];
        if (!todo) {
            return false;
        }
        return {
            id: todo.id,
            title: todo.title,
            completed: todo.completed
        };
    },
    async store (db, contents) {
        const [row] = await db.query(`
            INSERT INTO todos (contents) VALUES
            (?)
        `, [contents]);
        if (!row.insertId) {
            return false;
        }
        return {
            id: row.insertId,
            contents,
            completed: 0
        };
    },
    async remove (db, id) {
        const [row] = await db.query(`
            DELETE FROM todos WHERE id = ?
        `, [+id]);
        return row.affectedRows;
    },
    async setComplete (db, id, completed) {
        const [row] = await db.query(`
            UPDATE todos SET completed = ?
            WHERE id = ?
        `, [completed, +id]);
        return row.affectedRows;
    }
}