declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace config {
                    /**
                     * Factory for {@link java.util.Properties} that reads from a YAML source,
                     * exposing a flat structure of String property values.
                     * <p>YAML is a nice human-readable format for configuration, and it has some
                     * useful hierarchical properties. It's more or less a superset of JSON, so it
                     * has a lot of similar features.
                     * <p><b>Note: All exposed values are of type {@code String}</b> for access through
                     * the common {@link Properties#getProperty} method (e.g. in configuration property
                     * resolution through {@link PropertyResourceConfigurer#setProperties(Properties)}).
                     * If this is not desirable, use {@link YamlMapFactoryBean} instead.
                     * <p>The Properties created by this factory have nested paths for hierarchical
                     * objects, so for instance this YAML
                     * <pre class="code">
                     * environments:
                     * dev:
                     * url: https://dev.bar.com
                     * name: Developer Setup
                     * prod:
                     * url: https://foo.bar.com
                     * name: My Cool App
                     * </pre>
                     * is transformed into these properties:
                     * <pre class="code">
                     * environments.dev.url=https://dev.bar.com
                     * environments.dev.name=Developer Setup
                     * environments.prod.url=https://foo.bar.com
                     * environments.prod.name=My Cool App
                     * </pre>
                     * Lists are split as property keys with <code>[]</code> dereferencers, for
                     * example this YAML:
                     * <pre class="code">
                     * servers:
                     * - dev.bar.com
                     * - foo.bar.com
                     * </pre>
                     * becomes properties like this:
                     * <pre class="code">
                     * servers[0]=dev.bar.com
                     * servers[1]=foo.bar.com
                     * </pre>
                     * <p>Requires SnakeYAML 1.18 or higher, as of Spring Framework 5.0.6.
                     * @author Dave Syer
                     * @author Stephane Nicoll
                     * @author Juergen Hoeller
                     * @since 4.1
                     */
                    // @ts-ignore
                    class YamlPropertiesFactoryBean extends org.springframework.beans.factory.config.YamlProcessor implements org.springframework.beans.factory.FactoryBean<java.util.Properties>, org.springframework.beans.factory.InitializingBean {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set if a singleton should be created, or a new object on each request
                         * otherwise. Default is {@code true} (a singleton).
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
                        public getObjectType(): java.lang.Class<any>
                        /**
                         * Template method that subclasses may override to construct the object
                         * returned by this factory. The default implementation returns a
                         * properties with the content of all resources.
                         * <p>Invoked lazily the first time {@link #getObject()} is invoked in
                         * case of a shared singleton; else, on each {@link #getObject()} call.
                         * @return the object returned by this factory
                         * @see #process(MatchCallback)
                         */
                        // @ts-ignore
                        createProperties(): java.util.Properties
                    }
                }
            }
        }
    }
}
