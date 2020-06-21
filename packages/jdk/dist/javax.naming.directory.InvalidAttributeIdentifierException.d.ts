declare namespace javax {
    namespace naming {
        namespace directory {
            /**
             * This exception is thrown when an attempt is
             * made to add to create an attribute with an invalid attribute identifier.
             * The validity of an attribute identifier is directory-specific.
             * <p>
             * Synchronization and serialization issues that apply to NamingException
             * apply directly here.
             * @author Rosanna Lee
             * @author Scott Seligman
             * @since 1.3
             */
            // @ts-ignore
            class InvalidAttributeIdentifierException extends javax.naming.NamingException {
                /**
                 * Constructs a new instance of InvalidAttributeIdentifierException using the
                 * explanation supplied. All other fields set to null.
                 * @param explanation     Possibly null string containing additional detail about this exception.
                 * @see java.lang.Throwable#getMessage
                 */
                // @ts-ignore
                constructor(explanation: java.lang.String | string)
                /**
                 * Constructs a new instance of InvalidAttributeIdentifierException.
                 * All fields are set to null.
                 */
                // @ts-ignore
                constructor()
            }
        }
    }
}
