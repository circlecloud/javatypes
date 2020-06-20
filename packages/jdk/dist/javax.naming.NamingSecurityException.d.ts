declare namespace javax {
    namespace naming {
        /**
         * This is the superclass of security-related exceptions
         * thrown by operations in the Context and DirContext interfaces.
         * The nature of the failure is described by the name of the subclass.
         * <p>
         * If the program wants to handle this exception in particular, it
         * should catch NamingSecurityException explicitly before attempting to
         * catch NamingException. A program might want to do this, for example,
         * if it wants to treat security-related exceptions specially from
         * other sorts of naming exception.
         * <p>
         * Synchronization and serialization issues that apply to NamingException
         * apply directly here.
         * @author Rosanna Lee
         * @author Scott Seligman
         * @since 1.3
         */
        // @ts-ignore
        class NamingSecurityException extends javax.naming.NamingException {
            /**
             * Constructs a new instance of NamingSecurityException using the
             * explanation supplied. All other fields default to null.
             * @param explanation     Possibly null additional detail about this exception.
             * @see java.lang.Throwable#getMessage
             */
            // @ts-ignore
            constructor(explanation: string)
            /**
             * Constructs a new instance of NamingSecurityException.
             * All fields are initialized to null.
             */
            // @ts-ignore
            constructor()
        }
    }
}
