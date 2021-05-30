import { TestBed } from '@angular/core/testing';

import { AnimeMangaService } from './anime-manga.service';

describe('AnimeMangaService', () => {
  let service: AnimeMangaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimeMangaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
