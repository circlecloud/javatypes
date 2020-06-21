declare namespace org {
    namespace apache {
        namespace catalina {
            namespace core {
                /**
                 * Helper class used to initialize and populate the JNDI context associated
                 * with each context and server.
                 * @author Remy Maucherat
                 */
                // @ts-ignore
                class NamingContextListener extends java.lang.Object implements org.apache.catalina.LifecycleListener, org.apache.catalina.ContainerListener, java.beans.PropertyChangeListener {
                    // @ts-ignore
                    constructor()
                    /**
                     * Name of the associated naming context.
                     */
                    // @ts-ignore
                    name: java.lang.String | string
                    /**
                     * Associated container.
                     */
                    // @ts-ignore
                    container: java.lang.Object | any
                    /**
                     * Initialized flag.
                     */
                    // @ts-ignore
                    initialized: boolean
                    /**
                     * Associated naming resources.
                     */
                    // @ts-ignore
                    namingResources: org.apache.catalina.deploy.NamingResourcesImpl
                    /**
                     * Associated JNDI context.
                     */
                    // @ts-ignore
                    namingContext: org.apache.naming.NamingContext
                    /**
                     * Comp context.
                     */
                    // @ts-ignore
                    compCtx: javax.naming.Context
                    /**
                     * Env context.
                     */
                    // @ts-ignore
                    envCtx: javax.naming.Context
                    /**
                     * Objectnames hashtable.
                     */
                    // @ts-ignore
                    objectNames: java.util.HashMap<java.lang.String | string, javax.management.ObjectName>
                    /**
                     * The string manager for this package.
                     */
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    /**
                     * @return whether or not an attempt to modify the JNDI context will trigger
                     *  an exception or if the request will be ignored.
                     */
                    // @ts-ignore
                    public getExceptionOnFailedWrite(): boolean
                    /**
                     * Controls whether or not an attempt to modify the JNDI context will
                     * trigger an exception or if the request will be ignored.
                     * @param exceptionOnFailedWrite    The new value
                     */
                    // @ts-ignore
                    public setExceptionOnFailedWrite(exceptionOnFailedWrite: boolean): void
                    /**
                     * @return the "name" property.
                     */
                    // @ts-ignore
                    public getName(): string
                    /**
                     * Set the "name" property.
                     * @param name The new name
                     */
                    // @ts-ignore
                    public setName(name: java.lang.String | string): void
                    /**
                     * @return the naming environment context.
                     */
                    // @ts-ignore
                    public getEnvContext(): javax.naming.Context
                    /**
                     * Acknowledge the occurrence of the specified event.
                     * @param event LifecycleEvent that has occurred
                     */
                    // @ts-ignore
                    public lifecycleEvent(event: org.apache.catalina.LifecycleEvent): void
                    /**
                     * NO-OP.
                     * @param event ContainerEvent that has occurred
                     * @deprecated The {#link ContainerListener} interface and implementing
                     *              methods will be removed from this class for Tomcat 10
                     *              onwards.
                     */
                    // @ts-ignore
                    public containerEvent(event: org.apache.catalina.ContainerEvent): void
                    /**
                     * Process property change events.
                     * @param event The property change event that has occurred
                     */
                    // @ts-ignore
                    public propertyChange(event: java.beans.PropertyChangeEvent): void
                    /**
                     * Create an <code>ObjectName</code> for this
                     * <code>ContextResource</code> object.
                     * @param resource The resource
                     * @return ObjectName The object name
                     * @exception MalformedObjectNameException if a name cannot be created
                     */
                    // @ts-ignore
                    createObjectName(resource: org.apache.tomcat.util.descriptor.web.ContextResource): javax.management.ObjectName
                    /**
                     * Set the specified EJBs in the naming context.
                     * @param ejb the EJB descriptor
                     */
                    // @ts-ignore
                    public addEjb(ejb: org.apache.tomcat.util.descriptor.web.ContextEjb): void
                    /**
                     * Set the specified environment entries in the naming context.
                     * @param env the environment entry
                     */
                    // @ts-ignore
                    public addEnvironment(env: org.apache.tomcat.util.descriptor.web.ContextEnvironment): void
                    /**
                     * Set the specified local EJBs in the naming context.
                     * @param localEjb the local EJB descriptor (unused)
                     */
                    // @ts-ignore
                    public addLocalEjb(localEjb: org.apache.tomcat.util.descriptor.web.ContextLocalEjb): void
                    /**
                     * Set the specified message destination refs in the naming context.
                     * @param mdr the message destination ref descriptor (unused)
                     */
                    // @ts-ignore
                    public addMessageDestinationRef(mdr: org.apache.tomcat.util.descriptor.web.MessageDestinationRef): void
                    /**
                     * Set the specified web service in the naming context.
                     * @param service the web service descriptor
                     */
                    // @ts-ignore
                    public addService(service: org.apache.tomcat.util.descriptor.web.ContextService): void
                    /**
                     * Set the specified resources in the naming context.
                     * @param resource the resource descriptor
                     */
                    // @ts-ignore
                    public addResource(resource: org.apache.tomcat.util.descriptor.web.ContextResource): void
                    /**
                     * Set the specified resources in the naming context.
                     * @param resourceEnvRef the resource reference
                     */
                    // @ts-ignore
                    public addResourceEnvRef(resourceEnvRef: org.apache.tomcat.util.descriptor.web.ContextResourceEnvRef): void
                    /**
                     * Set the specified resource link in the naming context.
                     * @param resourceLink the resource link
                     */
                    // @ts-ignore
                    public addResourceLink(resourceLink: org.apache.tomcat.util.descriptor.web.ContextResourceLink): void
                    /**
                     * Remove the specified EJB from the naming context.
                     * @param name the name of the EJB which should be removed
                     */
                    // @ts-ignore
                    public removeEjb(name: java.lang.String | string): void
                    /**
                     * Remove the specified environment entry from the naming context.
                     * @param name the name of the environment entry which should be removed
                     */
                    // @ts-ignore
                    public removeEnvironment(name: java.lang.String | string): void
                    /**
                     * Remove the specified local EJB from the naming context.
                     * @param name the name of the EJB which should be removed
                     */
                    // @ts-ignore
                    public removeLocalEjb(name: java.lang.String | string): void
                    /**
                     * Remove the specified message destination ref from the naming context.
                     * @param name the name of the message destination ref which should be
                     *              removed
                     */
                    // @ts-ignore
                    public removeMessageDestinationRef(name: java.lang.String | string): void
                    /**
                     * Remove the specified web service from the naming context.
                     * @param name the name of the web service which should be removed
                     */
                    // @ts-ignore
                    public removeService(name: java.lang.String | string): void
                    /**
                     * Remove the specified resource from the naming context.
                     * @param name the name of the resource which should be removed
                     */
                    // @ts-ignore
                    public removeResource(name: java.lang.String | string): void
                    /**
                     * Remove the specified resource environment reference from the naming
                     * context.
                     * @param name the name of the resource environment reference which should
                     *              be removed
                     */
                    // @ts-ignore
                    public removeResourceEnvRef(name: java.lang.String | string): void
                    /**
                     * Remove the specified resource link from the naming context.
                     * @param name the name of the resource link which should be removed
                     */
                    // @ts-ignore
                    public removeResourceLink(name: java.lang.String | string): void
                }
            }
        }
    }
}
