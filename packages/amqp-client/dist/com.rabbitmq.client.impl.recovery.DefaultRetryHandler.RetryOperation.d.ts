declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace recovery {
                    namespace DefaultRetryHandler {
                        // @ts-ignore
                        interface RetryOperation<T> {
                            // @ts-ignore
                            call(context: com.rabbitmq.client.impl.recovery.RetryContext): T
                            // @ts-ignore
                            andThen<V>(after: com.rabbitmq.client.impl.recovery.DefaultRetryHandler.RetryOperation<V>): com.rabbitmq.client.impl.recovery.DefaultRetryHandler.RetryOperation<V>
                        }
                    }
                }
            }
        }
    }
}
