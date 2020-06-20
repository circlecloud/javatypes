declare namespace javax {
    namespace naming {
        /**
         * This exception indicates that the name being specified does
         * not conform to the naming syntax of a naming system.
         * This exception is thrown by any of the methods that does name
         * parsing (such as those in Context, DirContext, CompositeName and CompoundName).
         * <p>
         * Synchronization and serialization issues that apply to NamingException
         * apply directly here.
         * @author Rosanna Lee
         * @author Scott Seligman
         * @see Context
         * @see javax.naming.directory.DirContext
         * @see CompositeName
         * @see CompoundName
         * @see NameParser
         * @since 1.3
         */
        // @ts-ignore
        class InvalidNameException extends javax.naming.NamingException {
            /**
             * Constructs an instance of InvalidNameException using an
             * explanation of the problem.
             * All other fields are initialized to null.
             * @param explanation      A possibly null message explaining the problem.
             * @see java.lang.Throwable#getMessage
             */
            // @ts-ignore
            constructor(explanation: string)
            /**
             * Constructs an instance of InvalidNameException with
             * all fields set to null.
             */
            // @ts-ignore
            constructor()
        }
    }
}
