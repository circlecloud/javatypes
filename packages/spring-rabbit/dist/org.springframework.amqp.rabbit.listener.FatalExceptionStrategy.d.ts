declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace listener {
                    /**
                     * A strategy interface for the {@code ConditionalRejectingErrorHandler} to
                     * decide whether an exception should be considered to be fatal and the
                     * message should not be requeued.
                     * @author Gary Russell
                     * @since 1.3.2
                     */
                    // @ts-ignore
                    interface FatalExceptionStrategy {
                        // @ts-ignore
                        isFatal(t: java.lang.Throwable | Error): boolean
                    }
                }
            }
        }
    }
}
