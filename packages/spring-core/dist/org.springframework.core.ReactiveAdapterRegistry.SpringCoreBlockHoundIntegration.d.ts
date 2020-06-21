declare namespace org {
    namespace springframework {
        namespace core {
            namespace ReactiveAdapterRegistry {
                /**
                 * {@code BlockHoundIntegration} for spring-core classes.
                 * <p>Whitelists the following:
                 * <ul>
                 * <li>Reading class info via {@link LocalVariableTableParameterNameDiscoverer}.
                 * <li>Locking within {@link ConcurrentReferenceHashMap}.
                 * </ul>
                 * @since 5.2.4
                 */
                // @ts-ignore
                class SpringCoreBlockHoundIntegration extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public applyTo(builder: BlockHound.Builder): void
                }
            }
        }
    }
}
