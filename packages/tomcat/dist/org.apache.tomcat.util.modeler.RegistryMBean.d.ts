declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace modeler {
                    /**
                     * Interface for modeler MBeans.
                     * This is the main entry point into modeler. It provides methods to create
                     * and manipulate model mbeans and simplify their use.
                     * Starting with version 1.1, this is no longer a singleton and the static
                     * methods are strongly deprecated. In a container environment we can expect
                     * different applications to use different registries.
                     * @author Craig R. McClanahan
                     * @author Costin Manolache
                     * @since 1.1
                     */
                    // @ts-ignore
                    interface RegistryMBean {
                        /**
                         * Invoke an operation on a set of mbeans.
                         * @param mbeans List of ObjectNames
                         * @param operation Operation to perform. Typically "init" "start" "stop" or "destroy"
                         * @param failFirst Behavior in case of exceptions - if false we'll ignore
                         *       errors
                         * @throws Exception Error invoking operation
                         */
                        // @ts-ignore
                        invoke(mbeans: java.util.List<javax.management.ObjectName> | Array<javax.management.ObjectName>, operation: java.lang.String | string, failFirst: boolean): void
                        /**
                         * Register a bean by creating a modeler mbean and adding it to the
                         * MBeanServer.
                         * If metadata is not loaded, we'll look up and read a file named
                         * "mbeans-descriptors.ser" or "mbeans-descriptors.xml" in the same package
                         * or parent.
                         * If the bean is an instance of DynamicMBean. it's metadata will be converted
                         * to a model mbean and we'll wrap it - so modeler services will be supported
                         * If the metadata is still not found, introspection will be used to extract
                         * it automatically.
                         * If an mbean is already registered under this name, it'll be first
                         * unregistered.
                         * If the component implements MBeanRegistration, the methods will be called.
                         * If the method has a method "setRegistry" that takes a RegistryMBean as
                         * parameter, it'll be called with the current registry.
                         * @param bean Object to be registered
                         * @param oname Name used for registration
                         * @param type The type of the mbean, as declared in mbeans-descriptors. If
                         *  null, the name of the class will be used. This can be used as a hint or
                         *  by subclasses.
                         * @throws Exception Error registering MBean
                         * @since 1.1
                         */
                        // @ts-ignore
                        registerComponent(bean: java.lang.Object | any, oname: java.lang.String | string, type: java.lang.String | string): void
                        /**
                         * Unregister a component. We'll first check if it is registered,
                         * and mask all errors. This is mostly a helper.
                         * @param oname The name used by the bean
                         * @since 1.1
                         */
                        // @ts-ignore
                        unregisterComponent(oname: java.lang.String | string): void
                        /**
                         * Return an int ID for faster access. Will be used for notifications
                         * and for other operations we want to optimize.
                         * @param domain Namespace
                         * @param name  Type of the notification
                         * @return An unique id for the domain:name combination
                         * @since 1.1
                         */
                        // @ts-ignore
                        getId(domain: java.lang.String | string, name: java.lang.String | string): number /*int*/
                        /**
                         * Reset all metadata cached by this registry. Should be called
                         * to support reloading. Existing mbeans will not be affected or modified.
                         * It will be called automatically if the Registry is unregistered.
                         * @since 1.1
                         */
                        // @ts-ignore
                        stop(): void
                    }
                }
            }
        }
    }
}
