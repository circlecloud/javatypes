declare namespace javax {
    namespace naming {
        namespace directory {
            /**
             * This exception is thrown when attempting to access
             * an attribute that does not exist.
             * <p>
             * Synchronization and serialization issues that apply to NamingException
             * apply directly here.
             * @author Rosanna Lee
             * @author Scott Seligman
             * @since 1.3
             */
            // @ts-ignore
            class NoSuchAttributeException extends javax.naming.NamingException {
                /**
                 * Constructs a new instance of NoSuchAttributeException using
                 * an explanation. All other fields are set to null.
                 * @param explanation     Additional detail about this exception. Can be null.
                 * @see java.lang.Throwable#getMessage
                 */
                // @ts-ignore
                constructor(explanation: java.lang.String | string)
                /**
                 * Constructs a new instance of NoSuchAttributeException.
                 * All fields are initialized to null.
                 */
                // @ts-ignore
                constructor()
            }
        }
    }
}
