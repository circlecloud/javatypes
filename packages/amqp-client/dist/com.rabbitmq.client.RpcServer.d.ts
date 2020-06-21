declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Class which manages a request queue for a simple RPC-style service.
             * The class is agnostic about the format of RPC arguments / return values.
             */
            // @ts-ignore
            class RpcServer extends java.lang.Object {
                /**
                 * Creates an RpcServer listening on a temporary exclusive
                 * autodelete queue.
                 */
                // @ts-ignore
                constructor(channel: com.rabbitmq.client.Channel)
                /**
                 * If the passed-in queue name is null, creates a server-named
                 * temporary exclusive autodelete queue to use; otherwise expects
                 * the queue to have already been declared.
                 */
                // @ts-ignore
                constructor(channel: com.rabbitmq.client.Channel, queueName: java.lang.String | string)
                /**
                 * Public API - cancels the consumer, thus deleting the queue, if
                 * it was a temporary queue, and marks the RpcServer as closed.
                 * @throws IOException if an error is encountered
                 */
                // @ts-ignore
                public close(): void
                /**
                 * Registers a consumer on the reply queue.
                 * @throws IOException if an error is encountered
                 * @return the newly created and registered consumer
                 */
                // @ts-ignore
                setupConsumer(): com.rabbitmq.client.RpcServer.RpcConsumer
                /**
                 * Public API - main server loop. Call this to begin processing
                 * requests. Request processing will continue until the Channel
                 * (or its underlying Connection) is shut down, or until
                 * terminateMainloop() is called, or until the thread running the loop
                 * is interrupted.
                 * Note that if the mainloop is blocked waiting for a request, the
                 * termination flag is not checked until a request is received, so
                 * a good time to call terminateMainloop() is during a request
                 * handler.
                 * @return the exception that signalled the Channel shutdown, or null for orderly shutdown
                 */
                // @ts-ignore
                public mainloop(): com.rabbitmq.client.ShutdownSignalException
                /**
                 * Call this method to terminate the mainloop.
                 * Note that if the mainloop is blocked waiting for a request, the
                 * termination flag is not checked until a request is received, so
                 * a good time to call terminateMainloop() is during a request
                 * handler.
                 */
                // @ts-ignore
                public terminateMainloop(): void
                /**
                 * Private API - Process a single request. Called from mainloop().
                 */
                // @ts-ignore
                public processRequest(request: com.rabbitmq.client.Delivery): void
                /**
                 * Lowest-level response method. Calls
                 * handleCall(AMQP.BasicProperties,byte[],AMQP.BasicProperties).
                 */
                // @ts-ignore
                public handleCall(request: com.rabbitmq.client.Delivery, replyProperties: com.rabbitmq.client.AMQP.BasicProperties): number /*byte*/[]
                /**
                 * Mid-level response method. Calls
                 * handleCall(byte[],AMQP.BasicProperties).
                 */
                // @ts-ignore
                public handleCall(requestProperties: com.rabbitmq.client.AMQP.BasicProperties, requestBody: number /*byte*/[], replyProperties: com.rabbitmq.client.AMQP.BasicProperties): number /*byte*/[]
                /**
                 * High-level response method. Returns an empty response by
                 * default - override this (or other handleCall and handleCast
                 * methods) in subclasses.
                 */
                // @ts-ignore
                public handleCall(requestBody: number /*byte*/[], replyProperties: com.rabbitmq.client.AMQP.BasicProperties): number /*byte*/[]
                /**
                 * Gives a chance to set/modify reply properties before handling call.
                 * Note the correlationId property is already set.
                 * @param request the inbound message
                 * @param builder the reply properties builder
                 * @return the properties to pass in to the handling call
                 */
                // @ts-ignore
                preprocessReplyProperties(request: com.rabbitmq.client.Delivery, builder: com.rabbitmq.client.AMQP.BasicProperties.Builder): com.rabbitmq.client.AMQP.BasicProperties
                /**
                 * Gives a chance to set/modify reply properties after the handling call
                 * @param request the inbound message
                 * @param builder the reply properties builder
                 * @return the properties to pass in to the response message
                 */
                // @ts-ignore
                postprocessReplyProperties(request: com.rabbitmq.client.Delivery, builder: com.rabbitmq.client.AMQP.BasicProperties.Builder): com.rabbitmq.client.AMQP.BasicProperties
                /**
                 * Lowest-level handler method. Calls
                 * handleCast(AMQP.BasicProperties,byte[]).
                 */
                // @ts-ignore
                public handleCast(request: com.rabbitmq.client.Delivery): void
                /**
                 * Mid-level handler method. Calls
                 * handleCast(byte[]).
                 */
                // @ts-ignore
                public handleCast(requestProperties: com.rabbitmq.client.AMQP.BasicProperties, requestBody: number /*byte*/[]): void
                /**
                 * High-level handler method. Does nothing by default - override
                 * this (or other handleCast and handleCast methods) in
                 * subclasses.
                 */
                // @ts-ignore
                public handleCast(requestBody: number /*byte*/[]): void
                /**
                 * Retrieve the channel.
                 * @return the channel to which this server is connected
                 */
                // @ts-ignore
                public getChannel(): com.rabbitmq.client.Channel
                /**
                 * Retrieve the queue name.
                 * @return the queue which this server is consuming from
                 */
                // @ts-ignore
                public getQueueName(): string
            }
        }
    }
}
