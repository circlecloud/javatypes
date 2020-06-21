declare namespace org {
    namespace apache {
        namespace catalina {
            namespace mbeans {
                // @ts-ignore
                class ContainerMBean extends org.apache.catalina.mbeans.BaseCatalinaMBean<org.apache.catalina.core.ContainerBase> {
                    // @ts-ignore
                    constructor()
                    /**
                     * Add a new child Container to those associated with this Container,
                     * if supported. Won't start the child yet. Has to be started with a call to
                     * Start method after necessary configurations are done.
                     * @param type ClassName of the child to be added
                     * @param name Name of the child to be added
                     * @exception MBeanException if the child cannot be added
                     */
                    // @ts-ignore
                    public addChild(type: java.lang.String | string, name: java.lang.String | string): void
                    /**
                     * Remove an existing child Container from association with this parent
                     * Container.
                     * @param name Name of the existing child Container to be removed
                     * @throws MBeanException if the child cannot be removed
                     */
                    // @ts-ignore
                    public removeChild(name: java.lang.String | string): void
                    /**
                     * Adds a valve to this Container instance.
                     * @param valveType ClassName of the valve to be added
                     * @return the MBean name of the new valve
                     * @throws MBeanException if adding the valve failed
                     */
                    // @ts-ignore
                    public addValve(valveType: java.lang.String | string): string
                    /**
                     * Remove an existing Valve.
                     * @param valveName MBean Name of the Valve to remove
                     * @exception MBeanException if a component cannot be removed
                     */
                    // @ts-ignore
                    public removeValve(valveName: java.lang.String | string): void
                    /**
                     * Add a LifecycleEvent listener to this component.
                     * @param type ClassName of the listener to add
                     * @throws MBeanException if adding the listener failed
                     */
                    // @ts-ignore
                    public addLifecycleListener(type: java.lang.String | string): void
                    /**
                     * Remove a LifecycleEvent listeners from this component.
                     * @param type The ClassName of the listeners to be removed.
                     *  Note that all the listeners having given ClassName will be removed.
                     * @throws MBeanException propagated from the managed resource access
                     */
                    // @ts-ignore
                    public removeLifecycleListeners(type: java.lang.String | string): void
                    /**
                     * List the class name of each of the lifecycle listeners added to this
                     * container.
                     * @return the lifecycle listeners class names
                     * @throws MBeanException propagated from the managed resource access
                     */
                    // @ts-ignore
                    public findLifecycleListenerNames(): string[]
                    /**
                     * List the class name of each of the container listeners added to this
                     * container.
                     * @return the container listeners class names
                     * @throws MBeanException propagated from the managed resource access
                     */
                    // @ts-ignore
                    public findContainerListenerNames(): string[]
                }
            }
        }
    }
}
