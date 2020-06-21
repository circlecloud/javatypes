declare namespace org {
    namespace apache {
        namespace catalina {
            /**
             * This interface is implemented by components that will be registered with an
             * MBean server when they are created and unregistered when they are destroyed.
             * It is primarily intended to be implemented by components that implement
             * {@link Lifecycle} but is not exclusively for them.
             */
            // @ts-ignore
            interface JmxEnabled extends javax.management.MBeanRegistration {
                /**
                 * @return the domain under which this component will be / has been
                 *  registered.
                 */
                // @ts-ignore
                getDomain(): string
                /**
                 * Specify the domain under which this component should be registered. Used
                 * with components that cannot (easily) navigate the component hierarchy to
                 * determine the correct domain to use.
                 * @param domain The name of the domain under which this component should be
                 *                registered
                 */
                // @ts-ignore
                setDomain(domain: java.lang.String | string): void
                /**
                 * @return the name under which this component has been registered with JMX.
                 */
                // @ts-ignore
                getObjectName(): javax.management.ObjectName
            }
        }
    }
}
