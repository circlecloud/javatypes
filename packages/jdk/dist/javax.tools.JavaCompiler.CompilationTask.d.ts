declare namespace javax {
    namespace tools {
        namespace JavaCompiler {
            /**
             * Interface representing a future for a compilation task.  The
             * compilation task has not yet started.  To start the task, call
             * the {@linkplain #call call} method.
             * <p>Before calling the call method, additional aspects of the
             * task can be configured, for example, by calling the
             * {@linkplain #setProcessors setProcessors} method.
             */
            // @ts-ignore
            interface CompilationTask extends java.util.concurrent.Callable<java.lang.Boolean> {
                /**
                 * Sets processors (for annotation processing).  This will
                 * bypass the normal discovery mechanism.
                 * @param processors processors (for annotation processing)
                 * @throws IllegalStateException if the task has started
                 */
                // @ts-ignore
                setProcessors(processors: java.lang.Iterable<javax.annotation.processing.Processor>): void
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
                 * Performs this compilation task.  The compilation may only
                 * be performed once.  Subsequent calls to this method throw
                 * IllegalStateException.
                 * @return true if and only all the files compiled without errors;
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
