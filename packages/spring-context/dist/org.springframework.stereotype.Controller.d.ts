declare namespace org {
    namespace springframework {
        namespace stereotype {
            /**
             * Indicates that an annotated class is a "Controller" (e.g. a web controller).
             * <p>This annotation serves as a specialization of {@link Component @Component},
             * allowing for implementation classes to be autodetected through classpath scanning.
             * It is typically used in combination with annotated handler methods based on the
             * {@link org.springframework.web.bind.annotation.RequestMapping} annotation.
             * @author Arjen Poutsma
             * @author Juergen Hoeller
             * @since 2.5
             * @see Component
             * @see org.springframework.web.bind.annotation.RequestMapping
             * @see org.springframework.context.annotation.ClassPathBeanDefinitionScanner
             */
            // @ts-ignore
            class Controller implements java.lang.annotation.Annotation {
            }
        }
    }
}
