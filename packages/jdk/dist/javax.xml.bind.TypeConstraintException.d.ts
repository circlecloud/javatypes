declare namespace javax {
    namespace xml {
        namespace bind {
            /**
             * This exception indicates that a violation of a dynamically checked type
             * constraint was detected.
             * <p>
             * This exception can be thrown by the generated setter methods of the schema
             * derived Java content classes.  However, since fail-fast validation is
             * an optional feature for JAXB Providers to support, not all setter methods
             * will throw this exception when a type constraint is violated.
             * <p>
             * If this exception is throw while invoking a fail-fast setter, the value of
             * the property is guaranteed to remain unchanged, as if the setter were never
             * called.
             * @author <ul><li>Ryan Shoemaker, Sun Microsystems, Inc.</li><li>Joe Fialli, Sun Microsystems, Inc.</li></ul>
             * @see ValidationEvent
             * @since JAXB1.0
             */
            // @ts-ignore
            class TypeConstraintException extends java.lang.RuntimeException {
                /**
                 * Construct a TypeConstraintException with the specified detail message.  The
                 * errorCode and linkedException will default to null.
                 * @param message a description of the exception
                 */
                // @ts-ignore
                constructor(message: string)
                /**
                 * Construct a TypeConstraintException with the specified detail message and vendor
                 * specific errorCode.  The linkedException will default to null.
                 * @param message a description of the exception
                 * @param errorCode a string specifying the vendor specific error code
                 */
                // @ts-ignore
                constructor(message: string, errorCode: string)
                /**
                 * Construct a TypeConstraintException with a linkedException.  The detail message and
                 * vendor specific errorCode will default to null.
                 * @param exception the linked exception
                 */
                // @ts-ignore
                constructor(exception: Error)
                /**
                 * Construct a TypeConstraintException with the specified detail message and
                 * linkedException.  The errorCode will default to null.
                 * @param message a description of the exception
                 * @param exception the linked exception
                 */
                // @ts-ignore
                constructor(message: string, exception: Error)
                /**
                 * Construct a TypeConstraintException with the specified detail message,
                 * vendor specific errorCode, and linkedException.
                 * @param message a description of the exception
                 * @param errorCode a string specifying the vendor specific error code
                 * @param exception the linked exception
                 */
                // @ts-ignore
                constructor(message: string, errorCode: string, exception: Error)
                /**
                 * Get the vendor specific error code
                 * @return a string specifying the vendor specific error code
                 */
                // @ts-ignore
                getErrorCode(): java.lang.String
                /**
                 * Get the linked exception
                 * @return the linked Exception, null if none exists
                 */
                // @ts-ignore
                getLinkedException(): java.lang.Throwable
                /**
                 * Add a linked Exception.
                 * @param exception the linked Exception (A null value is permitted and
                 *                   indicates that the linked exception does not exist or
                 *                   is unknown).
                 */
                // @ts-ignore
                setLinkedException(exception: Error): void
                /**
                 * Returns a short description of this TypeConstraintException.
                 */
                // @ts-ignore
                toString(): java.lang.String
                /**
                 * Prints this TypeConstraintException and its stack trace (including the stack trace
                 * of the linkedException if it is non-null) to the PrintStream.
                 * @param s PrintStream to use for output
                 */
                // @ts-ignore
                printStackTrace(s: java.io.PrintStream): void
                /**
                 * Prints this TypeConstraintException and its stack trace (including the stack trace
                 * of the linkedException if it is non-null) to <tt>System.err</tt>.
                 */
                // @ts-ignore
                printStackTrace(): void
            }
        }
    }
}
