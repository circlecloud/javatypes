declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace BulkOperations {
                        /**
                         * Mode for bulk operation.
                         */
                        // @ts-ignore
                        class BulkMode extends java.lang.Enum<org.springframework.data.mongodb.core.BulkOperations.BulkMode> {
                            /**
                             * Perform bulk operations in sequence. The first error will cancel processing.
                             */
                            // @ts-ignore
                            readonly ORDERED: org.springframework.data.mongodb.core.BulkOperations.BulkMode
                            /**
                             * Perform bulk operations in parallel. Processing will continue on errors.
                             */
                            // @ts-ignore
                            readonly UNORDERED: org.springframework.data.mongodb.core.BulkOperations.BulkMode
                            // @ts-ignore
                            values(): org.springframework.data.mongodb.core.BulkOperations.BulkMode[]
                            // @ts-ignore
                            valueOf(name: java.lang.String | string): org.springframework.data.mongodb.core.BulkOperations.BulkMode
                        }
                    }
                }
            }
        }
    }
}
