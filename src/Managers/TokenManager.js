class TokenManager {

    static TOKEN_KEY = "auth_token";

    static saveToken(token) {
        localStorage.setItem(this.TOKEN_KEY, token);
    }

    static getToken() {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    static removeToken() {
        localStorage.removeItem(this.TOKEN_KEY);
    }

    static decodeToken() {
    const token = this.getToken();
    if (!token) return null;

    try {
      const base64Url = token.split('.')[1]; // payload part
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      console.log("Decoded token payload:", JSON.parse(jsonPayload));
      return JSON.parse(jsonPayload);
    } catch (e) {
      console.error("Failed to decode token:", e);
      return null;
    }
  }


}

export default TokenManager;
