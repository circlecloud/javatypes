declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace query {
                        /**
                         * Interface fixing must have operations for {@literal updates} as implemented via {@link Update}.
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 2.1.4
                         */
                        // @ts-ignore
                        interface UpdateDefinition {
                            /**
                             * If {@literal true} prevents a write operation that affects <strong>multiple</strong> documents from yielding to
                             * other reads or writes once the first document is written. <br />
                             * @return {#literal true} if update isolated is set.
                             */
                            // @ts-ignore
                            isIsolated(): java.lang.Boolean
                            /**
                             * @return the actual update in its native {#link Document} format. Never {@literal null}.
                             */
                            // @ts-ignore
                            getUpdateObject(): Document
                            /**
                             * Check if a given {@literal key} is modified by applying the update.
                             * @param key must not be {#literal null}.
                             * @return {#literal true} if the actual {@link UpdateDefinition} attempts to modify the given {@literal key}.
                             */
                            // @ts-ignore
                            modifies(key: java.lang.String | string): boolean
                            /**
                             * Increment the value of a given {@literal key} by {@code 1}.
                             * @param key must not be {#literal null}.
                             */
                            // @ts-ignore
                            inc(key: java.lang.String | string): void
                        }
                    }
                }
            }
        }
    }
}
