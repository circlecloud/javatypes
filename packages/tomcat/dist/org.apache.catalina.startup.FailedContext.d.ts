declare namespace org {
    namespace apache {
        namespace catalina {
            namespace startup {
                /**
                 * An implementation of {@link Context} that is used as a place-holder for
                 * deployed applications when their deployment fails and a Context instance
                 * (usually {@link org.apache.catalina.core.StandardContext} but may be any
                 * Context implementation) cannot be created.
                 */
                // @ts-ignore
                class FailedContext extends org.apache.catalina.util.LifecycleMBeanBase implements org.apache.catalina.Context {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    // @ts-ignore
                    public getConfigFile(): java.net.URL
                    // @ts-ignore
                    public setConfigFile(configFile: java.net.URL): void
                    // @ts-ignore
                    public getDocBase(): string
                    // @ts-ignore
                    public setDocBase(docBase: java.lang.String | string): void
                    // @ts-ignore
                    public getName(): string
                    // @ts-ignore
                    public setName(name: java.lang.String | string): void
                    // @ts-ignore
                    public getParent(): org.apache.catalina.Container
                    // @ts-ignore
                    public setParent(parent: org.apache.catalina.Container): void
                    // @ts-ignore
                    public getPath(): string
                    // @ts-ignore
                    public setPath(path: java.lang.String | string): void
                    // @ts-ignore
                    public getWebappVersion(): string
                    // @ts-ignore
                    public setWebappVersion(webappVersion: java.lang.String | string): void
                    // @ts-ignore
                    getDomainInternal(): string
                    // @ts-ignore
                    public getMBeanKeyProperties(): string
                    // @ts-ignore
                    getObjectNameKeyProperties(): string
                    // @ts-ignore
                    startInternal(): void
                    // @ts-ignore
                    stopInternal(): void
                    // @ts-ignore
                    public addWatchedResource(name: java.lang.String | string): void
                    // @ts-ignore
                    public findWatchedResources(): string[]
                    // @ts-ignore
                    public removeWatchedResource(name: java.lang.String | string): void
                    // @ts-ignore
                    public addChild(child: org.apache.catalina.Container): void
                    // @ts-ignore
                    public findChild(name: java.lang.String | string): org.apache.catalina.Container
                    // @ts-ignore
                    public findChildren(): org.apache.catalina.Container[]
                    // @ts-ignore
                    public removeChild(child: org.apache.catalina.Container): void
                    // @ts-ignore
                    public toString(): string
                    // @ts-ignore
                    public getLoader(): org.apache.catalina.Loader
                    // @ts-ignore
                    public setLoader(loader: org.apache.catalina.Loader): void
                    // @ts-ignore
                    public getLogger(): org.apache.juli.logging.Log
                    // @ts-ignore
                    public getLogName(): string
                    // @ts-ignore
                    public getManager(): org.apache.catalina.Manager
                    // @ts-ignore
                    public setManager(manager: org.apache.catalina.Manager): void
                    // @ts-ignore
                    public getPipeline(): org.apache.catalina.Pipeline
                    // @ts-ignore
                    public getCluster(): org.apache.catalina.Cluster
                    // @ts-ignore
                    public setCluster(cluster: org.apache.catalina.Cluster): void
                    // @ts-ignore
                    public getBackgroundProcessorDelay(): number /*int*/
                    // @ts-ignore
                    public setBackgroundProcessorDelay(delay: number /*int*/): void
                    // @ts-ignore
                    public getParentClassLoader(): java.lang.ClassLoader
                    // @ts-ignore
                    public setParentClassLoader(parent: java.lang.ClassLoader): void
                    // @ts-ignore
                    public getRealm(): org.apache.catalina.Realm
                    // @ts-ignore
                    public setRealm(realm: org.apache.catalina.Realm): void
                    // @ts-ignore
                    public getResources(): org.apache.catalina.WebResourceRoot
                    // @ts-ignore
                    public setResources(resources: org.apache.catalina.WebResourceRoot): void
                    // @ts-ignore
                    public backgroundProcess(): void
                    // @ts-ignore
                    public addContainerListener(listener: org.apache.catalina.ContainerListener): void
                    // @ts-ignore
                    public findContainerListeners(): org.apache.catalina.ContainerListener[]
                    // @ts-ignore
                    public removeContainerListener(listener: org.apache.catalina.ContainerListener): void
                    // @ts-ignore
                    public addPropertyChangeListener(listener: java.beans.PropertyChangeListener): void
                    // @ts-ignore
                    public removePropertyChangeListener(listener: java.beans.PropertyChangeListener): void
                    // @ts-ignore
                    public fireContainerEvent(type: java.lang.String | string, data: java.lang.Object | any): void
                    // @ts-ignore
                    public logAccess(request: org.apache.catalina.connector.Request, response: org.apache.catalina.connector.Response, time: number /*long*/, useDefault: boolean): void
                    // @ts-ignore
                    public getAccessLog(): org.apache.catalina.AccessLog
                    // @ts-ignore
                    public getStartStopThreads(): number /*int*/
                    // @ts-ignore
                    public setStartStopThreads(startStopThreads: number /*int*/): void
                    // @ts-ignore
                    public getAllowCasualMultipartParsing(): boolean
                    // @ts-ignore
                    public setAllowCasualMultipartParsing(allowCasualMultipartParsing: boolean): void
                    // @ts-ignore
                    public getApplicationEventListeners(): any[]
                    // @ts-ignore
                    public setApplicationEventListeners(listeners: java.lang.Object[] | any[]): void
                    // @ts-ignore
                    public getApplicationLifecycleListeners(): any[]
                    // @ts-ignore
                    public setApplicationLifecycleListeners(listeners: java.lang.Object[] | any[]): void
                    // @ts-ignore
                    public getCharset(locale: java.util.Locale): string
                    // @ts-ignore
                    public getConfigured(): boolean
                    // @ts-ignore
                    public setConfigured(configured: boolean): void
                    // @ts-ignore
                    public getCookies(): boolean
                    // @ts-ignore
                    public setCookies(cookies: boolean): void
                    // @ts-ignore
                    public getSessionCookieName(): string
                    // @ts-ignore
                    public setSessionCookieName(sessionCookieName: java.lang.String | string): void
                    // @ts-ignore
                    public getUseHttpOnly(): boolean
                    // @ts-ignore
                    public setUseHttpOnly(useHttpOnly: boolean): void
                    // @ts-ignore
                    public getSessionCookieDomain(): string
                    // @ts-ignore
                    public setSessionCookieDomain(sessionCookieDomain: java.lang.String | string): void
                    // @ts-ignore
                    public getSessionCookiePath(): string
                    // @ts-ignore
                    public setSessionCookiePath(sessionCookiePath: java.lang.String | string): void
                    // @ts-ignore
                    public getSessionCookiePathUsesTrailingSlash(): boolean
                    // @ts-ignore
                    public setSessionCookiePathUsesTrailingSlash(sessionCookiePathUsesTrailingSlash: boolean): void
                    // @ts-ignore
                    public getCrossContext(): boolean
                    // @ts-ignore
                    public setCrossContext(crossContext: boolean): void
                    // @ts-ignore
                    public getAltDDName(): string
                    // @ts-ignore
                    public setAltDDName(altDDName: java.lang.String | string): void
                    // @ts-ignore
                    public getDenyUncoveredHttpMethods(): boolean
                    // @ts-ignore
                    public setDenyUncoveredHttpMethods(denyUncoveredHttpMethods: boolean): void
                    // @ts-ignore
                    public getDisplayName(): string
                    // @ts-ignore
                    public setDisplayName(displayName: java.lang.String | string): void
                    // @ts-ignore
                    public getDistributable(): boolean
                    // @ts-ignore
                    public setDistributable(distributable: boolean): void
                    // @ts-ignore
                    public getEncodedPath(): string
                    // @ts-ignore
                    public getIgnoreAnnotations(): boolean
                    // @ts-ignore
                    public setIgnoreAnnotations(ignoreAnnotations: boolean): void
                    // @ts-ignore
                    public getLoginConfig(): org.apache.tomcat.util.descriptor.web.LoginConfig
                    // @ts-ignore
                    public setLoginConfig(config: org.apache.tomcat.util.descriptor.web.LoginConfig): void
                    // @ts-ignore
                    public getNamingResources(): org.apache.catalina.deploy.NamingResourcesImpl
                    // @ts-ignore
                    public setNamingResources(namingResources: org.apache.catalina.deploy.NamingResourcesImpl): void
                    // @ts-ignore
                    public getPublicId(): string
                    // @ts-ignore
                    public setPublicId(publicId: java.lang.String | string): void
                    // @ts-ignore
                    public getReloadable(): boolean
                    // @ts-ignore
                    public setReloadable(reloadable: boolean): void
                    // @ts-ignore
                    public getOverride(): boolean
                    // @ts-ignore
                    public setOverride(override: boolean): void
                    // @ts-ignore
                    public getPrivileged(): boolean
                    // @ts-ignore
                    public setPrivileged(privileged: boolean): void
                    // @ts-ignore
                    public getServletContext(): javax.servlet.ServletContext
                    // @ts-ignore
                    public getSessionTimeout(): number /*int*/
                    // @ts-ignore
                    public setSessionTimeout(timeout: number /*int*/): void
                    // @ts-ignore
                    public getSwallowAbortedUploads(): boolean
                    // @ts-ignore
                    public setSwallowAbortedUploads(swallowAbortedUploads: boolean): void
                    // @ts-ignore
                    public getSwallowOutput(): boolean
                    // @ts-ignore
                    public setSwallowOutput(swallowOutput: boolean): void
                    // @ts-ignore
                    public getWrapperClass(): string
                    // @ts-ignore
                    public setWrapperClass(wrapperClass: java.lang.String | string): void
                    // @ts-ignore
                    public getXmlNamespaceAware(): boolean
                    // @ts-ignore
                    public setXmlNamespaceAware(xmlNamespaceAware: boolean): void
                    // @ts-ignore
                    public getXmlValidation(): boolean
                    // @ts-ignore
                    public setXmlValidation(xmlValidation: boolean): void
                    // @ts-ignore
                    public getXmlBlockExternal(): boolean
                    // @ts-ignore
                    public setXmlBlockExternal(xmlBlockExternal: boolean): void
                    // @ts-ignore
                    public getTldValidation(): boolean
                    // @ts-ignore
                    public setTldValidation(tldValidation: boolean): void
                    // @ts-ignore
                    public getJarScanner(): org.apache.tomcat.JarScanner
                    // @ts-ignore
                    public setJarScanner(jarScanner: org.apache.tomcat.JarScanner): void
                    // @ts-ignore
                    public getAuthenticator(): org.apache.catalina.Authenticator
                    // @ts-ignore
                    public setLogEffectiveWebXml(logEffectiveWebXml: boolean): void
                    // @ts-ignore
                    public getLogEffectiveWebXml(): boolean
                    // @ts-ignore
                    public addApplicationListener(listener: java.lang.String | string): void
                    // @ts-ignore
                    public findApplicationListeners(): string[]
                    // @ts-ignore
                    public removeApplicationListener(listener: java.lang.String | string): void
                    // @ts-ignore
                    public addApplicationParameter(parameter: org.apache.tomcat.util.descriptor.web.ApplicationParameter): void
                    // @ts-ignore
                    public findApplicationParameters(): org.apache.tomcat.util.descriptor.web.ApplicationParameter[]
                    // @ts-ignore
                    public removeApplicationParameter(name: java.lang.String | string): void
                    // @ts-ignore
                    public addConstraint(constraint: org.apache.tomcat.util.descriptor.web.SecurityConstraint): void
                    // @ts-ignore
                    public findConstraints(): org.apache.tomcat.util.descriptor.web.SecurityConstraint[]
                    // @ts-ignore
                    public removeConstraint(constraint: org.apache.tomcat.util.descriptor.web.SecurityConstraint): void
                    // @ts-ignore
                    public addErrorPage(errorPage: org.apache.tomcat.util.descriptor.web.ErrorPage): void
                    // @ts-ignore
                    public findErrorPage(errorCode: number /*int*/): org.apache.tomcat.util.descriptor.web.ErrorPage
                    // @ts-ignore
                    public findErrorPage(exceptionType: java.lang.String | string): org.apache.tomcat.util.descriptor.web.ErrorPage
                    // @ts-ignore
                    public findErrorPage(throwable: java.lang.Throwable | Error): org.apache.tomcat.util.descriptor.web.ErrorPage
                    // @ts-ignore
                    public findErrorPages(): org.apache.tomcat.util.descriptor.web.ErrorPage[]
                    // @ts-ignore
                    public removeErrorPage(errorPage: org.apache.tomcat.util.descriptor.web.ErrorPage): void
                    // @ts-ignore
                    public addFilterDef(filterDef: org.apache.tomcat.util.descriptor.web.FilterDef): void
                    // @ts-ignore
                    public findFilterDef(filterName: java.lang.String | string): org.apache.tomcat.util.descriptor.web.FilterDef
                    // @ts-ignore
                    public findFilterDefs(): org.apache.tomcat.util.descriptor.web.FilterDef[]
                    // @ts-ignore
                    public removeFilterDef(filterDef: org.apache.tomcat.util.descriptor.web.FilterDef): void
                    // @ts-ignore
                    public addFilterMap(filterMap: org.apache.tomcat.util.descriptor.web.FilterMap): void
                    // @ts-ignore
                    public addFilterMapBefore(filterMap: org.apache.tomcat.util.descriptor.web.FilterMap): void
                    // @ts-ignore
                    public findFilterMaps(): org.apache.tomcat.util.descriptor.web.FilterMap[]
                    // @ts-ignore
                    public removeFilterMap(filterMap: org.apache.tomcat.util.descriptor.web.FilterMap): void
                    // @ts-ignore
                    public addLocaleEncodingMappingParameter(locale: java.lang.String | string, encoding: java.lang.String | string): void
                    // @ts-ignore
                    public addMimeMapping(extension: java.lang.String | string, mimeType: java.lang.String | string): void
                    // @ts-ignore
                    public findMimeMapping(extension: java.lang.String | string): string
                    // @ts-ignore
                    public findMimeMappings(): string[]
                    // @ts-ignore
                    public removeMimeMapping(extension: java.lang.String | string): void
                    // @ts-ignore
                    public addParameter(name: java.lang.String | string, value: java.lang.String | string): void
                    // @ts-ignore
                    public findParameter(name: java.lang.String | string): string
                    // @ts-ignore
                    public findParameters(): string[]
                    // @ts-ignore
                    public removeParameter(name: java.lang.String | string): void
                    // @ts-ignore
                    public addRoleMapping(role: java.lang.String | string, link: java.lang.String | string): void
                    // @ts-ignore
                    public findRoleMapping(role: java.lang.String | string): string
                    // @ts-ignore
                    public removeRoleMapping(role: java.lang.String | string): void
                    // @ts-ignore
                    public addSecurityRole(role: java.lang.String | string): void
                    // @ts-ignore
                    public findSecurityRole(role: java.lang.String | string): boolean
                    // @ts-ignore
                    public findSecurityRoles(): string[]
                    // @ts-ignore
                    public removeSecurityRole(role: java.lang.String | string): void
                    // @ts-ignore
                    public addServletMappingDecoded(pattern: java.lang.String | string, name: java.lang.String | string, jspWildcard: boolean): void
                    // @ts-ignore
                    public findServletMapping(pattern: java.lang.String | string): string
                    // @ts-ignore
                    public findServletMappings(): string[]
                    // @ts-ignore
                    public removeServletMapping(pattern: java.lang.String | string): void
                    // @ts-ignore
                    public addWelcomeFile(name: java.lang.String | string): void
                    // @ts-ignore
                    public findWelcomeFile(name: java.lang.String | string): boolean
                    // @ts-ignore
                    public findWelcomeFiles(): string[]
                    // @ts-ignore
                    public removeWelcomeFile(name: java.lang.String | string): void
                    // @ts-ignore
                    public addWrapperLifecycle(listener: java.lang.String | string): void
                    // @ts-ignore
                    public findWrapperLifecycles(): string[]
                    // @ts-ignore
                    public removeWrapperLifecycle(listener: java.lang.String | string): void
                    // @ts-ignore
                    public addWrapperListener(listener: java.lang.String | string): void
                    // @ts-ignore
                    public findWrapperListeners(): string[]
                    // @ts-ignore
                    public removeWrapperListener(listener: java.lang.String | string): void
                    // @ts-ignore
                    public createWrapper(): org.apache.catalina.Wrapper
                    // @ts-ignore
                    public findStatusPage(status: number /*int*/): string
                    // @ts-ignore
                    public findStatusPages(): number /*int*/[]
                    // @ts-ignore
                    public fireRequestInitEvent(request: javax.servlet.ServletRequest): boolean
                    // @ts-ignore
                    public fireRequestDestroyEvent(request: javax.servlet.ServletRequest): boolean
                    // @ts-ignore
                    public reload(): void
                    // @ts-ignore
                    public getRealPath(path: java.lang.String | string): string
                    // @ts-ignore
                    public getEffectiveMajorVersion(): number /*int*/
                    // @ts-ignore
                    public setEffectiveMajorVersion(major: number /*int*/): void
                    // @ts-ignore
                    public getEffectiveMinorVersion(): number /*int*/
                    // @ts-ignore
                    public setEffectiveMinorVersion(minor: number /*int*/): void
                    // @ts-ignore
                    public getJspConfigDescriptor(): javax.servlet.descriptor.JspConfigDescriptor
                    // @ts-ignore
                    public setJspConfigDescriptor(descriptor: javax.servlet.descriptor.JspConfigDescriptor): void
                    // @ts-ignore
                    public addServletContainerInitializer(sci: javax.servlet.ServletContainerInitializer, classes: java.util.Set<java.lang.Class<any>> | Array<java.lang.Class<any>>): void
                    // @ts-ignore
                    public getPaused(): boolean
                    // @ts-ignore
                    public isServlet22(): boolean
                    // @ts-ignore
                    public addServletSecurity(registration: javax.servlet.ServletRegistration.Dynamic, servletSecurityElement: javax.servlet.ServletSecurityElement): Array<java.lang.String | string>
                    // @ts-ignore
                    public setResourceOnlyServlets(resourceOnlyServlets: java.lang.String | string): void
                    // @ts-ignore
                    public getResourceOnlyServlets(): string
                    // @ts-ignore
                    public isResourceOnlyServlet(servletName: java.lang.String | string): boolean
                    // @ts-ignore
                    public getBaseName(): string
                    // @ts-ignore
                    public setFireRequestListenersOnForwards(enable: boolean): void
                    // @ts-ignore
                    public getFireRequestListenersOnForwards(): boolean
                    // @ts-ignore
                    public setPreemptiveAuthentication(enable: boolean): void
                    // @ts-ignore
                    public getPreemptiveAuthentication(): boolean
                    // @ts-ignore
                    public setSendRedirectBody(enable: boolean): void
                    // @ts-ignore
                    public getSendRedirectBody(): boolean
                    // @ts-ignore
                    public addValve(valve: org.apache.catalina.Valve): void
                    // @ts-ignore
                    public getCatalinaBase(): java.io.File
                    // @ts-ignore
                    public getCatalinaHome(): java.io.File
                    // @ts-ignore
                    public setAddWebinfClassesResources(addWebinfClassesResources: boolean): void
                    // @ts-ignore
                    public getAddWebinfClassesResources(): boolean
                    // @ts-ignore
                    public addPostConstructMethod(clazz: java.lang.String | string, method: java.lang.String | string): void
                    // @ts-ignore
                    public addPreDestroyMethod(clazz: java.lang.String | string, method: java.lang.String | string): void
                    // @ts-ignore
                    public removePostConstructMethod(clazz: java.lang.String | string): void
                    // @ts-ignore
                    public removePreDestroyMethod(clazz: java.lang.String | string): void
                    // @ts-ignore
                    public findPostConstructMethod(clazz: java.lang.String | string): string
                    // @ts-ignore
                    public findPreDestroyMethod(clazz: java.lang.String | string): string
                    // @ts-ignore
                    public findPostConstructMethods(): java.util.Map<java.lang.String | string, java.lang.String | string>
                    // @ts-ignore
                    public findPreDestroyMethods(): java.util.Map<java.lang.String | string, java.lang.String | string>
                    // @ts-ignore
                    public getInstanceManager(): org.apache.tomcat.InstanceManager
                    // @ts-ignore
                    public setInstanceManager(instanceManager: org.apache.tomcat.InstanceManager): void
                    // @ts-ignore
                    public setContainerSciFilter(containerSciFilter: java.lang.String | string): void
                    // @ts-ignore
                    public getContainerSciFilter(): string
                    // @ts-ignore
                    public getThreadBindingListener(): org.apache.catalina.ThreadBindingListener
                    // @ts-ignore
                    public setThreadBindingListener(threadBindingListener: org.apache.catalina.ThreadBindingListener): void
                    // @ts-ignore
                    public bind(usePrivilegedAction: boolean, originalClassLoader: java.lang.ClassLoader): java.lang.ClassLoader
                    // @ts-ignore
                    public unbind(usePrivilegedAction: boolean, originalClassLoader: java.lang.ClassLoader): void
                    // @ts-ignore
                    public getNamingToken(): any
                    // @ts-ignore
                    public setCookieProcessor(cookieProcessor: org.apache.tomcat.util.http.CookieProcessor): void
                    // @ts-ignore
                    public getCookieProcessor(): org.apache.tomcat.util.http.CookieProcessor
                    // @ts-ignore
                    public setValidateClientProvidedNewSessionId(validateClientProvidedNewSessionId: boolean): void
                    // @ts-ignore
                    public getValidateClientProvidedNewSessionId(): boolean
                    // @ts-ignore
                    public setMapperContextRootRedirectEnabled(mapperContextRootRedirectEnabled: boolean): void
                    // @ts-ignore
                    public getMapperContextRootRedirectEnabled(): boolean
                    // @ts-ignore
                    public setMapperDirectoryRedirectEnabled(mapperDirectoryRedirectEnabled: boolean): void
                    // @ts-ignore
                    public getMapperDirectoryRedirectEnabled(): boolean
                    // @ts-ignore
                    public setUseRelativeRedirects(useRelativeRedirects: boolean): void
                    // @ts-ignore
                    public getUseRelativeRedirects(): boolean
                    // @ts-ignore
                    public setDispatchersUseEncodedPaths(dispatchersUseEncodedPaths: boolean): void
                    // @ts-ignore
                    public getDispatchersUseEncodedPaths(): boolean
                    // @ts-ignore
                    public setRequestCharacterEncoding(encoding: java.lang.String | string): void
                    // @ts-ignore
                    public getRequestCharacterEncoding(): string
                    // @ts-ignore
                    public setResponseCharacterEncoding(encoding: java.lang.String | string): void
                    // @ts-ignore
                    public getResponseCharacterEncoding(): string
                    // @ts-ignore
                    public setAllowMultipleLeadingForwardSlashInPath(allowMultipleLeadingForwardSlashInPath: boolean): void
                    // @ts-ignore
                    public getAllowMultipleLeadingForwardSlashInPath(): boolean
                    // @ts-ignore
                    public incrementInProgressAsyncCount(): void
                    // @ts-ignore
                    public decrementInProgressAsyncCount(): void
                }
            }
        }
    }
}
