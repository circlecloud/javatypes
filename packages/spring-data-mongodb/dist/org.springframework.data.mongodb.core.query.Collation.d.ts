declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace query {
                        /**
                         * Central abstraction for MongoDB collation support. <br />
                         * Allows fluent creation of a collation {@link Document} that can be used for creating collections & indexes as well as
                         * querying data.
                         * <p/>
                         * <strong>NOTE:</strong> Please keep in mind that queries will only make use of an index with collation settings if the
                         * query itself specifies the same collation.
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @author Jens Schauder
                         * @see <a href="https://docs.mongodb.com/manual/reference/collation/">MongoDB Reference - Collation</a>
                         * @since 2.0
                         */
                        // @ts-ignore
                        class Collation extends java.lang.Object {
                            /**
                             * Create a {@link Collation} using {@literal simple} binary comparison.
                             * @return a {#link Collation} for {@literal simple} binary comparison.
                             */
                            // @ts-ignore
                            public static simple(): org.springframework.data.mongodb.core.query.Collation
                            /**
                             * Create new {@link Collation} with locale set to {{@link java.util.Locale#getLanguage()}} and
                             * {@link java.util.Locale#getVariant()}.
                             * @param locale must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static of(locale: java.util.Locale): org.springframework.data.mongodb.core.query.Collation
                            /**
                             * Create new {@link Collation} with locale set to the given ICU language.
                             * @param language must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static of(language: java.lang.String | string): org.springframework.data.mongodb.core.query.Collation
                            /**
                             * Create new {@link Collation} with locale set to the given {@link CollationLocale}.
                             * @param locale must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static of(locale: org.springframework.data.mongodb.core.query.Collation.CollationLocale): org.springframework.data.mongodb.core.query.Collation
                            /**
                             * Create new {@link Collation} from values in {@link Document}.
                             * @param source must not be {#literal null}.
                             * @return 
                             * @see <a href="https://docs.mongodb.com/manual/reference/collation/#collation-document">MongoDB Reference -
                             *       Collation Document</a>
                             */
                            // @ts-ignore
                            public static from(source: Document): org.springframework.data.mongodb.core.query.Collation
                            /**
                             * Set the level of comparison to perform.
                             * @param strength
                             * @return new {#link Collation}.
                             */
                            // @ts-ignore
                            public strength(strength: number /*int*/): org.springframework.data.mongodb.core.query.Collation
                            /**
                             * Set the level of comparison to perform.
                             * @param comparisonLevel must not be {#literal null}.
                             * @return new {#link Collation}
                             */
                            // @ts-ignore
                            public strength(comparisonLevel: org.springframework.data.mongodb.core.query.Collation.ComparisonLevel): org.springframework.data.mongodb.core.query.Collation
                            /**
                             * Set whether to include {@code caseLevel} comparison. <br />
                             * @param caseLevel
                             * @return new {#link Collation}.
                             */
                            // @ts-ignore
                            public caseLevel(caseLevel: boolean): org.springframework.data.mongodb.core.query.Collation
                            /**
                             * Set the flag that determines sort order of case differences during tertiary level comparisons.
                             * @param caseFirst must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public caseFirst(caseFirst: java.lang.String | string): org.springframework.data.mongodb.core.query.Collation
                            /**
                             * Set the flag that determines sort order of case differences during tertiary level comparisons.
                             * @param caseFirst must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public caseFirst(sort: org.springframework.data.mongodb.core.query.Collation.CaseFirst): org.springframework.data.mongodb.core.query.Collation
                            /**
                             * Treat numeric strings as numbers for comparison.
                             * @return new {#link Collation}.
                             */
                            // @ts-ignore
                            public numericOrderingEnabled(): org.springframework.data.mongodb.core.query.Collation
                            /**
                             * Treat numeric strings as string for comparison.
                             * @return new {#link Collation}.
                             */
                            // @ts-ignore
                            public numericOrderingDisabled(): org.springframework.data.mongodb.core.query.Collation
                            /**
                             * Set the flag that determines whether to compare numeric strings as numbers or as strings.
                             * @return new {#link Collation}.
                             */
                            // @ts-ignore
                            public numericOrdering(flag: boolean): org.springframework.data.mongodb.core.query.Collation
                            /**
                             * Set the Field that determines whether collation should consider whitespace and punctuation as base characters for
                             * purposes of comparison.
                             * @param alternate must not be {#literal null}.
                             * @return new {#link Collation}.
                             */
                            // @ts-ignore
                            public alternate(alternate: java.lang.String | string): org.springframework.data.mongodb.core.query.Collation
                            /**
                             * Set the Field that determines whether collation should consider whitespace and punctuation as base characters for
                             * purposes of comparison.
                             * @param alternate must not be {#literal null}.
                             * @return new {#link Collation}.
                             */
                            // @ts-ignore
                            public alternate(alternate: org.springframework.data.mongodb.core.query.Collation.Alternate): org.springframework.data.mongodb.core.query.Collation
                            /**
                             * Sort string with diacritics sort from back of the string.
                             * @return new {#link Collation}.
                             */
                            // @ts-ignore
                            public backwardDiacriticSort(): org.springframework.data.mongodb.core.query.Collation
                            /**
                             * Do not sort string with diacritics sort from back of the string.
                             * @return new {#link Collation}.
                             */
                            // @ts-ignore
                            public forwardDiacriticSort(): org.springframework.data.mongodb.core.query.Collation
                            /**
                             * Set the flag that determines whether strings with diacritics sort from back of the string.
                             * @param backwards must not be {#literal null}.
                             * @return new {#link Collation}.
                             */
                            // @ts-ignore
                            public backwards(backwards: boolean): org.springframework.data.mongodb.core.query.Collation
                            /**
                             * Enable text normalization.
                             * @return new {#link Collation}.
                             */
                            // @ts-ignore
                            public normalizationEnabled(): org.springframework.data.mongodb.core.query.Collation
                            /**
                             * Disable text normalization.
                             * @return new {#link Collation}.
                             */
                            // @ts-ignore
                            public normalizationDisabled(): org.springframework.data.mongodb.core.query.Collation
                            /**
                             * Set the flag that determines whether to check if text require normalization and to perform normalization.
                             * @param normalization must not be {#literal null}.
                             * @return new {#link Collation}.
                             */
                            // @ts-ignore
                            public normalization(normalization: boolean): org.springframework.data.mongodb.core.query.Collation
                            /**
                             * Set the field that determines up to which characters are considered ignorable when alternate is {@code shifted}.
                             * @param maxVariable must not be {#literal null}.
                             * @return new {#link Collation}.
                             */
                            // @ts-ignore
                            public maxVariable(maxVariable: java.lang.String | string): org.springframework.data.mongodb.core.query.Collation
                            /**
                             * Get the {@link Document} representation of the {@link Collation}.
                             * @return 
                             */
                            // @ts-ignore
                            public toDocument(): Document
                            /**
                             * Get the {@link com.mongodb.client.model.Collation} representation of the {@link Collation}.
                             * @return 
                             */
                            // @ts-ignore
                            public toMongoCollation(): com.mongodb.client.model.Collation
                            /**
                             * Transform {@code this} {@link Collation} by applying a {@link Converter}.
                             * @param mapper
                             * @param <R>
                             * @return 
                             */
                            // @ts-ignore
                            public map<R>(mapper: object): R
                            // @ts-ignore
                            public toString(): string
                        }
                    }
                }
            }
        }
    }
}
