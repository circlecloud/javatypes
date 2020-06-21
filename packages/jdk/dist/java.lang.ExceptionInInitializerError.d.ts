declare namespace java {
    namespace lang {
        /**
         * Signals that an unexpected exception has occurred in a static initializer.
         * An <code>ExceptionInInitializerError</code> is thrown to indicate that an
         * exception occurred during evaluation of a static initializer or the
         * initializer for a static variable.
         * <p>As of release 1.4, this exception has been retrofitted to conform to
         * the general purpose exception-chaining mechanism.  The "saved throwable
         * object" that may be provided at construction time and accessed via
         * the {@link #getException()} method is now known as the <i>cause</i>,
         * and may be accessed via the {@link Throwable#getCause()} method, as well
         * as the aforementioned "legacy method."
         * @author Frank Yellin
         * @since JDK1.1
         */
        // @ts-ignore
        class ExceptionInInitializerError extends java.lang.LinkageError {
            /**
             * Constructs an <code>ExceptionInInitializerError</code> with
             * <code>null</code> as its detail message string and with no saved
             * throwable object.
             * A detail message is a String that describes this particular exception.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new <code>ExceptionInInitializerError</code> class by
             * saving a reference to the <code>Throwable</code> object thrown for
             * later retrieval by the {@link #getException()} method. The detail
             * message string is set to <code>null</code>.
             * @param thrown The exception thrown
             */
            // @ts-ignore
            constructor(thrown: java.lang.Throwable | Error)
            /**
             * Constructs an ExceptionInInitializerError with the specified detail
             * message string.  A detail message is a String that describes this
             * particular exception. The detail message string is saved for later
             * retrieval by the {@link Throwable#getMessage()} method. There is no
             * saved throwable object.
             * @param s the detail message
             */
            // @ts-ignore
            constructor(s: java.lang.String | string)
            /**
             * Returns the exception that occurred during a static initialization that
             * caused this error to be created.
             * <p>This method predates the general-purpose exception chaining facility.
             * The {@link Throwable#getCause()} method is now the preferred means of
             * obtaining this information.
             * @return the saved throwable object of this
             *          <code>ExceptionInInitializerError</code>, or <code>null</code>
             *          if this <code>ExceptionInInitializerError</code> has no saved
             *          throwable object.
             */
            // @ts-ignore
            getException(): Error
            /**
             * Returns the cause of this error (the exception that occurred
             * during a static initialization that caused this error to be created).
             * @return the cause of this error or <code>null</code> if the
             *           cause is nonexistent or unknown.
             * @since 1.4
             */
            // @ts-ignore
            getCause(): Error
        }
    }
}
