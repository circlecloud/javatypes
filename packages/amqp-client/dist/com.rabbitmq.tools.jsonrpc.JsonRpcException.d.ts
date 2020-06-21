declare namespace com {
    namespace rabbitmq {
        namespace tools {
            namespace jsonrpc {
                /**
                 * Thrown when a JSON-RPC service indicates an error occurred during a call.
                 */
                // @ts-ignore
                class JsonRpcException extends java.lang.Exception {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    constructor(detailMessage: java.lang.String | string, name: java.lang.String | string, code: number /*int*/, message: java.lang.String | string, error: java.lang.Object | any)
                    // @ts-ignore
                    getName(): string
                    // @ts-ignore
                    getCode(): number /*int*/
                    // @ts-ignore
                    getMessage(): string
                    // @ts-ignore
                    getError(): any
                }
            }
        }
    }
}
