declare namespace org {
    namespace apache {
        namespace catalina {
            /**
             * A <b>Context</b> is a Container that represents a servlet context, and
             * therefore an individual web application, in the Catalina servlet engine.
             * It is therefore useful in almost every deployment of Catalina (even if a
             * Connector attached to a web server (such as Apache) uses the web server's
             * facilities to identify the appropriate Wrapper to handle this request.
             * It also provides a convenient mechanism to use Interceptors that see
             * every request processed by this particular web application.
             * <p>
             * The parent Container attached to a Context is generally a Host, but may
             * be some other implementation, or may be omitted if it is not necessary.
             * <p>
             * The child containers attached to a Context are generally implementations
             * of Wrapper (representing individual servlet definitions).
             * <p>
             * @author Craig R. McClanahan
             */
            // @ts-ignore
            interface Context extends org.apache.catalina.Container, org.apache.tomcat.ContextBind {
                /**
                 * Container event for adding a welcome file.
                 */
                // @ts-ignore
                readonly ADD_WELCOME_FILE_EVENT: java.lang.String | string
                /**
                 * Container event for removing a wrapper.
                 */
                // @ts-ignore
                readonly REMOVE_WELCOME_FILE_EVENT: java.lang.String | string
                /**
                 * Container event for clearing welcome files.
                 */
                // @ts-ignore
                readonly CLEAR_WELCOME_FILES_EVENT: java.lang.String | string
                /**
                 * Container event for changing the ID of a session.
                 */
                // @ts-ignore
                readonly CHANGE_SESSION_ID_EVENT: java.lang.String | string
                /**
                 * Returns <code>true</code> if requests mapped to servlets without
                 * "multipart config" to parse multipart/form-data requests anyway.
                 * @return <code>true</code> if requests mapped to servlets without
                 *     "multipart config" to parse multipart/form-data requests,
                 *     <code>false</code> otherwise.
                 */
                // @ts-ignore
                getAllowCasualMultipartParsing(): boolean
                /**
                 * Set to <code>true</code> to allow requests mapped to servlets that
                 * do not explicitly declare @MultipartConfig or have
                 * &lt;multipart-config&gt; specified in web.xml to parse
                 * multipart/form-data requests.
                 * @param allowCasualMultipartParsing <code>true</code> to allow such
                 *         casual parsing, <code>false</code> otherwise.
                 */
                // @ts-ignore
                setAllowCasualMultipartParsing(allowCasualMultipartParsing: boolean): void
                /**
                 * Obtain the registered application event listeners.
                 * @return An array containing the application event listener instances for
                 *          this web application in the order they were specified in the web
                 *          application deployment descriptor
                 */
                // @ts-ignore
                getApplicationEventListeners(): any[]
                /**
                 * Store the set of initialized application event listener objects,
                 * in the order they were specified in the web application deployment
                 * descriptor, for this application.
                 * @param listeners The set of instantiated listener objects.
                 */
                // @ts-ignore
                setApplicationEventListeners(listeners: java.lang.Object[] | any[]): void
                /**
                 * Obtain the registered application lifecycle listeners.
                 * @return An array containing the application lifecycle listener instances
                 *          for this web application in the order they were specified in the
                 *          web application deployment descriptor
                 */
                // @ts-ignore
                getApplicationLifecycleListeners(): any[]
                /**
                 * Store the set of initialized application lifecycle listener objects,
                 * in the order they were specified in the web application deployment
                 * descriptor, for this application.
                 * @param listeners The set of instantiated listener objects.
                 */
                // @ts-ignore
                setApplicationLifecycleListeners(listeners: java.lang.Object[] | any[]): void
                /**
                 * Obtain the character set name to use with the given Locale. Note that
                 * different Contexts may have different mappings of Locale to character
                 * set.
                 * @param locale The locale for which the mapped character set should be
                 *                returned
                 * @return The name of the character set to use with the given Locale
                 */
                // @ts-ignore
                getCharset(locale: java.util.Locale): string
                /**
                 * Return the URL of the XML descriptor for this context.
                 * @return The URL of the XML descriptor for this context
                 */
                // @ts-ignore
                getConfigFile(): java.net.URL
                /**
                 * Set the URL of the XML descriptor for this context.
                 * @param configFile The URL of the XML descriptor for this context.
                 */
                // @ts-ignore
                setConfigFile(configFile: java.net.URL): void
                /**
                 * Return the "correctly configured" flag for this Context.
                 * @return <code>true</code> if the Context has been correctly configured,
                 *          otherwise <code>false</code>
                 */
                // @ts-ignore
                getConfigured(): boolean
                /**
                 * Set the "correctly configured" flag for this Context.  This can be
                 * set to false by startup listeners that detect a fatal configuration
                 * error to avoid the application from being made available.
                 * @param configured The new correctly configured flag
                 */
                // @ts-ignore
                setConfigured(configured: boolean): void
                /**
                 * Return the "use cookies for session ids" flag.
                 * @return <code>true</code> if it is permitted to use cookies to track
                 *          session IDs for this web application, otherwise
                 *          <code>false</code>
                 */
                // @ts-ignore
                getCookies(): boolean
                /**
                 * Set the "use cookies for session ids" flag.
                 * @param cookies The new flag
                 */
                // @ts-ignore
                setCookies(cookies: boolean): void
                /**
                 * Gets the name to use for session cookies. Overrides any setting that
                 * may be specified by the application.
                 * @return The value of the default session cookie name or null if not
                 *           specified
                 */
                // @ts-ignore
                getSessionCookieName(): string
                /**
                 * Sets the name to use for session cookies. Overrides any setting that
                 * may be specified by the application.
                 * @param sessionCookieName   The name to use
                 */
                // @ts-ignore
                setSessionCookieName(sessionCookieName: java.lang.String | string): void
                /**
                 * Gets the value of the use HttpOnly cookies for session cookies flag.
                 * @return <code>true</code> if the HttpOnly flag should be set on session
                 *          cookies
                 */
                // @ts-ignore
                getUseHttpOnly(): boolean
                /**
                 * Sets the use HttpOnly cookies for session cookies flag.
                 * @param useHttpOnly   Set to <code>true</code> to use HttpOnly cookies
                 *                           for session cookies
                 */
                // @ts-ignore
                setUseHttpOnly(useHttpOnly: boolean): void
                /**
                 * Gets the domain to use for session cookies. Overrides any setting that
                 * may be specified by the application.
                 * @return The value of the default session cookie domain or null if not
                 *           specified
                 */
                // @ts-ignore
                getSessionCookieDomain(): string
                /**
                 * Sets the domain to use for session cookies. Overrides any setting that
                 * may be specified by the application.
                 * @param sessionCookieDomain   The domain to use
                 */
                // @ts-ignore
                setSessionCookieDomain(sessionCookieDomain: java.lang.String | string): void
                /**
                 * Gets the path to use for session cookies. Overrides any setting that
                 * may be specified by the application.
                 * @return The value of the default session cookie path or null if not
                 *           specified
                 */
                // @ts-ignore
                getSessionCookiePath(): string
                /**
                 * Sets the path to use for session cookies. Overrides any setting that
                 * may be specified by the application.
                 * @param sessionCookiePath   The path to use
                 */
                // @ts-ignore
                setSessionCookiePath(sessionCookiePath: java.lang.String | string): void
                /**
                 * Is a / added to the end of the session cookie path to ensure browsers,
                 * particularly IE, don't send a session cookie for context /foo with
                 * requests intended for context /foobar.
                 * @return <code>true</code> if the slash is added, otherwise
                 *          <code>false</code>
                 */
                // @ts-ignore
                getSessionCookiePathUsesTrailingSlash(): boolean
                /**
                 * Configures if a / is added to the end of the session cookie path to
                 * ensure browsers, particularly IE, don't send a session cookie for context
                 * /foo with requests intended for context /foobar.
                 * @param sessionCookiePathUsesTrailingSlash   <code>true</code> if the
                 *                                              slash is should be added,
                 *                                              otherwise <code>false</code>
                 */
                // @ts-ignore
                setSessionCookiePathUsesTrailingSlash(sessionCookiePathUsesTrailingSlash: boolean): void
                /**
                 * Return the "allow crossing servlet contexts" flag.
                 * @return <code>true</code> if cross-contest requests are allowed from this
                 *          web applications, otherwise <code>false</code>
                 */
                // @ts-ignore
                getCrossContext(): boolean
                /**
                 * Return the alternate Deployment Descriptor name.
                 * @return the name
                 */
                // @ts-ignore
                getAltDDName(): string
                /**
                 * Set an alternate Deployment Descriptor name.
                 * @param altDDName The new name
                 */
                // @ts-ignore
                setAltDDName(altDDName: java.lang.String | string): void
                /**
                 * Set the "allow crossing servlet contexts" flag.
                 * @param crossContext The new cross contexts flag
                 */
                // @ts-ignore
                setCrossContext(crossContext: boolean): void
                /**
                 * Return the deny-uncovered-http-methods flag for this web application.
                 * @return The current value of the flag
                 */
                // @ts-ignore
                getDenyUncoveredHttpMethods(): boolean
                /**
                 * Set the deny-uncovered-http-methods flag for this web application.
                 * @param denyUncoveredHttpMethods The new deny-uncovered-http-methods flag
                 */
                // @ts-ignore
                setDenyUncoveredHttpMethods(denyUncoveredHttpMethods: boolean): void
                /**
                 * Return the display name of this web application.
                 * @return The display name
                 */
                // @ts-ignore
                getDisplayName(): string
                /**
                 * Set the display name of this web application.
                 * @param displayName The new display name
                 */
                // @ts-ignore
                setDisplayName(displayName: java.lang.String | string): void
                /**
                 * Get the distributable flag for this web application.
                 * @return The value of the distributable flag for this web application.
                 */
                // @ts-ignore
                getDistributable(): boolean
                /**
                 * Set the distributable flag for this web application.
                 * @param distributable The new distributable flag
                 */
                // @ts-ignore
                setDistributable(distributable: boolean): void
                /**
                 * Obtain the document root for this Context.
                 * @return An absolute pathname or a relative (to the Host's appBase)
                 *          pathname.
                 */
                // @ts-ignore
                getDocBase(): string
                /**
                 * Set the document root for this Context. This can be either an absolute
                 * pathname or a relative pathname. Relative pathnames are relative to the
                 * containing Host's appBase.
                 * @param docBase The new document root
                 */
                // @ts-ignore
                setDocBase(docBase: java.lang.String | string): void
                /**
                 * Return the URL encoded context path
                 * @return The URL encoded (with UTF-8) context path
                 */
                // @ts-ignore
                getEncodedPath(): string
                /**
                 * Determine if annotations parsing is currently disabled
                 * @return {#code true} if annotation parsing is disabled for this web
                 *          application
                 */
                // @ts-ignore
                getIgnoreAnnotations(): boolean
                /**
                 * Set the boolean on the annotations parsing for this web
                 * application.
                 * @param ignoreAnnotations The boolean on the annotations parsing
                 */
                // @ts-ignore
                setIgnoreAnnotations(ignoreAnnotations: boolean): void
                /**
                 * @return the login configuration descriptor for this web application.
                 */
                // @ts-ignore
                getLoginConfig(): org.apache.tomcat.util.descriptor.web.LoginConfig
                /**
                 * Set the login configuration descriptor for this web application.
                 * @param config The new login configuration
                 */
                // @ts-ignore
                setLoginConfig(config: org.apache.tomcat.util.descriptor.web.LoginConfig): void
                /**
                 * @return the naming resources associated with this web application.
                 */
                // @ts-ignore
                getNamingResources(): org.apache.catalina.deploy.NamingResourcesImpl
                /**
                 * Set the naming resources for this web application.
                 * @param namingResources The new naming resources
                 */
                // @ts-ignore
                setNamingResources(namingResources: org.apache.catalina.deploy.NamingResourcesImpl): void
                /**
                 * @return the context path for this web application.
                 */
                // @ts-ignore
                getPath(): string
                /**
                 * Set the context path for this web application.
                 * @param path The new context path
                 */
                // @ts-ignore
                setPath(path: java.lang.String | string): void
                /**
                 * @return the public identifier of the deployment descriptor DTD that is
                 *  currently being parsed.
                 */
                // @ts-ignore
                getPublicId(): string
                /**
                 * Set the public identifier of the deployment descriptor DTD that is
                 * currently being parsed.
                 * @param publicId The public identifier
                 */
                // @ts-ignore
                setPublicId(publicId: java.lang.String | string): void
                /**
                 * @return the reloadable flag for this web application.
                 */
                // @ts-ignore
                getReloadable(): boolean
                /**
                 * Set the reloadable flag for this web application.
                 * @param reloadable The new reloadable flag
                 */
                // @ts-ignore
                setReloadable(reloadable: boolean): void
                /**
                 * @return the override flag for this web application.
                 */
                // @ts-ignore
                getOverride(): boolean
                /**
                 * Set the override flag for this web application.
                 * @param override The new override flag
                 */
                // @ts-ignore
                setOverride(override: boolean): void
                /**
                 * @return the privileged flag for this web application.
                 */
                // @ts-ignore
                getPrivileged(): boolean
                /**
                 * Set the privileged flag for this web application.
                 * @param privileged The new privileged flag
                 */
                // @ts-ignore
                setPrivileged(privileged: boolean): void
                /**
                 * @return the Servlet context for which this Context is a facade.
                 */
                // @ts-ignore
                getServletContext(): javax.servlet.ServletContext
                /**
                 * @return the default session timeout (in minutes) for this
                 *  web application.
                 */
                // @ts-ignore
                getSessionTimeout(): number /*int*/
                /**
                 * Set the default session timeout (in minutes) for this
                 * web application.
                 * @param timeout The new default session timeout
                 */
                // @ts-ignore
                setSessionTimeout(timeout: number /*int*/): void
                /**
                 * Returns <code>true</code> if remaining request data will be read
                 * (swallowed) even the request violates a data size constraint.
                 * @return <code>true</code> if data will be swallowed (default),
                 *     <code>false</code> otherwise.
                 */
                // @ts-ignore
                getSwallowAbortedUploads(): boolean
                /**
                 * Set to <code>false</code> to disable request data swallowing
                 * after an upload was aborted due to size constraints.
                 * @param swallowAbortedUploads <code>false</code> to disable
                 *         swallowing, <code>true</code> otherwise (default).
                 */
                // @ts-ignore
                setSwallowAbortedUploads(swallowAbortedUploads: boolean): void
                /**
                 * @return the value of the swallowOutput flag.
                 */
                // @ts-ignore
                getSwallowOutput(): boolean
                /**
                 * Set the value of the swallowOutput flag. If set to true, the system.out
                 * and system.err will be redirected to the logger during a servlet
                 * execution.
                 * @param swallowOutput The new value
                 */
                // @ts-ignore
                setSwallowOutput(swallowOutput: boolean): void
                /**
                 * @return the Java class name of the Wrapper implementation used
                 *  for servlets registered in this Context.
                 */
                // @ts-ignore
                getWrapperClass(): string
                /**
                 * Set the Java class name of the Wrapper implementation used
                 * for servlets registered in this Context.
                 * @param wrapperClass The new wrapper class
                 */
                // @ts-ignore
                setWrapperClass(wrapperClass: java.lang.String | string): void
                /**
                 * Will the parsing of web.xml and web-fragment.xml files for this Context
                 * be performed by a namespace aware parser?
                 * @return true if namespace awareness is enabled.
                 */
                // @ts-ignore
                getXmlNamespaceAware(): boolean
                /**
                 * Controls whether the parsing of web.xml and web-fragment.xml files for
                 * this Context will be performed by a namespace aware parser.
                 * @param xmlNamespaceAware true to enable namespace awareness
                 */
                // @ts-ignore
                setXmlNamespaceAware(xmlNamespaceAware: boolean): void
                /**
                 * Will the parsing of web.xml and web-fragment.xml files for this Context
                 * be performed by a validating parser?
                 * @return true if validation is enabled.
                 */
                // @ts-ignore
                getXmlValidation(): boolean
                /**
                 * Controls whether the parsing of web.xml and web-fragment.xml files
                 * for this Context will be performed by a validating parser.
                 * @param xmlValidation true to enable xml validation
                 */
                // @ts-ignore
                setXmlValidation(xmlValidation: boolean): void
                /**
                 * Will the parsing of web.xml, web-fragment.xml, *.tld, *.jspx, *.tagx and
                 * tagplugin.xml files for this Context block the use of external entities?
                 * @return true if access to external entities is blocked
                 */
                // @ts-ignore
                getXmlBlockExternal(): boolean
                /**
                 * Controls whether the parsing of web.xml, web-fragment.xml, *.tld, *.jspx,
                 * *.tagx and tagplugin.xml files for this Context will block the use of
                 * external entities.
                 * @param xmlBlockExternal true to block external entities
                 */
                // @ts-ignore
                setXmlBlockExternal(xmlBlockExternal: boolean): void
                /**
                 * Will the parsing of *.tld files for this Context be performed by a
                 * validating parser?
                 * @return true if validation is enabled.
                 */
                // @ts-ignore
                getTldValidation(): boolean
                /**
                 * Controls whether the parsing of *.tld files for this Context will be
                 * performed by a validating parser.
                 * @param tldValidation true to enable xml validation
                 */
                // @ts-ignore
                setTldValidation(tldValidation: boolean): void
                /**
                 * Get the Jar Scanner to be used to scan for JAR resources for this
                 * context.
                 * @return The Jar Scanner configured for this context.
                 */
                // @ts-ignore
                getJarScanner(): org.apache.tomcat.JarScanner
                /**
                 * Set the Jar Scanner to be used to scan for JAR resources for this
                 * context.
                 * @param jarScanner    The Jar Scanner to be used for this context.
                 */
                // @ts-ignore
                setJarScanner(jarScanner: org.apache.tomcat.JarScanner): void
                /**
                 * @return the {#link Authenticator} that is used by this context. This is
                 *          always non-{@code null} for a started Context
                 */
                // @ts-ignore
                getAuthenticator(): org.apache.catalina.Authenticator
                /**
                 * Set whether or not the effective web.xml for this context should be
                 * logged on context start.
                 * @param logEffectiveWebXml set to <code>true</code> to log the complete
                 *         web.xml that will be used for the webapp
                 */
                // @ts-ignore
                setLogEffectiveWebXml(logEffectiveWebXml: boolean): void
                /**
                 * Should the effective web.xml for this context be logged on context start?
                 * @return true if the reconstructed web.xml that will be used for the
                 *    webapp should be logged
                 */
                // @ts-ignore
                getLogEffectiveWebXml(): boolean
                /**
                 * @return the instance manager associated with this context.
                 */
                // @ts-ignore
                getInstanceManager(): org.apache.tomcat.InstanceManager
                /**
                 * Set the instance manager associated with this context.
                 * @param instanceManager the new instance manager instance
                 */
                // @ts-ignore
                setInstanceManager(instanceManager: org.apache.tomcat.InstanceManager): void
                /**
                 * Sets the regular expression that specifies which container provided SCIs
                 * should be filtered out and not used for this context. Matching uses
                 * {@link java.util.regex.Matcher#find()} so the regular expression only has
                 * to match a sub-string of the fully qualified class name of the container
                 * provided SCI for it to be filtered out.
                 * @param containerSciFilter The regular expression against which the fully
                 *                            qualified class name of each container provided
                 *                            SCI should be checked
                 */
                // @ts-ignore
                setContainerSciFilter(containerSciFilter: java.lang.String | string): void
                /**
                 * Obtains the regular expression that specifies which container provided
                 * SCIs should be filtered out and not used for this context. Matching uses
                 * {@link java.util.regex.Matcher#find()} so the regular expression only has
                 * to match a sub-string of the fully qualified class name of the container
                 * provided SCI for it to be filtered out.
                 * @return The regular expression against which the fully qualified class
                 *          name of each container provided SCI will be checked
                 */
                // @ts-ignore
                getContainerSciFilter(): string
                /**
                 * Add a new Listener class name to the set of Listeners
                 * configured for this application.
                 * @param listener Java class name of a listener class
                 */
                // @ts-ignore
                addApplicationListener(listener: java.lang.String | string): void
                /**
                 * Add a new application parameter for this application.
                 * @param parameter The new application parameter
                 */
                // @ts-ignore
                addApplicationParameter(parameter: org.apache.tomcat.util.descriptor.web.ApplicationParameter): void
                /**
                 * Add a security constraint to the set for this web application.
                 * @param constraint The security constraint that should be added
                 */
                // @ts-ignore
                addConstraint(constraint: org.apache.tomcat.util.descriptor.web.SecurityConstraint): void
                /**
                 * Add an error page for the specified error or Java exception.
                 * @param errorPage The error page definition to be added
                 */
                // @ts-ignore
                addErrorPage(errorPage: org.apache.tomcat.util.descriptor.web.ErrorPage): void
                /**
                 * Add a filter definition to this Context.
                 * @param filterDef The filter definition to be added
                 */
                // @ts-ignore
                addFilterDef(filterDef: org.apache.tomcat.util.descriptor.web.FilterDef): void
                /**
                 * Add a filter mapping to this Context.
                 * @param filterMap The filter mapping to be added
                 */
                // @ts-ignore
                addFilterMap(filterMap: org.apache.tomcat.util.descriptor.web.FilterMap): void
                /**
                 * Add a filter mapping to this Context before the mappings defined in the
                 * deployment descriptor but after any other mappings added via this method.
                 * @param filterMap The filter mapping to be added
                 * @exception IllegalArgumentException if the specified filter name
                 *   does not match an existing filter definition, or the filter mapping
                 *   is malformed
                 */
                // @ts-ignore
                addFilterMapBefore(filterMap: org.apache.tomcat.util.descriptor.web.FilterMap): void
                /**
                 * Add a Locale Encoding Mapping (see Sec 5.4 of Servlet spec 2.4)
                 * @param locale locale to map an encoding for
                 * @param encoding encoding to be used for a give locale
                 */
                // @ts-ignore
                addLocaleEncodingMappingParameter(locale: java.lang.String | string, encoding: java.lang.String | string): void
                /**
                 * Add a new MIME mapping, replacing any existing mapping for
                 * the specified extension.
                 * @param extension Filename extension being mapped
                 * @param mimeType Corresponding MIME type
                 */
                // @ts-ignore
                addMimeMapping(extension: java.lang.String | string, mimeType: java.lang.String | string): void
                /**
                 * Add a new context initialization parameter, replacing any existing
                 * value for the specified name.
                 * @param name Name of the new parameter
                 * @param value Value of the new  parameter
                 */
                // @ts-ignore
                addParameter(name: java.lang.String | string, value: java.lang.String | string): void
                /**
                 * Add a security role reference for this web application.
                 * @param role Security role used in the application
                 * @param link Actual security role to check for
                 */
                // @ts-ignore
                addRoleMapping(role: java.lang.String | string, link: java.lang.String | string): void
                /**
                 * Add a new security role for this web application.
                 * @param role New security role
                 */
                // @ts-ignore
                addSecurityRole(role: java.lang.String | string): void
                /**
                 * Add a new servlet mapping, replacing any existing mapping for
                 * the specified pattern.
                 * @param pattern URL pattern to be mapped
                 * @param name Name of the corresponding servlet to execute
                 */
                // @ts-ignore
                addServletMappingDecoded(pattern: java.lang.String | string, name: java.lang.String | string): void
                /**
                 * Add a new servlet mapping, replacing any existing mapping for
                 * the specified pattern.
                 * @param pattern URL pattern to be mapped
                 * @param name Name of the corresponding servlet to execute
                 * @param jspWildcard true if name identifies the JspServlet
                 *  and pattern contains a wildcard; false otherwise
                 */
                // @ts-ignore
                addServletMappingDecoded(pattern: java.lang.String | string, name: java.lang.String | string, jspWildcard: boolean): void
                /**
                 * Add a resource which will be watched for reloading by the host auto
                 * deployer. Note: this will not be used in embedded mode.
                 * @param name Path to the resource, relative to docBase
                 */
                // @ts-ignore
                addWatchedResource(name: java.lang.String | string): void
                /**
                 * Add a new welcome file to the set recognized by this Context.
                 * @param name New welcome file name
                 */
                // @ts-ignore
                addWelcomeFile(name: java.lang.String | string): void
                /**
                 * Add the classname of a LifecycleListener to be added to each
                 * Wrapper appended to this Context.
                 * @param listener Java class name of a LifecycleListener class
                 */
                // @ts-ignore
                addWrapperLifecycle(listener: java.lang.String | string): void
                /**
                 * Add the classname of a ContainerListener to be added to each
                 * Wrapper appended to this Context.
                 * @param listener Java class name of a ContainerListener class
                 */
                // @ts-ignore
                addWrapperListener(listener: java.lang.String | string): void
                /**
                 * Factory method to create and return a new Wrapper instance, of
                 * the Java implementation class appropriate for this Context
                 * implementation.  The constructor of the instantiated Wrapper
                 * will have been called, but no properties will have been set.
                 * @return a newly created wrapper instance that is used to wrap a Servlet
                 */
                // @ts-ignore
                createWrapper(): org.apache.catalina.Wrapper
                /**
                 * @return the set of application listener class names configured
                 *  for this application.
                 */
                // @ts-ignore
                findApplicationListeners(): string[]
                /**
                 * @return the set of application parameters for this application.
                 */
                // @ts-ignore
                findApplicationParameters(): org.apache.tomcat.util.descriptor.web.ApplicationParameter[]
                /**
                 * @return the set of security constraints for this web application.
                 *  If there are none, a zero-length array is returned.
                 */
                // @ts-ignore
                findConstraints(): org.apache.tomcat.util.descriptor.web.SecurityConstraint[]
                /**
                 * @return the error page entry for the specified HTTP error code,
                 *  if any; otherwise return <code>null</code>.
                 * @param errorCode Error code to look up
                 */
                // @ts-ignore
                findErrorPage(errorCode: number /*int*/): org.apache.tomcat.util.descriptor.web.ErrorPage
                /**
                 * @param exceptionType Exception type to look up
                 * @return the error page entry for the specified Java exception type,
                 *          if any; otherwise return {#code null}.
                 * @deprecated Unused. Will be removed in Tomcat 10.
                 *              Use {#link #findErrorPage(Throwable)} instead.
                 */
                // @ts-ignore
                findErrorPage(exceptionType: java.lang.String | string): org.apache.tomcat.util.descriptor.web.ErrorPage
                /**
                 * Find and return the ErrorPage instance for the specified exception's
                 * class, or an ErrorPage instance for the closest superclass for which
                 * there is such a definition.  If no associated ErrorPage instance is
                 * found, return <code>null</code>.
                 * @param throwable The exception type for which to find an ErrorPage
                 * @return the error page entry for the specified Java exception type,
                 *          if any; otherwise return {#code null}.
                 */
                // @ts-ignore
                findErrorPage(throwable: java.lang.Throwable | Error): org.apache.tomcat.util.descriptor.web.ErrorPage
                /**
                 * @return the set of defined error pages for all specified error codes
                 *  and exception types.
                 */
                // @ts-ignore
                findErrorPages(): org.apache.tomcat.util.descriptor.web.ErrorPage[]
                /**
                 * @return the filter definition for the specified filter name, if any;
                 *  otherwise return <code>null</code>.
                 * @param filterName Filter name to look up
                 */
                // @ts-ignore
                findFilterDef(filterName: java.lang.String | string): org.apache.tomcat.util.descriptor.web.FilterDef
                /**
                 * @return the set of defined filters for this Context.
                 */
                // @ts-ignore
                findFilterDefs(): org.apache.tomcat.util.descriptor.web.FilterDef[]
                /**
                 * @return the set of filter mappings for this Context.
                 */
                // @ts-ignore
                findFilterMaps(): org.apache.tomcat.util.descriptor.web.FilterMap[]
                /**
                 * @return the MIME type to which the specified extension is mapped,
                 *  if any; otherwise return <code>null</code>.
                 * @param extension Extension to map to a MIME type
                 */
                // @ts-ignore
                findMimeMapping(extension: java.lang.String | string): string
                /**
                 * @return the extensions for which MIME mappings are defined.  If there
                 *  are none, a zero-length array is returned.
                 */
                // @ts-ignore
                findMimeMappings(): string[]
                /**
                 * @return the value for the specified context initialization
                 *  parameter name, if any; otherwise return <code>null</code>.
                 * @param name Name of the parameter to return
                 */
                // @ts-ignore
                findParameter(name: java.lang.String | string): string
                /**
                 * @return the names of all defined context initialization parameters
                 *  for this Context.  If no parameters are defined, a zero-length
                 *  array is returned.
                 */
                // @ts-ignore
                findParameters(): string[]
                /**
                 * For the given security role (as used by an application), return the
                 * corresponding role name (as defined by the underlying Realm) if there
                 * is one.  Otherwise, return the specified role unchanged.
                 * @param role Security role to map
                 * @return The role name that was mapped to the specified role
                 */
                // @ts-ignore
                findRoleMapping(role: java.lang.String | string): string
                /**
                 * @return <code>true</code> if the specified security role is defined
                 *  for this application; otherwise return <code>false</code>.
                 * @param role Security role to verify
                 */
                // @ts-ignore
                findSecurityRole(role: java.lang.String | string): boolean
                /**
                 * @return the security roles defined for this application.  If none
                 *  have been defined, a zero-length array is returned.
                 */
                // @ts-ignore
                findSecurityRoles(): string[]
                /**
                 * @return the servlet name mapped by the specified pattern (if any);
                 *  otherwise return <code>null</code>.
                 * @param pattern Pattern for which a mapping is requested
                 */
                // @ts-ignore
                findServletMapping(pattern: java.lang.String | string): string
                /**
                 * @return the patterns of all defined servlet mappings for this
                 *  Context.  If no mappings are defined, a zero-length array is returned.
                 */
                // @ts-ignore
                findServletMappings(): string[]
                /**
                 * @return the context-relative URI of the error page for the specified
                 *  HTTP status code, if any; otherwise return <code>null</code>.
                 * @param status HTTP status code to look up
                 * @deprecated Unused. Will be removed in Tomcat 10.
                 *              Use {#link #findErrorPage(int)} instead.
                 */
                // @ts-ignore
                findStatusPage(status: number /*int*/): string
                /**
                 * @return the set of HTTP status codes for which error pages have
                 *  been specified.  If none are specified, a zero-length array
                 *  is returned.
                 * @deprecated Unused. Will be removed in Tomcat 10.
                 *              Use {#link #findErrorPages()} instead.
                 */
                // @ts-ignore
                findStatusPages(): number /*int*/[]
                /**
                 * @return the associated ThreadBindingListener.
                 */
                // @ts-ignore
                getThreadBindingListener(): org.apache.catalina.ThreadBindingListener
                /**
                 * Get the associated ThreadBindingListener.
                 * @param threadBindingListener Set the listener that will receive
                 *        notifications when entering and exiting the application scope
                 */
                // @ts-ignore
                setThreadBindingListener(threadBindingListener: org.apache.catalina.ThreadBindingListener): void
                /**
                 * @return the set of watched resources for this Context. If none are
                 *  defined, a zero length array will be returned.
                 */
                // @ts-ignore
                findWatchedResources(): string[]
                /**
                 * @return <code>true</code> if the specified welcome file is defined
                 *  for this Context; otherwise return <code>false</code>.
                 * @param name Welcome file to verify
                 */
                // @ts-ignore
                findWelcomeFile(name: java.lang.String | string): boolean
                /**
                 * @return the set of welcome files defined for this Context.  If none are
                 *  defined, a zero-length array is returned.
                 */
                // @ts-ignore
                findWelcomeFiles(): string[]
                /**
                 * @return the set of LifecycleListener classes that will be added to
                 *  newly created Wrappers automatically.
                 */
                // @ts-ignore
                findWrapperLifecycles(): string[]
                /**
                 * @return the set of ContainerListener classes that will be added to
                 *  newly created Wrappers automatically.
                 */
                // @ts-ignore
                findWrapperListeners(): string[]
                /**
                 * Notify all {@link javax.servlet.ServletRequestListener}s that a request
                 * has started.
                 * @param request The request object that will be passed to the listener
                 * @return <code>true</code> if the listeners fire successfully, else
                 *          <code>false</code>
                 */
                // @ts-ignore
                fireRequestInitEvent(request: javax.servlet.ServletRequest): boolean
                /**
                 * Notify all {@link javax.servlet.ServletRequestListener}s that a request
                 * has ended.
                 * @param request The request object that will be passed to the listener
                 * @return <code>true</code> if the listeners fire successfully, else
                 *          <code>false</code>
                 */
                // @ts-ignore
                fireRequestDestroyEvent(request: javax.servlet.ServletRequest): boolean
                /**
                 * Reload this web application, if reloading is supported.
                 * @exception IllegalStateException if the <code>reloadable</code>
                 *   property is set to <code>false</code>.
                 */
                // @ts-ignore
                reload(): void
                /**
                 * Remove the specified application listener class from the set of
                 * listeners for this application.
                 * @param listener Java class name of the listener to be removed
                 */
                // @ts-ignore
                removeApplicationListener(listener: java.lang.String | string): void
                /**
                 * Remove the application parameter with the specified name from
                 * the set for this application.
                 * @param name Name of the application parameter to remove
                 */
                // @ts-ignore
                removeApplicationParameter(name: java.lang.String | string): void
                /**
                 * Remove the specified security constraint from this web application.
                 * @param constraint Constraint to be removed
                 */
                // @ts-ignore
                removeConstraint(constraint: org.apache.tomcat.util.descriptor.web.SecurityConstraint): void
                /**
                 * Remove the error page for the specified error code or
                 * Java language exception, if it exists; otherwise, no action is taken.
                 * @param errorPage The error page definition to be removed
                 */
                // @ts-ignore
                removeErrorPage(errorPage: org.apache.tomcat.util.descriptor.web.ErrorPage): void
                /**
                 * Remove the specified filter definition from this Context, if it exists;
                 * otherwise, no action is taken.
                 * @param filterDef Filter definition to be removed
                 */
                // @ts-ignore
                removeFilterDef(filterDef: org.apache.tomcat.util.descriptor.web.FilterDef): void
                /**
                 * Remove a filter mapping from this Context.
                 * @param filterMap The filter mapping to be removed
                 */
                // @ts-ignore
                removeFilterMap(filterMap: org.apache.tomcat.util.descriptor.web.FilterMap): void
                /**
                 * Remove the MIME mapping for the specified extension, if it exists;
                 * otherwise, no action is taken.
                 * @param extension Extension to remove the mapping for
                 */
                // @ts-ignore
                removeMimeMapping(extension: java.lang.String | string): void
                /**
                 * Remove the context initialization parameter with the specified
                 * name, if it exists; otherwise, no action is taken.
                 * @param name Name of the parameter to remove
                 */
                // @ts-ignore
                removeParameter(name: java.lang.String | string): void
                /**
                 * Remove any security role reference for the specified name
                 * @param role Security role (as used in the application) to remove
                 */
                // @ts-ignore
                removeRoleMapping(role: java.lang.String | string): void
                /**
                 * Remove any security role with the specified name.
                 * @param role Security role to remove
                 */
                // @ts-ignore
                removeSecurityRole(role: java.lang.String | string): void
                /**
                 * Remove any servlet mapping for the specified pattern, if it exists;
                 * otherwise, no action is taken.
                 * @param pattern URL pattern of the mapping to remove
                 */
                // @ts-ignore
                removeServletMapping(pattern: java.lang.String | string): void
                /**
                 * Remove the specified watched resource name from the list associated
                 * with this Context.
                 * @param name Name of the watched resource to be removed
                 */
                // @ts-ignore
                removeWatchedResource(name: java.lang.String | string): void
                /**
                 * Remove the specified welcome file name from the list recognized
                 * by this Context.
                 * @param name Name of the welcome file to be removed
                 */
                // @ts-ignore
                removeWelcomeFile(name: java.lang.String | string): void
                /**
                 * Remove a class name from the set of LifecycleListener classes that
                 * will be added to newly created Wrappers.
                 * @param listener Class name of a LifecycleListener class to be removed
                 */
                // @ts-ignore
                removeWrapperLifecycle(listener: java.lang.String | string): void
                /**
                 * Remove a class name from the set of ContainerListener classes that
                 * will be added to newly created Wrappers.
                 * @param listener Class name of a ContainerListener class to be removed
                 */
                // @ts-ignore
                removeWrapperListener(listener: java.lang.String | string): void
                /**
                 * @return the real path for a given virtual path, if possible; otherwise
                 *  return <code>null</code>.
                 * @param path The path to the desired resource
                 */
                // @ts-ignore
                getRealPath(path: java.lang.String | string): string
                /**
                 * @return the effective major version of the Servlet spec used by this
                 *  context.
                 */
                // @ts-ignore
                getEffectiveMajorVersion(): number /*int*/
                /**
                 * Set the effective major version of the Servlet spec used by this
                 * context.
                 * @param major Set the version number
                 */
                // @ts-ignore
                setEffectiveMajorVersion(major: number /*int*/): void
                /**
                 * @return the effective minor version of the Servlet spec used by this
                 *  context.
                 */
                // @ts-ignore
                getEffectiveMinorVersion(): number /*int*/
                /**
                 * Set the effective minor version of the Servlet spec used by this
                 * context.
                 * @param minor Set the version number
                 */
                // @ts-ignore
                setEffectiveMinorVersion(minor: number /*int*/): void
                /**
                 * @return the JSP configuration for this context.
                 *  Will be null if there is no JSP configuration.
                 */
                // @ts-ignore
                getJspConfigDescriptor(): javax.servlet.descriptor.JspConfigDescriptor
                /**
                 * Set the JspConfigDescriptor for this context.
                 * A null value indicates there is not JSP configuration.
                 * @param descriptor the new JSP configuration
                 */
                // @ts-ignore
                setJspConfigDescriptor(descriptor: javax.servlet.descriptor.JspConfigDescriptor): void
                /**
                 * Add a ServletContainerInitializer instance to this web application.
                 * @param sci       The instance to add
                 * @param classes   The classes in which the initializer expressed an
                 *                   interest
                 */
                // @ts-ignore
                addServletContainerInitializer(sci: javax.servlet.ServletContainerInitializer, classes: java.util.Set<java.lang.Class<any>> | Array<java.lang.Class<any>>): void
                /**
                 * Is this Context paused whilst it is reloaded?
                 * @return <code>true</code> if the context has been paused
                 */
                // @ts-ignore
                getPaused(): boolean
                /**
                 * Is this context using version 2.2 of the Servlet spec?
                 * @return <code>true</code> for a legacy Servlet 2.2 webapp
                 */
                // @ts-ignore
                isServlet22(): boolean
                /**
                 * Notification that Servlet security has been dynamically set in a
                 * {@link javax.servlet.ServletRegistration.Dynamic}
                 * @param registration Servlet security was modified for
                 * @param servletSecurityElement new security constraints for this Servlet
                 * @return urls currently mapped to this registration that are already
                 *          present in web.xml
                 */
                // @ts-ignore
                addServletSecurity(registration: javax.servlet.ServletRegistration.Dynamic, servletSecurityElement: javax.servlet.ServletSecurityElement): Array<java.lang.String | string>
                /**
                 * Sets the (comma separated) list of Servlets that expect a resource to be
                 * present. Used to ensure that welcome files associated with Servlets that
                 * expect a resource to be present are not mapped when there is no resource.
                 * @param resourceOnlyServlets The Servlet names comma separated list
                 */
                // @ts-ignore
                setResourceOnlyServlets(resourceOnlyServlets: java.lang.String | string): void
                /**
                 * Obtains the list of Servlets that expect a resource to be present.
                 * @return A comma separated list of Servlet names as used in web.xml
                 */
                // @ts-ignore
                getResourceOnlyServlets(): string
                /**
                 * Checks the named Servlet to see if it expects a resource to be present.
                 * @param servletName   Name of the Servlet (as per web.xml) to check
                 * @return <code>true</code> if the Servlet expects a resource,
                 *                       otherwise <code>false</code>
                 */
                // @ts-ignore
                isResourceOnlyServlet(servletName: java.lang.String | string): boolean
                /**
                 * @return the base name to use for WARs, directories or context.xml files
                 *  for this context.
                 */
                // @ts-ignore
                getBaseName(): string
                /**
                 * Set the version of this web application - used to differentiate
                 * different versions of the same web application when using parallel
                 * deployment.
                 * @param webappVersion The webapp version associated with the context,
                 *     which should be unique
                 */
                // @ts-ignore
                setWebappVersion(webappVersion: java.lang.String | string): void
                /**
                 * @return The version of this web application, used to differentiate
                 *  different versions of the same web application when using parallel
                 *  deployment.
                 */
                // @ts-ignore
                getWebappVersion(): string
                /**
                 * Configure whether or not requests listeners will be fired on forwards for
                 * this Context.
                 * @param enable <code>true</code> to fire request listeners when forwarding
                 */
                // @ts-ignore
                setFireRequestListenersOnForwards(enable: boolean): void
                /**
                 * @return whether or not requests listeners will be fired on forwards for
                 *  this Context.
                 */
                // @ts-ignore
                getFireRequestListenersOnForwards(): boolean
                /**
                 * Configures if a user presents authentication credentials, whether the
                 * context will process them when the request is for a non-protected
                 * resource.
                 * @param enable <code>true</code> to perform authentication even outside
                 *     security constraints
                 */
                // @ts-ignore
                setPreemptiveAuthentication(enable: boolean): void
                /**
                 * @return if a user presents authentication credentials, will the
                 *  context will process them when the request is for a non-protected
                 *  resource.
                 */
                // @ts-ignore
                getPreemptiveAuthentication(): boolean
                /**
                 * Configures if a response body is included when a redirect response is
                 * sent to the client.
                 * @param enable <code>true</code> to send a response body for redirects
                 */
                // @ts-ignore
                setSendRedirectBody(enable: boolean): void
                /**
                 * @return if the context is configured to include a response body as
                 *  part of a redirect response.
                 */
                // @ts-ignore
                getSendRedirectBody(): boolean
                /**
                 * @return the Loader with which this Context is associated.
                 */
                // @ts-ignore
                getLoader(): org.apache.catalina.Loader
                /**
                 * Set the Loader with which this Context is associated.
                 * @param loader The newly associated loader
                 */
                // @ts-ignore
                setLoader(loader: org.apache.catalina.Loader): void
                /**
                 * @return the Resources with which this Context is associated.
                 */
                // @ts-ignore
                getResources(): org.apache.catalina.WebResourceRoot
                /**
                 * Set the Resources object with which this Context is associated.
                 * @param resources The newly associated Resources
                 */
                // @ts-ignore
                setResources(resources: org.apache.catalina.WebResourceRoot): void
                /**
                 * @return the Manager with which this Context is associated.  If there is
                 *  no associated Manager, return <code>null</code>.
                 */
                // @ts-ignore
                getManager(): org.apache.catalina.Manager
                /**
                 * Set the Manager with which this Context is associated.
                 * @param manager The newly associated Manager
                 */
                // @ts-ignore
                setManager(manager: org.apache.catalina.Manager): void
                /**
                 * Sets the flag that indicates if /WEB-INF/classes should be treated like
                 * an exploded JAR and JAR resources made available as if they were in a
                 * JAR.
                 * @param addWebinfClassesResources The new value for the flag
                 */
                // @ts-ignore
                setAddWebinfClassesResources(addWebinfClassesResources: boolean): void
                /**
                 * @return the flag that indicates if /WEB-INF/classes should be treated like
                 *  an exploded JAR and JAR resources made available as if they were in a
                 *  JAR.
                 */
                // @ts-ignore
                getAddWebinfClassesResources(): boolean
                /**
                 * Add a post construct method definition for the given class, if there is
                 * an existing definition for the specified class - IllegalArgumentException
                 * will be thrown.
                 * @param clazz Fully qualified class name
                 * @param method
                 *             Post construct method name
                 * @throws IllegalArgumentException
                 *              if the fully qualified class name or method name are
                 *              <code>NULL</code>; if there is already post construct method
                 *              definition for the given class
                 */
                // @ts-ignore
                addPostConstructMethod(clazz: java.lang.String | string, method: java.lang.String | string): void
                /**
                 * Add a pre destroy method definition for the given class, if there is an
                 * existing definition for the specified class - IllegalArgumentException
                 * will be thrown.
                 * @param clazz Fully qualified class name
                 * @param method
                 *             Post construct method name
                 * @throws IllegalArgumentException
                 *              if the fully qualified class name or method name are
                 *              <code>NULL</code>; if there is already pre destroy method
                 *              definition for the given class
                 */
                // @ts-ignore
                addPreDestroyMethod(clazz: java.lang.String | string, method: java.lang.String | string): void
                /**
                 * Removes the post construct method definition for the given class, if it
                 * exists; otherwise, no action is taken.
                 * @param clazz
                 *             Fully qualified class name
                 */
                // @ts-ignore
                removePostConstructMethod(clazz: java.lang.String | string): void
                /**
                 * Removes the pre destroy method definition for the given class, if it
                 * exists; otherwise, no action is taken.
                 * @param clazz
                 *             Fully qualified class name
                 */
                // @ts-ignore
                removePreDestroyMethod(clazz: java.lang.String | string): void
                /**
                 * Returns the method name that is specified as post construct method for
                 * the given class, if it exists; otherwise <code>NULL</code> will be
                 * returned.
                 * @param clazz
                 *             Fully qualified class name
                 * @return the method name that is specified as post construct method for
                 *          the given class, if it exists; otherwise <code>NULL</code> will
                 *          be returned.
                 */
                // @ts-ignore
                findPostConstructMethod(clazz: java.lang.String | string): string
                /**
                 * Returns the method name that is specified as pre destroy method for the
                 * given class, if it exists; otherwise <code>NULL</code> will be returned.
                 * @param clazz
                 *             Fully qualified class name
                 * @return the method name that is specified as pre destroy method for the
                 *          given class, if it exists; otherwise <code>NULL</code> will be
                 *          returned.
                 */
                // @ts-ignore
                findPreDestroyMethod(clazz: java.lang.String | string): string
                /**
                 * Returns a map with keys - fully qualified class names of the classes that
                 * have post construct methods and the values are the corresponding method
                 * names. If there are no such classes an empty map will be returned.
                 * @return a map with keys - fully qualified class names of the classes that
                 *          have post construct methods and the values are the corresponding
                 *          method names.
                 */
                // @ts-ignore
                findPostConstructMethods(): java.util.Map<java.lang.String | string, java.lang.String | string>
                /**
                 * Returns a map with keys - fully qualified class names of the classes that
                 * have pre destroy methods and the values are the corresponding method
                 * names. If there are no such classes an empty map will be returned.
                 * @return a map with keys - fully qualified class names of the classes that
                 *          have pre destroy methods and the values are the corresponding
                 *          method names.
                 */
                // @ts-ignore
                findPreDestroyMethods(): java.util.Map<java.lang.String | string, java.lang.String | string>
                /**
                 * @return the token necessary for operations on the associated JNDI naming
                 *  context.
                 */
                // @ts-ignore
                getNamingToken(): any
                /**
                 * Sets the {@link CookieProcessor} that will be used to process cookies
                 * for this Context.
                 * @param cookieProcessor   The new cookie processor
                 * @throws IllegalArgumentException If a {#code null} CookieProcessor is
                 *          specified
                 */
                // @ts-ignore
                setCookieProcessor(cookieProcessor: org.apache.tomcat.util.http.CookieProcessor): void
                /**
                 * @return the {#link CookieProcessor} that will be used to process cookies
                 *  for this Context.
                 */
                // @ts-ignore
                getCookieProcessor(): org.apache.tomcat.util.http.CookieProcessor
                /**
                 * When a client provides the ID for a new session, should that ID be
                 * validated? The only use case for using a client provided session ID is to
                 * have a common session ID across multiple web applications. Therefore,
                 * any client provided session ID should already exist in another web
                 * application. If this check is enabled, the client provided session ID
                 * will only be used if the session ID exists in at least one other web
                 * application for the current host. Note that the following additional
                 * tests are always applied, irrespective of this setting:
                 * <ul>
                 * <li>The session ID is provided by a cookie</li>
                 * <li>The session cookie has a path of {@code /}</li>
                 * </ul>
                 * @param validateClientProvidedNewSessionId
                 *           {#code true} if validation should be applied
                 */
                // @ts-ignore
                setValidateClientProvidedNewSessionId(validateClientProvidedNewSessionId: boolean): void
                /**
                 * Will client provided session IDs be validated (see {@link
                 * #setValidateClientProvidedNewSessionId(boolean)}) before use?
                 * @return {#code true} if validation will be applied. Otherwise, {@code
                 *          false}
                 */
                // @ts-ignore
                getValidateClientProvidedNewSessionId(): boolean
                /**
                 * If enabled, requests for a web application context root will be
                 * redirected (adding a trailing slash) by the Mapper. This is more
                 * efficient but has the side effect of confirming that the context path is
                 * valid.
                 * @param mapperContextRootRedirectEnabled Should the redirects be enabled?
                 */
                // @ts-ignore
                setMapperContextRootRedirectEnabled(mapperContextRootRedirectEnabled: boolean): void
                /**
                 * Determines if requests for a web application context root will be
                 * redirected (adding a trailing slash) by the Mapper. This is more
                 * efficient but has the side effect of confirming that the context path is
                 * valid.
                 * @return {#code true} if the Mapper level redirect is enabled for this
                 *          Context.
                 */
                // @ts-ignore
                getMapperContextRootRedirectEnabled(): boolean
                /**
                 * If enabled, requests for a directory will be redirected (adding a
                 * trailing slash) by the Mapper. This is more efficient but has the
                 * side effect of confirming that the directory is valid.
                 * @param mapperDirectoryRedirectEnabled Should the redirects be enabled?
                 */
                // @ts-ignore
                setMapperDirectoryRedirectEnabled(mapperDirectoryRedirectEnabled: boolean): void
                /**
                 * Determines if requests for a directory will be redirected (adding a
                 * trailing slash) by the Mapper. This is more efficient but has the
                 * side effect of confirming that the directory is valid.
                 * @return {#code true} if the Mapper level redirect is enabled for this
                 *          Context.
                 */
                // @ts-ignore
                getMapperDirectoryRedirectEnabled(): boolean
                /**
                 * Controls whether HTTP 1.1 and later location headers generated by a call
                 * to {@link javax.servlet.http.HttpServletResponse#sendRedirect(String)}
                 * will use relative or absolute redirects.
                 * <p>
                 * Relative redirects are more efficient but may not work with reverse
                 * proxies that change the context path. It should be noted that it is not
                 * recommended to use a reverse proxy to change the context path because of
                 * the multiple issues it creates.
                 * <p>
                 * Absolute redirects should work with reverse proxies that change the
                 * context path but may cause issues with the
                 * {@link org.apache.catalina.filters.RemoteIpFilter} if the filter is
                 * changing the scheme and/or port.
                 * @param useRelativeRedirects {#code true} to use relative redirects and
                 *                              {@code false} to use absolute redirects
                 */
                // @ts-ignore
                setUseRelativeRedirects(useRelativeRedirects: boolean): void
                /**
                 * Will HTTP 1.1 and later location headers generated by a call to
                 * {@link javax.servlet.http.HttpServletResponse#sendRedirect(String)} use
                 * relative or absolute redirects.
                 * @return {#code true} if relative redirects will be used {@code false} if
                 *          absolute redirects are used.
                 * @see #setUseRelativeRedirects(boolean)
                 */
                // @ts-ignore
                getUseRelativeRedirects(): boolean
                /**
                 * Are paths used in calls to obtain a request dispatcher expected to be
                 * encoded? This affects both how Tomcat handles calls to obtain a request
                 * dispatcher as well as how Tomcat generates paths used to obtain request
                 * dispatchers internally.
                 * @param dispatchersUseEncodedPaths {#code true} to use encoded paths,
                 *         otherwise {@code false}
                 */
                // @ts-ignore
                setDispatchersUseEncodedPaths(dispatchersUseEncodedPaths: boolean): void
                /**
                 * Are paths used in calls to obtain a request dispatcher expected to be
                 * encoded? This applys to both how Tomcat handles calls to obtain a request
                 * dispatcher as well as how Tomcat generates paths used to obtain request
                 * dispatchers internally.
                 * @return {#code true} if encoded paths will be used, otherwise
                 *          {@code false}
                 */
                // @ts-ignore
                getDispatchersUseEncodedPaths(): boolean
                /**
                 * Set the default request body encoding for this web application.
                 * @param encoding The default encoding
                 */
                // @ts-ignore
                setRequestCharacterEncoding(encoding: java.lang.String | string): void
                /**
                 * Get the default request body encoding for this web application.
                 * @return The default request body encoding
                 */
                // @ts-ignore
                getRequestCharacterEncoding(): string
                /**
                 * Set the default response body encoding for this web application.
                 * @param encoding The default encoding
                 */
                // @ts-ignore
                setResponseCharacterEncoding(encoding: java.lang.String | string): void
                /**
                 * Get the default response body encoding for this web application.
                 * @return The default response body encoding
                 */
                // @ts-ignore
                getResponseCharacterEncoding(): string
                /**
                 * Configure if, when returning a context path from {@link
                 * javax.servlet.http.HttpServletRequest#getContextPath()}, the return value
                 * is allowed to contain multiple leading '/' characters.
                 * @param allowMultipleLeadingForwardSlashInPath The new value for the flag
                 */
                // @ts-ignore
                setAllowMultipleLeadingForwardSlashInPath(allowMultipleLeadingForwardSlashInPath: boolean): void
                /**
                 * When returning a context path from {@link
                 * javax.servlet.http.HttpServletRequest#getContextPath()}, is it allowed to
                 * contain multiple leading '/' characters?
                 * @return <code>true</code> if multiple leading '/' characters are allowed,
                 *          otherwise <code>false</code>
                 */
                // @ts-ignore
                getAllowMultipleLeadingForwardSlashInPath(): boolean
                // @ts-ignore
                incrementInProgressAsyncCount(): void
                // @ts-ignore
                decrementInProgressAsyncCount(): void
            }
        }
    }
}
