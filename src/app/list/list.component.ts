import { Component, OnInit } from '@angular/core';
import { DataMockService } from '../data-mock.service';
import { IData } from '../jxc_tp2_angular-main/IData';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  dataList!: IData[];
  
  dest:String | undefined;

  constructor(private dataMockService:DataMockService) { }

  //
  getAll(): void{
    this.dataMockService.getAll()
      .subscribe({
        next: (data) => this.dataList = data,
        error: (e) => console.error(e),
        complete: () => console.info('end load all data')
      });
  }

  //
  clicked(item:IData):void{
    this.dest=item.description;
  }

  //
  ngOnInit(): void {
    this.getAll();
  }
}
