declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace PartialUpdate {
                        /**
                         * @author Christoph Strobl
                         * @since 1.8
                         */
                        // @ts-ignore
                        class PropertyUpdate extends java.lang.Object {
                            /**
                             * Get the associated {@link UpdateCommand}.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public getCmd(): org.springframework.data.redis.core.PartialUpdate.UpdateCommand
                            /**
                             * Get the target path.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public getPropertyPath(): string
                            /**
                             * Get the value to set.
                             * @return can be {#literal null}.
                             */
                            // @ts-ignore
                            public getValue(): any
                        }
                    }
                }
            }
        }
    }
}
