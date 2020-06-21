declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace config {
                    /**
                     * Descriptor for a specific dependency that is about to be injected.
                     * Wraps a constructor parameter, a method parameter or a field,
                     * allowing unified access to their metadata.
                     * @author Juergen Hoeller
                     * @since 2.5
                     */
                    // @ts-ignore
                    class DependencyDescriptor extends org.springframework.beans.factory.InjectionPoint implements java.io.Serializable {
                        /**
                         * Create a new descriptor for a method or constructor parameter.
                         * Considers the dependency as 'eager'.
                         * @param methodParameter the MethodParameter to wrap
                         * @param required whether the dependency is required
                         */
                        // @ts-ignore
                        constructor(methodParameter: MethodParameter, required: boolean)
                        /**
                         * Create a new descriptor for a method or constructor parameter.
                         * @param methodParameter the MethodParameter to wrap
                         * @param required whether the dependency is required
                         * @param eager whether this dependency is 'eager' in the sense of
                         *  eagerly resolving potential target beans for type matching
                         */
                        // @ts-ignore
                        constructor(methodParameter: MethodParameter, required: boolean, eager: boolean)
                        /**
                         * Copy constructor.
                         * @param original the original descriptor to create a copy from
                         */
                        // @ts-ignore
                        constructor(original: org.springframework.beans.factory.config.DependencyDescriptor)
                        /**
                         * Return whether this dependency is required.
                         * <p>Optional semantics are derived from Java 8's {@link java.util.Optional},
                         * any variant of a parameter-level {@code Nullable} annotation (such as from
                         * JSR-305 or the FindBugs set of annotations), or a language-level nullable
                         * type declaration in Kotlin.
                         */
                        // @ts-ignore
                        public isRequired(): boolean
                        /**
                         * Return whether this dependency is 'eager' in the sense of
                         * eagerly resolving potential target beans for type matching.
                         */
                        // @ts-ignore
                        public isEager(): boolean
                        /**
                         * Resolve the specified not-unique scenario: by default,
                         * throwing a {@link NoUniqueBeanDefinitionException}.
                         * <p>Subclasses may override this to select one of the instances or
                         * to opt out with no result at all through returning {@code null}.
                         * @param type the requested bean type
                         * @param matchingBeans a map of bean names and corresponding bean
                         *  instances which have been pre-selected for the given type
                         *  (qualifiers etc already applied)
                         * @return a bean instance to proceed with, or {#code null} for none
                         * @throws BeansException in case of the not-unique scenario being fatal
                         * @since 5.1
                         */
                        // @ts-ignore
                        public resolveNotUnique(type: ResolvableType, matchingBeans: java.util.Map<java.lang.String | string, java.lang.Object | any>): any
                        /**
                         * Resolve a shortcut for this dependency against the given factory, for example
                         * taking some pre-resolved information into account.
                         * <p>The resolution algorithm will first attempt to resolve a shortcut through this
                         * method before going into the regular type matching algorithm across all beans.
                         * Subclasses may override this method to improve resolution performance based on
                         * pre-cached information while still receiving {@link InjectionPoint} exposure etc.
                         * @param beanFactory the associated factory
                         * @return the shortcut result if any, or {#code null} if none
                         * @throws BeansException if the shortcut could not be obtained
                         * @since 4.3.1
                         */
                        // @ts-ignore
                        public resolveShortcut(beanFactory: org.springframework.beans.factory.BeanFactory): any
                        /**
                         * Resolve the specified bean name, as a candidate result of the matching
                         * algorithm for this dependency, to a bean instance from the given factory.
                         * <p>The default implementation calls {@link BeanFactory#getBean(String)}.
                         * Subclasses may provide additional arguments or other customizations.
                         * @param beanName the bean name, as a candidate result for this dependency
                         * @param requiredType the expected type of the bean (as an assertion)
                         * @param beanFactory the associated factory
                         * @return the bean instance (never {#code null})
                         * @throws BeansException if the bean could not be obtained
                         * @since 4.3.2
                         * @see BeanFactory#getBean(String)
                         */
                        // @ts-ignore
                        public resolveCandidate(beanName: java.lang.String | string, requiredType: java.lang.Class<any>, beanFactory: org.springframework.beans.factory.BeanFactory): any
                        /**
                         * Increase this descriptor's nesting level.
                         */
                        // @ts-ignore
                        public increaseNestingLevel(): void
                        /**
                         * Optionally set the concrete class that contains this dependency.
                         * This may differ from the class that declares the parameter/field in that
                         * it may be a subclass thereof, potentially substituting type variables.
                         * @since 4.0
                         */
                        // @ts-ignore
                        public setContainingClass(containingClass: java.lang.Class<any>): void
                        /**
                         * Build a {@link ResolvableType} object for the wrapped parameter/field.
                         * @since 4.0
                         */
                        // @ts-ignore
                        public getResolvableType(): ResolvableType
                        /**
                         * Build a {@link TypeDescriptor} object for the wrapped parameter/field.
                         * @since 5.1.4
                         */
                        // @ts-ignore
                        public getTypeDescriptor(): TypeDescriptor
                        /**
                         * Return whether a fallback match is allowed.
                         * <p>This is {@code false} by default but may be overridden to return {@code true} in order
                         * to suggest to an {@link org.springframework.beans.factory.support.AutowireCandidateResolver}
                         * that a fallback match is acceptable as well.
                         * @since 4.0
                         */
                        // @ts-ignore
                        public fallbackMatchAllowed(): boolean
                        /**
                         * Return a variant of this descriptor that is intended for a fallback match.
                         * @since 4.0
                         * @see #fallbackMatchAllowed()
                         */
                        // @ts-ignore
                        public forFallbackMatch(): org.springframework.beans.factory.config.DependencyDescriptor
                        /**
                         * Initialize parameter name discovery for the underlying method parameter, if any.
                         * <p>This method does not actually try to retrieve the parameter name at
                         * this point; it just allows discovery to happen when the application calls
                         * {@link #getDependencyName()} (if ever).
                         */
                        // @ts-ignore
                        public initParameterNameDiscovery(parameterNameDiscoverer: ParameterNameDiscoverer): void
                        /**
                         * Determine the name of the wrapped parameter/field.
                         * @return the declared name (may be {#code null} if unresolvable)
                         */
                        // @ts-ignore
                        public getDependencyName(): string
                        /**
                         * Determine the declared (non-generic) type of the wrapped parameter/field.
                         * @return the declared type (never {#code null})
                         */
                        // @ts-ignore
                        public getDependencyType(): java.lang.Class<any>
                        // @ts-ignore
                        public equals(other: java.lang.Object | any): boolean
                        // @ts-ignore
                        public hashCode(): number /*int*/
                    }
                }
            }
        }
    }
}
