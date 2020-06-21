declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace config {
                    /**
                     * Factory for a {@code Map} that reads from a YAML source, preserving the
                     * YAML-declared value types and their structure.
                     * <p>YAML is a nice human-readable format for configuration, and it has some
                     * useful hierarchical properties. It's more or less a superset of JSON, so it
                     * has a lot of similar features.
                     * <p>If multiple resources are provided the later ones will override entries in
                     * the earlier ones hierarchically; that is, all entries with the same nested key
                     * of type {@code Map} at any depth are merged. For example:
                     * <pre class="code">
                     * foo:
                     * bar:
                     * one: two
                     * three: four
                     * </pre>
                     * plus (later in the list)
                     * <pre class="code">
                     * foo:
                     * bar:
                     * one: 2
                     * five: six
                     * </pre>
                     * results in an effective input of
                     * <pre class="code">
                     * foo:
                     * bar:
                     * one: 2
                     * three: four
                     * five: six
                     * </pre>
                     * Note that the value of "foo" in the first document is not simply replaced
                     * with the value in the second, but its nested values are merged.
                     * <p>Requires SnakeYAML 1.18 or higher, as of Spring Framework 5.0.6.
                     * @author Dave Syer
                     * @author Juergen Hoeller
                     * @since 4.1
                     */
                    // @ts-ignore
                    class YamlMapFactoryBean extends org.springframework.beans.factory.config.YamlProcessor implements org.springframework.beans.factory.FactoryBean<java.util.Map<java.lang.String | string, java.lang.Object | any>>, org.springframework.beans.factory.InitializingBean {
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
                        public getObject(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                        // @ts-ignore
                        public getObjectType(): java.lang.Class<any>
                        /**
                         * Template method that subclasses may override to construct the object
                         * returned by this factory.
                         * <p>Invoked lazily the first time {@link #getObject()} is invoked in
                         * case of a shared singleton; else, on each {@link #getObject()} call.
                         * <p>The default implementation returns the merged {@code Map} instance.
                         * @return the object returned by this factory
                         * @see #process(MatchCallback)
                         */
                        // @ts-ignore
                        createMap(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    }
                }
            }
        }
    }
}
