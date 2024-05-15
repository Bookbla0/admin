'use client';

import React, { useState } from 'react';
import styles from '@/app/(beforeLogin)/before.module.scss';
import Image from 'next/image';
import logo from '../../../../public/logo.png';
import { loginApi } from '@/api/auth/auth.api';
import { useRouter } from 'next/navigation';

export default function BeforePage() {
  const router = useRouter();

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    try {
      const result = await loginApi({ ...data });
      console.log(result);
    } catch (err) {
      console.log(err);
    }
    // router.push('/');
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image src={logo} alt="logo"></Image>
        <h1 className={styles.title}>BookBla</h1>
      </header>
      <main className={styles.main} onSubmit={onSubmit}>
        <form className={styles.wrapper}>
          <input className={styles.input} name="id" placeholder="아이디" />
          <input className={styles.input} name="password" placeholder="비밀번호" type="password" />
          <button className={styles.button} type="submit">
            로그인
          </button>
        </form>
      </main>
    </div>
  );
}
