// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false


// console.log(tinderUser)


const regularUser = {
    email: "Some@gmail.com",
    fullname: {
        First_user: {
            firstname: "Hitesh",
            lasttname: "chaudhary",
        },
        second_user: {
            firstname: "Aman",
            lasttname: "Singh",
        },
        Third_user: {
            firstname: "ritik",
            lasttname: "shukla",
        }
    }
}

//console.log(regularUser.fullname.Third_user.lasttname) // if req comes fom api then we use ? in fullname otherwise we use if else


// *****************Combining of Two Objects*************************//

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj_3 = {obj1, obj2}  // same array problem
const obj3_ = Object.assign(obj1, obj2)
const obj3 = Object.assign({}, obj1, obj2, obj4)  // {} it gives {target{} , source1, so2, so3, .........}, alll sources into empty object
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com",
    },
    {
        id: 1,
        email: "h@gmail.com",
    },
    {
        id: 1,
        email: "h@gmail.com",
    },
    {
        id: 1,
        email: "h@gmail.com",
    },
]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))// all keys and values contain aur changed into different arrays

console.log(tinderUser.hasOwnProperty('isLoggedIn'))



// ****************structuring and Destructuring of objects**************************
const course = {
    coursename: "Js in hindi",
    price:"999",
    courseInstructor: "Hitesh"
}

//course.courseInstructor

const{courseInstructor: instructor} = course 
//console.log(courseInstructor);
console.log(courseInstructor)

// {
//     "name": "Hitesh",
//     "coursename": "Js in hindi",
//     "price": "free",
// }


//*********************************calling API from Json******************************
