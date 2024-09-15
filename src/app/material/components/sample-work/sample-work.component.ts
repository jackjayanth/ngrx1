import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sample-work',
  templateUrl: './sample-work.component.html',
  styleUrls: ['./sample-work.component.css'],
})
export class SampleWorkComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: [
        null,
        [Validators.required, Validators.min(0), Validators.max(120)],
      ],
      gender: ['male', Validators.required],
      maritalStatus: [false],
      address: ['', Validators.required],
      zip: ['', Validators.required],
      state: ['', Validators.required],
      dateOfBirth: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.form.value);
  }
}
