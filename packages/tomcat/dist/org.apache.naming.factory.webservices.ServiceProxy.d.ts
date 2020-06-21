declare namespace org {
    namespace apache {
        namespace naming {
            namespace factory {
                namespace webservices {
                    /**
                     * Object proxy for Web Services.
                     * @author Fabien Carrion
                     */
                    // @ts-ignore
                    class ServiceProxy extends java.lang.Object implements java.lang.reflect.InvocationHandler {
                        /**
                         * Constructs a new ServiceProxy wrapping given Service instance.
                         * @param service the wrapped Service instance
                         * @throws ServiceException should be never thrown
                         */
                        // @ts-ignore
                        constructor(service: Service)
                        /**
                         * @see InvocationHandler#invoke(Object, Method, Object[])
                         */
                        // @ts-ignore
                        public invoke(proxy: java.lang.Object | any, method: java.lang.reflect.Method, args: java.lang.Object[] | any[]): any
                        /**
                         * @param portComponentRef List
                         */
                        // @ts-ignore
                        public setPortComponentRef(portComponentRef: java.util.Hashtable<java.lang.String | string, javax.xml.namespace.QName>): void
                    }
                }
            }
        }
    }
}
