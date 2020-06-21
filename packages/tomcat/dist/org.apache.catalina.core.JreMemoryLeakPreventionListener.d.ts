declare namespace org {
    namespace apache {
        namespace catalina {
            namespace core {
                /**
                 * Provide a workaround for known places where the Java Runtime environment can
                 * cause a memory leak or lock files.
                 * <p>
                 * Memory leaks occur when JRE code uses
                 * the context class loader to load a singleton as this will cause a memory leak
                 * if a web application class loader happens to be the context class loader at
                 * the time. The work-around is to initialise these singletons when Tomcat's
                 * common class loader is the context class loader.
                 * <p>
                 * Locked files usually occur when a resource inside a JAR is accessed without
                 * first disabling Jar URL connection caching. The workaround is to disable this
                 * caching by default.
                 */
                // @ts-ignore
                class JreMemoryLeakPreventionListener extends java.lang.Object implements org.apache.catalina.LifecycleListener {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public isAppContextProtection(): boolean
                    // @ts-ignore
                    public setAppContextProtection(appContextProtection: boolean): void
                    // @ts-ignore
                    public isAWTThreadProtection(): boolean
                    // @ts-ignore
                    public setAWTThreadProtection(awtThreadProtection: boolean): void
                    // @ts-ignore
                    public isGcDaemonProtection(): boolean
                    // @ts-ignore
                    public setGcDaemonProtection(gcDaemonProtection: boolean): void
                    // @ts-ignore
                    public isTokenPollerProtection(): boolean
                    // @ts-ignore
                    public setTokenPollerProtection(tokenPollerProtection: boolean): void
                    // @ts-ignore
                    public isUrlCacheProtection(): boolean
                    // @ts-ignore
                    public setUrlCacheProtection(urlCacheProtection: boolean): void
                    // @ts-ignore
                    public isXmlParsingProtection(): boolean
                    // @ts-ignore
                    public setXmlParsingProtection(xmlParsingProtection: boolean): void
                    // @ts-ignore
                    public isLdapPoolProtection(): boolean
                    // @ts-ignore
                    public setLdapPoolProtection(ldapPoolProtection: boolean): void
                    // @ts-ignore
                    public isDriverManagerProtection(): boolean
                    // @ts-ignore
                    public setDriverManagerProtection(driverManagerProtection: boolean): void
                    // @ts-ignore
                    public getForkJoinCommonPoolProtection(): boolean
                    // @ts-ignore
                    public setForkJoinCommonPoolProtection(forkJoinCommonPoolProtection: boolean): void
                    // @ts-ignore
                    public getClassesToInitialize(): string
                    // @ts-ignore
                    public setClassesToInitialize(classesToInitialize: java.lang.String | string): void
                    // @ts-ignore
                    public lifecycleEvent(event: org.apache.catalina.LifecycleEvent): void
                }
            }
        }
    }
}
