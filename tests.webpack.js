var context = require.context('./src/app', true, /.specs\.js$/);
context.keys().forEach(context);