declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace query {
                        /**
                         * A {@link Term} defines one or multiple words {@link Type#WORD} or phrases {@link Type#PHRASE} to be used in the
                         * context of full text search.
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 1.6
                         */
                        // @ts-ignore
                        class Term extends java.lang.Object {
                            /**
                             * Creates a new {@link Term} of {@link Type#WORD}.
                             * @param raw
                             */
                            // @ts-ignore
                            constructor(raw: java.lang.String | string)
                            /**
                             * Creates a new {@link Term} of given {@link Type}.
                             * @param raw
                             * @param type defaulted to {#link Type#WORD} if {@literal null}.
                             */
                            // @ts-ignore
                            constructor(raw: java.lang.String | string, type: org.springframework.data.mongodb.core.query.Term.Type)
                            /**
                             * Negates the term.
                             * @return 
                             */
                            // @ts-ignore
                            public negate(): org.springframework.data.mongodb.core.query.Term
                            /**
                             * @return return true if term is negated.
                             */
                            // @ts-ignore
                            public isNegated(): boolean
                            /**
                             * @return type of term. Never {#literal null}.
                             */
                            // @ts-ignore
                            public getType(): org.springframework.data.mongodb.core.query.Term.Type
                            /**
                             * Get formatted representation of term.
                             * @return 
                             */
                            // @ts-ignore
                            public getFormatted(): string
                            // @ts-ignore
                            public toString(): string
                            // @ts-ignore
                            quotePhrase(raw: java.lang.String | string): string
                            // @ts-ignore
                            negateRaw(raw: java.lang.String | string): string
                        }
                    }
                }
            }
        }
    }
}
