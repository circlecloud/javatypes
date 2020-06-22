declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        /**
                         * Abstraction for a field.
                         * @author Oliver Gierke
                         * @since 1.3
                         */
                        // @ts-ignore
                        interface Field {
                            /**
                             * Returns the name of the field.
                             * @return must not be {#literal null}.
                             */
                            // @ts-ignore
                            getName(): string
                            /**
                             * Returns the target of the field. In case no explicit target is available {@link #getName()} should be returned.
                             * @return must not be {#literal null}.
                             */
                            // @ts-ignore
                            getTarget(): string
                            /**
                             * Returns whether the Field is aliased, which means it has a name set different from the target.
                             * @return 
                             */
                            // @ts-ignore
                            isAliased(): boolean
                            /**
                             * @return true if the field name references a local value such as {#code $$this}.
                             * @since 2.1.11
                             */
                            // @ts-ignore
                            isInternal(): boolean
                        }
                    }
                }
            }
        }
    }
}
