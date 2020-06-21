declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Holder class to configure a {@link RpcClient}.
             * @see RpcClient#RpcClient(RpcClientParams)
             * @since 5.6.0
             */
            // @ts-ignore
            class RpcClientParams extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Set the channel to use for communication.
                 * @return 
                 */
                // @ts-ignore
                public getChannel(): com.rabbitmq.client.Channel
                // @ts-ignore
                public channel(channel: com.rabbitmq.client.Channel): com.rabbitmq.client.RpcClientParams
                /**
                 * Set the exchange to send requests to.
                 * @return 
                 */
                // @ts-ignore
                public getExchange(): string
                // @ts-ignore
                public exchange(exchange: java.lang.String | string): com.rabbitmq.client.RpcClientParams
                // @ts-ignore
                public getRoutingKey(): string
                /**
                 * Set the routing key to use for requests.
                 * @param routingKey
                 * @return 
                 */
                // @ts-ignore
                public routingKey(routingKey: java.lang.String | string): com.rabbitmq.client.RpcClientParams
                // @ts-ignore
                public getReplyTo(): string
                /**
                 * Set the queue where the server should put replies on.
                 * <p>
                 * The default is to use
                 * <a href="https://www.rabbitmq.com/direct-reply-to.html">Direct Reply-to</a>.
                 * Using another value will cause the creation of a temporary private
                 * auto-delete queue.
                 * <p>
                 * The default shouldn't be changed for performance reasons.
                 * @param replyTo
                 * @return 
                 */
                // @ts-ignore
                public replyTo(replyTo: java.lang.String | string): com.rabbitmq.client.RpcClientParams
                // @ts-ignore
                public getTimeout(): number /*int*/
                /**
                 * Set the timeout in milliseconds to use on call responses.
                 * @param timeout
                 * @return 
                 */
                // @ts-ignore
                public timeout(timeout: number /*int*/): com.rabbitmq.client.RpcClientParams
                /**
                 * Whether to publish RPC requests with the mandatory flag or not.
                 * <p>
                 * Default is to not publish requests with the mandatory flag
                 * set to true.
                 * <p>
                 * When set to true, unroutable requests will result
                 * in {@link UnroutableRpcRequestException} exceptions thrown.
                 * Use a custom reply handler to change this behavior.
                 * @param useMandatory
                 * @return 
                 * @see #replyHandler(Function)
                 */
                // @ts-ignore
                public useMandatory(useMandatory: boolean): com.rabbitmq.client.RpcClientParams
                /**
                 * Instructs to use the mandatory flag when publishing RPC requests.
                 * <p>
                 * Unroutable requests will result in {@link UnroutableRpcRequestException} exceptions
                 * thrown. Use a custom reply handler to change this behavior.
                 * @return 
                 * @see #replyHandler(Function)
                 */
                // @ts-ignore
                public useMandatory(): com.rabbitmq.client.RpcClientParams
                // @ts-ignore
                public shouldUseMandatory(): boolean
                /**
                 * Logic to generate correlation IDs.
                 * @param correlationIdGenerator
                 * @return 
                 * @since 5.9.0
                 */
                // @ts-ignore
                public correlationIdSupplier(correlationIdGenerator: java.util.function$.Supplier<java.lang.String | string>): com.rabbitmq.client.RpcClientParams
                // @ts-ignore
                public getCorrelationIdSupplier(): java.util.function$.Supplier<java.lang.String | string>
                // @ts-ignore
                public getReplyHandler(): java.util.function$.Function<java.lang.Object | any, com.rabbitmq.client.RpcClient.Response>
                /**
                 * Set the behavior to use when receiving replies.
                 * <p>
                 * The default is to wrap the reply into a {@link com.rabbitmq.client.RpcClient.Response}
                 * instance. Unroutable requests will result in {@link UnroutableRpcRequestException}
                 * exceptions.
                 * @param replyHandler
                 * @return 
                 * @see #useMandatory()
                 * @see #useMandatory(boolean)
                 */
                // @ts-ignore
                public replyHandler(replyHandler: java.util.function$.Function<java.lang.Object | any, com.rabbitmq.client.RpcClient.Response>): com.rabbitmq.client.RpcClientParams
            }
        }
    }
}
