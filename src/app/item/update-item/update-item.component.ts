import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {

  id:number;
  item: Item;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router, 
    private itemService: ItemService) { }

  ngOnInit() {
    this.item = new Item();

    this.id = this.route.snapshot.params['id'];
    
    this.itemService.getItem(this.id)
      .subscribe(data => {
        console.log(data)
        this.item = data;
      }, error => console.log(error));
  }

  updateItem() {
    console.log(this.item);
    this.itemService.updateItem(this.id, this.item)
      .subscribe(data => console.log(data), error => console.log(error));
    this.item = new Item();
    this.submitted = true;
    this.gotoList();
  }

  onSubmit() {
    this.updateItem();    
  }

  gotoList() {
    this.router.navigate(['/view-item']);
  }

}
