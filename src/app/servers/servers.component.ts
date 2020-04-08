import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowButton = false;
  returnName = '';
  returnNames = '';
  serverCreated = false;
  serverCreation = 'No server Created';
  serverName: string = '';
  serverNum: string = '';
  constructor() {
    setTimeout(() => {
      this.allowButton = true;
    }, 2000);
  }

  ngOnInit(): void {}
  oncreateclick() {
    this.serverCreated = true;
    this.serverCreation = this.serverName + ' server created';
  }

  updateName(event) {
    this.serverName = event.target.value;
  }
  print() {
    this.returnNames = 'Hello ,' + this.returnName;
  }
}
