declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace listener {
                    /**
                     * Published when a listener consumer is terminated.
                     * @author Gary Russell
                     * @since 2.0
                     */
                    // @ts-ignore
                    class ListenerContainerConsumerTerminatedEvent extends AmqpEvent {
                        /**
                         * Construct an instance with the provided arguments.
                         * @param source the source container.
                         * @param reason the reason.
                         */
                        // @ts-ignore
                        constructor(source: java.lang.Object | any, reason: java.lang.String | string)
                        // @ts-ignore
                        public getReason(): string
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
