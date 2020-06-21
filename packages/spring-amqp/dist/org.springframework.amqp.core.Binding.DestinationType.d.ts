declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace core {
                namespace Binding {
                    /**
                     * The binding destination.
                     */
                    // @ts-ignore
                    class DestinationType extends java.lang.Enum<org.springframework.amqp.core.Binding.DestinationType> {
                        /**
                         * Queue destination.
                         */
                        // @ts-ignore
                        readonly QUEUE: org.springframework.amqp.core.Binding.DestinationType
                        /**
                         * Exchange destination.
                         */
                        // @ts-ignore
                        readonly EXCHANGE: org.springframework.amqp.core.Binding.DestinationType
                        // @ts-ignore
                        values(): org.springframework.amqp.core.Binding.DestinationType[]
                        // @ts-ignore
                        valueOf(name: java.lang.String | string): org.springframework.amqp.core.Binding.DestinationType
                    }
                }
            }
        }
    }
}
