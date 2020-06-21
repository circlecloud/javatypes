declare namespace org {
    namespace apache {
        namespace catalina {
            namespace valves {
                namespace rewrite {
                    namespace RewriteCond {
                        // @ts-ignore
                        class PatternCondition extends org.apache.catalina.valves.rewrite.RewriteCond.Condition {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public pattern: java.util.regex.Pattern
                            // @ts-ignore
                            public evaluate(value: java.lang.String | string, resolver: org.apache.catalina.valves.rewrite.Resolver): boolean
                            // @ts-ignore
                            public getMatcher(): java.util.regex.Matcher
                        }
                    }
                }
            }
        }
    }
}
