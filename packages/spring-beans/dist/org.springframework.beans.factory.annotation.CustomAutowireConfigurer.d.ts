declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace annotation {
                    /**
                     * A {@link org.springframework.beans.factory.config.BeanFactoryPostProcessor}
                     * implementation that allows for convenient registration of custom autowire
                     * qualifier types.
                     * <pre class="code">
                     * &lt;bean id="customAutowireConfigurer" class="org.springframework.beans.factory.annotation.CustomAutowireConfigurer"&gt;
                     * &lt;property name="customQualifierTypes"&gt;
                     * &lt;set&gt;
                     * &lt;value&gt;mypackage.MyQualifier&lt;/value&gt;
                     * &lt;/set&gt;
                     * &lt;/property&gt;
                     * &lt;/bean&gt;</pre>
                     * @author Mark Fisher
                     * @author Juergen Hoeller
                     * @since 2.5
                     * @see org.springframework.beans.factory.annotation.Qualifier
                     */
                    // @ts-ignore
                    class CustomAutowireConfigurer extends java.lang.Object implements org.springframework.beans.factory.config.BeanFactoryPostProcessor, org.springframework.beans.factory.BeanClassLoaderAware {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        setOrder(order: number /*int*/): void
                        // @ts-ignore
                        getOrder(): int
                        // @ts-ignore
                        setBeanClassLoader(beanClassLoader: java.lang.ClassLoader): void
                        /**
                         * Register custom qualifier annotation types to be considered
                         * when autowiring beans. Each element of the provided set may
                         * be either a Class instance or a String representation of the
                         * fully-qualified class name of the custom annotation.
                         * <p>Note that any annotation that is itself annotated with Spring's
                         * {@link org.springframework.beans.factory.annotation.Qualifier}
                         * does not require explicit registration.
                         * @param customQualifierTypes the custom types to register
                         */
                        // @ts-ignore
                        setCustomQualifierTypes(customQualifierTypes: Array<any>): void
                        // @ts-ignore
                        postProcessBeanFactory(beanFactory: org.springframework.beans.factory.config.ConfigurableListableBeanFactory): void
                    }
                }
            }
        }
    }
}
