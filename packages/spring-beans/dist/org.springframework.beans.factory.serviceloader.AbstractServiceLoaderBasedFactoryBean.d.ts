declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace serviceloader {
                    /**
                     * Abstract base class for FactoryBeans operating on the
                     * JDK 1.6 {@link java.util.ServiceLoader} facility.
                     * @author Juergen Hoeller
                     * @since 2.5
                     * @see java.util.ServiceLoader
                     */
                    // @ts-ignore
                    abstract class AbstractServiceLoaderBasedFactoryBean extends org.springframework.beans.factory.config.AbstractFactoryBean<java.lang.Object | any> implements org.springframework.beans.factory.BeanClassLoaderAware {
                        // @ts-ignore
                        constructor()
                        /**
                         * Specify the desired service type (typically the service's public API).
                         */
                        // @ts-ignore
                        public setServiceType(serviceType: java.lang.Class<any>): void
                        /**
                         * Return the desired service type.
                         */
                        // @ts-ignore
                        public getServiceType(): java.lang.Class<any>
                        // @ts-ignore
                        public setBeanClassLoader(beanClassLoader: java.lang.ClassLoader): void
                        /**
                         * Delegates to {@link #getObjectToExpose(java.util.ServiceLoader)}.
                         * @return the object to expose
                         */
                        // @ts-ignore
                        createInstance(): any
                        /**
                         * Determine the actual object to expose for the given ServiceLoader.
                         * <p>Left to concrete subclasses.
                         * @param serviceLoader the ServiceLoader for the configured service class
                         * @return the object to expose
                         */
                        // @ts-ignore
                        abstract getObjectToExpose(serviceLoader: java.util.ServiceLoader<any>): any
                    }
                }
            }
        }
    }
}
