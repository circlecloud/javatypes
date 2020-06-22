declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace index {
                        /**
                         * {@link IndexDefinition} to span multiple keys for text search.
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 1.6
                         */
                        // @ts-ignore
                        class TextIndexDefinition extends java.lang.Object implements org.springframework.data.mongodb.core.index.IndexDefinition {
                            /**
                             * Creates a {@link TextIndexDefinition} for all fields in the document.
                             * @return 
                             */
                            // @ts-ignore
                            public static forAllFields(): org.springframework.data.mongodb.core.index.TextIndexDefinition
                            /**
                             * Get {@link TextIndexDefinitionBuilder} to create {@link TextIndexDefinition}.
                             * @return 
                             */
                            // @ts-ignore
                            public static builder(): org.springframework.data.mongodb.core.index.TextIndexDefinition.TextIndexDefinitionBuilder
                            /**
                             * @param fieldSpec
                             */
                            // @ts-ignore
                            public addFieldSpec(fieldSpec: org.springframework.data.mongodb.core.index.TextIndexDefinition.TextIndexedFieldSpec): void
                            /**
                             * @param fieldSpecs
                             */
                            // @ts-ignore
                            public addFieldSpecs(fieldSpecs: java.util.Collection<org.springframework.data.mongodb.core.index.TextIndexDefinition.TextIndexedFieldSpec> | Array<org.springframework.data.mongodb.core.index.TextIndexDefinition.TextIndexedFieldSpec>): void
                            /**
                             * Returns if the {@link TextIndexDefinition} has fields assigned.
                             * @return 
                             */
                            // @ts-ignore
                            public hasFieldSpec(): boolean
                            // @ts-ignore
                            public getIndexKeys(): Document
                            // @ts-ignore
                            public getIndexOptions(): Document
                        }
                    }
                }
            }
        }
    }
}
