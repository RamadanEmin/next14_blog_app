import Image from 'next/image';

const getData = async (slug) => {
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`, { cache: 'no-store' });

    if (!res.ok) {
        throw new Error('Something went wrong!');
    }

    return res.json();
};

export const generateMetadata = async ({ params }) => {
    const { slug } = params;
    const post = await getData(slug);

    return {
        title: post.title,
        description: post.desc
    };
};

const SinglePostPage = async ({ params }) => {
    const { slug } = params;
    const post = await getData(slug);

    return (
        <div className={styles.container}>
            {post.img && <div className={styles.imgContainer}>
                <Image src={post.img} alt='' fill className={styles.img} />
            </div>}
            <div className={styles.textContainer}>
                <h1 className={styles.title}> {post.title}</h1>
                <div className={styles.detail}>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>{post.createdAt.toString().slice(4, 15)}</span>
                    </div>
                </div>
                <div className={styles.content}>
                    {post.desc}
                </div>
            </div>
        </div>
    );
};

export default SinglePostPage;