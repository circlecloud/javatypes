declare namespace org {
    namespace apache {
        namespace catalina {
            namespace startup {
                /**
                 * Logs version information on startup.
                 */
                // @ts-ignore
                class VersionLoggerListener extends java.lang.Object implements org.apache.catalina.LifecycleListener {
                    // @ts-ignore
                    constructor()
                    /**
                     * The string manager for this package.
                     */
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    // @ts-ignore
                    public getLogArgs(): boolean
                    // @ts-ignore
                    public setLogArgs(logArgs: boolean): void
                    // @ts-ignore
                    public getLogEnv(): boolean
                    // @ts-ignore
                    public setLogEnv(logEnv: boolean): void
                    // @ts-ignore
                    public getLogProps(): boolean
                    // @ts-ignore
                    public setLogProps(logProps: boolean): void
                    // @ts-ignore
                    public lifecycleEvent(event: org.apache.catalina.LifecycleEvent): void
                }
            }
        }
    }
}
