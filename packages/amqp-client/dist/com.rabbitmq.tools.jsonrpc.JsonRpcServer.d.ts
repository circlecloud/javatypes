declare namespace com {
    namespace rabbitmq {
        namespace tools {
            namespace jsonrpc {
                /**
                 * JSON-RPC Server class.
                 * <p>
                 * Given a Java {@link Class}, representing an interface, and an
                 * implementation of that interface, JsonRpcServer will reflect on the
                 * class to construct the {@link ServiceDescription}, and will route
                 * incoming requests for methods on the interface to the
                 * implementation object while the mainloop() is running.
                 * <p>
                 * {@link JsonRpcServer} delegates JSON parsing and generating to
                 * a {@link JsonRpcMapper}.
                 * @see com.rabbitmq.client.RpcServer
                 * @see JsonRpcClient
                 * @see JsonRpcMapper
                 * @see JacksonJsonRpcMapper
                 */
                // @ts-ignore
                class JsonRpcServer extends com.rabbitmq.client.StringRpcServer {
                    // @ts-ignore
                    constructor(channel: com.rabbitmq.client.Channel, interfaceClass: java.lang.Class<any>, interfaceInstance: java.lang.Object | any, mapper: com.rabbitmq.tools.jsonrpc.JsonRpcMapper)
                    /**
                     * Construct a server that talks to the outside world using the
                     * given channel, and constructs a fresh temporary
                     * queue. Use getQueueName() to discover the created queue name.
                     * @param channel           AMQP channel to use
                     * @param interfaceClass    Java interface that this server is exposing to the world
                     * @param interfaceInstance Java instance (of interfaceClass) that is being exposed
                     * @throws IOException if something goes wrong during an AMQP operation
                     */
                    // @ts-ignore
                    constructor(channel: com.rabbitmq.client.Channel, interfaceClass: java.lang.Class<any>, interfaceInstance: java.lang.Object | any)
                    // @ts-ignore
                    constructor(channel: com.rabbitmq.client.Channel, queueName: java.lang.String | string, interfaceClass: java.lang.Class<any>, interfaceInstance: java.lang.Object | any, mapper: com.rabbitmq.tools.jsonrpc.JsonRpcMapper)
                    /**
                     * Construct a server that talks to the outside world using the
                     * given channel and queue name. Our superclass,
                     * RpcServer, expects the queue to exist at the time of
                     * construction.
                     * @param channel           AMQP channel to use
                     * @param queueName         AMQP queue name to listen for requests on
                     * @param interfaceClass    Java interface that this server is exposing to the world
                     * @param interfaceInstance Java instance (of interfaceClass) that is being exposed
                     * @throws IOException if something goes wrong during an AMQP operation
                     */
                    // @ts-ignore
                    constructor(channel: com.rabbitmq.client.Channel, queueName: java.lang.String | string, interfaceClass: java.lang.Class<any>, interfaceInstance: java.lang.Object | any)
                    /**
                     * Override our superclass' method, dispatching to doCall.
                     */
                    // @ts-ignore
                    public handleStringCall(requestBody: java.lang.String | string, replyProperties: com.rabbitmq.client.AMQP.BasicProperties): string
                    /**
                     * Runs a single JSON-RPC request.
                     * @param requestBody the JSON-RPC request string (a JSON encoded value)
                     * @return a JSON-RPC response string (a JSON encoded value)
                     */
                    // @ts-ignore
                    public doCall(requestBody: java.lang.String | string): string
                    /**
                     * Retrieves the best matching method for the given method name and parameters.
                     * <p>
                     * Subclasses may override this if they have specialised
                     * dispatching requirements, so long as they continue to honour
                     * their ServiceDescription.
                     */
                    // @ts-ignore
                    public matchingMethod(methodName: java.lang.String | string, params: java.lang.Object[] | any[]): java.lang.reflect.Method
                    /**
                     * Public API - gets the service description record that this
                     * service built from interfaceClass at construction time.
                     */
                    // @ts-ignore
                    public getServiceDescription(): com.rabbitmq.tools.jsonrpc.ServiceDescription
                }
            }
        }
    }
}
