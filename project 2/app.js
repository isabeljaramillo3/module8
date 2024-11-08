let data = [
    {
        name: 'Jane',
        age: '20'
    },
    {
        name: 'Jennifer',
        age: '21'
    },
    {
        name: 'Joslyn',
        age: '22'
    },
    {
        name: 'Jackson',
        age: '23'
    },
    {
        name: 'Jason',
        age: '24'
    },
    {
        name: 'John',
        age: '25'
    },
];

const info = document.querySelector('#info')

let details = data.map(function(item){
    return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + '</div>';
    
});

info.innerHTML = details.join('\n');