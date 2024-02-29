import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsServiceService } from 'src/app/services/products-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
constructor(private productSer:ProductsServiceService,private router: Router){};
products:any;
ngOnInit(){
this.productSer.getProducts().subscribe((data:any)=>{
  this.products = data.products;
  console.log("fff",this.products);
});
}
goToDetails(id:any){
    this.router.navigateByUrl(`/products/${id}`);
}
}
