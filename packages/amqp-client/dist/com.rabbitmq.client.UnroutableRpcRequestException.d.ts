declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Exception thrown when a RPC request isn't routed to any queue.
             * <p>
             * The {@link RpcClient} must be configured with the mandatory
             * flag set to true with {@link RpcClientParams#useMandatory()}.
             * @see RpcClientParams#useMandatory()
             * @see RpcClient#RpcClient(RpcClientParams)
             * @since 5.6.0
             */
            // @ts-ignore
            class UnroutableRpcRequestException extends java.lang.RuntimeException {
                // @ts-ignore
                constructor(returnMessage: com.rabbitmq.client.Return)
                /**
                 * The returned message.
                 * @return 
                 */
                // @ts-ignore
                getReturnMessage(): com.rabbitmq.client.Return
            }
        }
    }
}
