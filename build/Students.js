"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const moment = require("moment");
class Student {
    constructor(id, name, email, birthDate, hobbies) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.birthDate = birthDate;
        this.hobbies = hobbies;
    }
    getAge() {
        return moment().diff(this.birthDate, "years");
    }
}
exports.Student = Student;
//# sourceMappingURL=Students.js.map