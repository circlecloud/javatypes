declare namespace javax {
    namespace naming {
        namespace directory {
            /**
             * This class is thrown when an attempt is
             * made to add to an attribute a value that conflicts with the attribute's
             * schema definition.  This could happen, for example, if attempting
             * to add an attribute with no value when the attribute is required
             * to have at least one value, or if attempting to add more than
             * one value to a single valued-attribute, or if attempting to
             * add a value that conflicts with the syntax of the attribute.
             * <p>
             * Synchronization and serialization issues that apply to NamingException
             * apply directly here.
             * @author Rosanna Lee
             * @author Scott Seligman
             * @since 1.3
             */
            // @ts-ignore
            class InvalidAttributeValueException extends javax.naming.NamingException {
                /**
                 * Constructs a new instance of InvalidAttributeValueException using
                 * an explanation. All other fields are set to null.
                 * @param explanation     Additional detail about this exception. Can be null.
                 * @see java.lang.Throwable#getMessage
                 */
                // @ts-ignore
                constructor(explanation: string)
                /**
                 * Constructs a new instance of InvalidAttributeValueException.
                 * All fields are set to null.
                 */
                // @ts-ignore
                constructor()
            }
        }
    }
}
