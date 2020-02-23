const skills = [{
        skill: 'HTML',
        endorsed: true
    },
    {
        skill: 'CSS',
        endorsed: true
    },
    {
        skill: 'Javascript',
        endorsed: true
    },
    {
        skill: 'Node',
        endorsed: false
    },
    {
        skill: 'Express',
        endorsed: false
    }
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    return skills[id];
}