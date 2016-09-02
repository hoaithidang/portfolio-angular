import 'zone.js/dist/zone';
import 'zone.js/dist/async-test';
import {HeaderComponent} from './header';
import {async, inject, TestComponentBuilder} from '@angular/core/testing';

describe('header component', () => {
  it('should render \'Fountain Generator\'', async(inject([TestComponentBuilder], tcb => {
    tcb.createAsync(HeaderComponent)
      .then(fixture => {
        fixture.detectChanges();
        const header = fixture.nativeElement;
        expect(header.querySelector('a').textContent.trim()).toBe('Fountain Generator');
      });
  })));
});
