import {Component} from "@angular/core";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import * as _ from "lodash";
import {RequestsService} from "../services/requests.service";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'login-component',
    templateUrl: '../templates/login.template.html',
    styleUrls: ['../styles/login.style.css']
})
export class LoginComponent {
    constructor(private requestsService: RequestsService,
                private router: Router,
                private titleService: Title) {
    };

    methodCalled(form: NgForm) {
        _.each(form.form.controls, function (control) {
            control['_touched'] = true
        });
        console.log('method called');
    }

    ngOnInit() {
        this.titleService.setTitle('Lembda Task');
    }

}
