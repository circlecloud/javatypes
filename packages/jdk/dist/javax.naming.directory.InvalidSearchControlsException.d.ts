declare namespace javax {
    namespace naming {
        namespace directory {
            /**
             * This exception is thrown when the specification of
             * the SearchControls for a search operation is invalid. For example, if the scope is
             * set to a value other than OBJECT_SCOPE, ONELEVEL_SCOPE, SUBTREE_SCOPE,
             * this exception is thrown.
             * <p>
             * Synchronization and serialization issues that apply to NamingException
             * apply directly here.
             * @author Rosanna Lee
             * @author Scott Seligman
             * @since 1.3
             */
            // @ts-ignore
            class InvalidSearchControlsException extends javax.naming.NamingException {
                /**
                 * Constructs a new instance of InvalidSearchControlsException.
                 * All fields are set to null.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a new instance of InvalidSearchControlsException
                 * with an explanation. All other fields set to null.
                 * @param msg Detail about this exception. Can be null.
                 * @see java.lang.Throwable#getMessage
                 */
                // @ts-ignore
                constructor(msg: string)
            }
        }
    }
}
