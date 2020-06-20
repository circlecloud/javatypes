declare namespace javax {
    namespace tools {
        namespace DocumentationTool {
            /**
             * Interface representing a future for a documentation task.  The
             * task has not yet started.  To start the task, call
             * the {@linkplain #call call} method.
             * <p>Before calling the call method, additional aspects of the
             * task can be configured, for example, by calling the
             * {@linkplain #setLocale setLocale} method.
             */
            // @ts-ignore
            interface DocumentationTask extends java.util.concurrent.Callable<java.lang.Boolean> {
                /**
                 * Set the locale to be applied when formatting diagnostics and
                 * other localized data.
                 * @param locale the locale to apply; {#code null} means apply no
                 *  locale
                 * @throws IllegalStateException if the task has started
                 */
                // @ts-ignore
                setLocale(locale: java.util.Locale): void
                /**
                 * Performs this documentation task.  The task may only
                 * be performed once.  Subsequent calls to this method throw
                 * IllegalStateException.
                 * @return true if and only all the files were processed without errors;
                 *  false otherwise
                 * @throws RuntimeException if an unrecoverable error occurred
                 *  in a user-supplied component.  The
                 *  {#linkplain Throwable#getCause() cause} will be the error
                 *  in user code.
                 * @throws IllegalStateException if called more than once
                 */
                // @ts-ignore
                call(): java.lang.Boolean
            }
        }
    }
}
