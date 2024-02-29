import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  {
    path: '',
    // redirect directly to personnel since that is the only app we are supporting now.
    // change this to redirectTo: 'home' once at least one more app comes online.
    redirectTo: 'products',
    pathMatch: 'full',
},
{
    path: 'products',
    component: ProductsComponent,
},
{
  path: 'products/:id',
  component: ProductDetailsComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
