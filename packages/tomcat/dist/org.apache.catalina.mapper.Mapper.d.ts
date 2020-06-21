declare namespace org {
    namespace apache {
        namespace catalina {
            namespace mapper {
                /**
                 * Mapper, which implements the servlet API mapping rules (which are derived
                 * from the HTTP rules).
                 * @author Remy Maucherat
                 */
                // @ts-ignore
                class Mapper extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set default host.
                     * @param defaultHostName Default host name
                     */
                    // @ts-ignore
                    public setDefaultHostName(defaultHostName: java.lang.String | string): void
                    /**
                     * Add a new host to the mapper.
                     * @param name Virtual host name
                     * @param aliases Alias names for the virtual host
                     * @param host Host object
                     */
                    // @ts-ignore
                    public addHost(name: java.lang.String | string, aliases: java.lang.String[] | string[], host: org.apache.catalina.Host): void
                    /**
                     * Remove a host from the mapper.
                     * @param name Virtual host name
                     */
                    // @ts-ignore
                    public removeHost(name: java.lang.String | string): void
                    /**
                     * Add an alias to an existing host.
                     * @param name  The name of the host
                     * @param alias The alias to add
                     */
                    // @ts-ignore
                    public addHostAlias(name: java.lang.String | string, alias: java.lang.String | string): void
                    /**
                     * Remove a host alias
                     * @param alias The alias to remove
                     */
                    // @ts-ignore
                    public removeHostAlias(alias: java.lang.String | string): void
                    /**
                     * Add a new Context to an existing Host.
                     * @param hostName Virtual host name this context belongs to
                     * @param host Host object
                     * @param path Context path
                     * @param version Context version
                     * @param context Context object
                     * @param welcomeResources Welcome files defined for this context
                     * @param resources Static resources of the context
                     * @param wrappers Information on wrapper mappings
                     */
                    // @ts-ignore
                    public addContextVersion(hostName: java.lang.String | string, host: org.apache.catalina.Host, path: java.lang.String | string, version: java.lang.String | string, context: org.apache.catalina.Context, welcomeResources: java.lang.String[] | string[], resources: org.apache.catalina.WebResourceRoot, wrappers: java.util.Collection<org.apache.catalina.mapper.WrapperMappingInfo> | Array<org.apache.catalina.mapper.WrapperMappingInfo>): void
                    /**
                     * Remove a context from an existing host.
                     * @param ctxt      The actual context
                     * @param hostName  Virtual host name this context belongs to
                     * @param path      Context path
                     * @param version   Context version
                     */
                    // @ts-ignore
                    public removeContextVersion(ctxt: org.apache.catalina.Context, hostName: java.lang.String | string, path: java.lang.String | string, version: java.lang.String | string): void
                    /**
                     * Mark a context as being reloaded. Reversion of this state is performed
                     * by calling <code>addContextVersion(...)</code> when context starts up.
                     * @param ctxt      The actual context
                     * @param hostName  Virtual host name this context belongs to
                     * @param contextPath Context path
                     * @param version   Context version
                     */
                    // @ts-ignore
                    public pauseContextVersion(ctxt: org.apache.catalina.Context, hostName: java.lang.String | string, contextPath: java.lang.String | string, version: java.lang.String | string): void
                    // @ts-ignore
                    public addWrapper(hostName: java.lang.String | string, contextPath: java.lang.String | string, version: java.lang.String | string, path: java.lang.String | string, wrapper: org.apache.catalina.Wrapper, jspWildCard: boolean, resourceOnly: boolean): void
                    // @ts-ignore
                    public addWrappers(hostName: java.lang.String | string, contextPath: java.lang.String | string, version: java.lang.String | string, wrappers: java.util.Collection<org.apache.catalina.mapper.WrapperMappingInfo> | Array<org.apache.catalina.mapper.WrapperMappingInfo>): void
                    /**
                     * Adds a wrapper to the given context.
                     * @param context The context to which to add the wrapper
                     * @param path Wrapper mapping
                     * @param wrapper The Wrapper object
                     * @param jspWildCard true if the wrapper corresponds to the JspServlet
                     *    and the mapping path contains a wildcard; false otherwise
                     * @param resourceOnly true if this wrapper always expects a physical
                     *                      resource to be present (such as a JSP)
                     */
                    // @ts-ignore
                    addWrapper(context: org.apache.catalina.mapper.Mapper.ContextVersion, path: java.lang.String | string, wrapper: org.apache.catalina.Wrapper, jspWildCard: boolean, resourceOnly: boolean): void
                    /**
                     * Remove a wrapper from an existing context.
                     * @param hostName    Virtual host name this wrapper belongs to
                     * @param contextPath Context path this wrapper belongs to
                     * @param version     Context version this wrapper belongs to
                     * @param path        Wrapper mapping
                     */
                    // @ts-ignore
                    public removeWrapper(hostName: java.lang.String | string, contextPath: java.lang.String | string, version: java.lang.String | string, path: java.lang.String | string): void
                    // @ts-ignore
                    removeWrapper(context: org.apache.catalina.mapper.Mapper.ContextVersion, path: java.lang.String | string): void
                    /**
                     * Add a welcome file to the given context.
                     * @param hostName    The host where the given context can be found
                     * @param contextPath The path of the given context
                     * @param version     The version of the given context
                     * @param welcomeFile The welcome file to add
                     */
                    // @ts-ignore
                    public addWelcomeFile(hostName: java.lang.String | string, contextPath: java.lang.String | string, version: java.lang.String | string, welcomeFile: java.lang.String | string): void
                    /**
                     * Remove a welcome file from the given context.
                     * @param hostName    The host where the given context can be found
                     * @param contextPath The path of the given context
                     * @param version     The version of the given context
                     * @param welcomeFile The welcome file to remove
                     */
                    // @ts-ignore
                    public removeWelcomeFile(hostName: java.lang.String | string, contextPath: java.lang.String | string, version: java.lang.String | string, welcomeFile: java.lang.String | string): void
                    /**
                     * Clear the welcome files for the given context.
                     * @param hostName    The host where the context to be cleared can be found
                     * @param contextPath The path of the context to be cleared
                     * @param version     The version of the context to be cleared
                     */
                    // @ts-ignore
                    public clearWelcomeFiles(hostName: java.lang.String | string, contextPath: java.lang.String | string, version: java.lang.String | string): void
                    /**
                     * Map the specified host name and URI, mutating the given mapping data.
                     * @param host Virtual host name
                     * @param uri URI
                     * @param version The version, if any, included in the request to be mapped
                     * @param mappingData This structure will contain the result of the mapping
                     *                     operation
                     * @throws IOException if the buffers are too small to hold the results of
                     *                      the mapping.
                     */
                    // @ts-ignore
                    public map(host: org.apache.tomcat.util.buf.MessageBytes, uri: org.apache.tomcat.util.buf.MessageBytes, version: java.lang.String | string, mappingData: org.apache.catalina.mapper.MappingData): void
                    /**
                     * Map the specified URI relative to the context,
                     * mutating the given mapping data.
                     * @param context The actual context
                     * @param uri URI
                     * @param mappingData This structure will contain the result of the mapping
                     *                     operation
                     * @throws IOException if the buffers are too small to hold the results of
                     *                      the mapping.
                     */
                    // @ts-ignore
                    public map(context: org.apache.catalina.Context, uri: org.apache.tomcat.util.buf.MessageBytes, mappingData: org.apache.catalina.mapper.MappingData): void
                }
            }
        }
    }
}
