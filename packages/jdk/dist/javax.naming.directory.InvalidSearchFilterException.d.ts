declare namespace javax {
    namespace naming {
        namespace directory {
            /**
             * This exception is thrown when the specification of
             * a search filter is invalid.  The expression of the filter may
             * be invalid, or there may be a problem with one of the parameters
             * passed to the filter.
             * <p>
             * Synchronization and serialization issues that apply to NamingException
             * apply directly here.
             * @author Rosanna Lee
             * @author Scott Seligman
             * @since 1.3
             */
            // @ts-ignore
            class InvalidSearchFilterException extends javax.naming.NamingException {
                /**
                 * Constructs a new instance of InvalidSearchFilterException.
                 * All fields are set to null.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a new instance of InvalidSearchFilterException
                 * with an explanation. All other fields are set to null.
                 * @param msg Detail about this exception. Can be null.
                 * @see java.lang.Throwable#getMessage
                 */
                // @ts-ignore
                constructor(msg: string)
            }
        }
    }
}
