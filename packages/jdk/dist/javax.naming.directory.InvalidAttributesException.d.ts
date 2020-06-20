declare namespace javax {
    namespace naming {
        namespace directory {
            /**
             * This exception is thrown when an attempt is
             * made to add or modify an attribute set that has been specified
             * incompletely or incorrectly. This could happen, for example,
             * when attempting to add or modify a binding, or to create a new
             * subcontext without specifying all the mandatory attributes
             * required for creation of the object.  Another situation in
             * which this exception is thrown is by specification of incompatible
             * attributes within the same attribute set, or attributes in conflict
             * with that specified by the object's schema.
             * <p>
             * Synchronization and serialization issues that apply to NamingException
             * apply directly here.
             * @author Rosanna Lee
             * @author Scott Seligman
             * @since 1.3
             */
            // @ts-ignore
            class InvalidAttributesException extends javax.naming.NamingException {
                /**
                 * Constructs a new instance of InvalidAttributesException using an
                 * explanation. All other fields are set to null.
                 * @param explanation     Additional detail about this exception. Can be null.
                 * @see java.lang.Throwable#getMessage
                 */
                // @ts-ignore
                constructor(explanation: string)
                /**
                 * Constructs a new instance of InvalidAttributesException.
                 * All fields are set to null.
                 */
                // @ts-ignore
                constructor()
            }
        }
    }
}
