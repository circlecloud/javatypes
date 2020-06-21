declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace support {
                    /**
                     * Basic {@link AutowireCandidateResolver} that performs a full generic type
                     * match with the candidate's type if the dependency is declared as a generic type
                     * (e.g. Repository&lt;Customer&gt;).
                     * <p>This is the base class for
                     * {@link org.springframework.beans.factory.annotation.QualifierAnnotationAutowireCandidateResolver},
                     * providing an implementation all non-annotation-based resolution steps at this level.
                     * @author Juergen Hoeller
                     * @since 4.0
                     */
                    // @ts-ignore
                    class GenericTypeAwareAutowireCandidateResolver extends org.springframework.beans.factory.support.SimpleAutowireCandidateResolver implements org.springframework.beans.factory.BeanFactoryAware {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public setBeanFactory(beanFactory: org.springframework.beans.factory.BeanFactory): void
                        // @ts-ignore
                        getBeanFactory(): org.springframework.beans.factory.BeanFactory
                        // @ts-ignore
                        public isAutowireCandidate(bdHolder: org.springframework.beans.factory.config.BeanDefinitionHolder, descriptor: org.springframework.beans.factory.config.DependencyDescriptor): boolean
                        /**
                         * Match the given dependency type with its generic type information against the given
                         * candidate bean definition.
                         */
                        // @ts-ignore
                        checkGenericTypeMatch(bdHolder: org.springframework.beans.factory.config.BeanDefinitionHolder, descriptor: org.springframework.beans.factory.config.DependencyDescriptor): boolean
                        // @ts-ignore
                        getResolvedDecoratedDefinition(rbd: org.springframework.beans.factory.support.RootBeanDefinition): org.springframework.beans.factory.support.RootBeanDefinition
                        // @ts-ignore
                        getReturnTypeForFactoryMethod(rbd: org.springframework.beans.factory.support.RootBeanDefinition, descriptor: org.springframework.beans.factory.config.DependencyDescriptor): ResolvableType
                    }
                }
            }
        }
    }
}
