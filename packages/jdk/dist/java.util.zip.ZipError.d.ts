declare namespace java {
    namespace util {
        namespace zip {
            /**
             * Signals that an unrecoverable error has occurred.
             * @author Dave Bristor
             * @since 1.6
             */
            // @ts-ignore
            class ZipError extends java.lang.InternalError {
                /**
                 * Constructs a ZipError with the given detail message.
                 * @param s the {#code String} containing a detail message
                 */
                // @ts-ignore
                constructor(s: string)
            }
        }
    }
}
