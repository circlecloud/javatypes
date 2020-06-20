declare namespace java {
    namespace beans {
        namespace beancontext {
            /**
             * A BeanContextServiceProvider implementor who wishes to provide explicit
             * information about the services their bean may provide shall implement a
             * BeanInfo class that implements this BeanInfo subinterface and provides
             * explicit information about the methods, properties, events, etc, of their
             * services.
             */
            // @ts-ignore
            interface BeanContextServiceProviderBeanInfo extends java.beans.BeanInfo {
                /**
                 * Gets a <code>BeanInfo</code> array, one for each
                 * service class or interface statically available
                 * from this ServiceProvider.
                 * @return the <code>BeanInfo</code> array
                 */
                // @ts-ignore
                getServicesBeanInfo(): java.beans.BeanInfo[]
            }
        }
    }
}
