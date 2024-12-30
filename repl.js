const repl = require("repl");

const local = repl.start("console-here:");

local.on('exit', () => {
    console.log('exit hexxxreeee');
    process.exit();
})