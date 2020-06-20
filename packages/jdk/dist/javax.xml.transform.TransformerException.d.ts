declare namespace javax {
    namespace xml {
        namespace transform {
            /**
             * This class specifies an exceptional condition that occurred
             * during the transformation process.
             */
            // @ts-ignore
            class TransformerException extends java.lang.Exception {
                /**
                 * Create a new TransformerException.
                 * @param message The error or warning message.
                 */
                // @ts-ignore
                constructor(message: string)
                /**
                 * Create a new TransformerException wrapping an existing exception.
                 * @param e The exception to be wrapped.
                 */
                // @ts-ignore
                constructor(e: Error)
                /**
                 * Wrap an existing exception in a TransformerException.
                 * <p>This is used for throwing processor exceptions before
                 * the processing has started.</p>
                 * @param message The error or warning message, or null to
                 *                 use the message from the embedded exception.
                 * @param e Any exception
                 */
                // @ts-ignore
                constructor(message: string, e: Error)
                /**
                 * Create a new TransformerException from a message and a Locator.
                 * <p>This constructor is especially useful when an application is
                 * creating its own exception from within a DocumentHandler
                 * callback.</p>
                 * @param message The error or warning message.
                 * @param locator The locator object for the error or warning.
                 */
                // @ts-ignore
                constructor(message: string, locator: javax.xml.transform.SourceLocator)
                /**
                 * Wrap an existing exception in a TransformerException.
                 * @param message The error or warning message, or null to
                 *                 use the message from the embedded exception.
                 * @param locator The locator object for the error or warning.
                 * @param e Any exception
                 */
                // @ts-ignore
                constructor(message: string, locator: javax.xml.transform.SourceLocator, e: Error)
                /**
                 * Method getLocator retrieves an instance of a SourceLocator
                 * object that specifies where an error occurred.
                 * @return A SourceLocator object, or null if none was specified.
                 */
                // @ts-ignore
                getLocator(): javax.xml.transform.SourceLocator
                /**
                 * Method setLocator sets an instance of a SourceLocator
                 * object that specifies where an error occurred.
                 * @param location A SourceLocator object, or null to clear the location.
                 */
                // @ts-ignore
                setLocator(location: javax.xml.transform.SourceLocator): void
                /**
                 * This method retrieves an exception that this exception wraps.
                 * @return An Throwable object, or null.
                 * @see #getCause
                 */
                // @ts-ignore
                getException(): java.lang.Throwable
                /**
                 * Returns the cause of this throwable or <code>null</code> if the
                 * cause is nonexistent or unknown.  (The cause is the throwable that
                 * caused this throwable to get thrown.)
                 * @return the cause, or null if unknown
                 */
                // @ts-ignore
                getCause(): java.lang.Throwable
                /**
                 * Initializes the <i>cause</i> of this throwable to the specified value.
                 * (The cause is the throwable that caused this throwable to get thrown.)
                 * <p>This method can be called at most once.  It is generally called from
                 * within the constructor, or immediately after creating the
                 * throwable.  If this throwable was created
                 * with {@link #TransformerException(Throwable)} or
                 * {@link #TransformerException(String,Throwable)}, this method cannot be called
                 * even once.
                 * @param cause the cause (which is saved for later retrieval by the
                 *          {#link #getCause()} method).  (A <code>null</code> value is
                 *          permitted, and indicates that the cause is nonexistent or
                 *          unknown.)
                 * @return a reference to this <code>Throwable</code> instance.
                 * @throws IllegalArgumentException if <code>cause</code> is this
                 *          throwable.  (A throwable cannot
                 *          be its own cause.)
                 * @throws IllegalStateException if this throwable was
                 *          created with {#link #TransformerException(Throwable)} or
                 *          {@link #TransformerException(String,Throwable)}, or this method has already
                 *          been called on this throwable.
                 */
                // @ts-ignore
                initCause(cause: Error): java.lang.Throwable
                /**
                 * Get the error message with location information
                 * appended.
                 * @return A <code>String</code> representing the error message with
                 *          location information appended.
                 */
                // @ts-ignore
                getMessageAndLocation(): java.lang.String
                /**
                 * Get the location information as a string.
                 * @return A string with location info, or null
                 *  if there is no location information.
                 */
                // @ts-ignore
                getLocationAsString(): java.lang.String
                /**
                 * Print the the trace of methods from where the error
                 * originated.  This will trace all nested exception
                 * objects, as well as this object.
                 */
                // @ts-ignore
                printStackTrace(): void
                /**
                 * Print the the trace of methods from where the error
                 * originated.  This will trace all nested exception
                 * objects, as well as this object.
                 * @param s The stream where the dump will be sent to.
                 */
                // @ts-ignore
                printStackTrace(s: java.io.PrintStream): void
                /**
                 * Print the the trace of methods from where the error
                 * originated.  This will trace all nested exception
                 * objects, as well as this object.
                 * @param s The writer where the dump will be sent to.
                 */
                // @ts-ignore
                printStackTrace(s: java.io.PrintWriter): void
            }
        }
    }
}
