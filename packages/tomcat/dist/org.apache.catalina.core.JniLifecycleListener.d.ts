declare namespace org {
    namespace apache {
        namespace catalina {
            namespace core {
                /**
                 * An implementation of LifeCycleListener that loads a native library into the JVM.
                 * <p>
                 * Native libraries are associated with the class loader of the class that loaded them,
                 * and the same library may not be loaded by more than one class loader. Due to that
                 * restriction, loading a native library from a Webapp's class loader makes it impossible
                 * for other Webapps to load the native library.
                 * <p>
                 * Loading the native library using this listener solves the issue as it is loaded
                 * by a shared class loader (typically the Common class loader, but may vary in some
                 * configurations).
                 */
                // @ts-ignore
                class JniLifecycleListener extends java.lang.Object implements org.apache.catalina.LifecycleListener {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    // @ts-ignore
                    public lifecycleEvent(event: org.apache.catalina.LifecycleEvent): void
                    // @ts-ignore
                    public setLibraryName(libraryName: java.lang.String | string): void
                    // @ts-ignore
                    public getLibraryName(): string
                    // @ts-ignore
                    public setLibraryPath(libraryPath: java.lang.String | string): void
                    // @ts-ignore
                    public getLibraryPath(): string
                }
            }
        }
    }
}
