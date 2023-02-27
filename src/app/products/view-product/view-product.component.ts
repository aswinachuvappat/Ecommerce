import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
   
  productid:any
  productdata:any

  constructor(private activatedroute:ActivatedRoute,private productservice:ProductService) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe((data:any)=>{

      this.productid=data['id']
  })

  this.productservice.viewproduct(this.productid).subscribe((item:any)=>{
  
  
    this.productdata=item
    })
  }

}
