declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace recovery {
                    /**
                     * Not part of the public API. Mean to be used by JVM RabbitMQ clients that build on
                     * top of the Java client and need to be notified when consumer tag changes
                     * after recovery.
                     */
                    // @ts-ignore
                    interface ConsumerRecoveryListener {
                        // @ts-ignore
                        consumerRecovered(oldConsumerTag: java.lang.String | string, newConsumerTag: java.lang.String | string): void
                    }
                }
            }
        }
    }
}
