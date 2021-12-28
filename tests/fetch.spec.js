const fetch = require('node-fetch');
const studentsSrv = require('../services/students.svc');

test('test fetch get', async () => {

    let res = await fetch('https://api.github.com/users/kfengbest/repos');
    let repos = await res.json();

    expect(repos.length).toBeGreaterThan(0);
    expect(repos[0].full_name).toMatch(/kfengbest/);

})

test('getRepos', async () => {
    let repos = await studentsSrv.getRepos('kfengbest');
    expect(repos.length).toBeGreaterThan(0);
    expect(repos[0].full_name).toMatch(/kfengbest/);
})

test('mock fetch api', async () => {

    

});