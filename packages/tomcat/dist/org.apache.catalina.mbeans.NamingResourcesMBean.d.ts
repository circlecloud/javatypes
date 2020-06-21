declare namespace org {
    namespace apache {
        namespace catalina {
            namespace mbeans {
                /**
                 * <p>A <strong>ModelMBean</strong> implementation for the
                 * <code>org.apache.catalina.deploy.NamingResourcesImpl</code> component.</p>
                 * @author Amy Roh
                 */
                // @ts-ignore
                class NamingResourcesMBean extends org.apache.tomcat.util.modeler.BaseModelMBean {
                    // @ts-ignore
                    constructor()
                    /**
                     * The configuration information registry for our managed beans.
                     */
                    // @ts-ignore
                    readonly registry: org.apache.tomcat.util.modeler.Registry
                    /**
                     * The <code>ManagedBean</code> information describing this MBean.
                     */
                    // @ts-ignore
                    readonly managed: org.apache.tomcat.util.modeler.ManagedBean
                    /**
                     * Return the MBean Names of the set of defined environment entries for
                     * this web application
                     * @return an array of object names as strings
                     */
                    // @ts-ignore
                    public getEnvironments(): string[]
                    /**
                     * Return the MBean Names of all the defined resource references for this
                     * application.
                     * @return an array of object names as strings
                     */
                    // @ts-ignore
                    public getResources(): string[]
                    /**
                     * Return the MBean Names of all the defined resource link references for
                     * this application.
                     * @return an array of object names as strings
                     */
                    // @ts-ignore
                    public getResourceLinks(): string[]
                    /**
                     * Add an environment entry for this web application.
                     * @param envName New environment entry name
                     * @param type The type of the new environment entry
                     * @param value The value of the new environment entry
                     * @return the object name of the new environment entry
                     * @throws MalformedObjectNameException if the object name was invalid
                     */
                    // @ts-ignore
                    public addEnvironment(envName: java.lang.String | string, type: java.lang.String | string, value: java.lang.String | string): string
                    /**
                     * Add a resource reference for this web application.
                     * @param resourceName New resource reference name
                     * @param type New resource reference type
                     * @return the object name of the new resource
                     * @throws MalformedObjectNameException if the object name was invalid
                     */
                    // @ts-ignore
                    public addResource(resourceName: java.lang.String | string, type: java.lang.String | string): string
                    /**
                     * Add a resource link reference for this web application.
                     * @param resourceLinkName New resource link reference name
                     * @param type New resource link reference type
                     * @return the object name of the new resource link
                     * @throws MalformedObjectNameException if the object name was invalid
                     */
                    // @ts-ignore
                    public addResourceLink(resourceLinkName: java.lang.String | string, type: java.lang.String | string): string
                    /**
                     * Remove any environment entry with the specified name.
                     * @param envName Name of the environment entry to remove
                     */
                    // @ts-ignore
                    public removeEnvironment(envName: java.lang.String | string): void
                    /**
                     * Remove any resource reference with the specified name.
                     * @param resourceName Name of the resource reference to remove
                     */
                    // @ts-ignore
                    public removeResource(resourceName: java.lang.String | string): void
                    /**
                     * Remove any resource link reference with the specified name.
                     * @param resourceLinkName Name of the resource link reference to remove
                     */
                    // @ts-ignore
                    public removeResourceLink(resourceLinkName: java.lang.String | string): void
                }
            }
        }
    }
}
