import { FormGroup, FormsModule } from '@angular/forms';
import { MasterService } from '../../services/master/master.service';
import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';

import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { RippleModule } from 'primeng/ripple';
import { comment } from '../../types/class/form';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-download-page',
  standalone: true,
  imports: [
    DialogModule,
    ButtonModule,
    InputTextModule,
    AvatarModule,
    ButtonModule,
    RippleModule,
    FormsModule,
    DatePipe,
  ],
  templateUrl: './download-page.component.html',
  styleUrl: './download-page.component.scss',
})
export class DownloadPageComponent implements OnInit {
  visible: boolean = false;
  data_post: comment = new comment();
  data_get: comment[] = [];
  database: any = { email: 'shadow77@gmail.com' };

  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef;
  private myService = inject(MasterService);

  //! download files
  downloadFileAndroid() {
    console.log('download andriod file started');
  }
  downloadFileIOS() {
    console.log('download ios file started');
  }

  ngOnInit(): void {
    this.load_comments();
  }

  //! load comments
  load_comments() {
    this.myService.getData().subscribe((result: comment[]) => {
      this.data_get = result;
      //* Scroll to bottom after loading
      this.scrollToBottom();
    });
  }
  scrollToBottom(): void {
    setTimeout(() => {
      if (this.scrollContainer) {
        this.scrollContainer.nativeElement.scroll({
          top: this.scrollContainer.nativeElement.scrollHeight,
          behavior: 'smooth'
        });
      }
    }, 1);
  }

  //! send && edit comments
  comment_submit() {
    this.visible = false;
    if (this.data_get.length > 0) {
      // if there is no data then create one
      if (this.data_post.id === 0) {
        //* if id is 0 then it is a send request && give it the last_id of database
        const lastId = this.data_get[this.data_get.length - 1].id;
        this.data_post.id = lastId + 1;
        this.myService.postData(this.data_post).subscribe((res) => {
          console.log('res => ' + res);
          this.data_post = new comment();
          this.load_comments();
        });
      } else if (this.data_post.id > 0) {
        //* if id is NOT 0 then it is a edit request
        this.myService.updateData(this.data_post.id, this.data_post).subscribe(
          (response) => {
            console.log('res => ' + response);
            this.data_post = new comment();
            this.load_comments();
            console.log('Comment updated:', response);
          },
          (error) => {
            console.error('Error updating comment:', error);
          }
        );
      }
    } else {
      // it is a send request to create new one
      this.myService.postData(this.data_post).subscribe((res) => {
        this.data_post = new comment();
        this.load_comments();
      });
    }
  }

  comment_edit(item: comment) {
    this.data_post = item;
    this.visible = true;
  }

  //! delete comments
  comment_delete(id: number) {
    this.visible = false;
    this.myService.deleteData(id).subscribe((res) => {
      console.log('res => ' + res);
      this.data_post = new comment();
      this.load_comments();
    });
  }

  //* to reset data and popup comment section
  showDialog() {
    this.data_post = new comment();
    this.visible = true;
  }
}
