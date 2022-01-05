import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockDataComponent } from './stock-data/stock-data.component';

const routes: Routes = [
  { path: '', component: StockDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
