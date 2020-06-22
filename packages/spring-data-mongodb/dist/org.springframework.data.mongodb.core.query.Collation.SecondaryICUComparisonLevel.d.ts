declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace query {
                        namespace Collation {
                            /**
                             * Secondary-strength {@link ICUComparisonLevel}.
                             */
                            // @ts-ignore
                            class SecondaryICUComparisonLevel extends org.springframework.data.mongodb.core.query.Collation.ICUComparisonLevel {
                                /**
                                 * Include case comparison.
                                 * @return new {#link SecondaryICUComparisonLevel}
                                 */
                                // @ts-ignore
                                public includeCase(): org.springframework.data.mongodb.core.query.Collation.ComparisonLevel
                                /**
                                 * Exclude case comparison.
                                 * @return new {#link SecondaryICUComparisonLevel}
                                 */
                                // @ts-ignore
                                public excludeCase(): org.springframework.data.mongodb.core.query.Collation.ComparisonLevel
                            }
                        }
                    }
                }
            }
        }
    }
}
