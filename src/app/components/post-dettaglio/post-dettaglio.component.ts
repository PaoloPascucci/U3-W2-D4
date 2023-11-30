import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/posts.service';

@Component({
  selector: 'app-post-dettaglio',
  templateUrl: './post-dettaglio.component.html',
  styleUrls: ['./post-dettaglio.component.scss']
})
export class PostDettaglioComponent implements OnInit {
  postId!:number;
  post:any;

  constructor(private route:ActivatedRoute, private postService:PostService) { }

  ngOnInit(): void {
  this.route.params.subscribe(post => {
    this.postId = +post['id'];    
    this.loadPost()
  })
  }

  async loadPost(): Promise<void> {
    this.post = await this.postService.getPostById(this.postId);
  }
}
