export class Student {
    public studentId: string;
    public age: number;
    public isApproved: number;
    public studentid: string;
    public fname: string;
    public bloodgroup: string;
    public phnum: string;
    public studentName: string;
    public branch: string;

    constructor(
        studentId: string,
        age: number,
        isApproved: number,
        studentid: string,
        fname: string,
        bloodgroup: string,
        phnum: string,
        studentName: string,
        branch: string,
    ) {
        this.studentId = studentId;
        this.age = age;
        this.isApproved = isApproved;
        this.studentid = studentid;
        this.fname = fname;
        this.bloodgroup = bloodgroup;
        this.phnum = phnum;
        this.studentName = studentName;
        this.branch = branch;
    }
}