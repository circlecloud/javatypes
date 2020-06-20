declare namespace javax {
    namespace naming {
        namespace directory {
            /**
             * This exception is thrown when an operation attempts
             * to add an attribute that already exists.
             * <p>
             * Synchronization and serialization issues that apply to NamingException
             * apply directly here.
             * @author Rosanna Lee
             * @author Scott Seligman
             * @see DirContext#modifyAttributes
             * @since 1.3
             */
            // @ts-ignore
            class AttributeInUseException extends javax.naming.NamingException {
                /**
                 * Constructs a new instance of AttributeInUseException with
                 * an explanation. All other fields are set to null.
                 * @param explanation     Possibly null additional detail about this exception.
                 * @see java.lang.Throwable#getMessage
                 */
                // @ts-ignore
                constructor(explanation: string)
                /**
                 * Constructs a new instance of AttributeInUseException.
                 * All fields are initialized to null.
                 */
                // @ts-ignore
                constructor()
            }
        }
    }
}
