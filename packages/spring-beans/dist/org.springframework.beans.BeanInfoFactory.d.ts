declare namespace org {
    namespace springframework {
        namespace beans {
            /**
             * Strategy interface for creating {@link BeanInfo} instances for Spring beans.
             * Can be used to plug in custom bean property resolution strategies (e.g. for other
             * languages on the JVM) or more efficient {@link BeanInfo} retrieval algorithms.
             * <p>BeanInfoFactories are instantiated by the {@link CachedIntrospectionResults},
             * by using the {@link org.springframework.core.io.support.SpringFactoriesLoader}
             * utility class.
             * When a {@link BeanInfo} is to be created, the {@code CachedIntrospectionResults}
             * will iterate through the discovered factories, calling {@link #getBeanInfo(Class)}
             * on each one. If {@code null} is returned, the next factory will be queried.
             * If none of the factories support the class, a standard {@link BeanInfo} will be
             * created as a default.
             * <p>Note that the {@link org.springframework.core.io.support.SpringFactoriesLoader}
             * sorts the {@code BeanInfoFactory} instances by
             * {@link org.springframework.core.annotation.Order @Order}, so that ones with a
             * higher precedence come first.
             * @author Arjen Poutsma
             * @since 3.2
             * @see CachedIntrospectionResults
             * @see org.springframework.core.io.support.SpringFactoriesLoader
             */
            // @ts-ignore
            interface BeanInfoFactory {
                /**
                 * Return the bean info for the given class, if supported.
                 * @param beanClass the bean class
                 * @return the BeanInfo, or {#code null} if the given class is not supported
                 * @throws IntrospectionException in case of exceptions
                 */
                // @ts-ignore
                getBeanInfo(beanClass: java.lang.Class<any>): java.beans.BeanInfo
            }
        }
    }
}
