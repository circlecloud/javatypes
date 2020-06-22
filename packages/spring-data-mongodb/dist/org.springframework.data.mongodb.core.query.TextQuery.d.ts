declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace query {
                        /**
                         * {@link Query} implementation to be used to for performing full text searches.
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 1.6
                         */
                        // @ts-ignore
                        class TextQuery extends org.springframework.data.mongodb.core.query.Query {
                            /**
                             * Creates new {@link TextQuery} using the the given {@code wordsAndPhrases} with {@link TextCriteria}
                             * @param wordsAndPhrases
                             * @see TextCriteria#matching(String)
                             */
                            // @ts-ignore
                            constructor(wordsAndPhrases: java.lang.String | string)
                            /**
                             * Creates new {@link TextQuery} in {@code language}. <br />
                             * For a full list of supported languages see the mongdodb reference manual for
                             * <a href="https://docs.mongodb.org/manual/reference/text-search-languages/">Text Search Languages</a>.
                             * @param wordsAndPhrases
                             * @param language
                             * @see TextCriteria#forLanguage(String)
                             * @see TextCriteria#matching(String)
                             */
                            // @ts-ignore
                            constructor(wordsAndPhrases: java.lang.String | string, language: java.lang.String | string)
                            /**
                             * Creates new {@link TextQuery} using the {@code locale}s language.<br />
                             * For a full list of supported languages see the mongdodb reference manual for
                             * <a href="https://docs.mongodb.org/manual/reference/text-search-languages/">Text Search Languages</a>.
                             * @param wordsAndPhrases
                             * @param locale
                             */
                            // @ts-ignore
                            constructor(wordsAndPhrases: java.lang.String | string, locale: java.util.Locale)
                            /**
                             * Creates new {@link TextQuery} for given {@link TextCriteria}.
                             * @param criteria.
                             */
                            // @ts-ignore
                            constructor(criteria: org.springframework.data.mongodb.core.query.TextCriteria)
                            /**
                             * Creates new {@link TextQuery} searching for given {@link TextCriteria}.
                             * @param criteria
                             * @return 
                             */
                            // @ts-ignore
                            public static queryText(criteria: org.springframework.data.mongodb.core.query.TextCriteria): org.springframework.data.mongodb.core.query.TextQuery
                            /**
                             * Add sorting by text score. Will also add text score to returned fields.
                             * @see TextQuery#includeScore()
                             * @return 
                             */
                            // @ts-ignore
                            public sortByScore(): org.springframework.data.mongodb.core.query.TextQuery
                            /**
                             * Add field {@literal score} holding the documents textScore to the returned fields.
                             * @return 
                             */
                            // @ts-ignore
                            public includeScore(): org.springframework.data.mongodb.core.query.TextQuery
                            /**
                             * Include text search document score in returned fields using the given fieldname.
                             * @param fieldname
                             * @return 
                             */
                            // @ts-ignore
                            public includeScore(fieldname: java.lang.String | string): org.springframework.data.mongodb.core.query.TextQuery
                            /**
                             * Set the fieldname used for scoring.
                             * @param fieldName
                             */
                            // @ts-ignore
                            public setScoreFieldName(fieldName: java.lang.String | string): void
                            /**
                             * Get the fieldname used for scoring
                             * @return 
                             */
                            // @ts-ignore
                            public getScoreFieldName(): string
                            // @ts-ignore
                            public getFieldsObject(): Document
                            // @ts-ignore
                            public getSortObject(): Document
                            // @ts-ignore
                            public isSorted(): boolean
                        }
                    }
                }
            }
        }
    }
}
