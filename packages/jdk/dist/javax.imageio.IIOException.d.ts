declare namespace javax {
    namespace imageio {
        /**
         * An exception class used for signaling run-time failure of reading
         * and writing operations.
         * <p> In addition to a message string, a reference to another
         * <code>Throwable</code> (<code>Error</code> or
         * <code>Exception</code>) is maintained.  This reference, if
         * non-<code>null</code>, refers to the event that caused this
         * exception to occur.  For example, an <code>IOException</code> while
         * reading from a <code>File</code> would be stored there.
         */
        // @ts-ignore
        class IIOException extends java.io.IOException {
            /**
             * Constructs an <code>IIOException</code> with a given message
             * <code>String</code>.  No underlying cause is set;
             * <code>getCause</code> will return <code>null</code>.
             * @param message the error message.
             * @see #getMessage
             */
            // @ts-ignore
            constructor(message: string)
            /**
             * Constructs an <code>IIOException</code> with a given message
             * <code>String</code> and a <code>Throwable</code> that was its
             * underlying cause.
             * @param message the error message.
             * @param cause the <code>Throwable</code> (<code>Error</code> or
             *  <code>Exception</code>) that caused this exception to occur.
             * @see #getCause
             * @see #getMessage
             */
            // @ts-ignore
            constructor(message: string, cause: Error)
        }
    }
}
