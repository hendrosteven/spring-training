import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../interfaces/product";
import {Category} from "../../interfaces/category";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-product-input',
  templateUrl: './product-input.component.html',
  styleUrls: ['./product-input.component.css']
})
export class ProductInputComponent implements OnInit {

  product: Product = new Product();
  categories: Category[] = [];

  constructor(private productService: ProductService, 
    private categoryService: CategoryService) { }

  ngOnInit() {
    this.onLoadCategory();
  }

  onLoadCategory(){
    this.categoryService.loadAllCategory().subscribe(output=>{
      if(output){
        this.categories = output;
      }
    },error=>{
      console.log(error);
    });
  }

  onProductSave(){
    this.productService.saveProduct(this.product)
      .subscribe(output=>{
        console.log(output);
        this.product = new Product();
      },error=>{
        console.log(error);
      });
  }

}
