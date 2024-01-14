'use client';

import { useFormState } from 'react-dom';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { register } from '@/lib/actions';

import styles from './registerForm.module.css';

const RegisterForm = () => {
    const [state, formAction] = useFormState(register, undefined);

    const router = useRouter();

    useEffect(() => {
        state?.success && router.push('/login');
    }, [state?.success, router]);

    return (
        <form action={formAction} className={styles.form}>
            <input type="text" placeholder="username" name="username" />
            <input type="email" placeholder="email" name="email" />
            <input type="text" name="img" placeholder="image" />
            <input type="password" placeholder="password" name="password" />
            <input type="password" name="passwordRepeat" placeholder="password again" />
            <button>Register</button>
            {state?.error}
            <Link href='/login'>
                Have an account? <b>Login</b>
            </Link>
        </form>
    );
};

export default RegisterForm;