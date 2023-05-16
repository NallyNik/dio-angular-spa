import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginService);
  });

  // Tests if token exists in localStorage.
  it("test_check_token_exists_in_localStorage",() => {
    // Arrange
    const token = '123';
    localStorage.setItem('token', token);
    const mockRouter = { navigate: jasmine.createSpy('navigate') } as any;
    const loginService = new LoginService(mockRouter);

    // Act
    loginService.doLogin();

    // Assert
    expect(localStorage.getItem('token')).toBe(token);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['todolist']);
  })
});
