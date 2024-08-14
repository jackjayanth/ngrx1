import { RxjsServiceService } from './../rxjs-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rxjs-home',
  templateUrl: './rxjs-home.component.html',
  styleUrls: ['./rxjs-home.component.css'],
})
export class RxjsHomeComponent implements OnInit {
  // constructor(private rxjsService: RxjsServiceService) {}
  ngOnInit(): void {
    // this.rxjsService.getData().subscribe((data) => {
    //   console.log('jay', data);
    // });
  }

  constructor(private dataService: RxjsServiceService) {}

  // GET Data
  fetchData() {
    this.dataService.getDataa().subscribe(
      (response) => {
        console.log('Data fetched successfully:', response);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  // POST Data
  addData() {
    const newData = { name: 'John Doe', age: 30 };
    this.dataService.postData(newData).subscribe(
      (response) => {
        console.log('Data added successfully:', response);
      },
      (error) => {
        console.error('Error adding data:', error);
      }
    );
  }

  // PUT Data
  updateData() {
    const updatedData = { name: 'Jane Doe', age: 25 };
    this.dataService.putData(updatedData).subscribe(
      (response) => {
        console.log('Data updated successfully:', response);
      },
      (error) => {
        console.error('Error updating data:', error);
      }
    );
  }

  // DELETE Data
  removeData() {
    this.dataService.deleteData().subscribe(
      (response) => {
        console.log('Data deleted successfully:', response);
      },
      (error) => {
        console.error('Error deleting data:', error);
      }
    );
  }
}
