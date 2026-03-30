import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Add logic to find the user from the credentials supplied
        const user = { id: 1, name: 'User', username: 'user', email: 'user@example.com' };

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // Return null if user data could not be retrieved
          return null;
        }
      }
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
});