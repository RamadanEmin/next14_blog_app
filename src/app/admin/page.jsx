import styles from './admin.module.css';

const AdminPage = async () => {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <AdminPosts />
                </div>
                <div className={styles.col}>
                    <AdminPostsForm />
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