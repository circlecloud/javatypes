declare namespace javax {
    namespace naming {
        namespace directory {
            /**
             * This exception is thrown when a method
             * in some ways violates the schema. An example of schema violation
             * is modifying attributes of an object that violates the object's
             * schema definition. Another example is renaming or moving an object
             * to a part of the namespace that violates the namespace's
             * schema definition.
             * <p>
             * Synchronization and serialization issues that apply to NamingException
             * apply directly here.
             * @author Rosanna Lee
             * @author Scott Seligman
             * @see javax.naming.Context#bind
             * @see DirContext#bind
             * @see javax.naming.Context#rebind
             * @see DirContext#rebind
             * @see DirContext#createSubcontext
             * @see javax.naming.Context#createSubcontext
             * @see DirContext#modifyAttributes
             * @since 1.3
             */
            // @ts-ignore
            class SchemaViolationException extends javax.naming.NamingException {
                /**
                 * Constructs a new instance of SchemaViolationException.
                 * All fields are set to null.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a new instance of SchemaViolationException
                 * using the explanation supplied. All other fields are set to null.
                 * @param explanation Detail about this exception. Can be null.
                 * @see java.lang.Throwable#getMessage
                 */
                // @ts-ignore
                constructor(explanation: string)
            }
        }
    }
}
