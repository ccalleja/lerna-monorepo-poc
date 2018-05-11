const log = jest.fn();
console.log = log;
const grocery = require("./");
test("outputs correct string", () => {
    expect(log.mock.calls.length).toBe(3);
    expect(log.mock.calls[0][0]).toBe("Main App and TEST");
    // mocked
    /*expect(log.mock.calls[1][0]).toBe("TEST");
    expect(log.mock.calls[2][0]).toBe("TEST");*/
    // integrated
    expect(log.mock.calls[1][0]).toBe("Package A and TEST");
    expect(log.mock.calls[2][0]).toBe("Package B and TEST");
});