declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace support {
                /**
                 * For components that support customization of the logging of certain events, users can
                 * provide an implementation of this interface to modify the existing logging behavior.
                 * @author Gary Russell
                 * @since 1.5
                 */
                // @ts-ignore
                interface ConditionalExceptionLogger {
                    /**
                     * Log the event.
                     * @param logger the logger to use.
                     * @param message a message that the caller suggests should be included in the log.
                     * @param t a throwable; may be null.
                     */
                    // @ts-ignore
                    log(logger: Log, message: string, t: Error): void
                }
            }
        }
    }
}
