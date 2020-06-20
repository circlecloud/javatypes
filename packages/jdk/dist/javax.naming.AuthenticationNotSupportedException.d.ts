declare namespace javax {
    namespace naming {
        /**
         * This exception is thrown when
         * the particular flavor of authentication requested is not supported.
         * For example, if the program
         * is attempting to use strong authentication but the directory/naming
         * supports only simple authentication, this exception would be thrown.
         * Identification of a particular flavor of authentication is
         * provider- and server-specific. It may be specified using
         * specific authentication schemes such
         * those identified using SASL, or a generic authentication specifier
         * (such as "simple" and "strong").
         * <p>
         * If the program wants to handle this exception in particular, it
         * should catch AuthenticationNotSupportedException explicitly before
         * attempting to catch NamingException. After catching
         * <code>AuthenticationNotSupportedException</code>, the program could
         * reattempt the authentication using a different authentication flavor
         * by updating the resolved context's environment properties accordingly.
         * <p>
         * Synchronization and serialization issues that apply to NamingException
         * apply directly here.
         * @author Rosanna Lee
         * @author Scott Seligman
         * @since 1.3
         */
        // @ts-ignore
        class AuthenticationNotSupportedException extends javax.naming.NamingSecurityException {
            /**
             * Constructs a new instance of AuthenticationNotSupportedException using
             * an explanation. All other fields default to null.
             * @param explanation     A possibly null string containing additional
             *                           detail about this exception.
             * @see java.lang.Throwable#getMessage
             */
            // @ts-ignore
            constructor(explanation: string)
            /**
             * Constructs a new instance of AuthenticationNotSupportedException
             * all name resolution fields and explanation initialized to null.
             */
            // @ts-ignore
            constructor()
        }
    }
}
