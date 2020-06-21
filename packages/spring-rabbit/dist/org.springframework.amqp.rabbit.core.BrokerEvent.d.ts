declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace core {
                    /**
                     * Represents a broker event generated by the Event Exchange Plugin
                     * (https://www.rabbitmq.com/event-exchange.html).
                     * @author Gary Russell
                     * @since 2.1
                     */
                    // @ts-ignore
                    class BrokerEvent extends AmqpEvent {
                        /**
                         * Create an instance with the provided source and properties.
                         * @param source the source.
                         * @param properties the properties.
                         */
                        // @ts-ignore
                        constructor(source: java.lang.Object | any, properties: MessageProperties)
                        /**
                         * The event type ({@link MessageProperties#getReceivedRoutingKey()}).
                         * @return the type.
                         */
                        // @ts-ignore
                        public getEventType(): string
                        /**
                         * Properties of the event {@link MessageProperties#getHeaders()}.
                         * @return the properties.
                         */
                        // @ts-ignore
                        public getEventProperties(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                        /**
                         * The complete {@link MessageProperties} from the event representing the event.
                         * (The body is always blank).
                         * @return the message properties.
                         */
                        // @ts-ignore
                        public getMessageProperties(): MessageProperties
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
