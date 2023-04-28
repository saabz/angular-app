import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { CoreModule } from '../core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { PostsRoutingModule } from './posts-routing.module';

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, PostsRoutingModule],
})
export class PostsModule {}
