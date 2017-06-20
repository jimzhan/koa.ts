import Koa from 'koa';

let app = new Koa();

app.use(async (ctx) => {
   let start = new Date;
   let ms = Number(new Date) - Number(start);

   ctx.body = ms;
});

app.use(function () {
    this.body = 'Hello World';
});

app.listen(3000);
