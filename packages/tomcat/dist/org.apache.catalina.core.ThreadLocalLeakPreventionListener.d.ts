declare namespace org {
    namespace apache {
        namespace catalina {
            namespace core {
                /**
                 * <p>
                 * A {@link LifecycleListener} that triggers the renewal of threads in Executor
                 * pools when a {@link Context} is being stopped to avoid thread-local related
                 * memory leaks.
                 * </p>
                 * <p>
                 * Note : active threads will be renewed one by one when they come back to the
                 * pool after executing their task, see
                 * {@link org.apache.tomcat.util.threads.ThreadPoolExecutor}.afterExecute().
                 * </p>
                 * This listener must be declared in server.xml to be active.
                 */
                // @ts-ignore
                class ThreadLocalLeakPreventionListener extends java.lang.Object implements org.apache.catalina.LifecycleListener, org.apache.catalina.ContainerListener {
                    // @ts-ignore
                    constructor()
                    /**
                     * The string manager for this package.
                     */
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    /**
                     * Listens for {@link LifecycleEvent} for the start of the {@link Server} to
                     * initialize itself and then for after_stop events of each {@link Context}.
                     */
                    // @ts-ignore
                    public lifecycleEvent(event: org.apache.catalina.LifecycleEvent): void
                    // @ts-ignore
                    public containerEvent(event: org.apache.catalina.ContainerEvent): void
                    // @ts-ignore
                    processContainerAddChild(parent: org.apache.catalina.Container, child: org.apache.catalina.Container): void
                    // @ts-ignore
                    processContainerRemoveChild(parent: org.apache.catalina.Container, child: org.apache.catalina.Container): void
                }
            }
        }
    }
}
