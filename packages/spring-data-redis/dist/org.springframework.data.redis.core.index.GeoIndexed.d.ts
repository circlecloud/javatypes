declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace index {
                        /**
                         * Mark properties value to be included in a secondary index. <br />
                         * Uses Redis {@literal GEO} structures for storage. <br />
                         * The value will be part of the key built for the index.
                         * @author Christoph Strobl
                         * @since 1.8
                         */
                        // @ts-ignore
                        abstract class GeoIndexed implements java.lang.annotation.Annotation {
                        }
                    }
                }
            }
        }
    }
}
