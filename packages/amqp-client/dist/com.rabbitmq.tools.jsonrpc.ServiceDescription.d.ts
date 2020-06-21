declare namespace com {
    namespace rabbitmq {
        namespace tools {
            namespace jsonrpc {
                /**
                 * Description of a JSON-RPC service.
                 */
                // @ts-ignore
                class ServiceDescription extends java.lang.Object {
                    // @ts-ignore
                    constructor(rawServiceDescription: java.util.Map<java.lang.String | string, java.lang.Object | any>)
                    // @ts-ignore
                    constructor(klass: java.lang.Class<any>)
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly JSON_RPC_VERSION: java.lang.String | string
                    /**
                     * Gets a collection of all {@link ProcedureDescription} for this service
                     */
                    // @ts-ignore
                    public getProcs(): Array<com.rabbitmq.tools.jsonrpc.ProcedureDescription>
                    /**
                     * Private API - used via reflection during parsing/loading
                     */
                    // @ts-ignore
                    public setProcs(p: java.util.Collection<java.util.Map<java.lang.String | string, java.lang.Object | any>> | Array<java.util.Map<java.lang.String | string, java.lang.Object | any>>): void
                    /**
                     * Looks up a single ProcedureDescription by name and arity.
                     * @return non-null ProcedureDescription if a match is found
                     * @throws IllegalArgumentException if no match is found
                     */
                    // @ts-ignore
                    public getProcedure(newname: java.lang.String | string, arity: number /*int*/): com.rabbitmq.tools.jsonrpc.ProcedureDescription
                    // @ts-ignore
                    public getName(): string
                    // @ts-ignore
                    public getId(): string
                    // @ts-ignore
                    public getVersion(): string
                    // @ts-ignore
                    public getSummary(): string
                    // @ts-ignore
                    public getHelp(): string
                    // @ts-ignore
                    public setName(name: java.lang.String | string): void
                    // @ts-ignore
                    public setId(id: java.lang.String | string): void
                    // @ts-ignore
                    public setVersion(version: java.lang.String | string): void
                    // @ts-ignore
                    public setSummary(summary: java.lang.String | string): void
                    // @ts-ignore
                    public setHelp(help: java.lang.String | string): void
                }
            }
        }
    }
}
