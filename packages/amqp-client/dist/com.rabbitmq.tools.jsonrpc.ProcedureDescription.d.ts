declare namespace com {
    namespace rabbitmq {
        namespace tools {
            namespace jsonrpc {
                /**
                 * Description of a single JSON-RPC procedure.
                 */
                // @ts-ignore
                class ProcedureDescription extends java.lang.Object {
                    // @ts-ignore
                    constructor(pm: java.util.Map<java.lang.String | string, java.lang.Object | any>)
                    // @ts-ignore
                    constructor(m: java.lang.reflect.Method)
                    // @ts-ignore
                    constructor()
                    /**
                     * Getter for return type
                     */
                    // @ts-ignore
                    public getReturn(): string
                    /**
                     * Private API - used via reflection during parsing/loading
                     */
                    // @ts-ignore
                    public setReturn(value: java.lang.String | string): void
                    /**
                     * Private API - used to get the reflected method object, for servers
                     */
                    // @ts-ignore
                    public internal_getMethod(): java.lang.reflect.Method
                    // @ts-ignore
                    public getJavaReturnType(): string
                    // @ts-ignore
                    public setJavaReturnType(javaReturnType: java.lang.String | string): void
                    // @ts-ignore
                    public getReturnType(): java.lang.Class<any>
                    /**
                     * Gets an array of parameter descriptions for all this procedure's parameters
                     */
                    // @ts-ignore
                    public internal_getParams(): com.rabbitmq.tools.jsonrpc.ParameterDescription[]
                    /**
                     * Retrieves the parameter count for this procedure
                     */
                    // @ts-ignore
                    public arity(): number /*int*/
                    // @ts-ignore
                    public getParams(): com.rabbitmq.tools.jsonrpc.ParameterDescription[]
                    // @ts-ignore
                    public getName(): string
                    // @ts-ignore
                    public getSummary(): string
                    // @ts-ignore
                    public getHelp(): string
                    // @ts-ignore
                    public isIdempotent(): boolean
                    // @ts-ignore
                    public setName(name: java.lang.String | string): void
                    // @ts-ignore
                    public setSummary(summary: java.lang.String | string): void
                    // @ts-ignore
                    public setHelp(help: java.lang.String | string): void
                    // @ts-ignore
                    public setIdempotent(idempotent: boolean): void
                }
            }
        }
    }
}
