import { Component, OnInit ,Input,OnChanges} from '@angular/core';
import { NavbarComponent} from '../navbar/navbar.component'
import { InterventionRecordService} from 'src/app/services/interventionrecord.service'
@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {
 @Input() intervention:NavbarComponent;
  constructor(public interventionrecordservice:InterventionRecordService) { }
  searchdata=this.interventionrecordservice.searchdata
  
  ngOnInit(): void {
    console.log(this.searchdata+"TESTEER")

  }
  ngOnChanges(){
    this.searchdata=this.interventionrecordservice.searchdata
  }

}
