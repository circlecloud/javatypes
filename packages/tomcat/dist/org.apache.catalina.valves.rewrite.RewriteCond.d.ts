declare namespace org {
    namespace apache {
        namespace catalina {
            namespace valves {
                namespace rewrite {
                    // @ts-ignore
                    class RewriteCond extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        testString: java.lang.String | string
                        // @ts-ignore
                        condPattern: java.lang.String | string
                        // @ts-ignore
                        flagsString: java.lang.String | string
                        // @ts-ignore
                        positive: boolean
                        // @ts-ignore
                        test: org.apache.catalina.valves.rewrite.Substitution
                        // @ts-ignore
                        condition: org.apache.catalina.valves.rewrite.RewriteCond.Condition
                        /**
                         * This makes the test case-insensitive, i.e., there is no difference between
                         * 'A-Z' and 'a-z' both in the expanded TestString and the CondPattern. This
                         * flag is effective only for comparisons between TestString and CondPattern.
                         * It has no effect on filesystem and subrequest checks.
                         */
                        // @ts-ignore
                        public nocase: boolean
                        /**
                         * Use this to combine rule conditions with a local OR instead of the implicit AND.
                         */
                        // @ts-ignore
                        public ornext: boolean
                        // @ts-ignore
                        public getCondPattern(): string
                        // @ts-ignore
                        public setCondPattern(condPattern: java.lang.String | string): void
                        // @ts-ignore
                        public getTestString(): string
                        // @ts-ignore
                        public setTestString(testString: java.lang.String | string): void
                        // @ts-ignore
                        public getFlagsString(): string
                        // @ts-ignore
                        public setFlagsString(flagsString: java.lang.String | string): void
                        // @ts-ignore
                        public parse(maps: java.util.Map<java.lang.String | string, org.apache.catalina.valves.rewrite.RewriteMap>): void
                        // @ts-ignore
                        public getMatcher(): java.util.regex.Matcher
                        /**
                         * String representation.
                         */
                        // @ts-ignore
                        public toString(): string
                        /**
                         * Evaluate the condition based on the context
                         * @param rule corresponding matched rule
                         * @param cond last matched condition
                         * @param resolver Property resolver
                         * @return <code>true</code> if the condition matches
                         */
                        // @ts-ignore
                        public evaluate(rule: java.util.regex.Matcher, cond: java.util.regex.Matcher, resolver: org.apache.catalina.valves.rewrite.Resolver): boolean
                        // @ts-ignore
                        public isNocase(): boolean
                        // @ts-ignore
                        public setNocase(nocase: boolean): void
                        // @ts-ignore
                        public isOrnext(): boolean
                        // @ts-ignore
                        public setOrnext(ornext: boolean): void
                        // @ts-ignore
                        public isPositive(): boolean
                        // @ts-ignore
                        public setPositive(positive: boolean): void
                    }
                }
            }
        }
    }
}
