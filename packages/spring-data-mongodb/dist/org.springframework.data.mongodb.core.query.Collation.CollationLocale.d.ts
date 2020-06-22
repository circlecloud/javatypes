declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace query {
                        namespace Collation {
                            /**
                             * ICU locale abstraction for usage with MongoDB {@link Collation}.
                             * @see <a href="https://site.icu-project.org">ICU - International Components for Unicode</a>
                             * @since 2.0
                             */
                            // @ts-ignore
                            class CollationLocale extends java.lang.Object {
                                // @ts-ignore
                                constructor()
                                /**
                                 * Create new {@link CollationLocale} for given language.
                                 * @param language must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static of(language: java.lang.String | string): org.springframework.data.mongodb.core.query.Collation.CollationLocale
                                /**
                                 * Define language variant.
                                 * @param variant must not be {#literal null}.
                                 * @return new {#link CollationLocale}.
                                 */
                                // @ts-ignore
                                public variant(variant: java.lang.String | string): org.springframework.data.mongodb.core.query.Collation.CollationLocale
                                /**
                                 * Get the string representation.
                                 * @return 
                                 */
                                // @ts-ignore
                                public asString(): string
                            }
                        }
                    }
                }
            }
        }
    }
}
