declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace export$ {
                namespace annotation {
                    /**
                     * Class-level annotation that indicates to register instances of a class
                     * with a JMX server, corresponding to the {@code ManagedResource} attribute.
                     * <p><b>Note:</b> This annotation is marked as inherited, allowing for generic
                     * management-aware base classes. In such a scenario, it is recommended to
                     * <i>not</i> specify an object name value since this would lead to naming
                     * collisions in case of multiple subclasses getting registered.
                     * @author Rob Harrop
                     * @author Juergen Hoeller
                     * @author Sam Brannen
                     * @since 1.2
                     * @see org.springframework.jmx.export.metadata.ManagedResource
                     */
                    // @ts-ignore
                    class ManagedResource implements java.lang.annotation.Annotation {
                    }
                }
            }
        }
    }
}
