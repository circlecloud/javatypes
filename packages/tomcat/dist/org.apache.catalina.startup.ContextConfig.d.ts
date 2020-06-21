declare namespace org {
    namespace apache {
        namespace catalina {
            namespace startup {
                /**
                 * Startup event listener for a <b>Context</b> that configures the properties
                 * of that Context, and the associated defined servlets.
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                class ContextConfig extends java.lang.Object implements org.apache.catalina.LifecycleListener {
                    // @ts-ignore
                    constructor()
                    /**
                     * The string resources for this package.
                     */
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    // @ts-ignore
                    static readonly DUMMY_LOGIN_CONFIG: org.apache.tomcat.util.descriptor.web.LoginConfig
                    /**
                     * The set of Authenticators that we know how to configure.  The key is
                     * the name of the implemented authentication method, and the value is
                     * the fully qualified Java class name of the corresponding Valve.
                     */
                    // @ts-ignore
                    static readonly authenticators: java.util.Properties
                    /**
                     * Deployment count.
                     */
                    // @ts-ignore
                    static deploymentCount: number /*long*/
                    /**
                     * Cache of default web.xml fragments per Host
                     */
                    // @ts-ignore
                    static readonly hostWebXmlCache: java.util.Map<org.apache.catalina.Host, org.apache.catalina.startup.ContextConfig.DefaultWebXmlCacheEntry>
                    /**
                     * Custom mappings of login methods to authenticators
                     */
                    // @ts-ignore
                    customAuthenticators: java.util.Map<java.lang.String | string, org.apache.catalina.Authenticator>
                    /**
                     * The Context we are associated with.
                     */
                    // @ts-ignore
                    context: org.apache.catalina.Context
                    /**
                     * The default web application's deployment descriptor location.
                     */
                    // @ts-ignore
                    defaultWebXml: java.lang.String | string
                    /**
                     * Track any fatal errors during startup configuration processing.
                     */
                    // @ts-ignore
                    ok: boolean
                    /**
                     * Original docBase.
                     */
                    // @ts-ignore
                    originalDocBase: java.lang.String | string
                    /**
                     * Map of ServletContainerInitializer to classes they expressed interest in.
                     */
                    // @ts-ignore
                    readonly initializerClassMap: java.util.Map<javax.servlet.ServletContainerInitializer, java.util.Set<java.lang.Class<any>> | Array<java.lang.Class<any>>>
                    /**
                     * Map of Types to ServletContainerInitializer that are interested in those
                     * types.
                     */
                    // @ts-ignore
                    readonly typeInitializerMap: java.util.Map<java.lang.Class<any>, java.util.Set<javax.servlet.ServletContainerInitializer> | Array<javax.servlet.ServletContainerInitializer>>
                    /**
                     * Flag that indicates if at least one {@link HandlesTypes} entry is present
                     * that represents an annotation.
                     */
                    // @ts-ignore
                    handlesTypesAnnotations: boolean
                    /**
                     * Flag that indicates if at least one {@link HandlesTypes} entry is present
                     * that represents a non-annotation.
                     */
                    // @ts-ignore
                    handlesTypesNonAnnotations: boolean
                    /**
                     * Obtain the location of the default deployment descriptor.
                     * @return The path to the default web.xml. If not absolute, it is relative
                     *          to CATALINA_BASE.
                     */
                    // @ts-ignore
                    public getDefaultWebXml(): string
                    /**
                     * Set the location of the default deployment descriptor.
                     * @param path The path to the default web.xml. If not absolute, it is
                     *              relative to CATALINA_BASE.
                     */
                    // @ts-ignore
                    public setDefaultWebXml(path: java.lang.String | string): void
                    /**
                     * Sets custom mappings of login methods to authenticators.
                     * @param customAuthenticators Custom mappings of login methods to
                     *  authenticators
                     */
                    // @ts-ignore
                    public setCustomAuthenticators(customAuthenticators: java.util.Map<java.lang.String | string, org.apache.catalina.Authenticator>): void
                    /**
                     * Process events for an associated Context.
                     * @param event The lifecycle event that has occurred
                     */
                    // @ts-ignore
                    public lifecycleEvent(event: org.apache.catalina.LifecycleEvent): void
                    /**
                     * Process the application classes annotations, if it exists.
                     */
                    // @ts-ignore
                    applicationAnnotationsConfig(): void
                    /**
                     * Set up an Authenticator automatically if required, and one has not
                     * already been configured.
                     */
                    // @ts-ignore
                    authenticatorConfig(): void
                    /**
                     * Create (if necessary) and return a Digester configured to process the
                     * context configuration descriptor for an application.
                     * @return the digester for context.xml files
                     */
                    // @ts-ignore
                    createContextDigester(): org.apache.tomcat.util.digester.Digester
                    /**
                     * Process the default configuration file, if it exists.
                     * @param digester The digester that will be used for XML parsing
                     */
                    // @ts-ignore
                    contextConfig(digester: org.apache.tomcat.util.digester.Digester): void
                    /**
                     * Process a context.xml.
                     * @param digester The digester that will be used for XML parsing
                     * @param contextXml The URL to the context.xml configuration
                     * @param stream The XML resource stream
                     */
                    // @ts-ignore
                    processContextConfig(digester: org.apache.tomcat.util.digester.Digester, contextXml: java.net.URL, stream: java.io.InputStream): void
                    /**
                     * Adjust docBase.
                     * @throws IOException cannot access the context base path
                     */
                    // @ts-ignore
                    fixDocBase(): void
                    // @ts-ignore
                    antiLocking(): void
                    /**
                     * Process a "init" event for this Context.
                     */
                    // @ts-ignore
                    init(): void
                    /**
                     * Process a "before start" event for this Context.
                     */
                    // @ts-ignore
                    beforeStart(): void
                    /**
                     * Process a "contextConfig" event for this Context.
                     */
                    // @ts-ignore
                    configureStart(): void
                    /**
                     * Process a "stop" event for this Context.
                     */
                    // @ts-ignore
                    configureStop(): void
                    /**
                     * Process a "destroy" event for this Context.
                     */
                    // @ts-ignore
                    destroy(): void
                    /**
                     * Validate the usage of security role names in the web application
                     * deployment descriptor.  If any problems are found, issue warning
                     * messages (for backwards compatibility) and add the missing roles.
                     * (To make these problems fatal instead, simply set the <code>ok</code>
                     * instance variable to <code>false</code> as well).
                     */
                    // @ts-ignore
                    validateSecurityRoles(): void
                    // @ts-ignore
                    getHostConfigBase(): java.io.File
                    /**
                     * Scan the web.xml files that apply to the web application and merge them
                     * using the rules defined in the spec. For the global web.xml files,
                     * where there is duplicate configuration, the most specific level wins. ie
                     * an application's web.xml takes precedence over the host level or global
                     * web.xml file.
                     */
                    // @ts-ignore
                    webConfig(): void
                    // @ts-ignore
                    processClasses(webXml: org.apache.tomcat.util.descriptor.web.WebXml, orderedFragments: java.util.Set<org.apache.tomcat.util.descriptor.web.WebXml> | Array<org.apache.tomcat.util.descriptor.web.WebXml>): void
                    // @ts-ignore
                    createWebXml(): org.apache.tomcat.util.descriptor.web.WebXml
                    /**
                     * Scan JARs for ServletContainerInitializer implementations.
                     */
                    // @ts-ignore
                    processServletContainerInitializers(): void
                    /**
                     * Scan JARs that contain web-fragment.xml files that will be used to
                     * configure this application to see if they also contain static resources.
                     * If static resources are found, add them to the context. Resources are
                     * added in web-fragment.xml priority order.
                     * @param fragments The set of fragments that will be scanned for
                     *   static resources
                     */
                    // @ts-ignore
                    processResourceJARs(fragments: java.util.Set<org.apache.tomcat.util.descriptor.web.WebXml> | Array<org.apache.tomcat.util.descriptor.web.WebXml>): void
                    /**
                     * Identify the default web.xml to be used and obtain an input source for
                     * it.
                     * @return an input source to the default web.xml
                     */
                    // @ts-ignore
                    getGlobalWebXmlSource(): org.xml.sax.InputSource
                    /**
                     * Identify the host web.xml to be used and obtain an input source for
                     * it.
                     * @return an input source to the default per host web.xml
                     */
                    // @ts-ignore
                    getHostWebXmlSource(): org.xml.sax.InputSource
                    /**
                     * Identify the application web.xml to be used and obtain an input source
                     * for it.
                     * @return an input source to the context web.xml
                     */
                    // @ts-ignore
                    getContextWebXmlSource(): org.xml.sax.InputSource
                    // @ts-ignore
                    public getConfigBasePath(): string
                    /**
                     * Utility method to create an input source from the specified XML file.
                     * @param filename  Name of the file (possibly with one or more leading path
                     *                   segments) to read
                     * @param global true if processing a shared resource, false if processing
                     *         a host based resource
                     * @return the input source
                     */
                    // @ts-ignore
                    getWebXmlSource(filename: java.lang.String | string, global: boolean): org.xml.sax.InputSource
                    /**
                     * Scan /WEB-INF/lib for JARs and for each one found add it and any
                     * /META-INF/web-fragment.xml to the resulting Map. web-fragment.xml files
                     * will be parsed before being added to the map. Every JAR will be added and
                     * <code>null</code> will be used if no web-fragment.xml was found. Any JARs
                     * known not contain fragments will be skipped.
                     * @param application The main web.xml metadata
                     * @param webXmlParser The parser to use to process the web.xml file
                     * @return A map of JAR name to processed web fragment (if any)
                     */
                    // @ts-ignore
                    processJarsForWebFragments(application: org.apache.tomcat.util.descriptor.web.WebXml, webXmlParser: org.apache.tomcat.util.descriptor.web.WebXmlParser): java.util.Map<java.lang.String | string, org.apache.tomcat.util.descriptor.web.WebXml>
                    // @ts-ignore
                    processAnnotations(fragments: java.util.Set<org.apache.tomcat.util.descriptor.web.WebXml> | Array<org.apache.tomcat.util.descriptor.web.WebXml>, handlesTypesOnly: boolean, javaClassCache: java.util.Map<java.lang.String | string, org.apache.catalina.startup.ContextConfig.JavaClassCacheEntry>): void
                    // @ts-ignore
                    processAnnotationsWebResource(webResource: org.apache.catalina.WebResource, fragment: org.apache.tomcat.util.descriptor.web.WebXml, handlesTypesOnly: boolean, javaClassCache: java.util.Map<java.lang.String | string, org.apache.catalina.startup.ContextConfig.JavaClassCacheEntry>): void
                    // @ts-ignore
                    processAnnotationsUrl(url: java.net.URL, fragment: org.apache.tomcat.util.descriptor.web.WebXml, handlesTypesOnly: boolean, javaClassCache: java.util.Map<java.lang.String | string, org.apache.catalina.startup.ContextConfig.JavaClassCacheEntry>): void
                    // @ts-ignore
                    processAnnotationsJar(url: java.net.URL, fragment: org.apache.tomcat.util.descriptor.web.WebXml, handlesTypesOnly: boolean, javaClassCache: java.util.Map<java.lang.String | string, org.apache.catalina.startup.ContextConfig.JavaClassCacheEntry>): void
                    // @ts-ignore
                    processAnnotationsFile(file: java.io.File, fragment: org.apache.tomcat.util.descriptor.web.WebXml, handlesTypesOnly: boolean, javaClassCache: java.util.Map<java.lang.String | string, org.apache.catalina.startup.ContextConfig.JavaClassCacheEntry>): void
                    // @ts-ignore
                    processAnnotationsStream(jis: java.io.InputStream, fragment: org.apache.tomcat.util.descriptor.web.WebXml, handlesTypesOnly: boolean, javaClassCache: java.util.Map<java.lang.String | string, org.apache.catalina.startup.ContextConfig.JavaClassCacheEntry>): void
                    // @ts-ignore
                    processClass(fragment: org.apache.tomcat.util.descriptor.web.WebXml, clazz: org.apache.tomcat.util.bcel.classfile.JavaClass): void
                    /**
                     * For classes packaged with the web application, the class and each
                     * super class needs to be checked for a match with {@link HandlesTypes} or
                     * for an annotation that matches {@link HandlesTypes}.
                     * @param javaClass the class to check
                     * @param javaClassCache a class cache
                     */
                    // @ts-ignore
                    checkHandlesTypes(javaClass: org.apache.tomcat.util.bcel.classfile.JavaClass, javaClassCache: java.util.Map<java.lang.String | string, org.apache.catalina.startup.ContextConfig.JavaClassCacheEntry>): void
                    // @ts-ignore
                    processAnnotationWebServlet(className: java.lang.String | string, ae: org.apache.tomcat.util.bcel.classfile.AnnotationEntry, fragment: org.apache.tomcat.util.descriptor.web.WebXml): void
                    /**
                     * process filter annotation and merge with existing one!
                     * FIXME: refactoring method too long and has redundant subroutines with
                     * processAnnotationWebServlet!
                     * @param className The filter class name
                     * @param ae The filter annotation
                     * @param fragment The corresponding fragment
                     */
                    // @ts-ignore
                    processAnnotationWebFilter(className: java.lang.String | string, ae: org.apache.tomcat.util.bcel.classfile.AnnotationEntry, fragment: org.apache.tomcat.util.descriptor.web.WebXml): void
                    // @ts-ignore
                    processAnnotationsStringArray(ev: org.apache.tomcat.util.bcel.classfile.ElementValue): string[]
                    // @ts-ignore
                    processAnnotationWebInitParams(ev: org.apache.tomcat.util.bcel.classfile.ElementValue): java.util.Map<java.lang.String | string, java.lang.String | string>
                }
            }
        }
    }
}
