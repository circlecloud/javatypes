declare namespace org {
    namespace apache {
        namespace naming {
            namespace factory {
                namespace webservices {
                    /**
                     * Object factory for Web Services.
                     * @author Fabien Carrion
                     */
                    // @ts-ignore
                    class ServiceRefFactory extends java.lang.Object implements javax.naming.spi.ObjectFactory {
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a new serviceref instance.
                         * @param obj The reference object describing the webservice
                         */
                        // @ts-ignore
                        public getObjectInstance(obj: java.lang.Object | any, name: javax.naming.Name, nameCtx: javax.naming.Context, environment: java.util.Hashtable<any, any>): any
                    }
                }
            }
        }
    }
}
