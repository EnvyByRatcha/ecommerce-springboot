import { Component } from '@angular/core';
import { ProductCategory } from '../../common/product-category';
import { ProductService } from '../../services/product.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-category-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-category-menu.component.html',
  styleUrl: './product-category-menu.component.css',
})
export class ProductCategoryMenuComponent {
  productCategories: ProductCategory[] = [];

  constructor(private productservice: ProductService) {}

  ngOnInit() {
    this.listProductCategory();
  }

  listProductCategory() {
    this.productservice.getProductCategories().subscribe((data) => {
      this.productCategories = data;
    });
  }
}
