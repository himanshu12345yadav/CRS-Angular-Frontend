export class Professor {
    userId: string;
    username: string;
    department: string;
    designation: string;
    course: string;

    constructor(
        userId: string,
        username: string,
        department: string,
        designation: string,
        course: string,

    ) {
        this.userId = userId;
        this.department = department;
        this.designation = designation;
        this.username = username;
        this.course = course;
    }
}


export class FormProfessor {
    userId: string;
    username: string;
    password: string;
    address: string;
    doj: Date;
    roleid: number;
    department: string;
    designation: string;
    course: string;

    constructor(
        username: string,
        password: string,
        address: string,
        doj: Date,
        roleid: number,
        department: string,
        designation: string,
    ) {
        this.userId = "123";
        this.department = department;
        this.designation = designation;
        this.username = username;
        this.course = "NULL";
        this.doj = doj;
        this.roleid = roleid;
        this.password = password;
        this.address = address;
    }
}