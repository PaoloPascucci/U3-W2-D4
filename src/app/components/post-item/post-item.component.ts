import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-item',
  template: `
  <div class="card mt-4" [ngClass]="{'bg-warning': post.type === 'news', 'bg-dark text-white': post.type === 'politics', 'bg-info': post.type === 'educational'}">
  <div class="card-header">Post n{{post.id}} </div>
        <div class="card-body">
            <h4 class="card-title">{{post.title}}</h4>
            <p class="card-text">{{post.body}}</p>
    <button class="btn btn-primary me-4" (click)="updatePost(!post.active)">
      {{ post.active ? 'Disattiva' : 'Attiva' }}
    </button>
    <button class="btn btn-primary" (click)="loadPost(post.id)">
      Dettagli
    </button>
  </div>
`,
})
export class PostItemComponent {
  @Input() post: any;
  constructor(private router:Router){}
  @Output() update = new EventEmitter<{ postId: number; active: boolean }>();

  updatePost(active: boolean): void {
    this.update.emit({ postId: this.post.id, active });
  }
  loadPost(postId:number):void{
  this.router.navigate(['/post', postId])  
  }
}
