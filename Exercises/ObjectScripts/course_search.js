let courses = [
    {
    CourseId: "PROJ100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROJ200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROJ300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROJ400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
    ];

function courseSearch(courses){
    for(let i = 0; i < courses.length; i++) {
        console.log(courses[i].StartDate);
        console.log(courses[i].Title);
    
    }

function under50(){
    for (let i = 0; i < courses.length; i++) {
        if (courses[i].Fee === "50.00") {
            console.log(courses[i].Title);
        }
}

}

function classroom1(){
    for (let i = 0; i < courses.length; i++) {
        if (courses[i].Location === "Classroom 1") {
            console.log(courses[i].Title);
        }
}
}

    under50();
    classroom1();
}

courseSearch(courses);


