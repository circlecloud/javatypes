declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace annotation {
                    /**
                     * Public delegate for resolving autowirable parameters on externally managed
                     * constructors and methods.
                     * @author Sam Brannen
                     * @author Juergen Hoeller
                     * @since 5.2
                     * @see #isAutowirable
                     * @see #resolveDependency
                     */
                    // @ts-ignore
                    class ParameterResolutionDelegate extends java.lang.Object {
                        /**
                         * Determine if the supplied {@link Parameter} can <em>potentially</em> be
                         * autowired from an {@link AutowireCapableBeanFactory}.
                         * <p>Returns {@code true} if the supplied parameter is annotated or
                         * meta-annotated with {@link Autowired @Autowired},
                         * {@link Qualifier @Qualifier}, or {@link Value @Value}.
                         * <p>Note that {@link #resolveDependency} may still be able to resolve the
                         * dependency for the supplied parameter even if this method returns {@code false}.
                         * @param parameter the parameter whose dependency should be autowired
                         *  (must not be {#code null})
                         * @param parameterIndex the index of the parameter in the constructor or method
                         *  that declares the parameter
                         * @see #resolveDependency
                         */
                        // @ts-ignore
                        public static isAutowirable(parameter: java.lang.reflect.Parameter, parameterIndex: number /*int*/): boolean
                        /**
                         * Resolve the dependency for the supplied {@link Parameter} from the
                         * supplied {@link AutowireCapableBeanFactory}.
                         * <p>Provides comprehensive autowiring support for individual method parameters
                         * on par with Spring's dependency injection facilities for autowired fields and
                         * methods, including support for {@link Autowired @Autowired},
                         * {@link Qualifier @Qualifier}, and {@link Value @Value} with support for property
                         * placeholders and SpEL expressions in {@code @Value} declarations.
                         * <p>The dependency is required unless the parameter is annotated or meta-annotated
                         * with {@link Autowired @Autowired} with the {@link Autowired#required required}
                         * flag set to {@code false}.
                         * <p>If an explicit <em>qualifier</em> is not declared, the name of the parameter
                         * will be used as the qualifier for resolving ambiguities.
                         * @param parameter the parameter whose dependency should be resolved (must not be
                         *  {#code null})
                         * @param parameterIndex the index of the parameter in the constructor or method
                         *  that declares the parameter
                         * @param containingClass the concrete class that contains the parameter; this may
                         *  differ from the class that declares the parameter in that it may be a subclass
                         *  thereof, potentially substituting type variables (must not be {#code null})
                         * @param beanFactory the {#code AutowireCapableBeanFactory} from which to resolve
                         *  the dependency (must not be {@code null})
                         * @return the resolved object, or {#code null} if none found
                         * @throws BeansException if dependency resolution failed
                         * @see #isAutowirable
                         * @see Autowired#required
                         * @see SynthesizingMethodParameter#forExecutable(Executable, int)
                         * @see AutowireCapableBeanFactory#resolveDependency(DependencyDescriptor, String)
                         */
                        // @ts-ignore
                        public static resolveDependency(parameter: java.lang.reflect.Parameter, parameterIndex: number /*int*/, containingClass: java.lang.Class<any>, beanFactory: org.springframework.beans.factory.config.AutowireCapableBeanFactory): any
                    }
                }
            }
        }
    }
}
