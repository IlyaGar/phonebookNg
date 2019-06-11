import { Component, OnInit } from '@angular/core';
import { PlaceItem } from '../models/place-item';
import { PlaceService } from '../service/place.service';

@Component({
  selector: 'app-place-edit',
  templateUrl: './place-edit.component.html',
  styleUrls: ['./place-edit.component.css']
})
export class PlaceEditComponent implements OnInit {
    
  editPlace = new PlaceItem (null, "", "", "", 0);
  newPlace = new PlaceItem (0, "", "", "", 0);
  places: Array<PlaceItem>;
  isNewRecord: boolean;
  statusMessage: string;

  isSelectedItem: boolean = false;

  countItems = 10;
  p: number;
    
  constructor(private placeService: PlaceService) { }

  ngOnInit() {
    this.placeService.getPlaces().subscribe(p => this.places = p);
  }

  onEdit(place: PlaceItem){
    this.editPlace = place;
    this.isSelectedItem = true;
  }

  onCancel(){
    if(this.isSelectedItem == true){
      this.editPlace = new PlaceItem (null, "", "", "", 0);
      this.isSelectedItem = false;
    }
    else  this.newPlace = new PlaceItem (0, "", "", "", 0);
  }

  onSave(){
    this.placeService.updatePlace(this.editPlace).subscribe(p => this.editPlace.id);
    this.onCancel();
  }

  onAdd(place: PlaceItem){
    if(place.name != null){
      this.placeService.addPlace(place).subscribe(p => this.newPlace.id);
      this.onCancel();
      this.places.push(place);
    }
  }

  onDelete(place: PlaceItem){
    this.placeService.deletePlace(place.id).subscribe(p => place.id);
    this.places.splice(this.places.indexOf(place), 1);
  }
}
