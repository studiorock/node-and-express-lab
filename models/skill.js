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
    getAll
};

function getAll() {
    return skills;
}