import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


// @Injectable({
//   providedIn: 'root'
// })
export const AuthGuard: CanActivateFn = (route, state) => {
    let _router = inject(Router)
    let isLogedin = localStorage.getItem('logedIn')
    if (isLogedin === 'false') {
      alert('please log in before continuing')
      _router.navigate(['login']);
      return false;
    } else {
      return true;
    }
  };

// import { inject } from '@angular/core';
// import { CanActivateFn, Router } from '@angular/router';

// export const guardGuard: CanActivateFn = (route, state) => {
//   let _router = inject(Router)
//   let isLogedin = localStorage.getItem('logedIn')
//   if (isLogedin === 'false') {
//     alert('please log in before continuing')
//     _router.navigate(['login']);
//     return false;
//   } else {
//     return true;
//   }
// };