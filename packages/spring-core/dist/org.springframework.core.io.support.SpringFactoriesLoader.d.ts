declare namespace org {
    namespace springframework {
        namespace core {
            namespace io {
                namespace support {
                    /**
                     * General purpose factory loading mechanism for internal use within the framework.
                     * <p>{@code SpringFactoriesLoader} {@linkplain #loadFactories loads} and instantiates
                     * factories of a given type from {@value #FACTORIES_RESOURCE_LOCATION} files which
                     * may be present in multiple JAR files in the classpath. The {@code spring.factories}
                     * file must be in {@link Properties} format, where the key is the fully qualified
                     * name of the interface or abstract class, and the value is a comma-separated list of
                     * implementation class names. For example:
                     * <pre class="code">example.MyService=example.MyServiceImpl1,example.MyServiceImpl2</pre>
                     * where {@code example.MyService} is the name of the interface, and {@code MyServiceImpl1}
                     * and {@code MyServiceImpl2} are two implementations.
                     * @author Arjen Poutsma
                     * @author Juergen Hoeller
                     * @author Sam Brannen
                     * @since 3.2
                     */
                    // @ts-ignore
                    class SpringFactoriesLoader extends java.lang.Object {
                        /**
                         * The location to look for factories.
                         * <p>Can be present in multiple JAR files.
                         */
                        // @ts-ignore
                        public static readonly FACTORIES_RESOURCE_LOCATION: java.lang.String | string
                        /**
                         * Load and instantiate the factory implementations of the given type from
                         * {@value #FACTORIES_RESOURCE_LOCATION}, using the given class loader.
                         * <p>The returned factories are sorted through {@link AnnotationAwareOrderComparator}.
                         * <p>If a custom instantiation strategy is required, use {@link #loadFactoryNames}
                         * to obtain all registered factory names.
                         * @param factoryType the interface or abstract class representing the factory
                         * @param classLoader the ClassLoader to use for loading (can be {#code null} to use the default)
                         * @throws IllegalArgumentException if any factory implementation class cannot
                         *  be loaded or if an error occurs while instantiating any factory
                         * @see #loadFactoryNames
                         */
                        // @ts-ignore
                        public static loadFactories<T>(factoryType: java.lang.Class<T>, classLoader: java.lang.ClassLoader): Array<T>
                        /**
                         * Load the fully qualified class names of factory implementations of the
                         * given type from {@value #FACTORIES_RESOURCE_LOCATION}, using the given
                         * class loader.
                         * @param factoryType the interface or abstract class representing the factory
                         * @param classLoader the ClassLoader to use for loading resources; can be
                         *  {#code null} to use the default
                         * @throws IllegalArgumentException if an error occurs while loading factory names
                         * @see #loadFactories
                         */
                        // @ts-ignore
                        public static loadFactoryNames(factoryType: java.lang.Class<any>, classLoader: java.lang.ClassLoader): Array<java.lang.String | string>
                    }
                }
            }
        }
    }
}
