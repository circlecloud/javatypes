declare namespace java {
    namespace lang {
        /**
         * Thrown when an application tries to load in a class through its
         * string name using:
         * <ul>
         * <li>The <code>forName</code> method in class <code>Class</code>.
         * <li>The <code>findSystemClass</code> method in class
         * <code>ClassLoader</code> .
         * <li>The <code>loadClass</code> method in class <code>ClassLoader</code>.
         * </ul>
         * <p>
         * but no definition for the class with the specified name could be found.
         * <p>As of release 1.4, this exception has been retrofitted to conform to
         * the general purpose exception-chaining mechanism.  The "optional exception
         * that was raised while loading the class" that may be provided at
         * construction time and accessed via the {@link #getException()} method is
         * now known as the <i>cause</i>, and may be accessed via the {@link
         * Throwable#getCause()} method, as well as the aforementioned "legacy method."
         * @author unascribed
         * @see java.lang.Class#forName(java.lang.String)
         * @see java.lang.ClassLoader#findSystemClass(java.lang.String)
         * @see java.lang.ClassLoader#loadClass(java.lang.String, boolean)
         * @since JDK1.0
         */
        // @ts-ignore
        class ClassNotFoundException extends java.lang.ReflectiveOperationException {
            /**
             * Constructs a <code>ClassNotFoundException</code> with no detail message.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a <code>ClassNotFoundException</code> with the
             * specified detail message.
             * @param s   the detail message.
             */
            // @ts-ignore
            constructor(s: java.lang.String | string)
            /**
             * Constructs a <code>ClassNotFoundException</code> with the
             * specified detail message and optional exception that was
             * raised while loading the class.
             * @param s the detail message
             * @param ex the exception that was raised while loading the class
             * @since 1.2
             */
            // @ts-ignore
            constructor(s: java.lang.String | string, ex: java.lang.Throwable | Error)
            /**
             * Returns the exception that was raised if an error occurred while
             * attempting to load the class. Otherwise, returns <tt>null</tt>.
             * <p>This method predates the general-purpose exception chaining facility.
             * The {@link Throwable#getCause()} method is now the preferred means of
             * obtaining this information.
             * @return the <code>Exception</code> that was raised while loading a class
             * @since 1.2
             */
            // @ts-ignore
            getException(): Error
            /**
             * Returns the cause of this exception (the exception that was raised
             * if an error occurred while attempting to load the class; otherwise
             * <tt>null</tt>).
             * @return the cause of this exception.
             * @since 1.4
             */
            // @ts-ignore
            getCause(): Error
        }
    }
}
