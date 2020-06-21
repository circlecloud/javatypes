declare namespace javax {
    namespace servlet {
        namespace Registration {
            // @ts-ignore
            interface Dynamic extends javax.servlet.Registration {
                /**
                 * Mark this Servlet/Filter as supported asynchronous processing.
                 * @param isAsyncSupported  Should this Servlet/Filter support
                 *                           asynchronous processing
                 * @throws IllegalStateException if the ServletContext associated with
                 *          this registration has already been initialised
                 */
                // @ts-ignore
                setAsyncSupported(isAsyncSupported: boolean): void
            }
        }
    }
}
