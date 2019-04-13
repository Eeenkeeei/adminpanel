export default class User {
    constructor(object){
        this.username = object.username;
        this.email = object.email;
        this.age = object.age;
        this.edu = object.edu;
        this.gender = object.gender;
        this.timetable = object.timetable;
        this.tasks = object.tasks;
        this.lessonsTimetable = object.lessonsTimetable;
        this.startPage = object.startPage;
        this.support = object.support;
        this.noteTags = object.noteTags;
    }
}
