import { Injectable } from '@angular/core';
import { Observable, Subject, ReplaySubject, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { Product } from '../model/product';


@Injectable({
  providedIn: 'root'
})
export class SearchService {  

  private product: Product[];
  private filteredProduct$: Subject<Product[]> = 
    new ReplaySubject<Product[]>(1);

  getSearchResults(): Observable<Product[]> {
    return this.filteredProduct$.asObservable();
  }

  search(searchTerm: string): Observable<void> {
    return this.fetchProduct().pipe(
      tap((product:Product[]) => {
       product =product.filter(product =>product.productName.toLowerCase().includes(searchTerm));
        this.filteredProduct$.next(product);
      }),
      map(() => void 0)
    );
  }

  private fetchProduct(): Observable<Product[]> {
    if (this.product) {
      return of(this.product);
    }
    
    const product: Product[] = [];

    return of(product).pipe(
      delay(1000),
      tap((product: Product[]) => this.product = product)
    );
  }
}