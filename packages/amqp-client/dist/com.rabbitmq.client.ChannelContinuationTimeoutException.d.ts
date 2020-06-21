declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Exception thrown when a channel times out on a continuation during a RPC call.
             * @since 4.1.0
             */
            // @ts-ignore
            class ChannelContinuationTimeoutException extends java.io.IOException {
                // @ts-ignore
                constructor(cause: java.util.concurrent.TimeoutException, channel: java.lang.Object | any, channelNumber: number /*int*/, method: com.rabbitmq.client.Method)
                /**
                 * @return request method that timed out
                 */
                // @ts-ignore
                getMethod(): com.rabbitmq.client.Method
                /**
                 * channel that performed the call
                 * @return 
                 */
                // @ts-ignore
                getChannel(): any
                /**
                 * @return number of the channel that performed the call
                 */
                // @ts-ignore
                getChannelNumber(): number /*int*/
            }
        }
    }
}
