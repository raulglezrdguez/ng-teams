import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Team } from '../../team.model';

@Component({
  selector: 'app-team-item',
  templateUrl: './team-item.component.html',
  styleUrls: ['./team-item.component.css'],
})
export class TeamItemComponent implements OnInit {
  @Input('team') team: Team = new Team('', '', '');
  @Output('teamSelected') teamSelected: EventEmitter<void> =
    new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  setTeamSelected() {
    this.teamSelected.emit();
  }
}
