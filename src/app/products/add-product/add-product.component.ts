import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addproductform=this.formbubuilder.group({
            id: [""],
            productName: [""],
            categoryId: [""],
            description: [""],
            price: [""],
            is_available: [""],
            productImg: [""],
            rating: [""],
            review: [""],
            vendor_name: [""],
            warranty: [""]

})

  constructor(private router:Router,private formbubuilder:FormBuilder,private productservice:ProductService) {

   }

  ngOnInit(): void {
  }
addproduct(){

  let newproduct={
    productName: this.addproductform.value.id,
            categoryId: this.addproductform.value.categoryId,
            description: this.addproductform.value.description,
            price: this.addproductform.value.price,
            is_available: this.addproductform.value.is_available,
            productImg: this.addproductform.value.productImg,
            rating: this.addproductform.value.rating,
            review: this.addproductform.value.review,
            vendor_name: this.addproductform.value.vendor_name,
            warranty: this.addproductform.value.warranty

  }

  this.productservice.addproduct(newproduct).subscribe((data:any)=>{
alert('new product added')
this.router.navigateByUrl('products')
  })
}
}
