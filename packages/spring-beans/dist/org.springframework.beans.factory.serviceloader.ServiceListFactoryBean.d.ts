declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace serviceloader {
                    /**
                     * {@link org.springframework.beans.factory.FactoryBean} that exposes <i>all</i>
                     * services for the configured service class, represented as a List of service objects,
                     * obtained through the JDK 1.6 {@link java.util.ServiceLoader} facility.
                     * @author Juergen Hoeller
                     * @since 2.5
                     * @see java.util.ServiceLoader
                     */
                    // @ts-ignore
                    class ServiceListFactoryBean extends org.springframework.beans.factory.serviceloader.AbstractServiceLoaderBasedFactoryBean implements org.springframework.beans.factory.BeanClassLoaderAware {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        getObjectToExpose(serviceLoader: java.util.ServiceLoader<any>): java.lang.Object
                        // @ts-ignore
                        getObjectType(): java.lang.Class<?>
                    }
                }
            }
        }
    }
}
