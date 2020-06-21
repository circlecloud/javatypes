declare namespace org {
    namespace apache {
        namespace naming {
            namespace factory {
                /**
                 * Object factory for EJBs.
                 * @author Jacek Laskowski
                 * @author Remy Maucherat
                 */
                // @ts-ignore
                class OpenEjbFactory extends java.lang.Object implements javax.naming.spi.ObjectFactory {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    static readonly DEFAULT_OPENEJB_FACTORY: java.lang.String | string
                    /**
                     * Create a new EJB instance using OpenEJB.
                     * @param obj The reference object describing the DataSource
                     */
                    // @ts-ignore
                    public getObjectInstance(obj: java.lang.Object | any, name: javax.naming.Name, nameCtx: javax.naming.Context, environment: java.util.Hashtable<any, any>): any
                }
            }
        }
    }
}
