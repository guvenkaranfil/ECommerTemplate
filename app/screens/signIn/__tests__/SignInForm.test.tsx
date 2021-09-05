import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import SignInForm from '../components/SignInForm';

describe('SignInForm', () => {
  test('should fulfill valid e-mail and password and be able to sign in', () => {
    const onLoginMock = jest.fn();
    const validEmailAdress = 'email@email.com';
    const validPassword = '123456';

    const {getByPlaceholderText, getByText} = render(
      <SignInForm onLogin={onLoginMock} />,
    );

    const emailInput = getByPlaceholderText(/e-mail/i);
    const passwordInput = getByPlaceholderText(/sifre/i);
    const signInButton = getByText(/sign in/i);

    fireEvent.changeText(emailInput, validEmailAdress);
    fireEvent.changeText(passwordInput, validPassword);

    fireEvent.press(signInButton);

    expect(onLoginMock).toBeCalledTimes(1);
    expect(onLoginMock).toHaveBeenCalledWith(validEmailAdress, validPassword);
  });

  test('should show invalid field errors for each invalid input field', async () => {
    const onLoginMock = jest.fn();
    const validEmailAdress = 'email@email.com';
    const validPassword = '123456';

    const {getByPlaceholderText, getByText, queryByText} = render(
      <SignInForm onLogin={onLoginMock} />,
    );
    const emailInput = getByPlaceholderText(/e-mail/i);
    const passwordInput = getByPlaceholderText(/sifre/i);
    const signInButton = getByText(/sign in/i);

    fireEvent.press(signInButton);
    expect(onLoginMock).toBeCalledTimes(0);
    expect(await queryByText(/e-mail required/i)).not.toBeNull();
    expect(await queryByText(/password required/i)).not.toBeNull();

    fireEvent.changeText(emailInput, validEmailAdress);
    fireEvent.changeText(passwordInput, validPassword);

    fireEvent.press(signInButton);

    expect(onLoginMock).toBeCalledTimes(1);
    expect(onLoginMock).toHaveBeenCalledWith(validEmailAdress, validPassword);
  });
});
