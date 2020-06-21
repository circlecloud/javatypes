declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace listener {
                    /**
                     * Published when a listener consumer fails.
                     * @author Gary Russell
                     * @since 1.5
                     */
                    // @ts-ignore
                    class ListenerContainerConsumerFailedEvent extends AmqpEvent {
                        /**
                         * Construct an instance with the provided arguments.
                         * @param source the source container.
                         * @param reason the reason.
                         * @param throwable the throwable.
                         * @param fatal true if the startup failure was fatal (will not be retried).
                         */
                        // @ts-ignore
                        constructor(source: java.lang.Object | any, reason: java.lang.String | string, throwable: java.lang.Throwable | Error, fatal: boolean)
                        // @ts-ignore
                        public getReason(): string
                        // @ts-ignore
                        public isFatal(): boolean
                        // @ts-ignore
                        public getThrowable(): Error
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
