declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * @author Christoph Strobl
                     * @since 1.4
                     */
                    // @ts-ignore
                    interface NamedNode {
                        /**
                         * @return the node name. Can be {#literal null}.
                         */
                        // @ts-ignore
                        getName(): string
                    }
                }
            }
        }
    }
}
