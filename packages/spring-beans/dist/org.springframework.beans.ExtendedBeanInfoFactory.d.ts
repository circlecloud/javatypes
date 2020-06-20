declare namespace org {
    namespace springframework {
        namespace beans {
            /**
             * {@link BeanInfoFactory} implementation that evaluates whether bean classes have
             * "non-standard" JavaBeans setter methods and are thus candidates for introspection
             * by Spring's (package-visible) {@code ExtendedBeanInfo} implementation.
             * <p>Ordered at {@link Ordered#LOWEST_PRECEDENCE} to allow other user-defined
             * {@link BeanInfoFactory} types to take precedence.
             * @author Chris Beams
             * @since 3.2
             * @see BeanInfoFactory
             * @see CachedIntrospectionResults
             */
            // @ts-ignore
            class ExtendedBeanInfoFactory extends java.lang.Object implements org.springframework.beans.BeanInfoFactory {
                // @ts-ignore
                constructor()
                /**
                 * Return an {@link ExtendedBeanInfo} for the given bean class, if applicable.
                 */
                // @ts-ignore
                getBeanInfo(beanClass: java.lang.Class<any>): java.beans.BeanInfo
                // @ts-ignore
                getOrder(): int
            }
        }
    }
}
