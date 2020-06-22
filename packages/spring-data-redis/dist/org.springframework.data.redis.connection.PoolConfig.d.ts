declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Subclass of {@link GenericObjectPoolConfig} that includes setters for instantiation in Spring
                     * @author Jennifer Hickey
                     * @author Christoph Strobl
                     * @deprecated use {#link GenericObjectPoolConfig} instead. Will be removed in {@literal 1.4}.
                     */
                    // @ts-ignore
                    class PoolConfig extends GenericObjectPoolConfig {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public setMaxActive(maxActive: number /*int*/): void
                    }
                }
            }
        }
    }
}
