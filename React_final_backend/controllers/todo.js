const repo = require('../model/todo');

module.exports = {
    async list (ctx) {
        const todos = await repo.list(ctx.db);
        ctx.body = todos;
    },
    async create (ctx) {
        const { contents } = ctx.request.body;
        console.log('contents ' + contents)
        const insertTodo = await repo.store(ctx.db, contents);
        if (!insertTodo.id) {
            ctx.throw('cannot create new todo.');
        }
        ctx.body = insertTodo;
    },
    async get (ctx) {
        const todo = await repo.find(ctx.db, ctx.params.id);
        if (!todo) {
            ctx.throw('todo not found.');
        }
        ctx.body = todo;
    },
    async delete (ctx) { 
        console.log('ctx.params.id ' + ctx.params.id)
        const result = await repo.remove(ctx.db, ctx.params.id);
        if (!result) {
            ctx.throw('todo not found.');
        }
        ctx.body = {};
    },
    async setComplete (ctx) { 
        const result = await repo.setComplete(ctx.db, ctx.params.id, 1);
        if (!result) {
            ctx.throw('todo not found.');
        }
        ctx.body = {};
    },
    async setIncomplete (ctx) {
        const result = await repo.setComplete(ctx.db, ctx.params.id, 0);
        if (!result) {
            ctx.throw('todo not found.');
        }
        ctx.body = {};
    }
}