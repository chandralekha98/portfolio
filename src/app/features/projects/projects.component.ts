import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  public projects = [
    {
      title: 'Ecom store',
      description:
        'Ecom store front end implementation with homepage and cart feature.',
      techList: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      github: 'https://github.com/pravinmane1/EcomStore',
      screenshot:
        'https://camo.githubusercontent.com/424f1e40887eefd32c4bc0b965ea78512f912247f70fd9c96a2ea54e81433659/68747470733a2f2f692e6962622e636f2f6733594b44367a2f53637265656e73686f742d323032342d30312d32362d3230313235302e706e67',
      live: 'https://ecomstore.pravinmane.com/',
    },
    {
      title: 'Simple Calculator',
      description:
        'Simple, highly configurable and modular calculator developed using Angular framework.',
      techList: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      github: 'https://github.com/pravinmane1/clean-calculator',
      screenshot:
        'https://camo.githubusercontent.com/a6a634bb30ed2f3ae029a446235e8767501f321da4e4063e299b43ba51fa822b/68747470733a2f2f692e6962622e636f2f434a377342786d2f63616c63756c61746f722e706e67',
      live: 'https://calculator.pravinmane.com/',
    },
    {
      title: 'Credit card input page challenge',
      description:
        'Worked upon a credit card input page challenge from frontEndMaster. Built a responsive card input component.',
      techList: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      github: 'https://github.com/pravinmane1/login-card-challenge',
      screenshot:
        'https://media.licdn.com/dms/image/D4D2DAQFSbZa5J2X1Ew/profile-treasury-image-shrink_160_160/0/1706283998133?e=1722398400&v=beta&t=xVP8Iolp7lIorNilxksndeQad-P8bq2u-8uvZJ_FCYY',
      live: 'https://pravinmane1.github.io/login-card-challenge/',
    },
  ];
}
