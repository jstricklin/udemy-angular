import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

    allowNewServer = false;
    serverCreated = false;
    serverCreationStatus = 'No server was created!';
    serverName = '';
    userName = '';
    servers = ['Testserver', 'Testserver 2'];

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }

    ngOnInit() {
    }
    onUpdateServerName(event: Event) {
        this.serverName = (<HTMLInputElement>event.target).value;
    }
    onCreateServer() {
        this.serverCreated = true;
        this.servers.push(this.serverName);
        this.serverCreationStatus = 'Server was created. Name is ' + this.serverName;
    }
}
