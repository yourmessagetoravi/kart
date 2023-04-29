import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  menuitems = ["about", "help", "consumer policy", "social", "mail us", "Registered Office Address"]
  footerMenu = [
    [
      { label: 'Contact Us', link: '/contact' },
      { label: 'About Us', link: '/about' },
      { label: 'Careers', link: '/careers' },
      { label: 'Flipkart Stories', link: '/fkstories' },
      { label: 'Press', link: '/press' },
      { label: 'Corporate Information', link: '/cpinfo' }
    ],
    [
      { label: 'Payments', link: '/contact' },
      { label: 'Shipping', link: '/about' },
      { label: 'Cancellation & Returns', link: '/careers' },
      { label: 'FAQ', link: '/fkstories' },
      { label: 'Report Infringment', link: '/press' }],
    [
      { label: 'Return Policy', link: '/contact' },
      { label: 'Terms Of Use', link: '/about' },
      { label: 'Security', link: '/careers' },
      { label: 'Privacy', link: '/fkstories' },
      { label: 'Sitemap', link: '/press' },
      { label: 'Grievance Redressal', link: '/press' }
    ],
    [
      { label: 'Facebok', link: '/contact' },
      { label: 'Twitter', link: '/about' },
      { label: 'Youtube', link: '/careers' }
    ]
  ];

  adresses = [
    [
    {aline:"Flipkart Internet Private Limited,"}, 
    {aline:"Buildings Alyssa, Begonia &"}, 
    {aline:"Clove Embassy Tech Village,"}, 
    {aline:"Outer Ring Road, Devarabeesanahalli Village,"}, 
    {aline:"Bengaluru, 560103,"}, 
    {aline:"Karnataka,India" }
    ],
    [
    {aline: "Flipkart Internet Private Limited,"},
     {aline: "Buildings Alyssa, Begonia &"}, 
     {aline: "Clove Embassy Tech Village,"}, 
     {aline: " Outer Ring Road, Devarabeesanahalli Village,"}, 
     {aline: "Bengaluru, 560103,"}, 
     {aline: "Karnataka,India"},
     {aline: "CIN - U51109KA2012PTC066107"}, 
     {aline: "Telephone- 044-45614700" }
    ]
  ]

}


