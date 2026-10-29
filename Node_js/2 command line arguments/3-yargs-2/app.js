



const yargs = require('yargs')

// Customize yargs version
yargs.version('1.1.0')

// Create add command  nodemon index.js Heading --title="Diwali" --body="50% Diwali Sale "
yargs.command({
    command: 'Heading',
    describe: 'Add a new note',
    builder: {  // arguments 
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})



yargs.command({
    command: 'sum',
    describe: 'Add a new note',
    builder: {  // arguments 
        a: {
            describe: 'Note title',
            demandOption: true,
            type: 'number'
        },
        b: {
            describe: 'Note body',
            demandOption: true,
            type: 'number'
        }
    },
    handler: function (argv) {
        console.log('sum of a & b are : ' + (argv.a+argv.b));
    }
})

yargs.parse()