declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace query {
                        namespace Collation {
                            /**
                             * Tertiary-strength {@link ICUComparisonLevel}.
                             */
                            // @ts-ignore
                            class TertiaryICUComparisonLevel extends org.springframework.data.mongodb.core.query.Collation.ICUComparisonLevel {
                                /**
                                 * Set the flag that determines sort order of case differences.
                                 * @param caseFirst must not be {#literal null}.
                                 * @return new {#link ICUComparisonLevel}
                                 */
                                // @ts-ignore
                                public caseFirst(caseFirst: org.springframework.data.mongodb.core.query.Collation.CaseFirst): org.springframework.data.mongodb.core.query.Collation.ComparisonLevel
                            }
                        }
                    }
                }
            }
        }
    }
}
