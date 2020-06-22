declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace query {
                        namespace Collation {
                            /**
                             * @since 2.0
                             */
                            // @ts-ignore
                            class Alternate extends java.lang.Object {
                                // @ts-ignore
                                constructor()
                                /**
                                 * Consider Whitespace and punctuation as base characters.
                                 * @return new {#link Alternate}.
                                 */
                                // @ts-ignore
                                public static nonIgnorable(): org.springframework.data.mongodb.core.query.Collation.Alternate
                                /**
                                 * Whitespace and punctuation are <strong>not</strong> considered base characters and are only distinguished at
                                 * strength. <br />
                                 * <strong>NOTE:</strong> Only works for {@link ICUComparisonLevel} above {@link ComparisonLevel#tertiary()}.
                                 * @return new {#link AlternateWithMaxVariable}.
                                 */
                                // @ts-ignore
                                public static shifted(): org.springframework.data.mongodb.core.query.Collation.AlternateWithMaxVariable
                            }
                        }
                    }
                }
            }
        }
    }
}
