declare namespace java {
    namespace net {
        /**
         * The class PasswordAuthentication is a data holder that is used by
         * Authenticator.  It is simply a repository for a user name and a password.
         * @see java.net.Authenticator
         * @see java.net.Authenticator#getPasswordAuthentication()
         * @author Bill Foote
         * @since 1.2
         */
        // @ts-ignore
        class PasswordAuthentication extends java.lang.Object {
            /**
             * Creates a new {@code PasswordAuthentication} object from the given
             * user name and password.
             * <p> Note that the given user password is cloned before it is stored in
             * the new {@code PasswordAuthentication} object.
             * @param userName the user name
             * @param password the user's password
             */
            // @ts-ignore
            constructor(userName: java.lang.String | string, password: string[])
            /**
             * Returns the user name.
             * @return the user name
             */
            // @ts-ignore
            public getUserName(): string
            /**
             * Returns the user password.
             * <p> Note that this method returns a reference to the password. It is
             * the caller's responsibility to zero out the password information after
             * it is no longer needed.
             * @return the password
             */
            // @ts-ignore
            public getPassword(): string[]
        }
    }
}
