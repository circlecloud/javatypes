declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace export$ {
                namespace naming {
                    /**
                     * An implementation of the {@link ObjectNamingStrategy} interface
                     * that reads the {@code ObjectName} from the source-level metadata.
                     * Falls back to the bean key (bean name) if no {@code ObjectName}
                     * can be found in source-level metadata.
                     * <p>Uses the {@link JmxAttributeSource} strategy interface, so that
                     * metadata can be read using any supported implementation. Out of the box,
                     * {@link org.springframework.jmx.export.annotation.AnnotationJmxAttributeSource}
                     * introspects a well-defined set of Java 5 annotations that come with Spring.
                     * @author Rob Harrop
                     * @author Juergen Hoeller
                     * @since 1.2
                     * @see ObjectNamingStrategy
                     * @see org.springframework.jmx.export.annotation.AnnotationJmxAttributeSource
                     */
                    // @ts-ignore
                    class MetadataNamingStrategy extends java.lang.Object implements org.springframework.jmx.export.naming.ObjectNamingStrategy {
                        /**
                         * Create a new {@code MetadataNamingStrategy} which needs to be
                         * configured through the {@link #setAttributeSource} method.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a new {@code MetadataNamingStrategy} for the given
                         * {@code JmxAttributeSource}.
                         * @param attributeSource the JmxAttributeSource to use
                         */
                        // @ts-ignore
                        constructor(attributeSource: org.springframework.jmx.export.metadata.JmxAttributeSource)
                        /**
                         * Set the implementation of the {@code JmxAttributeSource} interface to use
                         * when reading the source-level metadata.
                         */
                        // @ts-ignore
                        setAttributeSource(attributeSource: org.springframework.jmx.export.metadata.JmxAttributeSource): void
                        /**
                         * Specify the default domain to be used for generating ObjectNames
                         * when no source-level metadata has been specified.
                         * <p>The default is to use the domain specified in the bean name
                         * (if the bean name follows the JMX ObjectName syntax); else,
                         * the package name of the managed bean class.
                         */
                        // @ts-ignore
                        setDefaultDomain(defaultDomain: string): void
                        // @ts-ignore
                        afterPropertiesSet(): void
                        /**
                         * Reads the {@code ObjectName} from the source-level metadata associated
                         * with the managed resource's {@code Class}.
                         */
                        // @ts-ignore
                        getObjectName(managedBean: any, beanKey: string): javax.management.ObjectName
                    }
                }
            }
        }
    }
}
