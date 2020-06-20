declare namespace org {
    namespace springframework {
        namespace beans {
            /**
             * Internal class that caches JavaBeans {@link java.beans.PropertyDescriptor}
             * information for a Java class. Not intended for direct use by application code.
             * <p>Necessary for Spring's own caching of bean descriptors within the application
             * {@link ClassLoader}, rather than relying on the JDK's system-wide {@link BeanInfo}
             * cache (in order to avoid leaks on individual application shutdown in a shared JVM).
             * <p>Information is cached statically, so we don't need to create new
             * objects of this class for every JavaBean we manipulate. Hence, this class
             * implements the factory design pattern, using a private constructor and
             * a static {@link #forClass(Class)} factory method to obtain instances.
             * <p>Note that for caching to work effectively, some preconditions need to be met:
             * Prefer an arrangement where the Spring jars live in the same ClassLoader as the
             * application classes, which allows for clean caching along with the application's
             * lifecycle in any case. For a web application, consider declaring a local
             * {@link org.springframework.web.util.IntrospectorCleanupListener} in {@code web.xml}
             * in case of a multi-ClassLoader layout, which will allow for effective caching as well.
             * <p>In case of a non-clean ClassLoader arrangement without a cleanup listener having
             * been set up, this class will fall back to a weak-reference-based caching model that
             * recreates much-requested entries every time the garbage collector removed them. In
             * such a scenario, consider the {@link #IGNORE_BEANINFO_PROPERTY_NAME} system property.
             * @author Rod Johnson
             * @author Juergen Hoeller
             * @since 05 May 2001
             * @see #acceptClassLoader(ClassLoader)
             * @see #clearClassLoader(ClassLoader)
             * @see #forClass(Class)
             */
            // @ts-ignore
            class CachedIntrospectionResults extends java.lang.Object {
                /**
                 * System property that instructs Spring to use the {@link Introspector#IGNORE_ALL_BEANINFO}
                 * mode when calling the JavaBeans {@link Introspector}: "spring.beaninfo.ignore", with a
                 * value of "true" skipping the search for {@code BeanInfo} classes (typically for scenarios
                 * where no such classes are being defined for beans in the application in the first place).
                 * <p>The default is "false", considering all {@code BeanInfo} metadata classes, like for
                 * standard {@link Introspector#getBeanInfo(Class)} calls. Consider switching this flag to
                 * "true" if you experience repeated ClassLoader access for non-existing {@code BeanInfo}
                 * classes, in case such access is expensive on startup or on lazy loading.
                 * <p>Note that such an effect may also indicate a scenario where caching doesn't work
                 * effectively: Prefer an arrangement where the Spring jars live in the same ClassLoader
                 * as the application classes, which allows for clean caching along with the application's
                 * lifecycle in any case. For a web application, consider declaring a local
                 * {@link org.springframework.web.util.IntrospectorCleanupListener} in {@code web.xml}
                 * in case of a multi-ClassLoader layout, which will allow for effective caching as well.
                 * @see Introspector#getBeanInfo(Class, int)
                 */
                // @ts-ignore
                readonly IGNORE_BEANINFO_PROPERTY_NAME: string
                /**
                 * Accept the given ClassLoader as cache-safe, even if its classes would
                 * not qualify as cache-safe in this CachedIntrospectionResults class.
                 * <p>This configuration method is only relevant in scenarios where the Spring
                 * classes reside in a 'common' ClassLoader (e.g. the system ClassLoader)
                 * whose lifecycle is not coupled to the application. In such a scenario,
                 * CachedIntrospectionResults would by default not cache any of the application's
                 * classes, since they would create a leak in the common ClassLoader.
                 * <p>Any {@code acceptClassLoader} call at application startup should
                 * be paired with a {@link #clearClassLoader} call at application shutdown.
                 * @param classLoader the ClassLoader to accept
                 */
                // @ts-ignore
                acceptClassLoader(classLoader: java.lang.ClassLoader): void
                /**
                 * Clear the introspection cache for the given ClassLoader, removing the
                 * introspection results for all classes underneath that ClassLoader, and
                 * removing the ClassLoader (and its children) from the acceptance list.
                 * @param classLoader the ClassLoader to clear the cache for
                 */
                // @ts-ignore
                clearClassLoader(classLoader: java.lang.ClassLoader): void
            }
        }
    }
}
