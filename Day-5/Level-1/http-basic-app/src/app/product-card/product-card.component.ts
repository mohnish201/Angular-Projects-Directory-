import { Component , Input} from '@angular/core';
import { ProductI } from '../product';
import { ProductService } from '../product.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

   @Input() id=''
   @Input() title='';
   @Input() description='';
   @Input() price='';
   @Input() category='';
   @Input() image=''; 
  //  title:string,
  //  price:number,
  //  description:string,
  //  category:string,
  //  image:string,
  //  rating:object 
  constructor(public productService:ProductService){
        
  }


}
