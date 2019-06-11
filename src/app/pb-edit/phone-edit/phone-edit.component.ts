import { Component, OnInit } from '@angular/core';
import { PhoneItem } from 'src/app/pb-list/models/phone-item';
import { PhoneService } from 'src/app/pb-list/phone.service';
import { PlaceService } from 'src/app/place-edit/service/place.service';
import { PlaceItem } from 'src/app/place-edit/models/place-item';

@Component({
  selector: 'app-phone-edit',
  templateUrl: './phone-edit.component.html',
  styleUrls: ['./phone-edit.component.css']
})
export class PhoneEditComponent implements OnInit {

  phones: PhoneItem[];
  places: PlaceItem[];
  selectedPhone: PhoneItem;
  editPhone = new PhoneItem(0, "", "", "", "", "", "", "", 0);
  newPhone = new PhoneItem(0, "", "", "", "", "", "", "", 0);
  isSelectedItem: boolean = false;

  filterName: string;
  filterPost: string;
  filterPlace: string;

  isSortName: boolean = false;
  isSortPost: boolean = false;
  isSortPlace: boolean = false;

  countItems = 10;
  p: number;

  isActive = false;

  constructor(private phoneService: PhoneService,
              private placeService: PlaceService) { }

  ngOnInit() {
    this.phoneService.getPhones().subscribe(p => this.phones = p);
    this.placeService.getPlaces().subscribe(p => this.places = p);
    this.countItems = 10;
  }

  onSelect(phone: PhoneItem){
     this.selectedPhone = phone; 
    }

    setSelected(id: number){

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

  onEdit(place: PhoneItem){
    this.editPhone = place;
    this.isSelectedItem = true;
    this.isActive = true;
  }

  onCancel(){
    if(this.isSelectedItem == true){
      this.editPhone = new PhoneItem (0, "", "", "", "", "", "", "", 0);
      this.isSelectedItem = false;
    }
    else  this.newPhone = new PhoneItem (0, "", "", "", "", "", "", "", 0);
  }

  onSave(){
    this.phoneService.updatePhone(this.editPhone).subscribe(p => this.editPhone.id);
    this.onCancel();
  }

  onAdd(phone: PhoneItem){
    if(phone.name != null){
      this.phoneService.addPhone(phone).subscribe(p => this.newPhone.id);
      this.onCancel();
      this.phones.push(phone);
    }
  }

  onDelete(phone: PhoneItem){
    this.phoneService.deletePhone(phone.id).subscribe(p => phone.id);
    this.phones.splice(this.phones.indexOf(phone), 1);
  }
}
