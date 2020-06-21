declare namespace org {
    namespace apache {
        namespace catalina {
            namespace deploy {
                /**
                 * Holds and manages the naming resources defined in the J2EE Enterprise
                 * Naming Context and their associated JNDI context.
                 * @author Remy Maucherat
                 */
                // @ts-ignore
                class NamingResourcesImpl extends org.apache.catalina.util.LifecycleMBeanBase implements java.io.Serializable, org.apache.tomcat.util.descriptor.web.NamingResources {
                    /**
                     * Create a new NamingResources instance.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * The property change support for this component.
                     */
                    // @ts-ignore
                    readonly support: java.beans.PropertyChangeSupport
                    /**
                     * @return the container with which the naming resources are associated.
                     */
                    // @ts-ignore
                    public getContainer(): any
                    /**
                     * Set the container with which the naming resources are associated.
                     * @param container the associated with the resources
                     */
                    // @ts-ignore
                    public setContainer(container: java.lang.Object | any): void
                    /**
                     * Set the transaction object.
                     * @param transaction the transaction descriptor
                     */
                    // @ts-ignore
                    public setTransaction(transaction: org.apache.tomcat.util.descriptor.web.ContextTransaction): void
                    /**
                     * @return the transaction object.
                     */
                    // @ts-ignore
                    public getTransaction(): org.apache.tomcat.util.descriptor.web.ContextTransaction
                    /**
                     * Add an EJB resource reference for this web application.
                     * @param ejb New EJB resource reference
                     */
                    // @ts-ignore
                    public addEjb(ejb: org.apache.tomcat.util.descriptor.web.ContextEjb): void
                    /**
                     * Add an environment entry for this web application.
                     * @param environment New environment entry
                     */
                    // @ts-ignore
                    public addEnvironment(environment: org.apache.tomcat.util.descriptor.web.ContextEnvironment): void
                    /**
                     * Add a local EJB resource reference for this web application.
                     * @param ejb New EJB resource reference
                     */
                    // @ts-ignore
                    public addLocalEjb(ejb: org.apache.tomcat.util.descriptor.web.ContextLocalEjb): void
                    /**
                     * Add a message destination reference for this web application.
                     * @param mdr New message destination reference
                     */
                    // @ts-ignore
                    public addMessageDestinationRef(mdr: org.apache.tomcat.util.descriptor.web.MessageDestinationRef): void
                    /**
                     * Add a property change listener to this component.
                     * @param listener The listener to add
                     */
                    // @ts-ignore
                    public addPropertyChangeListener(listener: java.beans.PropertyChangeListener): void
                    /**
                     * Add a resource reference for this web application.
                     * @param resource New resource reference
                     */
                    // @ts-ignore
                    public addResource(resource: org.apache.tomcat.util.descriptor.web.ContextResource): void
                    /**
                     * Add a resource environment reference for this web application.
                     * @param resource The resource
                     */
                    // @ts-ignore
                    public addResourceEnvRef(resource: org.apache.tomcat.util.descriptor.web.ContextResourceEnvRef): void
                    /**
                     * Add a resource link for this web application.
                     * @param resourceLink New resource link
                     */
                    // @ts-ignore
                    public addResourceLink(resourceLink: org.apache.tomcat.util.descriptor.web.ContextResourceLink): void
                    /**
                     * Add a web service reference for this web application.
                     * @param service New web service reference
                     */
                    // @ts-ignore
                    public addService(service: org.apache.tomcat.util.descriptor.web.ContextService): void
                    /**
                     * @return the EJB resource reference with the specified name, if any;
                     *  otherwise, return <code>null</code>.
                     * @param name Name of the desired EJB resource reference
                     */
                    // @ts-ignore
                    public findEjb(name: java.lang.String | string): org.apache.tomcat.util.descriptor.web.ContextEjb
                    /**
                     * @return the defined EJB resource references for this application.
                     *  If there are none, a zero-length array is returned.
                     */
                    // @ts-ignore
                    public findEjbs(): org.apache.tomcat.util.descriptor.web.ContextEjb[]
                    /**
                     * @return the environment entry with the specified name, if any;
                     *  otherwise, return <code>null</code>.
                     * @param name Name of the desired environment entry
                     */
                    // @ts-ignore
                    public findEnvironment(name: java.lang.String | string): org.apache.tomcat.util.descriptor.web.ContextEnvironment
                    /**
                     * @return the set of defined environment entries for this web
                     *  application.  If none have been defined, a zero-length array
                     *  is returned.
                     */
                    // @ts-ignore
                    public findEnvironments(): org.apache.tomcat.util.descriptor.web.ContextEnvironment[]
                    /**
                     * @return the local EJB resource reference with the specified name, if any;
                     *  otherwise, return <code>null</code>.
                     * @param name Name of the desired EJB resource reference
                     */
                    // @ts-ignore
                    public findLocalEjb(name: java.lang.String | string): org.apache.tomcat.util.descriptor.web.ContextLocalEjb
                    /**
                     * @return the defined local EJB resource references for this application.
                     *  If there are none, a zero-length array is returned.
                     */
                    // @ts-ignore
                    public findLocalEjbs(): org.apache.tomcat.util.descriptor.web.ContextLocalEjb[]
                    /**
                     * @return the message destination reference with the specified name,
                     *  if any; otherwise, return <code>null</code>.
                     * @param name Name of the desired message destination reference
                     */
                    // @ts-ignore
                    public findMessageDestinationRef(name: java.lang.String | string): org.apache.tomcat.util.descriptor.web.MessageDestinationRef
                    /**
                     * @return the defined message destination references for this application.
                     *  If there are none, a zero-length array is returned.
                     */
                    // @ts-ignore
                    public findMessageDestinationRefs(): org.apache.tomcat.util.descriptor.web.MessageDestinationRef[]
                    /**
                     * @return the resource reference with the specified name, if any;
                     *  otherwise return <code>null</code>.
                     * @param name Name of the desired resource reference
                     */
                    // @ts-ignore
                    public findResource(name: java.lang.String | string): org.apache.tomcat.util.descriptor.web.ContextResource
                    /**
                     * @return the resource link with the specified name, if any;
                     *  otherwise return <code>null</code>.
                     * @param name Name of the desired resource link
                     */
                    // @ts-ignore
                    public findResourceLink(name: java.lang.String | string): org.apache.tomcat.util.descriptor.web.ContextResourceLink
                    /**
                     * @return the defined resource links for this application.  If
                     *  none have been defined, a zero-length array is returned.
                     */
                    // @ts-ignore
                    public findResourceLinks(): org.apache.tomcat.util.descriptor.web.ContextResourceLink[]
                    /**
                     * @return the defined resource references for this application.  If
                     *  none have been defined, a zero-length array is returned.
                     */
                    // @ts-ignore
                    public findResources(): org.apache.tomcat.util.descriptor.web.ContextResource[]
                    /**
                     * @return the resource environment reference type for the specified
                     *  name, if any; otherwise return <code>null</code>.
                     * @param name Name of the desired resource environment reference
                     */
                    // @ts-ignore
                    public findResourceEnvRef(name: java.lang.String | string): org.apache.tomcat.util.descriptor.web.ContextResourceEnvRef
                    /**
                     * @return the set of resource environment reference names for this
                     *  web application.  If none have been specified, a zero-length
                     *  array is returned.
                     */
                    // @ts-ignore
                    public findResourceEnvRefs(): org.apache.tomcat.util.descriptor.web.ContextResourceEnvRef[]
                    /**
                     * @return the web service reference for the specified
                     *  name, if any; otherwise return <code>null</code>.
                     * @param name Name of the desired web service
                     */
                    // @ts-ignore
                    public findService(name: java.lang.String | string): org.apache.tomcat.util.descriptor.web.ContextService
                    /**
                     * @return the defined web service references for this application.  If
                     *  none have been defined, a zero-length array is returned.
                     */
                    // @ts-ignore
                    public findServices(): org.apache.tomcat.util.descriptor.web.ContextService[]
                    /**
                     * Remove any EJB resource reference with the specified name.
                     * @param name Name of the EJB resource reference to remove
                     */
                    // @ts-ignore
                    public removeEjb(name: java.lang.String | string): void
                    /**
                     * Remove any environment entry with the specified name.
                     * @param name Name of the environment entry to remove
                     */
                    // @ts-ignore
                    public removeEnvironment(name: java.lang.String | string): void
                    /**
                     * Remove any local EJB resource reference with the specified name.
                     * @param name Name of the EJB resource reference to remove
                     */
                    // @ts-ignore
                    public removeLocalEjb(name: java.lang.String | string): void
                    /**
                     * Remove any message destination reference with the specified name.
                     * @param name Name of the message destination resource reference to remove
                     */
                    // @ts-ignore
                    public removeMessageDestinationRef(name: java.lang.String | string): void
                    /**
                     * Remove a property change listener from this component.
                     * @param listener The listener to remove
                     */
                    // @ts-ignore
                    public removePropertyChangeListener(listener: java.beans.PropertyChangeListener): void
                    /**
                     * Remove any resource reference with the specified name.
                     * @param name Name of the resource reference to remove
                     */
                    // @ts-ignore
                    public removeResource(name: java.lang.String | string): void
                    /**
                     * Remove any resource environment reference with the specified name.
                     * @param name Name of the resource environment reference to remove
                     */
                    // @ts-ignore
                    public removeResourceEnvRef(name: java.lang.String | string): void
                    /**
                     * Remove any resource link with the specified name.
                     * @param name Name of the resource link to remove
                     */
                    // @ts-ignore
                    public removeResourceLink(name: java.lang.String | string): void
                    /**
                     * Remove any web service reference with the specified name.
                     * @param name Name of the web service reference to remove
                     */
                    // @ts-ignore
                    public removeService(name: java.lang.String | string): void
                    // @ts-ignore
                    initInternal(): void
                    // @ts-ignore
                    startInternal(): void
                    // @ts-ignore
                    stopInternal(): void
                    // @ts-ignore
                    destroyInternal(): void
                    // @ts-ignore
                    getDomainInternal(): string
                    // @ts-ignore
                    getObjectNameKeyProperties(): string
                }
            }
        }
    }
}
