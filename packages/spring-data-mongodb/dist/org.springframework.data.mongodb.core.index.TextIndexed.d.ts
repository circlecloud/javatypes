declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace index {
                        /**
                         * {@link TextIndexed} marks a field to be part of the text index. As there can be only one text index per collection
                         * all fields marked with {@link TextIndexed} are combined into one single index. <br />
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 1.6
                         */
                        // @ts-ignore
                        abstract class TextIndexed implements java.lang.annotation.Annotation {
                        }
                    }
                }
            }
        }
    }
}
