import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
    private baseUrl = '/api/Authentication';
    constructor(private http: HttpClient) {}

  // Login
  login(email: string, password: string): Observable<any> {
    const formData = new FormData();
    formData.append('Email', email);
    formData.append('Password', password);

    return this.http.post(`${this.baseUrl}/login`, formData);
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
  refreshToken(): boolean | any {
    // تحديث التوكن
  }

  // Verify Email Request
  verifyEmailRequest(): boolean | any {
    // إرسال إيميل التحقق
  }

  // Verify Email
  verifyEmail(code: string): boolean | any {
    // التحقق من الإيميل باستخدام الكود
  }
}
