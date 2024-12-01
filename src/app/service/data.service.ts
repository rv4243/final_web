import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DataService {
  loading = signal(false);

  showLoader = () => this.loading.set(true);

  hideLoader = () => this.loading.set(false);
}
