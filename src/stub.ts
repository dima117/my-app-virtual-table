
const loginParts: string[] = ['ko', 'man', 'di', 'mi', 'a', 'le', 'ku', 'ged', 'an']
const names1: string[] = ['Игорь', 'Сергей', 'Михаил', 'Иван', 'Владимир', 'Николай'];
const names2: string[] = [
    'Смирнов',
    'Иванов',
    'Кузнецов',
    'Соколов',
    'Попов',
    'Лебедев',
    'Козлов',
    'Новиков',
    'Морозов',
    'Петров',
    'Волков',
    'Соловьёв',
    'Васильев',
    'Зайцев',
    'Павлов',
    'Семёнов',
    'Голубев',
    'Виноградов'
];

const random = (max: number): number => Math.floor(Math.random() * max);
const getRandomElem = <T>(a: T[]): T => a[random(a.length)];

export interface Employee { 
    id: number;
    name: string;
    login: string;
    salary: number;
}

function getRandomEmployee(_: unknown, id: number): Employee {
    const name = `${getRandomElem(names1)} ${getRandomElem(names2)}`;
    const login = new Array(2 + random(3)).fill(true).map(() =>getRandomElem(loginParts)).join('') + id;

    return { id, name, login, salary: 1000 * (100 + random(200)) };
}

export const STUB: Employee[] = new Array(1496)
    .fill(true)
    .map(getRandomEmployee);
