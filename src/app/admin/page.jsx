import { auth } from '@/lib/auth';
import AdminPosts from '@/components/adminPosts/adminPosts';
import AdminPostsForm from '@/components/adminPostsForm/adminPostsForm';

import styles from './admin.module.css';

const AdminPage = async () => {
    const session = await auth();

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <AdminPosts />
                </div>
                <div className={styles.col}>
                    <AdminPostsForm userId={session.user.id} />
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.col}>
                    <AdminUsers />
                </div>
                <div className={styles.col}>
                    <AdminUserForm />
                </div>
            </div>
        </div>
    );
};

export default AdminPage;