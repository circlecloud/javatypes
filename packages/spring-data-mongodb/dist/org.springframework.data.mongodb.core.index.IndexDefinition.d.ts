declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace index {
                        /**
                         * @author Jon Brisbin <jbrisbin#vmware.com>
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        interface IndexDefinition {
                            // @ts-ignore
                            getIndexKeys(): Document
                            // @ts-ignore
                            getIndexOptions(): Document
                        }
                    }
                }
            }
        }
    }
}
