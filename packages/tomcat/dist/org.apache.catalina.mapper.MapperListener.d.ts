declare namespace org {
    namespace apache {
        namespace catalina {
            namespace mapper {
                /**
                 * Mapper listener.
                 * @author Remy Maucherat
                 * @author Costin Manolache
                 */
                // @ts-ignore
                class MapperListener extends org.apache.catalina.util.LifecycleMBeanBase implements org.apache.catalina.ContainerListener, org.apache.catalina.LifecycleListener {
                    /**
                     * Create mapper listener.
                     * @param service The service this listener is associated with
                     */
                    // @ts-ignore
                    constructor(service: org.apache.catalina.Service)
                    // @ts-ignore
                    public startInternal(): void
                    // @ts-ignore
                    public stopInternal(): void
                    // @ts-ignore
                    getDomainInternal(): string
                    // @ts-ignore
                    getObjectNameKeyProperties(): string
                    // @ts-ignore
                    public containerEvent(event: org.apache.catalina.ContainerEvent): void
                    // @ts-ignore
                    public lifecycleEvent(event: org.apache.catalina.LifecycleEvent): void
                }
            }
        }
    }
}
