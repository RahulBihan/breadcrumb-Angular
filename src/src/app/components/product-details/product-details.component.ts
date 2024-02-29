import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsServiceService } from 'src/app/services/products-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  testId: any;
  productDetails:any;
  constructor(private route: ActivatedRoute,private productSer:ProductsServiceService) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.testId = params['id']; // Access the 'id' parameter from the URL
      console.log('Test ID:', this.testId);
    });
    this.productSer.getProducts().subscribe((data:any)=>{
      this.productDetails = data.products.filter((item:any)=>  item.id === Number(this.testId))[0];
      console.log("fff",this.productDetails);
    });
  }
}
