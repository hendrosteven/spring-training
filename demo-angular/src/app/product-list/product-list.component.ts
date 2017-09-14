import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../interfaces/product";
import {SearchData} from "../../interfaces/searchdata";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  searchData: SearchData = new SearchData();

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.loadAllProduct().subscribe(output=>{
      if(output){
        this.products = output;
      }
    },error=>{
      console.log(error);
    });
  }

  onSearchProduct(){
    this.productService.searchProduct(this.searchData).subscribe(output=>{
      if(output){
        this.products = output;
      }else{
        this.products = [];
      }
    },error=>{
      console.log(error);
    });
  }
 

}
