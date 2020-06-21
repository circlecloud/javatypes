declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace annotation {
                    /**
                     * {@link AutowireCandidateResolver} implementation that matches bean definition qualifiers
                     * against {@link Qualifier qualifier annotations} on the field or parameter to be autowired.
                     * Also supports suggested expression values through a {@link Value value} annotation.
                     * <p>Also supports JSR-330's {@link javax.inject.Qualifier} annotation, if available.
                     * @author Mark Fisher
                     * @author Juergen Hoeller
                     * @author Stephane Nicoll
                     * @since 2.5
                     * @see AutowireCandidateQualifier
                     * @see Qualifier
                     * @see Value
                     */
                    // @ts-ignore
                    class QualifierAnnotationAutowireCandidateResolver extends org.springframework.beans.factory.support.GenericTypeAwareAutowireCandidateResolver {
                        /**
                         * Create a new QualifierAnnotationAutowireCandidateResolver
                         * for Spring's standard {@link Qualifier} annotation.
                         * <p>Also supports JSR-330's {@link javax.inject.Qualifier} annotation, if available.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a new QualifierAnnotationAutowireCandidateResolver
                         * for the given qualifier annotation type.
                         * @param qualifierType the qualifier annotation to look for
                         */
                        // @ts-ignore
                        constructor(qualifierType: java.lang.Class<any>)
                        /**
                         * Create a new QualifierAnnotationAutowireCandidateResolver
                         * for the given qualifier annotation types.
                         * @param qualifierTypes the qualifier annotations to look for
                         */
                        // @ts-ignore
                        constructor(qualifierTypes: java.util.Set<java.lang.Class<any>> | Array<java.lang.Class<any>>)
                        /**
                         * Register the given type to be used as a qualifier when autowiring.
                         * <p>This identifies qualifier annotations for direct use (on fields,
                         * method parameters and constructor parameters) as well as meta
                         * annotations that in turn identify actual qualifier annotations.
                         * <p>This implementation only supports annotations as qualifier types.
                         * The default is Spring's {@link Qualifier} annotation which serves
                         * as a qualifier for direct use and also as a meta annotation.
                         * @param qualifierType the annotation type to register
                         */
                        // @ts-ignore
                        public addQualifierType(qualifierType: java.lang.Class<any>): void
                        /**
                         * Set the 'value' annotation type, to be used on fields, method parameters
                         * and constructor parameters.
                         * <p>The default value annotation type is the Spring-provided
                         * {@link Value} annotation.
                         * <p>This setter property exists so that developers can provide their own
                         * (non-Spring-specific) annotation type to indicate a default value
                         * expression for a specific argument.
                         */
                        // @ts-ignore
                        public setValueAnnotationType(valueAnnotationType: java.lang.Class<any>): void
                        /**
                         * Determine whether the provided bean definition is an autowire candidate.
                         * <p>To be considered a candidate the bean's <em>autowire-candidate</em>
                         * attribute must not have been set to 'false'. Also, if an annotation on
                         * the field or parameter to be autowired is recognized by this bean factory
                         * as a <em>qualifier</em>, the bean must 'match' against the annotation as
                         * well as any attributes it may contain. The bean definition must contain
                         * the same qualifier or match by meta attributes. A "value" attribute will
                         * fallback to match against the bean name or an alias if a qualifier or
                         * attribute does not match.
                         * @see Qualifier
                         */
                        // @ts-ignore
                        public isAutowireCandidate(bdHolder: org.springframework.beans.factory.config.BeanDefinitionHolder, descriptor: org.springframework.beans.factory.config.DependencyDescriptor): boolean
                        /**
                         * Match the given qualifier annotations against the candidate bean definition.
                         */
                        // @ts-ignore
                        checkQualifiers(bdHolder: org.springframework.beans.factory.config.BeanDefinitionHolder, annotationsToSearch: java.lang.annotation.Annotation[]): boolean
                        /**
                         * Checks whether the given annotation type is a recognized qualifier type.
                         */
                        // @ts-ignore
                        isQualifier(annotationType: java.lang.Class<any>): boolean
                        /**
                         * Match the given qualifier annotation against the candidate bean definition.
                         */
                        // @ts-ignore
                        checkQualifier(bdHolder: org.springframework.beans.factory.config.BeanDefinitionHolder, annotation: java.lang.annotation.Annotation, typeConverter: org.springframework.beans.TypeConverter): boolean
                        // @ts-ignore
                        getQualifiedElementAnnotation(bd: org.springframework.beans.factory.support.RootBeanDefinition, type: java.lang.Class<any>): java.lang.annotation.Annotation
                        // @ts-ignore
                        getFactoryMethodAnnotation(bd: org.springframework.beans.factory.support.RootBeanDefinition, type: java.lang.Class<any>): java.lang.annotation.Annotation
                        /**
                         * Determine whether the given dependency declares an autowired annotation,
                         * checking its required flag.
                         * @see Autowired#required()
                         */
                        // @ts-ignore
                        public isRequired(descriptor: org.springframework.beans.factory.config.DependencyDescriptor): boolean
                        /**
                         * Determine whether the given dependency declares a qualifier annotation.
                         * @see #isQualifier(Class)
                         * @see Qualifier
                         */
                        // @ts-ignore
                        public hasQualifier(descriptor: org.springframework.beans.factory.config.DependencyDescriptor): boolean
                        /**
                         * Determine whether the given dependency declares a value annotation.
                         * @see Value
                         */
                        // @ts-ignore
                        public getSuggestedValue(descriptor: org.springframework.beans.factory.config.DependencyDescriptor): any
                        /**
                         * Determine a suggested value from any of the given candidate annotations.
                         */
                        // @ts-ignore
                        findValue(annotationsToSearch: java.lang.annotation.Annotation[]): any
                        /**
                         * Extract the value attribute from the given annotation.
                         * @since 4.3
                         */
                        // @ts-ignore
                        extractValue(attr: AnnotationAttributes): any
                    }
                }
            }
        }
    }
}
