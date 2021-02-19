const AuthStorage = {
  key: 'auth_user',
  getUser() {
    return JSON.parse(localStorage.getItem(this.key));
  },
  setUser(user) {
    localStorage.setItem(this.key, JSON.stringify(user));
  },
  removeUser() {
    localStorage.removeItem(this.key);
  },
};

export default AuthStorage;
