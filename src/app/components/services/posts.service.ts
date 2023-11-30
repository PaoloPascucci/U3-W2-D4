import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private dbUrl = '../assets/db.json';

  posts: any = [
    {
      id: 1,
      body: 'Quisque tellus leo, cursus id auctor sed, ornare sed velit. Proin vehicula pharetra tellus ut faucibus. Donec porttitor nunc eu ante elementum pellentesque. Cras vulputate quam id est placerat, id vestibulum nisi luctus.',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      active: true,
      type: 'news',
      author: 'Marco Carta'
    },
    {
      id: 2,
      body: 'Quisque tellus leo, cursus id auctor sed, ornare sed velit. Proin vehicula pharetra tellus ut faucibus. Donec porttitor nunc eu ante elementum pellentesque. Cras vulputate quam id est placerat, id vestibulum nisi luctus.',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      active: true,
      type: 'politics',
      author: 'Pippo'
    },
    {
      id: 3,
      body: 'Quisque tellus leo, cursus id auctor sed, ornare sed velit. Proin vehicula pharetra tellus ut faucibus. Donec porttitor nunc eu ante elementum pellentesque. Cras vulputate quam id est placerat, id vestibulum nisi luctus.',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      active: true,
      type: 'educational',
      author: 'Pluto'
    },
    {
      id: 4,
      body: 'Quisque tellus leo, cursus id auctor sed, ornare sed velit. Proin vehicula pharetra tellus ut faucibus. Donec porttitor nunc eu ante elementum pellentesque. Cras vulputate quam id est placerat, id vestibulum nisi luctus.',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      active: false,
      type: 'news',
      author: 'Mario Rossi'
    },
    {
      id: 5,
      body: 'Quisque tellus leo, cursus id auctor sed, ornare sed velit. Proin vehicula pharetra tellus ut faucibus. Donec porttitor nunc eu ante elementum pellentesque. Cras vulputate quam id est placerat, id vestibulum nisi luctus.',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      active: false,
      type: 'educational',
      author: 'GIanni Morandi'
    },
  ];

  getPosts(): any[] {
    return this.posts;
  }
  updatePost(postId: number, active: boolean): void {
    const post = this.posts.find((post:any) => post.id === postId);
    if (post) {
      post.active = active;
    }
  }
  getPostById(postId: number): any {
    return this.posts.find((post: { id: number; }) => post.id === postId);
  }
}
