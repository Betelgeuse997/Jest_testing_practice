const functions = require('./functions');

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log('Database Initialized...');
// const closeDatabase = () => console.log('Database Closed...');

const nameCheck = () => console.log('Checking Name....');

describe('checking names', () => {
    beforeEach(() => nameCheck());
    
    test('User is Jeff', () => {
        const name = 'Jeff';
        expect(name).toBe('Jeff');
    });

    test('User is Karen', () => {
        const name = 'Karen';
        expect(name).toBe('Karen');
    });
});

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

//toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

//toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue(0)).toBeFalsy();
});

//toBe is for primitive types. toBe will not work on objects(it is reference type) or arrays
//should use toEqual in case of objects pr arrays
test('User should be Vishnu Swaroop object', () => {
    expect(functions.createUser()).toEqual({ firstName: 'Vishnu', lastName: 'Swaroop'});
});

//less than and greater than
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
});
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});

//regex
test('There is no I in team', () => {
    expect('teami').not.toMatch(/I/);
});

//array
test('Admin should be in usernames', () => {
    usernames = ['john','karen','admin'];
    expect(usernames).toContain('admin');
});

//working with async data
test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser()
    .then(data => {
        expect(data.name).toEqual('Leanne Graham');
    });
});

//async await
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser()
    expect(data.name).toEqual('Leanne Graham');

});