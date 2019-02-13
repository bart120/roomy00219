import { NgModule } from '@angular/core';
import { DevisePipe } from './devise.pipe';
import { PlurializePipe } from './plurialize.pipe';

@NgModule({
    declarations: [DevisePipe, PlurializePipe],
    exports: [DevisePipe, PlurializePipe]
})
export class PipeModule { }
