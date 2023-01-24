import { TestBed } from '@angular/core/testing';

import { ProductSuggestionService } from './product-suggestion.service';

describe('ProductSuggestionService', () => {
  let service: ProductSuggestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductSuggestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
