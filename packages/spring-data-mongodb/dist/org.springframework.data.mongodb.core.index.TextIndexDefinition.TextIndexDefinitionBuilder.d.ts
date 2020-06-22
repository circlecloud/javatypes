declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace index {
                        namespace TextIndexDefinition {
                            /**
                             * {@link TextIndexDefinitionBuilder} helps defining options for creating {@link TextIndexDefinition}.
                             * @author Christoph Strobl
                             * @since 1.6
                             */
                            // @ts-ignore
                            class TextIndexDefinitionBuilder extends java.lang.Object {
                                // @ts-ignore
                                constructor()
                                /**
                                 * Define the name to be used when creating the index in the store.
                                 * @param name
                                 * @return 
                                 */
                                // @ts-ignore
                                public named(name: java.lang.String | string): org.springframework.data.mongodb.core.index.TextIndexDefinition.TextIndexDefinitionBuilder
                                /**
                                 * Define the index to span all fields using wildcard. <br/>
                                 * <strong>NOTE</strong> {@link TextIndexDefinition} cannot contain any other fields when defined with wildcard.
                                 * @return 
                                 */
                                // @ts-ignore
                                public onAllFields(): org.springframework.data.mongodb.core.index.TextIndexDefinition.TextIndexDefinitionBuilder
                                /**
                                 * Include given fields with default weight.
                                 * @param fieldnames
                                 * @return 
                                 */
                                // @ts-ignore
                                public onFields(...fieldnames: java.lang.String[] | string[]): org.springframework.data.mongodb.core.index.TextIndexDefinition.TextIndexDefinitionBuilder
                                /**
                                 * Include given field with default weight.
                                 * @param fieldname
                                 * @return 
                                 */
                                // @ts-ignore
                                public onField(fieldname: java.lang.String | string): org.springframework.data.mongodb.core.index.TextIndexDefinition.TextIndexDefinitionBuilder
                                /**
                                 * Include given field with weight.
                                 * @param fieldname
                                 * @return 
                                 */
                                // @ts-ignore
                                public onField(fieldname: java.lang.String | string, weight: java.lang.Float | number): org.springframework.data.mongodb.core.index.TextIndexDefinition.TextIndexDefinitionBuilder
                                /**
                                 * Define the default language to be used when indexing documents.
                                 * @param language
                                 * @return 
                                 * @see <a href=
                                 *       "https://docs.mongodb.org/manual/tutorial/specify-language-for-text-index/#specify-default-language-text-index">https://docs.mongodb.org/manual/tutorial/specify-language-for-text-index/#specify-default-language-text-index</a>
                                 */
                                // @ts-ignore
                                public withDefaultLanguage(language: java.lang.String | string): org.springframework.data.mongodb.core.index.TextIndexDefinition.TextIndexDefinitionBuilder
                                /**
                                 * Define field for language override.
                                 * @param fieldname
                                 * @return 
                                 */
                                // @ts-ignore
                                public withLanguageOverride(fieldname: java.lang.String | string): org.springframework.data.mongodb.core.index.TextIndexDefinition.TextIndexDefinitionBuilder
                                /**
                                 * Only index the documents that meet the specified {@link IndexFilter filter expression}.
                                 * @param filter can be {#literal null}.
                                 * @return 
                                 * @see <a href=
                                 *       "https://docs.mongodb.com/manual/core/index-partial/">https://docs.mongodb.com/manual/core/index-partial/</a>
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public partial(filter: org.springframework.data.mongodb.core.index.IndexFilter): org.springframework.data.mongodb.core.index.TextIndexDefinition.TextIndexDefinitionBuilder
                                // @ts-ignore
                                public build(): org.springframework.data.mongodb.core.index.TextIndexDefinition
                            }
                        }
                    }
                }
            }
        }
    }
}
