declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace modeler {
                    /**
                     * Registry for modeler MBeans.
                     * This is the main entry point into modeler. It provides methods to create and
                     * manipulate model mbeans and simplify their use.
                     * This class is itself an mbean.
                     * IMPORTANT: public methods not marked with @since x.x are experimental or
                     * internal. Should not be used.
                     * @author Craig R. McClanahan
                     * @author Costin Manolache
                     */
                    // @ts-ignore
                    class Registry extends java.lang.Object implements org.apache.tomcat.util.modeler.RegistryMBean, javax.management.MBeanRegistration {
                        // @ts-ignore
                        constructor()
                        /**
                         * Factory method to create (if necessary) and return our
                         * <code>Registry</code> instance.
                         * The current version uses a static - future versions could use the thread
                         * class loader.
                         * @param key Support for application isolation. If null, the context class
                         *             loader will be used ( if setUseContextClassLoader is called )
                         *             or the default registry is returned.
                         * @param guard Prevent access to the registry by untrusted components
                         * @return the registry
                         * @since 1.1
                         */
                        // @ts-ignore
                        public static getRegistry(key: java.lang.Object | any, guard: java.lang.Object | any): org.apache.tomcat.util.modeler.Registry
                        /**
                         * Lifecycle method - clean up the registry metadata. Called from
                         * resetMetadata().
                         * @since 1.1
                         */
                        // @ts-ignore
                        public stop(): void
                        /**
                         * Register a bean by creating a modeler mbean and adding it to the
                         * MBeanServer.
                         * If metadata is not loaded, we'll look up and read a file named
                         * "mbeans-descriptors.ser" or "mbeans-descriptors.xml" in the same package
                         * or parent.
                         * If the bean is an instance of DynamicMBean. it's metadata will be
                         * converted to a model mbean and we'll wrap it - so modeler services will
                         * be supported
                         * If the metadata is still not found, introspection will be used to extract
                         * it automatically.
                         * If an mbean is already registered under this name, it'll be first
                         * unregistered.
                         * If the component implements MBeanRegistration, the methods will be
                         * called. If the method has a method "setRegistry" that takes a
                         * RegistryMBean as parameter, it'll be called with the current registry.
                         * @param bean Object to be registered
                         * @param oname Name used for registration
                         * @param type The type of the mbean, as declared in mbeans-descriptors. If
                         *             null, the name of the class will be used. This can be used as
                         *             a hint or by subclasses.
                         * @throws Exception if a registration error occurred
                         * @since 1.1
                         */
                        // @ts-ignore
                        public registerComponent(bean: java.lang.Object | any, oname: java.lang.String | string, type: java.lang.String | string): void
                        /**
                         * Unregister a component. We'll first check if it is registered, and mask
                         * all errors. This is mostly a helper.
                         * @param oname Name used for unregistration
                         * @since 1.1
                         */
                        // @ts-ignore
                        public unregisterComponent(oname: java.lang.String | string): void
                        /**
                         * Invoke a operation on a list of mbeans. Can be used to implement
                         * lifecycle operations.
                         * @param mbeans list of ObjectName on which we'll invoke the operations
                         * @param operation Name of the operation ( init, start, stop, etc)
                         * @param failFirst If false, exceptions will be ignored
                         * @throws Exception Error invoking operation
                         * @since 1.1
                         */
                        // @ts-ignore
                        public invoke(mbeans: java.util.List<javax.management.ObjectName> | Array<javax.management.ObjectName>, operation: java.lang.String | string, failFirst: boolean): void
                        /**
                         * Return an int ID for faster access. Will be used for notifications and
                         * for other operations we want to optimize.
                         * @param domain Namespace
                         * @param name Type of the notification
                         * @return An unique id for the domain:name combination
                         * @since 1.1
                         */
                        // @ts-ignore
                        public getId(domain: java.lang.String | string, name: java.lang.String | string): number /*int*/
                        /**
                         * Add a new bean metadata to the set of beans known to this registry. This
                         * is used by internal components.
                         * @param bean The managed bean to be added
                         * @since 1.0
                         */
                        // @ts-ignore
                        public addManagedBean(bean: org.apache.tomcat.util.modeler.ManagedBean): void
                        /**
                         * Find and return the managed bean definition for the specified bean name,
                         * if any; otherwise return <code>null</code>.
                         * @param name Name of the managed bean to be returned. Since 1.1, both
                         *             short names or the full name of the class can be used.
                         * @return the managed bean
                         * @since 1.0
                         */
                        // @ts-ignore
                        public findManagedBean(name: java.lang.String | string): org.apache.tomcat.util.modeler.ManagedBean
                        /**
                         * Get the type of an attribute of the object, from the metadata.
                         * @param oname The bean name
                         * @param attName The attribute name
                         * @return null if metadata about the attribute is not found
                         * @since 1.1
                         */
                        // @ts-ignore
                        public getType(oname: javax.management.ObjectName, attName: java.lang.String | string): string
                        /**
                         * Find the operation info for a method
                         * @param oname The bean name
                         * @param opName The operation name
                         * @return the operation info for the specified operation
                         */
                        // @ts-ignore
                        public getMethodInfo(oname: javax.management.ObjectName, opName: java.lang.String | string): javax.management.MBeanOperationInfo
                        /**
                         * Unregister a component. This is just a helper that avoids exceptions by
                         * checking if the mbean is already registered
                         * @param oname The bean name
                         */
                        // @ts-ignore
                        public unregisterComponent(oname: javax.management.ObjectName): void
                        /**
                         * Factory method to create (if necessary) and return our
                         * <code>MBeanServer</code> instance.
                         * @return the MBean server
                         */
                        // @ts-ignore
                        public getMBeanServer(): javax.management.MBeanServer
                        /**
                         * Find or load metadata.
                         * @param bean The bean
                         * @param beanClass The bean class
                         * @param type The registry type
                         * @return the managed bean
                         * @throws Exception An error occurred
                         */
                        // @ts-ignore
                        public findManagedBean(bean: java.lang.Object | any, beanClass: java.lang.Class<any>, type: java.lang.String | string): org.apache.tomcat.util.modeler.ManagedBean
                        /**
                         * EXPERIMENTAL Convert a string to object, based on type. Used by several
                         * components. We could provide some pluggability. It is here to keep things
                         * consistent and avoid duplication in other tasks
                         * @param type Fully qualified class name of the resulting value
                         * @param value String value to be converted
                         * @return Converted value
                         */
                        // @ts-ignore
                        public convertValue(type: java.lang.String | string, value: java.lang.String | string): any
                        /**
                         * Experimental. Load descriptors.
                         * @param sourceType The source type
                         * @param source The bean
                         * @param param A type to load
                         * @return List of descriptors
                         * @throws Exception Error loading descriptors
                         */
                        // @ts-ignore
                        public load(sourceType: java.lang.String | string, source: java.lang.Object | any, param: java.lang.String | string): Array<javax.management.ObjectName>
                        /**
                         * Register a component
                         * @param bean The bean
                         * @param oname The object name
                         * @param type The registry type
                         * @throws Exception Error registering component
                         */
                        // @ts-ignore
                        public registerComponent(bean: java.lang.Object | any, oname: javax.management.ObjectName, type: java.lang.String | string): void
                        /**
                         * Lookup the component descriptor in the package and in the parent
                         * packages.
                         * @param packageName The package name
                         * @param classLoader The class loader
                         */
                        // @ts-ignore
                        public loadDescriptors(packageName: java.lang.String | string, classLoader: java.lang.ClassLoader): void
                        // @ts-ignore
                        public preRegister(server: javax.management.MBeanServer, name: javax.management.ObjectName): javax.management.ObjectName
                        // @ts-ignore
                        public postRegister(registrationDone: java.lang.Boolean): void
                        // @ts-ignore
                        public preDeregister(): void
                        // @ts-ignore
                        public postDeregister(): void
                    }
                }
            }
        }
    }
}
