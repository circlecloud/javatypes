declare namespace org {
    namespace apache {
        namespace naming {
            namespace factory {
                /**
                 * Abstract base class that provides common functionality required by
                 * sub-classes. This class exists primarily to reduce code duplication.
                 */
                // @ts-ignore
                abstract class FactoryBase extends java.lang.Object implements javax.naming.spi.ObjectFactory {
                    // @ts-ignore
                    constructor()
                    /**
                     * Creates a new object instance.
                     * @param obj The reference object describing the object to create
                     */
                    // @ts-ignore
                    public getObjectInstance(obj: java.lang.Object | any, name: javax.naming.Name, nameCtx: javax.naming.Context, environment: java.util.Hashtable<any, any>): any
                    /**
                     * Determines if this factory supports processing the provided reference
                     * object.
                     * @param obj   The object to be processed
                     * @return <code>true</code> if this factory can process the object,
                     *          otherwise <code>false</code>
                     */
                    // @ts-ignore
                    abstract isReferenceTypeSupported(obj: java.lang.Object | any): boolean
                    /**
                     * If a default factory is available for the given reference type, create
                     * the default factory.
                     * @param ref   The reference object to be processed
                     * @return The default factory for the given reference object or
                     *           <code>null</code> if no default factory exists.
                     * @throws NamingException  If the default factory cannot be created
                     */
                    // @ts-ignore
                    abstract getDefaultFactory(ref: javax.naming.Reference): javax.naming.spi.ObjectFactory
                    /**
                     * If this reference is a link to another JNDI object, obtain that object.
                     * @param ref   The reference object to be processed
                     * @return The linked object or <code>null</code> if linked objects are
                     *           not supported by or not configured for this reference object
                     * @throws NamingException Error accessing linked object
                     */
                    // @ts-ignore
                    abstract getLinked(ref: javax.naming.Reference): any
                }
            }
        }
    }
}
