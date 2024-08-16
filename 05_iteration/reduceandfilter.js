const coding = ["js", "rb", "py", "cpp"]

// coding.forEach( (item) => {
//     console.log(item);   
// })

// const val = coding.forEach( (item) => {
//     console.log(item);   
// })

// console.log(val); // this would give undefined

const nums = [1, 2, 3, 4, 5, 6, 7]

// const newNums = nums.filter( (num) => (num > 4)) // since it is a single line no need of scope and return key word.
// const newNums = nums.filter( (num) => {
//     return (num > 4) // if scope {} is used then "return" key word has to be used else it will throw an error
// })
// console.log(newNums);

// const newNums = []
// nums.forEach ( (num) => {
//     if (num < 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books = [
    {
        "title": "To Kill a Mockingbird",
        "genre": "Fiction",
        "publish_date": "1960",
        "edition_date": "2015"
    },
    {
        "title": "1984",
        "genre": "Dystopian",
        "publish_date": "1949",
        "edition_date": "2021"
    },
    {
        "title": "Pride and Prejudice",
        "genre": "Romance",
        "publish_date": "1813",
        "edition_date": "2020"
    },
    {
        "title": "The Great Gatsby",
        "genre": "Classic",
        "publish_date": "1925",
        "edition_date": "2023"
    },
    {
        "title": "Moby Dick",
        "genre": "Adventure",
        "publish_date": "1851",
        "edition_date": "2018"
    },
    {
        "title": "The Catcher in the Rye",
        "genre": "Fiction",
        "publish_date": "1951",
        "edition_date": "2019"
    },
    {
        "title": "Brave New World",
        "genre": "Science Fiction",
        "publish_date": "1932",
        "edition_date": "2017"
    },
    {
        "title": "The Hobbit",
        "genre": "Fantasy",
        "publish_date": "1937",
        "edition_date": "2019"
    },
    {
        "title": "War and Peace",
        "genre": "Historical Fiction",
        "publish_date": "1869",
        "edition_date": "2021"
    },
    {
        "title": "Crime and Punishment",
        "genre": "Psychological Fiction",
        "publish_date": "1866",
        "edition_date": "2020"
    },
    {
        "title": "The Brothers Karamazov",
        "genre": "Philosophical Fiction",
        "publish_date": "1880",
        "edition_date": "2022"
    },
    {
        "title": "Jane Eyre",
        "genre": "Gothic Fiction",
        "publish_date": "1847",
        "edition_date": "2021"
    },
    {
        "title": "Wuthering Heights",
        "genre": "Gothic Fiction",
        "publish_date": "1847",
        "edition_date": "2020"
    },
    {
        "title": "The Odyssey",
        "genre": "Epic Poetry",
        "publish_date": "800 BC",
        "edition_date": "2018"
    },
    {
        "title": "Frankenstein",
        "genre": "Horror",
        "publish_date": "1818",
        "edition_date": "2019"
    }
];

let userBk = books.filter( (Bk) => Bk.genre === 'Fiction')
userBk = books.filter( (Bk) => Bk.edition_date >= '2020')
userBk = books.filter( (Bk) => {
    return Bk.edition_date >= '2020' && Bk.genre === 'Classic'
})

console.log(userBk);








