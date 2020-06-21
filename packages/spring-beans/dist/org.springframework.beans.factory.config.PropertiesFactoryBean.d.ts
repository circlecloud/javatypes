declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace config {
                    /**
                     * Allows for making a properties file from a classpath location available
                     * as Properties instance in a bean factory. Can be used to populate
                     * any bean property of type Properties via a bean reference.
                     * <p>Supports loading from a properties file and/or setting local properties
                     * on this FactoryBean. The created Properties instance will be merged from
                     * loaded and local values. If neither a location nor local properties are set,
                     * an exception will be thrown on initialization.
                     * <p>Can create a singleton or a new object on each request.
                     * Default is a singleton.
                     * @author Juergen Hoeller
                     * @see #setLocation
                     * @see #setProperties
                     * @see #setLocalOverride
                     * @see java.util.Properties
                     */
                    // @ts-ignore
                    class PropertiesFactoryBean extends PropertiesLoaderSupport implements org.springframework.beans.factory.FactoryBean<java.util.Properties>, org.springframework.beans.factory.InitializingBean {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set whether a shared 'singleton' Properties instance should be
                         * created, or rather a new Properties instance on each request.
                         * <p>Default is "true" (a shared singleton).
                         */
                        // @ts-ignore
                        public setSingleton(singleton: boolean): void
                        // @ts-ignore
                        public isSingleton(): boolean
                        // @ts-ignore
                        public afterPropertiesSet(): void
                        // @ts-ignore
                        public getObject(): java.util.Properties
                        // @ts-ignore
                        public getObjectType(): java.lang.Class<java.util.Properties>
                        /**
                         * Template method that subclasses may override to construct the object
                         * returned by this factory. The default implementation returns the
                         * plain merged Properties instance.
                         * <p>Invoked on initialization of this FactoryBean in case of a
                         * shared singleton; else, on each {@link #getObject()} call.
                         * @return the object returned by this factory
                         * @throws IOException if an exception occurred during properties loading
                         * @see #mergeProperties()
                         */
                        // @ts-ignore
                        createProperties(): java.util.Properties
                    }
                }
            }
        }
    }
}
