declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace convert {
                        /**
                         * @author Oliver Gierke
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        interface DbRefProxyHandler {
                            // @ts-ignore
                            populateId(property: org.springframework.data.mongodb.core.mapping.MongoPersistentProperty, source: DBRef, proxy: java.lang.Object | any): any
                        }
                    }
                }
            }
        }
    }
}
