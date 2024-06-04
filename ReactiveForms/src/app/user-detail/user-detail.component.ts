import {Component, OnInit} from '@angular/core';
import {states} from "../data-model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {emailValidator} from "../../shared/CustomValidators";

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
    states = states;
    userFormGroup!: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.createForm();
    }

    createForm() {
        this.userFormGroup = this.formBuilder.group({
            name: ['Nguyễn Công Bình', [Validators.required, Validators.minLength(4)]],
            email: ['', [Validators.required, emailValidator()]],
            addresses: this.formBuilder.group({ // The child FormGroup
                street: ['', [Validators.required]],
                city: '',
                state: this.states[0]
            })
        });
    }

    ngOnInit() {

    }
}
