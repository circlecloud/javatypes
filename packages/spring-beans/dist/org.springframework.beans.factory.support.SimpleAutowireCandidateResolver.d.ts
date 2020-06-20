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
                        isAutowireCandidate(bdHolder: org.springframework.beans.factory.config.BeanDefinitionHolder, descriptor: org.springframework.beans.factory.config.DependencyDescriptor): boolean
                        // @ts-ignore
                        isRequired(descriptor: org.springframework.beans.factory.config.DependencyDescriptor): boolean
                        // @ts-ignore
                        getSuggestedValue(descriptor: org.springframework.beans.factory.config.DependencyDescriptor): java.lang.Object
                        // @ts-ignore
                        getLazyResolutionProxyIfNecessary(descriptor: org.springframework.beans.factory.config.DependencyDescriptor, beanName: string): java.lang.Object
                    }
                }
            }
        }
    }
}
