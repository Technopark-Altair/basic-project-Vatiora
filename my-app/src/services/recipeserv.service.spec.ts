import { TestBed } from '@angular/core/testing';

import { RecipeservService } from './recipeserv.service';

describe('RecipeservService', () => {
  let service: RecipeservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
