import { Component, OnInit } from '@angular/core';
import { Team } from '../team.model';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
})
export class TeamListComponent implements OnInit {
  teams: Team[] = [
    new Team(
      'Development',
      'Develop with mern stack',
      'https://media.istockphoto.com/photos/sea-of-hands-picture-id857146092'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
