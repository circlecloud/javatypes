declare namespace org {
    namespace apache {
        namespace naming {
            namespace factory {
                /**
                 * <p>Object factory for resource links for shared data sources.</p>
                 */
                // @ts-ignore
                class DataSourceLinkFactory extends org.apache.naming.factory.ResourceLinkFactory {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static setGlobalContext(newGlobalContext: javax.naming.Context): void
                    /**
                     * Create a new DataSource instance.
                     * @param obj The reference object describing the DataSource
                     */
                    // @ts-ignore
                    public getObjectInstance(obj: java.lang.Object | any, name: javax.naming.Name, nameCtx: javax.naming.Context, environment: java.util.Hashtable<any, any>): any
                    // @ts-ignore
                    wrapDataSource(datasource: java.lang.Object | any, username: java.lang.String | string, password: java.lang.String | string): any
                }
            }
        }
    }
}
