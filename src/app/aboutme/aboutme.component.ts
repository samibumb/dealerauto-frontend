import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss'],
})

export class AboutmeComponent implements OnInit {
  constructor(private title: Title) {
    this.title.setTitle('About me');
  }

  ngOnInit() {
  }
}
