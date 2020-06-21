declare namespace org {
    namespace apache {
        namespace naming {
            namespace factory {
                /**
                 * <p>Object factory for resource links.</p>
                 * @author Remy Maucherat
                 */
                // @ts-ignore
                class ResourceLinkFactory extends java.lang.Object implements javax.naming.spi.ObjectFactory {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    static readonly sm: org.apache.naming.StringManager
                    /**
                     * Set the global context (note: can only be used once).
                     * @param newGlobalContext new global context value
                     */
                    // @ts-ignore
                    public static setGlobalContext(newGlobalContext: javax.naming.Context): void
                    // @ts-ignore
                    public static registerGlobalResourceAccess(globalContext: javax.naming.Context, localName: java.lang.String | string, globalName: java.lang.String | string): void
                    // @ts-ignore
                    public static deregisterGlobalResourceAccess(globalContext: javax.naming.Context, localName: java.lang.String | string): void
                    // @ts-ignore
                    public static deregisterGlobalResourceAccess(globalContext: javax.naming.Context): void
                    /**
                     * Create a new DataSource instance.
                     * @param obj The reference object describing the DataSource
                     */
                    // @ts-ignore
                    public getObjectInstance(obj: java.lang.Object | any, name: javax.naming.Name, nameCtx: javax.naming.Context, environment: java.util.Hashtable<any, any>): any
                }
            }
        }
    }
}
