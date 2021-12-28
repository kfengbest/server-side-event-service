test('name1', () => {
    expect(2+2).toBe(4);
})

test('null', () => {
    let n = null;
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
})

test('number', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
})

test('string', () => {
    expect('team').not.toMatch(/I/);
    expect('Team').toMatch(/eam/);
})

test('array', () => {
    let list = ['aa', 'bb', 'cc'];
    expect(list).toContain('bb');
})

test('object assignment', () => {
    const data = { one : 1};
    data['two']  = 2;

    expect(data).toEqual({one : 1, two : 2});
})

function throwAnError(msg) {
    msg = msg || "I am wrong";
    throw new Error(msg);
}

test('error test', () => {
    expect(() => throwAnError()).toThrow();
    expect(() => throwAnError()).toThrow(Error);
})


let delayedPromis = (ms, id, err) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!err) {
                resolve(id + " done");
            } else {
                reject(id + " failed");
            }
        }, ms)
    });
}

test('test promise success', () => {
    return delayedPromis(200, "aa")
            .then(data => {
                expect(data).toMatch(/aa/);
            })
})

test('test promise failed', () => {
    return expect(delayedPromis(200, "aa", true)).rejects.toBe("aa failed");
})

test('test promise with resolve', () => {
    return expect(delayedPromis(200, "bb", false)).resolves.toBe("bb done");
})

test('test await with return', async () => {
    const d = await delayedPromis(200, 'aa');
    expect(d).toBe('aa done');
})

test('test await', async () => {
    await expect(delayedPromis(200, "dd", false)).resolves.toBe("dd done");
    await expect(delayedPromis(200, "dd", true)).rejects.toBe("dd failed");
    await expect(delayedPromis(200, "dd", true)).rejects.not.toBe("others");

})

test("jest.fn calling", () => {
    let mockFn = jest.fn();
    let res = mockFn(1,2,3);

    expect(res).toBeUndefined();
    expect(mockFn).toBeCalled();
    expect(mockFn).toBeCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith(1,2,3);

})

test("jest.fn return value", () => {
    let mockFn = jest.fn().mockReturnValue(5);
    expect(mockFn()).toBe(5);
})

test("jest.fn with implementation", () => {
    let mockFn = jest.fn((a,b) => {
        return a + b;
    })

    expect(mockFn(3,2)).toBe(5);
})

test('jest.fn return Promise', async () => {
    let mockFn = jest.fn().mockResolvedValue('default');
    let res = await mockFn();

    expect(res).toBe('default');
})

function forEach(items, callback) {
    for(let i = 0; i < items.length; i++) {
        callback(items[i]);
    }
}

test('mock property', () => {
    const mockCallback = jest.fn( x => x + 2);
    
    forEach([2,3], mockCallback);

    expect(mockCallback.mock.calls.length).toBe(2);
    expect(mockCallback.mock.calls[1][0]).toBe(3); // parameter of 2nd call is 3
    expect(mockCallback.mock.results[0].value).toBe(4);
})