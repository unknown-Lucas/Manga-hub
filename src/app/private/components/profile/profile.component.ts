import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private secret = 'token';
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      return [
        {
          title: 'All the mangas',
          cols: 2,
          rows: 1,
          image:
            'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b003f266787363.5b2216b70df77.png',
          url: '/home',
        },
        {
          title: 'Upload mangas',
          cols: 1,
          rows: 1,
          image:
            'https://i0.wp.com/xiahpop.com/wp-content/uploads/2020/03/1551097088_608074_1551097327_noticia_normal.jpg?resize=600%2C338&ssl=1',
          url: '/onDev',
        },
        {
          title: 'My mangas',
          cols: 1,
          rows: 1,
          image:
            'https://los40.com/los40/imagenes/2021/06/02/comics/1622622519_565457_1622622755_gigante_normal.jpg',
          url: '/onDev',
        },
        {
          title: 'favs',
          cols: 1,
          rows: 1,
          image:
            'https://i.pinimg.com/originals/84/f5/53/84f5533218ae3fbc050349d5d1937d13.jpg',
          url: '/profile/favorites',
        },
        {
          title: 'Log Out',
          cols: 1,
          rows: 1,
          image:
            'https://i.pinimg.com/originals/6f/d0/2c/6fd02ca9f8e490f8c38e9a7c0c28225f.jpg',
          url: '',
        },
      ];
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}

  ngOnInit(): void {}

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiresIn');
    this.router.navigate(['login']);
  }

  goRoute(url: string) {
    this.router.navigateByUrl(url);
  }
}
