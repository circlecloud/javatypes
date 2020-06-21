declare namespace com {
    namespace rabbitmq {
        namespace tools {
            namespace jsonrpc {
                /**
                 * Abstraction to handle JSON parsing and generation.
                 * Used by {@link JsonRpcServer} and {@link JsonRpcClient}.
                 * @since 5.4.0
                 */
                // @ts-ignore
                interface JsonRpcMapper {
                    /**
                     * Parses a JSON RPC request.
                     * The {@link ServiceDescription} can be used
                     * to look up the invoked procedure and learn about
                     * its signature.
                     * @param requestBody
                     * @param description
                     * @return 
                     */
                    // @ts-ignore
                    parse(requestBody: java.lang.String | string, description: com.rabbitmq.tools.jsonrpc.ServiceDescription): com.rabbitmq.tools.jsonrpc.JsonRpcMapper.JsonRpcRequest
                    /**
                     * Parses a JSON RPC response.
                     * @param responseBody
                     * @param expectedType
                     * @return 
                     */
                    // @ts-ignore
                    parse(responseBody: java.lang.String | string, expectedType: java.lang.Class<any>): com.rabbitmq.tools.jsonrpc.JsonRpcMapper.JsonRpcResponse
                    /**
                     * Serialize an object into JSON.
                     * @param input
                     * @return 
                     */
                    // @ts-ignore
                    write(input: java.lang.Object | any): string
                }
            }
        }
    }
}
