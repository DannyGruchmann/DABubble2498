import { ApplicationConfig } from '@angular/core';
import { provideRouter, withRouterConfig } from '@angular/router';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth } from '@angular/fire/auth';
import { provideFirestore } from '@angular/fire/firestore';
import { provideStorage } from '@angular/fire/storage';
import { FirebaseApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

import { routes } from './app.routes';
import { environment } from '../environments/environment';

/** Returns an initialized Firebase app singleton. */
function getOrInitFirebaseApp(): FirebaseApp {
    const existingApps = getApps();
    return existingApps.length > 0
        ? existingApps[0]
        : initializeApp(environment.firebase);
}

/** Root Angular application configuration for browser runtime. */
export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes, withRouterConfig({ onSameUrlNavigation: 'reload' })),
        provideFirebaseApp(() => getOrInitFirebaseApp()),
        provideAuth(() => getAuth(getOrInitFirebaseApp())),
        provideFirestore(() => getFirestore(getOrInitFirebaseApp())),
        provideStorage(() => getStorage(getOrInitFirebaseApp())),
    ],
};
