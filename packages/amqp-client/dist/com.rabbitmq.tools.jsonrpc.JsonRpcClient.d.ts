declare namespace com {
    namespace rabbitmq {
        namespace tools {
            namespace jsonrpc {
                /**
                 * <a href="https://www.jsonrpc.org/">JSON-RPC</a> is a lightweight
                 * RPC mechanism using <a href="https://www.json.org/">JSON</a>
                 * as a data language for request and reply messages. It is
                 * rapidly becoming a standard in web development, where it is
                 * used to make RPC requests over HTTP. RabbitMQ provides an
                 * AMQP transport binding for JSON-RPC in the form of the
                 * <code>JsonRpcClient</code> class.
                 * <p>
                 * JSON-RPC services are self-describing - each service is able
                 * to list its supported procedures, and each procedure
                 * describes its parameters and types. An instance of
                 * JsonRpcClient retrieves its service description using the
                 * standard <code>system.describe</code> procedure when it is
                 * constructed, and uses the information to coerce parameter
                 * types appropriately. A JSON service description is parsed
                 * into instances of <code>ServiceDescription</code>. Client
                 * code can access the service description by reading the
                 * <code>serviceDescription</code> field of
                 * <code>JsonRpcClient</code> instances.
                 * <p>
                 * {@link JsonRpcClient} delegates JSON parsing and generating to
                 * a {@link JsonRpcMapper}.
                 * @see #call(String, Object[])
                 * @see JsonRpcMapper
                 * @see JacksonJsonRpcMapper
                 */
                // @ts-ignore
                class JsonRpcClient extends com.rabbitmq.client.RpcClient implements java.lang.reflect.InvocationHandler {
                    /**
                     * Construct a new {@link JsonRpcClient}, passing the {@link RpcClientParams} through {@link RpcClient}'s constructor.
                     * <p>
                     * The service description record is
                     * retrieved from the server during construction.
                     * @param rpcClientParams
                     * @param mapper
                     * @throws IOException
                     * @throws JsonRpcException
                     * @throws TimeoutException
                     */
                    // @ts-ignore
                    constructor(rpcClientParams: com.rabbitmq.client.RpcClientParams, mapper: com.rabbitmq.tools.jsonrpc.JsonRpcMapper)
                    /**
                     * Construct a new JsonRpcClient, passing the parameters through
                     * to RpcClient's constructor. The service description record is
                     * retrieved from the server during construction.
                     * @throws TimeoutException if a response is not received within the timeout specified, if any
                     */
                    // @ts-ignore
                    constructor(channel: com.rabbitmq.client.Channel, exchange: java.lang.String | string, routingKey: java.lang.String | string, timeout: number /*int*/, mapper: com.rabbitmq.tools.jsonrpc.JsonRpcMapper)
                    /**
                     * Construct a new JsonRpcClient, passing the parameters through
                     * to RpcClient's constructor. The service description record is
                     * retrieved from the server during construction.
                     * @throws TimeoutException if a response is not received within the timeout specified, if any
                     */
                    // @ts-ignore
                    constructor(channel: com.rabbitmq.client.Channel, exchange: java.lang.String | string, routingKey: java.lang.String | string, timeout: number /*int*/)
                    // @ts-ignore
                    constructor(channel: com.rabbitmq.client.Channel, exchange: java.lang.String | string, routingKey: java.lang.String | string)
                    /**
                     * Private API - used by {@link #call(String[])} to ad-hoc convert
                     * strings into the required data types for a call.
                     * This method is deprecated because it uses homegrown JSON utilities
                     * that don't deal correctly with complex types. The {@link JacksonJsonRpcMapper}
                     * has been introduced to handle primitive and complex types, as well
                     * as primitive wrappers correctly.
                     * @deprecated This method will be removed in the next major version
                     */
                    // @ts-ignore
                    public static coerce(val: java.lang.String | string, type: java.lang.String | string): any
                    /**
                     * Public API - builds, encodes and sends a JSON-RPC request, and
                     * waits for the response.
                     * @return the result contained within the reply, if no exception is found
                     * @throws JsonRpcException if the reply object contained an exception
                     * @throws TimeoutException if a response is not received within the timeout specified, if any
                     */
                    // @ts-ignore
                    public call(method: java.lang.String | string, params: java.lang.Object[] | any[]): any
                    /**
                     * Public API - implements InvocationHandler.invoke. This is
                     * useful for constructing dynamic proxies for JSON-RPC
                     * interfaces.
                     */
                    // @ts-ignore
                    public invoke(proxy: java.lang.Object | any, method: java.lang.reflect.Method, args: java.lang.Object[] | any[]): any
                    /**
                     * Public API - gets a dynamic proxy for a particular interface class.
                     */
                    // @ts-ignore
                    public createProxy<T>(klass: java.lang.Class<T>): T
                    /**
                     * Public API - as {@link #call(String, Object[])}, but takes the
                     * method name from the first entry in <code>args</code>, and the
                     * parameters from subsequent entries. All parameter values are
                     * passed through coerce() to attempt to make them the types the
                     * server is expecting.
                     * This method is deprecated because it uses homegrown JSON utilities
                     * that don't deal correctly with complex types. The {@link JacksonJsonRpcMapper}
                     * has been introduced to handle primitive and complex types, as well
                     * as primitive wrappers correctly.
                     * @return the result contained within the reply, if no exception is found
                     * @throws JsonRpcException      if the reply object contained an exception
                     * @throws NumberFormatException if a coercion failed
                     * @throws TimeoutException      if a response is not received within the timeout specified, if any
                     * @see #coerce
                     * @deprecated This method will be removed in the next major version
                     */
                    // @ts-ignore
                    public call(args: java.lang.String[] | string[]): any
                    /**
                     * Public API - gets the service description record that this
                     * service loaded from the server itself at construction time.
                     */
                    // @ts-ignore
                    public getServiceDescription(): com.rabbitmq.tools.jsonrpc.ServiceDescription
                }
            }
        }
    }
}
