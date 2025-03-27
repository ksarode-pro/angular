import { NgModule } from "@angular/core";
import { ShadowComponent } from "./shadow.component";

@NgModule({
    declarations: [ShadowComponent],
    exports: [ShadowComponent]
})
export class SharedModule {}