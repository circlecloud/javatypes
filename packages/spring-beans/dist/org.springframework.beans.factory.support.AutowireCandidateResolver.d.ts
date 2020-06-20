declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace support {
                    /**
                     * Strategy interface for determining whether a specific bean definition
                     * qualifies as an autowire candidate for a specific dependency.
                     * @author Juergen Hoeller
                     * @author Mark Fisher
                     * @since 2.5
                     */
                    // @ts-ignore
                    interface AutowireCandidateResolver {
                        /**
                         * Determine whether the given bean definition qualifies as an
                         * autowire candidate for the given dependency.
                         * <p>The default implementation checks
                         * {@link org.springframework.beans.factory.config.BeanDefinition#isAutowireCandidate()}.
                         * @param bdHolder the bean definition including bean name and aliases
                         * @param descriptor the descriptor for the target method parameter or field
                         * @return whether the bean definition qualifies as autowire candidate
                         * @see org.springframework.beans.factory.config.BeanDefinition#isAutowireCandidate()
                         */
                        // @ts-ignore
                        isAutowireCandidate(bdHolder: org.springframework.beans.factory.config.BeanDefinitionHolder, descriptor: org.springframework.beans.factory.config.DependencyDescriptor): boolean
                        /**
                         * Determine whether the given descriptor is effectively required.
                         * <p>The default implementation checks {@link DependencyDescriptor#isRequired()}.
                         * @param descriptor the descriptor for the target method parameter or field
                         * @return whether the descriptor is marked as required or possibly indicating
                         *  non-required status some other way (e.g. through a parameter annotation)
                         * @since 5.0
                         * @see DependencyDescriptor#isRequired()
                         */
                        // @ts-ignore
                        isRequired(descriptor: org.springframework.beans.factory.config.DependencyDescriptor): boolean
                        /**
                         * Determine whether the given descriptor declares a qualifier beyond the type
                         * (typically - but not necessarily - a specific kind of annotation).
                         * <p>The default implementation returns {@code false}.
                         * @param descriptor the descriptor for the target method parameter or field
                         * @return whether the descriptor declares a qualifier, narrowing the candidate
                         *  status beyond the type match
                         * @since 5.1
                         * @see org.springframework.beans.factory.annotation.QualifierAnnotationAutowireCandidateResolver#hasQualifier
                         */
                        // @ts-ignore
                        hasQualifier(descriptor: org.springframework.beans.factory.config.DependencyDescriptor): boolean
                        /**
                         * Determine whether a default value is suggested for the given dependency.
                         * <p>The default implementation simply returns {@code null}.
                         * @param descriptor the descriptor for the target method parameter or field
                         * @return the value suggested (typically an expression String),
                         *  or {#code null} if none found
                         * @since 3.0
                         */
                        // @ts-ignore
                        getSuggestedValue(descriptor: org.springframework.beans.factory.config.DependencyDescriptor): java.lang.Object
                        /**
                         * Build a proxy for lazy resolution of the actual dependency target,
                         * if demanded by the injection point.
                         * <p>The default implementation simply returns {@code null}.
                         * @param descriptor the descriptor for the target method parameter or field
                         * @param beanName the name of the bean that contains the injection point
                         * @return the lazy resolution proxy for the actual dependency target,
                         *  or {#code null} if straight resolution is to be performed
                         * @since 4.0
                         */
                        // @ts-ignore
                        getLazyResolutionProxyIfNecessary(descriptor: org.springframework.beans.factory.config.DependencyDescriptor, beanName: string): java.lang.Object
                    }
                }
            }
        }
    }
}
