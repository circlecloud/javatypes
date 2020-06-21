declare namespace java {
    namespace awt {
        namespace print {
            /**
             * The <code>PrinterIOException</code> class is a subclass of
             * {@link PrinterException} and is used to indicate that an IO error
             * of some sort has occurred while printing.
             * <p>As of release 1.4, this exception has been retrofitted to conform to
             * the general purpose exception-chaining mechanism.  The
             * "<code>IOException</code> that terminated the print job"
             * that is provided at construction time and accessed via the
             * {@link #getIOException()} method is now known as the <i>cause</i>,
             * and may be accessed via the {@link Throwable#getCause()} method,
             * as well as the aforementioned "legacy method."
             */
            // @ts-ignore
            class PrinterIOException extends java.awt.print.PrinterException {
                /**
                 * Constructs a new <code>PrinterIOException</code>
                 * with the string representation of the specified
                 * {@link IOException}.
                 * @param exception the specified <code>IOException</code>
                 */
                // @ts-ignore
                constructor(exception: java.io.IOException)
                /**
                 * Returns the <code>IOException</code> that terminated
                 * the print job.
                 * <p>This method predates the general-purpose exception chaining facility.
                 * The {@link Throwable#getCause()} method is now the preferred means of
                 * obtaining this information.
                 * @return the <code>IOException</code> that terminated
                 *  the print job.
                 * @see IOException
                 */
                // @ts-ignore
                getIOException(): java.io.IOException
                /**
                 * Returns the the cause of this exception (the <code>IOException</code>
                 * that terminated the print job).
                 * @return the cause of this exception.
                 * @since 1.4
                 */
                // @ts-ignore
                getCause(): Error
            }
        }
    }
}
