declare namespace org {
    namespace apache {
        namespace naming {
            namespace factory {
                /**
                 * Object factory for EJBs.
                 * @author Remy Maucherat
                 */
                // @ts-ignore
                class EjbFactory extends org.apache.naming.factory.FactoryBase {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    isReferenceTypeSupported(obj: java.lang.Object | any): boolean
                    // @ts-ignore
                    getDefaultFactory(ref: javax.naming.Reference): javax.naming.spi.ObjectFactory
                    // @ts-ignore
                    getLinked(ref: javax.naming.Reference): any
                }
            }
        }
    }
}
