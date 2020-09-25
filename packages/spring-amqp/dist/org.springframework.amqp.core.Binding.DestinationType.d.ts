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
                        public static readonly QUEUE: org.springframework.amqp.core.Binding.DestinationType
                        /**
                         * Exchange destination.
                         */
                        // @ts-ignore
                        public static readonly EXCHANGE: org.springframework.amqp.core.Binding.DestinationType
                        // @ts-ignore
                        public static values(): org.springframework.amqp.core.Binding.DestinationType[]
                        // @ts-ignore
                        public static valueOf(name: java.lang.String | string): org.springframework.amqp.core.Binding.DestinationType
                    }
                }
            }
        }
    }
}
