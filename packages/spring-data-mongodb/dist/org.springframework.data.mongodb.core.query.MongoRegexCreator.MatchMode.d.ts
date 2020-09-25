declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace query {
                        namespace MongoRegexCreator {
                            /**
                             * Match modes for treatment of {@link String} values.
                             * @author Christoph Strobl
                             * @author Jens Schauder
                             */
                            // @ts-ignore
                            class MatchMode extends java.lang.Enum<org.springframework.data.mongodb.core.query.MongoRegexCreator.MatchMode> {
                                /**
                                 * Store specific default.
                                 */
                                // @ts-ignore
                                public static readonly DEFAULT: org.springframework.data.mongodb.core.query.MongoRegexCreator.MatchMode
                                /**
                                 * Matches the exact string
                                 */
                                // @ts-ignore
                                public static readonly EXACT: org.springframework.data.mongodb.core.query.MongoRegexCreator.MatchMode
                                /**
                                 * Matches string starting with pattern
                                 */
                                // @ts-ignore
                                public static readonly STARTING_WITH: org.springframework.data.mongodb.core.query.MongoRegexCreator.MatchMode
                                /**
                                 * Matches string ending with pattern
                                 */
                                // @ts-ignore
                                public static readonly ENDING_WITH: org.springframework.data.mongodb.core.query.MongoRegexCreator.MatchMode
                                /**
                                 * Matches string containing pattern
                                 */
                                // @ts-ignore
                                public static readonly CONTAINING: org.springframework.data.mongodb.core.query.MongoRegexCreator.MatchMode
                                /**
                                 * Treats strings as regular expression patterns
                                 */
                                // @ts-ignore
                                public static readonly REGEX: org.springframework.data.mongodb.core.query.MongoRegexCreator.MatchMode
                                // @ts-ignore
                                public static readonly LIKE: org.springframework.data.mongodb.core.query.MongoRegexCreator.MatchMode
                                // @ts-ignore
                                public static values(): org.springframework.data.mongodb.core.query.MongoRegexCreator.MatchMode[]
                                // @ts-ignore
                                public static valueOf(name: java.lang.String | string): org.springframework.data.mongodb.core.query.MongoRegexCreator.MatchMode
                            }
                        }
                    }
                }
            }
        }
    }
}
