declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace annotation {
                    /**
                     * Enumeration determining autowiring status: that is, whether a bean should
                     * have its dependencies automatically injected by the Spring container using
                     * setter injection. This is a core concept in Spring DI.
                     * <p>Available for use in annotation-based configurations, such as for the
                     * AspectJ AnnotationBeanConfigurer aspect.
                     * @author Rod Johnson
                     * @author Juergen Hoeller
                     * @since 2.0
                     * @see org.springframework.beans.factory.annotation.Configurable
                     * @see org.springframework.beans.factory.config.AutowireCapableBeanFactory
                     */
                    // @ts-ignore
                    class Autowire extends java.lang.Enum<org.springframework.beans.factory.annotation.Autowire> {
                        /**
                         * Constant that indicates no autowiring at all.
                         */
                        // @ts-ignore
                        readonly NO: org.springframework.beans.factory.annotation.Autowire
                        /**
                         * Constant that indicates autowiring bean properties by name.
                         */
                        // @ts-ignore
                        readonly BY_NAME: org.springframework.beans.factory.annotation.Autowire
                        /**
                         * Constant that indicates autowiring bean properties by type.
                         */
                        // @ts-ignore
                        readonly BY_TYPE: org.springframework.beans.factory.annotation.Autowire
                        // @ts-ignore
                        values(): org.springframework.beans.factory.annotation.Autowire[]
                        // @ts-ignore
                        valueOf(name: java.lang.String | string): org.springframework.beans.factory.annotation.Autowire
                        // @ts-ignore
                        value(): number /*int*/
                        /**
                         * Return whether this represents an actual autowiring value.
                         * @return whether actual autowiring was specified
                         *  (either BY_NAME or BY_TYPE)
                         */
                        // @ts-ignore
                        isAutowire(): boolean
                    }
                }
            }
        }
    }
}
