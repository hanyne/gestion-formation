import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private localStorageKey = 'loggedInUser'; // Clé pour stocker les informations de l'utilisateur connecté dans le stockage local du navigateur

  constructor() { }

  // Méthode pour définir l'état de connexion de l'utilisateur et stocker les informations de l'utilisateur dans le stockage local
  setLoggedIn(username: string | null): void {
    if (username !== null) {
      localStorage.setItem(this.localStorageKey, username);
    } else {
      localStorage.removeItem(this.localStorageKey);
    }
  }

  // Méthode pour vérifier si l'utilisateur est connecté en récupérant les informations de l'utilisateur depuis le stockage local
  isLoggedInUser(): string | null {
    return localStorage.getItem(this.localStorageKey);
  }
}
