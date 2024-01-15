export const authConfig = {
    pages: {
        signIn: '/login'
    },
    providers: [],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.username = user.username;
                token.img = user.img;
                token.isAdmin = user.isAdmin;
            }

            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
                session.user.username = token.username;
                session.user.img = token.img;
                session.user.isAdmin = token.isAdmin;
            }

            return session;
        },
    }
};