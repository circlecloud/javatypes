declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ReactiveFindOperation {
                        /**
                         * Compose geonear execution by calling one of the terminating methods.
                         */
                        // @ts-ignore
                        interface TerminatingFindNear<T> {
                            /**
                             * Find all matching elements and return them as {@link org.springframework.data.geo.GeoResult}.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            all(): object
                        }
                    }
                }
            }
        }
    }
}
