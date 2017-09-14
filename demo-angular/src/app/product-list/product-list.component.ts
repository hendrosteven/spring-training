import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../interfaces/product";
import {SearchData} from "../../interfaces/searchdata";
import {ToastsManager} from "ng2-toastr/ng2-toastr";
import {NgProgressService} from "ngx-progressbar";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  searchData: SearchData = new SearchData();

  constructor(private productService: ProductService,private toastr: ToastsManager, 
    private vcr: ViewContainerRef, private progressService: NgProgressService) { 
      this.toastr.setRootViewContainerRef(vcr);
    }

  ngOnInit() {
    this.progressService.start();
    this.productService.loadAllProduct().subscribe(output=>{
      this.progressService.done();
      if(output){
        this.products = output;
      }
    },error=>{
      this.progressService.done();
      console.log(error);
    });
  }

  onSearchProduct(){
    this.progressService.start();
    this.productService.searchProduct(this.searchData).subscribe(output=>{
      this.progressService.done();
      if(output.length>0){
        this.products = output;
      }else{
        this.products = [];
        this.toastr.warning('Data not found', 'Oops!');
      }
    },error=>{
      this.progressService.done();
      console.log(error);
    });
  }
 

}
