declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace convert {
                        /**
                         * Callback interface to be used in conjunction with {@link DbRefResolver}.
                         * @author Thomas Darimont
                         * @author Oliver Gierke
                         */
                        // @ts-ignore
                        interface DbRefResolverCallback {
                            /**
                             * Resolve the final object for the given {@link MongoPersistentProperty}.
                             * @param property will never be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            resolve(property: org.springframework.data.mongodb.core.mapping.MongoPersistentProperty): any
                        }
                    }
                }
            }
        }
    }
}
