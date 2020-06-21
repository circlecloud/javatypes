declare namespace com {
    namespace rabbitmq {
        namespace tools {
            namespace jsonrpc {
                /**
                 * {@link JsonRpcMapper} based on Jackson.
                 * <p>
                 * Uses the streaming and databind modules. You need to add the appropriate dependency
                 * to the classpath if you want to use this class, as the RabbitMQ Java client
                 * library does not pull Jackson automatically when using a dependency management
                 * tool like Maven or Gradle.
                 * <p>
                 * Make sure to use the latest version of the Jackson library, as the version used in the
                 * RabbitMQ Java client can be a little bit behind.
                 * @see JsonRpcMapper
                 * @since 5.4.0
                 */
                // @ts-ignore
                class JacksonJsonRpcMapper extends java.lang.Object implements com.rabbitmq.tools.jsonrpc.JsonRpcMapper {
                    // @ts-ignore
                    constructor(mapper: ObjectMapper)
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public parse(requestBody: java.lang.String | string, description: com.rabbitmq.tools.jsonrpc.ServiceDescription): com.rabbitmq.tools.jsonrpc.JsonRpcMapper.JsonRpcRequest
                    // @ts-ignore
                    public parse(responseBody: java.lang.String | string, expectedReturnType: java.lang.Class<any>): com.rabbitmq.tools.jsonrpc.JsonRpcMapper.JsonRpcResponse
                    // @ts-ignore
                    public write(input: java.lang.Object | any): string
                    // @ts-ignore
                    convert(node: TreeNode, expectedType: java.lang.Class<any>): any
                }
            }
        }
    }
}
