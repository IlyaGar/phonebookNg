import { Component, OnInit } from '@angular/core';
import { PhoneItem } from '../models/phone-item';
import { PhoneService } from '../phone.service';
import { PlaceItem } from 'src/app/place-edit/models/place-item';
import { PlaceService } from 'src/app/place-edit/service/place.service';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {

  phones: PhoneItem[];
  places: PlaceItem[];
  
  filterName: string;
  filterPost: string;
  filterPlace: string;

  isSortName: boolean = false;
  isSortPost: boolean = false;
  isSortPlace: boolean = false;

  countItems = 10;
  p: number;
  
  constructor(private phoneService: PhoneService,
              private placeService: PlaceService) { }

  ngOnInit() {
    this.phoneService.getPhones().subscribe(p => this.phones = p);
    this.placeService.getPlaces().subscribe(p => this.places = p);
    this.countItems = 10;
  }

  onSortTable(param: string){
    if(param == 'name'){ 
      if(this.isSortName == false){
        this.phones.sort((a, b)=> a[param].localeCompare(b[param]));
        this.isSortName = true;
      }
      else{
        this.phones.sort((a, b)=> b[param].localeCompare(a[param]));
        this.isSortName = false;
      }
    }
    if(param=='post'){
      if(this.isSortPost == false){
        this.phones.sort((a, b)=> a[param].localeCompare(b[param]));
        this.isSortPost = true;
      }
      else{
        this.phones.sort((a, b)=> b[param].localeCompare(a[param]));
        this.isSortPost = false;
      }
    }
    if(param=='place'){
      if(this.isSortPlace == false){
        this.phones.sort((a, b)=> a[param].localeCompare(b[param]));
        this.isSortPlace = true;
      }
      else{
        this.phones.sort((a, b)=> b[param].localeCompare(a[param]));
        this.isSortPlace = false;
      }
    }
  }

  onFilter(place: string, post: string, name: string){
    this.phoneService.getPhonesWithFilter(place, post, name).subscribe(p => this.phones = p);
  }

  onClearFilter(){
    this.phoneService.getPhones().subscribe(p => this.phones = p);
    this.filterName = null;
    this.filterPost = null;
    this.filterPlace = null;
  }
}
