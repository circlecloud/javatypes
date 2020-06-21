declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace recovery {
                    /**
                     * Not part of the public API. Mean to be used by JVM RabbitMQ clients that build on
                     * top of the Java client and need to be notified when server-name queue name changes
                     * after recovery.
                     */
                    // @ts-ignore
                    interface QueueRecoveryListener {
                        // @ts-ignore
                        queueRecovered(oldName: java.lang.String | string, newName: java.lang.String | string): void
                    }
                }
            }
        }
    }
}
