declare namespace com {
    namespace rabbitmq {
        namespace tools {
            namespace jsonrpc {
                /**
                 * Simple {@link JsonRpcMapper} based on homegrown JSON utilities.
                 * Handles integers, doubles, strings, booleans, and arrays of those types.
                 * <p>
                 * For a more comprehensive set of features, use {@link JacksonJsonRpcMapper}.
                 * <p>
                 * Will be removed in 6.0
                 * @see JsonRpcMapper
                 * @see JacksonJsonRpcMapper
                 * @since 5.4.0
                 * @deprecated use {#link JacksonJsonRpcMapper} instead
                 */
                // @ts-ignore
                class DefaultJsonRpcMapper extends java.lang.Object implements com.rabbitmq.tools.jsonrpc.JsonRpcMapper {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public parse(requestBody: java.lang.String | string, description: com.rabbitmq.tools.jsonrpc.ServiceDescription): com.rabbitmq.tools.jsonrpc.JsonRpcMapper.JsonRpcRequest
                    // @ts-ignore
                    public parse(responseBody: java.lang.String | string, expectedType: java.lang.Class<any>): com.rabbitmq.tools.jsonrpc.JsonRpcMapper.JsonRpcResponse
                    // @ts-ignore
                    public write(input: java.lang.Object | any): string
                }
            }
        }
    }
}
