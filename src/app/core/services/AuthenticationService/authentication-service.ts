import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ApiResponse } from '../../models/api-response';
import { JwtDto } from '../../models/jwt-dto';
import { environment } from '../ProductService/product-service';
import { jwtDecode } from 'jwt-decode';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
  

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private baseUrl = `${environment.apiUrl}/Authentication`;
  private router = inject(Router);
  constructor(private http: HttpClient) {}

  // Login
  login(email: string, password: string): Observable<ApiResponse<JwtDto>> {
    const formData = new FormData();
    formData.append('Email', email);
    formData.append('Password', password);

    return this.http.post<ApiResponse<JwtDto>>(`${this.baseUrl}/login`, formData);
  }
  logout(): void {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  setToken(token: string, remember: boolean): void {
    if (remember) {
      localStorage.setItem('token', token);
    } else {
      sessionStorage.setItem('token', token);
    }
  }
getUserRole(): string | null {

  const token=  localStorage.getItem('token') || sessionStorage.getItem('token');
  if (!token) return null;

  const decodedToken: any = jwtDecode(token);

  const role = decodedToken[
    'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
  ];



  return role || null;
}
  isAuthenticated(): boolean {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    if (!token) return false;
    const decodedToken: any = jwtDecode(token);
    const currentTime = Math.floor(Date.now() / 1000);
    return decodedToken.exp > currentTime;
  }
  getToken(): string | null {
    return localStorage.getItem('token') || sessionStorage.getItem('token');
  }

  // Register Customer
  registerCustomer(data: {
    Email: string;
    Password: string;
    UserName: string;
    FirstName: string;
    LastName: string;
    PhoneNumber: string;
    Gender: number;
    DateOfBirth: string;
    City?: string;
    State?: string;
    StreetAddress?: string;
    PostalCode?: string;
    Country?: string;
  }): boolean | any {
    // تسجيل العميل
  }

  // Register Merchant
  registerMerchant(data: {
    Email: string;
    Password: string;
    UserName: string;
    StoreName: string;
    StoreDescription: string;
  }): boolean | any {
    // تسجيل التاجر
  }

  // Add Categories
  addCategory(userId: string, categories: number[]): boolean | any {
    // إضافة الكاتيجوريز للتاجر
  }

  // Change Password
  changePassword(currentPassword: string, newPassword: string): boolean | any {
    // تغيير الباسورد
  }

  // Submit Forget Password Request
  submitForgetPasswordRequest(email: string): boolean | any {
    // إرسال كود إعادة تعيين الباسورد
  }

  // Reset Password
  resetPassword(code: string, newPassword: string, confirmPassword: string): boolean | any {
    // إعادة تعيين الباسورد باستخدام الكود
  }

  // Refresh Token
 refreshToken(): Observable<{ accessToken: string }> {
    // backend هيتعامل مع الـ refresh token اللي في الكوكيز
    return this.http.post<{ accessToken: string }>(
      `${this.baseUrl}/refresh-token`,
      {}
    ).pipe(
      tap(res => {
        // حفظ الـ access token الجديد
        this.setToken(res.accessToken, true); // فرضنا دائمًا في localStorage
      })
    );}

  // Verify Email Request
  verifyEmailRequest(): boolean | any {
    // إرسال إيميل التحقق
  }

  // Verify Email
  verifyEmail(code: string): boolean | any {
    // التحقق من الإيميل باستخدام الكود
  }
}
