declare namespace org {
    namespace apache {
        namespace catalina {
            namespace valves {
                namespace rewrite {
                    namespace RewriteCond {
                        // @ts-ignore
                        class LexicalCondition extends org.apache.catalina.valves.rewrite.RewriteCond.Condition {
                            // @ts-ignore
                            constructor()
                            /**
                             * -1: &lt;
                             * 0: =
                             * 1: &gt;
                             */
                            // @ts-ignore
                            public type: number /*int*/
                            // @ts-ignore
                            public condition: java.lang.String | string
                            // @ts-ignore
                            public evaluate(value: java.lang.String | string, resolver: org.apache.catalina.valves.rewrite.Resolver): boolean
                        }
                    }
                }
            }
        }
    }
}
