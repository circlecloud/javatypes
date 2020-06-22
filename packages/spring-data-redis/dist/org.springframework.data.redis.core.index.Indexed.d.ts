declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace index {
                        /**
                         * Mark properties value to be included in a secondary index. <br />
                         * Uses Redis {@literal SET} for storage. <br />
                         * The value will be part of the key built for the index.
                         * @author Christoph Strobl
                         * @since 1.7
                         */
                        // @ts-ignore
                        abstract class Indexed implements java.lang.annotation.Annotation {
                        }
                    }
                }
            }
        }
    }
}
