import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import api from '@/config/api.json';
import { postData } from '@/utils/apiCore';

const MINUTE = 60;
const HOUR = 60 * MINUTE;

const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                },
                password: { label: 'Password', type: 'password' },
                // remember: { label: 'Remember password', type: 'checkbox' },
            },
            // async authorize(credentials, req) {
            //     if (!credentials?.email || !credentials.password) {
            //         return null;
            //     }

            //     const res = await postData({ url: api.auth.login, body: credentials });
            //     if (res.token) {
            //         // Any object returned will be saved in `user` property of the JWT

            //         const user = {
            //             id: res.user._id,
            //             name: res.user.firstName + ' ' + res.user.lastName,
            //             email: res.user.email,
            //             avatar: res.user.avatar,
            //         };

            //         return res;
            //     } else {
            //         return null;
            //     }
            // },

            async authorize(credentials, req) {
                // Check if the email and password are correct
                if (credentials?.email === 'example@example.com' && credentials.password === 'password') {
                    // Return a dummy token and user object
                    return {
                        token: 'dummy_token',
                        user: {
                            id: 1,
                            name: 'John Doe',
                            email: 'example@example.com',
                            avatar: 'https://example.com/avatar.jpg',
                        },
                    };
                } else {
                    // Return null if the email and password are incorrect
                    return null;
                }
            },
        }),
    ],

    // pages: {
    //     // signIn: '/login',
    //     // signOut: '/signout',
    //     // error: '/login',
    // },

    session: {
        maxAge: 8 * HOUR, // 8 hours
        // strategy: 'jwt',
    },

    callbacks: {
        async jwt({ token, user, trigger, session }: any) {
            if (trigger === 'update') {
                return { ...token, ...session };
            }
            return { ...token, ...user };
        },
        async session({ session, token }: any) {
            session.token = token.token;
            session.user = token.user;
            return session;
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, authOptions };
