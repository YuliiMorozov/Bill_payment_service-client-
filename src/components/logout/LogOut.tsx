import React, { useState } from 'react'
import { LoginPage } from '../../pages/Login';

export function Logout() {
    localStorage.clear();
    window.location.href = 'http://127.0.0.1:3000/login';
    return (
      <LoginPage/>
    )
  };