declare namespace java {
    namespace beans {
        namespace beancontext {
            namespace BeanContextServicesSupport {
                /**
                 * subclasses may subclass this nested class to add behaviors for
                 * each BeanContextServicesProvider.
                 */
                // @ts-ignore
                class BCSSServiceProvider extends java.lang.Object implements java.io.Serializable {
                    /**
                     * The service provider.
                     */
                    // @ts-ignore
                    serviceProvider: java.beans.beancontext.BeanContextServiceProvider
                    /**
                     * Returns the service provider.
                     * @return the service provider
                     */
                    // @ts-ignore
                    getServiceProvider(): java.beans.beancontext.BeanContextServiceProvider
                }
            }
        }
    }
}
