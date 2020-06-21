declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace export$ {
                namespace annotation {
                    /**
                     * Convenient subclass of Spring's standard {@link MBeanExporter},
                     * activating Java 5 annotation usage for JMX exposure of Spring beans:
                     * {@link ManagedResource}, {@link ManagedAttribute}, {@link ManagedOperation}, etc.
                     * <p>Sets a {@link MetadataNamingStrategy} and a {@link MetadataMBeanInfoAssembler}
                     * with an {@link AnnotationJmxAttributeSource}, and activates the
                     * {@link #AUTODETECT_ALL} mode by default.
                     * @author Juergen Hoeller
                     * @since 2.5
                     */
                    // @ts-ignore
                    class AnnotationMBeanExporter extends org.springframework.jmx.export.MBeanExporter {
                        // @ts-ignore
                        constructor()
                        /**
                         * Specify the default domain to be used for generating ObjectNames
                         * when no source-level metadata has been specified.
                         * <p>The default is to use the domain specified in the bean name
                         * (if the bean name follows the JMX ObjectName syntax); else,
                         * the package name of the managed bean class.
                         * @see MetadataNamingStrategy#setDefaultDomain
                         */
                        // @ts-ignore
                        public setDefaultDomain(defaultDomain: java.lang.String | string): void
                        // @ts-ignore
                        public setBeanFactory(beanFactory: BeanFactory): void
                    }
                }
            }
        }
    }
}
