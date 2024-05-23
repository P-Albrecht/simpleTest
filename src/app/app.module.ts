import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LlamaService } from 'src/app/llama.service';
import { SettingsComponent } from 'src/app/settings/settings.component';
import { TreeViewModule } from 'src/app/tree-view/tree-view.module';
import { ChatComponent } from 'src/app/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    TreeViewModule,
    
  ],
  providers: [LlamaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
