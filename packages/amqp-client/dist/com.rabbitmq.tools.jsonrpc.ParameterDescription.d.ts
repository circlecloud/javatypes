declare namespace com {
    namespace rabbitmq {
        namespace tools {
            namespace jsonrpc {
                /**
                 * Description of a single JSON-RPC procedure parameter.
                 */
                // @ts-ignore
                class ParameterDescription extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    constructor(pm: java.util.Map<java.lang.String | string, java.lang.Object | any>)
                    // @ts-ignore
                    constructor(index: number /*int*/, c: java.lang.Class<any>)
                    // @ts-ignore
                    public static lookup(c: java.lang.Class<any>): string
                    // @ts-ignore
                    public getName(): string
                    // @ts-ignore
                    public getType(): string
                    // @ts-ignore
                    public setName(name: java.lang.String | string): void
                    // @ts-ignore
                    public setType(type: java.lang.String | string): void
                }
            }
        }
    }
}
