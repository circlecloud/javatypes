declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace query {
                        /**
                         * Implementation of {@link CriteriaDefinition} to be used for full text search.
                         * @author Christoph Strobl
                         * @author Oliver Gierke
                         * @author Mark Paluch
                         * @since 1.6
                         */
                        // @ts-ignore
                        class TextCriteria extends java.lang.Object implements org.springframework.data.mongodb.core.query.CriteriaDefinition {
                            /**
                             * Creates a new {@link TextCriteria}.
                             * @see #forDefaultLanguage()
                             * @see #forLanguage(String)
                             */
                            // @ts-ignore
                            constructor()
                            /**
                             * Returns a new {@link TextCriteria} for the default language.
                             * @return 
                             */
                            // @ts-ignore
                            public static forDefaultLanguage(): org.springframework.data.mongodb.core.query.TextCriteria
                            /**
                             * For a full list of supported languages see the mongodb reference manual for
                             * <a href="https://docs.mongodb.org/manual/reference/text-search-languages/">Text Search Languages</a>.
                             * @param language
                             * @return 
                             */
                            // @ts-ignore
                            public static forLanguage(language: java.lang.String | string): org.springframework.data.mongodb.core.query.TextCriteria
                            /**
                             * Configures the {@link TextCriteria} to match any of the given words.
                             * @param words the words to match.
                             * @return 
                             */
                            // @ts-ignore
                            public matchingAny(...words: java.lang.String[] | string[]): org.springframework.data.mongodb.core.query.TextCriteria
                            /**
                             * Adds given {@link Term} to criteria.
                             * @param term must not be {#literal null}.
                             */
                            // @ts-ignore
                            public matching(term: org.springframework.data.mongodb.core.query.Term): org.springframework.data.mongodb.core.query.TextCriteria
                            /**
                             * @param term
                             * @return 
                             */
                            // @ts-ignore
                            public matching(term: java.lang.String | string): org.springframework.data.mongodb.core.query.TextCriteria
                            /**
                             * @param term
                             * @return 
                             */
                            // @ts-ignore
                            public notMatching(term: java.lang.String | string): org.springframework.data.mongodb.core.query.TextCriteria
                            /**
                             * @param words
                             * @return 
                             */
                            // @ts-ignore
                            public notMatchingAny(...words: java.lang.String[] | string[]): org.springframework.data.mongodb.core.query.TextCriteria
                            /**
                             * Given value will treated as a single phrase.
                             * @param phrase
                             * @return 
                             */
                            // @ts-ignore
                            public notMatchingPhrase(phrase: java.lang.String | string): org.springframework.data.mongodb.core.query.TextCriteria
                            /**
                             * Given value will treated as a single phrase.
                             * @param phrase
                             * @return 
                             */
                            // @ts-ignore
                            public matchingPhrase(phrase: java.lang.String | string): org.springframework.data.mongodb.core.query.TextCriteria
                            /**
                             * Optionally enable or disable case sensitive search.
                             * @param caseSensitive boolean flag to enable/disable.
                             * @return never {#literal null}.
                             * @since 1.10
                             */
                            // @ts-ignore
                            public caseSensitive(caseSensitive: boolean): org.springframework.data.mongodb.core.query.TextCriteria
                            /**
                             * Optionally enable or disable diacritic sensitive search against version 3 text indexes.
                             * @param diacriticSensitive boolean flag to enable/disable.
                             * @return never {#literal null}.
                             * @since 1.10
                             */
                            // @ts-ignore
                            public diacriticSensitive(diacriticSensitive: boolean): org.springframework.data.mongodb.core.query.TextCriteria
                            // @ts-ignore
                            public getKey(): string
                            // @ts-ignore
                            public getCriteriaObject(): Document
                        }
                    }
                }
            }
        }
    }
}
