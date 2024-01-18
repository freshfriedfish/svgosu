const {Command} = require('commander');

function firstTest(aVal) {
    return aVal + aVal;
}

test('a test', () => {
    const program = new Command();
    program.exitOverride();
    program.parse(["node", "main.js", "path", "ABC123"]);
    expect(firstTest(10)).toBe(20);
});

