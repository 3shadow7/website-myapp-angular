import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  const Auth = inject(AuthService);
  const router = inject(Router);
  var call_from = route.routeConfig?.path;
  const isAuthenticated = Auth.isLoggedIn();
  const isExternalUrl = !route.url.toString().includes(`${call_from}`); // Check if the URL is external

  if (isAuthenticated) {
    if (isExternalUrl) {
      // If authenticated && ExternalUrl => redirect to 404
      router.navigate(['/404'], { queryParams: { from: `${call_from}` } });
      return false;
    }
    return true; // Allow access to internal routes
  } else {
    // If NOT authenticated &&  (ExternalUrl || NOT ExternalUrl) => redirect to login
    router.navigate(['/login'], { queryParams: { from: `${call_from}` } });
    return false;
  }
};
