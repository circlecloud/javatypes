declare namespace java {
    namespace util {
        namespace logging {
            /**
             * ErrorManager objects can be attached to Handlers to process
             * any error that occurs on a Handler during Logging.
             * <p>
             * When processing logging output, if a Handler encounters problems
             * then rather than throwing an Exception back to the issuer of
             * the logging call (who is unlikely to be interested) the Handler
             * should call its associated ErrorManager.
             */
            // @ts-ignore
            class ErrorManager extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * GENERIC_FAILURE is used for failure that don't fit
                 * into one of the other categories.
                 */
                // @ts-ignore
                public static readonly GENERIC_FAILURE: number /*int*/
                /**
                 * WRITE_FAILURE is used when a write to an output stream fails.
                 */
                // @ts-ignore
                public static readonly WRITE_FAILURE: number /*int*/
                /**
                 * FLUSH_FAILURE is used when a flush to an output stream fails.
                 */
                // @ts-ignore
                public static readonly FLUSH_FAILURE: number /*int*/
                /**
                 * CLOSE_FAILURE is used when a close of an output stream fails.
                 */
                // @ts-ignore
                public static readonly CLOSE_FAILURE: number /*int*/
                /**
                 * OPEN_FAILURE is used when an open of an output stream fails.
                 */
                // @ts-ignore
                public static readonly OPEN_FAILURE: number /*int*/
                /**
                 * FORMAT_FAILURE is used when formatting fails for any reason.
                 */
                // @ts-ignore
                public static readonly FORMAT_FAILURE: number /*int*/
                /**
                 * The error method is called when a Handler failure occurs.
                 * <p>
                 * This method may be overridden in subclasses.  The default
                 * behavior in this base class is that the first call is
                 * reported to System.err, and subsequent calls are ignored.
                 * @param msg    a descriptive string (may be null)
                 * @param ex     an exception (may be null)
                 * @param code   an error code defined in ErrorManager
                 */
                // @ts-ignore
                public error(msg: java.lang.String | string, ex: java.lang.Exception, code: number /*int*/): void
            }
        }
    }
}
