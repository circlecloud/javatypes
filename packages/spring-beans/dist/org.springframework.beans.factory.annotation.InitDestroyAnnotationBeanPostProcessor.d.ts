declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace annotation {
                    /**
                     * {@link org.springframework.beans.factory.config.BeanPostProcessor} implementation
                     * that invokes annotated init and destroy methods. Allows for an annotation
                     * alternative to Spring's {@link org.springframework.beans.factory.InitializingBean}
                     * and {@link org.springframework.beans.factory.DisposableBean} callback interfaces.
                     * <p>The actual annotation types that this post-processor checks for can be
                     * configured through the {@link #setInitAnnotationType "initAnnotationType"}
                     * and {@link #setDestroyAnnotationType "destroyAnnotationType"} properties.
                     * Any custom annotation can be used, since there are no required annotation
                     * attributes.
                     * <p>Init and destroy annotations may be applied to methods of any visibility:
                     * public, package-protected, protected, or private. Multiple such methods
                     * may be annotated, but it is recommended to only annotate one single
                     * init method and destroy method, respectively.
                     * <p>Spring's {@link org.springframework.context.annotation.CommonAnnotationBeanPostProcessor}
                     * supports the JSR-250 {@link javax.annotation.PostConstruct} and {@link javax.annotation.PreDestroy}
                     * annotations out of the box, as init annotation and destroy annotation, respectively.
                     * Furthermore, it also supports the {@link javax.annotation.Resource} annotation
                     * for annotation-driven injection of named beans.
                     * @author Juergen Hoeller
                     * @since 2.5
                     * @see #setInitAnnotationType
                     * @see #setDestroyAnnotationType
                     */
                    // @ts-ignore
                    class InitDestroyAnnotationBeanPostProcessor extends java.lang.Object implements org.springframework.beans.factory.config.DestructionAwareBeanPostProcessor, org.springframework.beans.factory.support.MergedBeanDefinitionPostProcessor, java.io.Serializable {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        logger: Log
                        /**
                         * Specify the init annotation to check for, indicating initialization
                         * methods to call after configuration of a bean.
                         * <p>Any custom annotation can be used, since there are no required
                         * annotation attributes. There is no default, although a typical choice
                         * is the JSR-250 {@link javax.annotation.PostConstruct} annotation.
                         */
                        // @ts-ignore
                        setInitAnnotationType(initAnnotationType: java.lang.Class<java.lang.annotation.Annotation>): void
                        /**
                         * Specify the destroy annotation to check for, indicating destruction
                         * methods to call when the context is shutting down.
                         * <p>Any custom annotation can be used, since there are no required
                         * annotation attributes. There is no default, although a typical choice
                         * is the JSR-250 {@link javax.annotation.PreDestroy} annotation.
                         */
                        // @ts-ignore
                        setDestroyAnnotationType(destroyAnnotationType: java.lang.Class<java.lang.annotation.Annotation>): void
                        // @ts-ignore
                        setOrder(order: number /*int*/): void
                        // @ts-ignore
                        getOrder(): int
                        // @ts-ignore
                        postProcessMergedBeanDefinition(beanDefinition: org.springframework.beans.factory.support.RootBeanDefinition, beanType: java.lang.Class<any>, beanName: string): void
                        // @ts-ignore
                        postProcessBeforeInitialization(bean: any, beanName: string): java.lang.Object
                        // @ts-ignore
                        postProcessAfterInitialization(bean: any, beanName: string): java.lang.Object
                        // @ts-ignore
                        postProcessBeforeDestruction(bean: any, beanName: string): void
                        // @ts-ignore
                        requiresDestruction(bean: any): boolean
                    }
                }
            }
        }
    }
}
