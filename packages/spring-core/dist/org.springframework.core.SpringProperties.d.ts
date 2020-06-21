declare namespace org {
    namespace springframework {
        namespace core {
            /**
             * Static holder for local Spring properties, i.e. defined at the Spring library level.
             * <p>Reads a {@code spring.properties} file from the root of the Spring library classpath,
             * and also allows for programmatically setting properties through {@link #setProperty}.
             * When checking a property, local entries are being checked first, then falling back
             * to JVM-level system properties through a {@link System#getProperty} check.
             * <p>This is an alternative way to set Spring-related system properties such as
             * "spring.getenv.ignore" and "spring.beaninfo.ignore", in particular for scenarios
             * where JVM system properties are locked on the target platform (e.g. WebSphere).
             * See {@link #setFlag} for a convenient way to locally set such flags to "true".
             * @author Juergen Hoeller
             * @since 3.2.7
             * @see org.springframework.core.env.AbstractEnvironment#IGNORE_GETENV_PROPERTY_NAME
             * @see org.springframework.beans.CachedIntrospectionResults#IGNORE_BEANINFO_PROPERTY_NAME
             * @see org.springframework.jdbc.core.StatementCreatorUtils#IGNORE_GETPARAMETERTYPE_PROPERTY_NAME
             * @see org.springframework.test.context.cache.ContextCache#MAX_CONTEXT_CACHE_SIZE_PROPERTY_NAME
             */
            // @ts-ignore
            class SpringProperties extends java.lang.Object {
                /**
                 * Programmatically set a local property, overriding an entry in the
                 * {@code spring.properties} file (if any).
                 * @param key the property key
                 * @param value the associated property value, or {#code null} to reset it
                 */
                // @ts-ignore
                public static setProperty(key: java.lang.String | string, value: java.lang.String | string): void
                /**
                 * Retrieve the property value for the given key, checking local Spring
                 * properties first and falling back to JVM-level system properties.
                 * @param key the property key
                 * @return the associated property value, or {#code null} if none found
                 */
                // @ts-ignore
                public static getProperty(key: java.lang.String | string): string
                /**
                 * Programmatically set a local flag to "true", overriding an
                 * entry in the {@code spring.properties} file (if any).
                 * @param key the property key
                 */
                // @ts-ignore
                public static setFlag(key: java.lang.String | string): void
                /**
                 * Retrieve the flag for the given property key.
                 * @param key the property key
                 * @return {#code true} if the property is set to "true",
                 *  {@code} false otherwise
                 */
                // @ts-ignore
                public static getFlag(key: java.lang.String | string): boolean
            }
        }
    }
}
