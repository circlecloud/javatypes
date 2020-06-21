declare namespace org {
    namespace apache {
        namespace catalina {
            namespace valves {
                namespace rewrite {
                    // @ts-ignore
                    class Substitution extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        elements: org.apache.catalina.valves.rewrite.Substitution.SubstitutionElement[]
                        // @ts-ignore
                        sub: java.lang.String | string
                        // @ts-ignore
                        public getSub(): string
                        // @ts-ignore
                        public setSub(sub: java.lang.String | string): void
                        // @ts-ignore
                        public parse(maps: java.util.Map<java.lang.String | string, org.apache.catalina.valves.rewrite.RewriteMap>): void
                        /**
                         * Evaluate the substitution based on the context.
                         * @param rule corresponding matched rule
                         * @param cond last matched condition
                         * @param resolver The property resolver
                         * @return The substitution result
                         */
                        // @ts-ignore
                        public evaluate(rule: java.util.regex.Matcher, cond: java.util.regex.Matcher, resolver: org.apache.catalina.valves.rewrite.Resolver): string
                    }
                }
            }
        }
    }
}
