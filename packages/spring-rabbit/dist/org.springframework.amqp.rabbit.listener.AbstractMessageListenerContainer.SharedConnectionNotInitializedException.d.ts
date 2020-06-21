declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace listener {
                    namespace AbstractMessageListenerContainer {
                        /**
                         * Exception that indicates that the initial setup of this container's shared Rabbit Connection failed. This is
                         * indicating to invokers that they need to establish the shared Connection themselves on first access.
                         */
                        // @ts-ignore
                        class SharedConnectionNotInitializedException extends java.lang.RuntimeException {
                            /**
                             * Create a new SharedConnectionNotInitializedException.
                             * @param msg the detail message
                             */
                            // @ts-ignore
                            constructor(msg: java.lang.String | string)
                        }
                    }
                }
            }
        }
    }
}
