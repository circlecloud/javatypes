declare namespace org {
    namespace springframework {
        namespace util {
            /**
             * {@code java.io.Writer} adapter for a Commons Logging {@code Log}.
             * @author Juergen Hoeller
             * @since 2.5.1
             */
            // @ts-ignore
            class CommonsLogWriter extends java.io.Writer {
                /**
                 * Create a new CommonsLogWriter for the given Commons Logging logger.
                 * @param logger the Commons Logging logger to write to
                 */
                // @ts-ignore
                constructor(logger: Log)
                // @ts-ignore
                write(ch: string): void
                // @ts-ignore
                write(buffer: string[], offset: number /*int*/, length: number /*int*/): void
                // @ts-ignore
                flush(): void
                // @ts-ignore
                close(): void
            }
        }
    }
}
