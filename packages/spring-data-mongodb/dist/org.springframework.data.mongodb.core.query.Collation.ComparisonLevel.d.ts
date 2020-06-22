declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace query {
                        namespace Collation {
                            /**
                             * Abstraction for the ICU Comparison Levels.
                             * @since 2.0
                             */
                            // @ts-ignore
                            interface ComparisonLevel {
                                /**
                                 * Primary level of comparison. Collation performs comparisons of the base characters only, ignoring other
                                 * differences such as diacritics and case. <br />
                                 * The {@code caseLevel} can be set via {@link PrimaryICUComparisonLevel#includeCase()} and
                                 * {@link PrimaryICUComparisonLevel#excludeCase()}.
                                 * @return new {#link SecondaryICUComparisonLevel}.
                                 */
                                // @ts-ignore
                                primary(): org.springframework.data.mongodb.core.query.Collation.PrimaryICUComparisonLevel
                                /**
                                 * Secondary level of comparison. Collation performs comparisons up to secondary differences, such as
                                 * diacritics.<br />
                                 * The {@code caseLevel} can be set via {@link SecondaryICUComparisonLevel#includeCase()} and
                                 * {@link SecondaryICUComparisonLevel#excludeCase()}.
                                 * @return new {#link SecondaryICUComparisonLevel}.
                                 */
                                // @ts-ignore
                                secondary(): org.springframework.data.mongodb.core.query.Collation.SecondaryICUComparisonLevel
                                /**
                                 * Tertiary level of comparison. Collation performs comparisons up to tertiary differences, such as case and letter
                                 * variants. <br />
                                 * The {@code caseLevel} cannot be set for {@link ICUComparisonLevel} above {@code secondary}.
                                 * @return new {#link ICUComparisonLevel}.
                                 */
                                // @ts-ignore
                                tertiary(): org.springframework.data.mongodb.core.query.Collation.TertiaryICUComparisonLevel
                                /**
                                 * Quaternary Level. Limited for specific use case to consider punctuation. <br />
                                 * The {@code caseLevel} cannot be set for {@link ICUComparisonLevel} above {@code secondary}.
                                 * @return new {#link ComparisonLevel}.
                                 */
                                // @ts-ignore
                                quaternary(): org.springframework.data.mongodb.core.query.Collation.ComparisonLevel
                                /**
                                 * Identical Level. Limited for specific use case of tie breaker. <br />
                                 * The {@code caseLevel} cannot be set for {@link ICUComparisonLevel} above {@code secondary}.
                                 * @return new {#link ComparisonLevel}.
                                 */
                                // @ts-ignore
                                identical(): org.springframework.data.mongodb.core.query.Collation.ComparisonLevel
                                /**
                                 * @return collation strength, {#literal 1} for primary, {@literal 2} for secondary and so on.
                                 */
                                // @ts-ignore
                                getLevel(): number /*int*/
                                // @ts-ignore
                                getCaseFirst(): java.util.Optional<org.springframework.data.mongodb.core.query.Collation.CaseFirst>
                                // @ts-ignore
                                getCaseLevel(): java.util.Optional<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
