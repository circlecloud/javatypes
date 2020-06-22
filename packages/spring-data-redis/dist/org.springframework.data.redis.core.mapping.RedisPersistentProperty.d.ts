declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace mapping {
                        /**
                         * Redis specific {@link PersistentProperty} implementation.
                         * @author Christoph Strobl
                         * @since 1.7
                         */
                        // @ts-ignore
                        class RedisPersistentProperty extends java.lang.Object {
                            /**
                             * Creates new {@link RedisPersistentProperty}.
                             * @param property
                             * @param owner
                             * @param simpleTypeHolder
                             */
                            // @ts-ignore
                            constructor(property: Property, owner: object, simpleTypeHolder: SimpleTypeHolder)
                            // @ts-ignore
                            public isIdProperty(): boolean
                        }
                    }
                }
            }
        }
    }
}
