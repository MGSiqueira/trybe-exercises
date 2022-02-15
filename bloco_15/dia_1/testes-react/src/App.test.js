import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('Verificando coisas', () => {
  test('Verificando se existe o campo Email.', () => {
    render(<App />);
    const inputEmail = screen.getByLabelText('Email');
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe('email');
  });
  
  test('Verificando se existem dois buttons', () =>  {
    render(<App />);
    const inputButton = screen.getAllByRole('button');
    expect(inputButton.length).toBe(2)
  })
  
  test('Verificando se existe o botão "Enviar"', () => {
    render(<App />);
    const btn = screen.getByTestId("id-send");
    expect(btn).toBeInTheDocument();
  });

  test('Verificando se existe o botão "Voltar"', () => {
    render(<App />);
    const btn = screen.getByTestId("id-back");
    expect(btn).toBeInTheDocument();
  });

  test('Verificando se o botão e o campo email estão funcionando.', () => {
    render(<App />);
  
    const EMAIL_USER = 'email@email.com';
  
    const textEmail = screen.getByTestId('id-email-user');
    expect(textEmail).toBeInTheDocument();
    expect(textEmail).toHaveTextContent('Valor:');
  
    const btnSend = screen.getByTestId('id-send');
    const inputEmail = screen.getByLabelText('Email');
    fireEvent.change(inputEmail, { target: { value: EMAIL_USER } });
    fireEvent.click(btnSend);
    expect(inputEmail).toHaveValue('');
    expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
  });
})
