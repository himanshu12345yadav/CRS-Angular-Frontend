import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/model/professor';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-view-professors',
  templateUrl: './view-professors.component.html',
  styleUrls: ['./view-professors.component.css']
})
export class ViewProfessorsComponent implements OnInit {

  professors: Professor[] = [];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getProfessor();
  }

  getProfessor(): void {
    this.adminService.getProfessors()
      .subscribe(professors => this.professors = professors);
  }

}