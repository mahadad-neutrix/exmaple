import { withAuth } from 'next-auth/middleware';

export const config = { matcher: ['/account',] };

// '/applicant/'

export default withAuth({
    // pages: {
    //     signIn: '/login',
    // },
});
