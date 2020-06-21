declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace support {
                    /**
                     * {@link AutowireCandidateResolver} implementation to use when no annotation
                     * support is available. This implementation checks the bean definition only.
                     * @author Mark Fisher
                     * @author Juergen Hoeller
                     * @since 2.5
                     */
                    // @ts-ignore
                    class SimpleAutowireCandidateResolver extends java.lang.Object implements org.springframework.beans.factory.support.AutowireCandidateResolver {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public isAutowireCandidate(bdHolder: org.springframework.beans.factory.config.BeanDefinitionHolder, descriptor: org.springframework.beans.factory.config.DependencyDescriptor): boolean
                        // @ts-ignore
                        public isRequired(descriptor: org.springframework.beans.factory.config.DependencyDescriptor): boolean
                        // @ts-ignore
                        public getSuggestedValue(descriptor: org.springframework.beans.factory.config.DependencyDescriptor): any
                        // @ts-ignore
                        public getLazyResolutionProxyIfNecessary(descriptor: org.springframework.beans.factory.config.DependencyDescriptor, beanName: java.lang.String | string): any
                    }
                }
            }
        }
    }
}
