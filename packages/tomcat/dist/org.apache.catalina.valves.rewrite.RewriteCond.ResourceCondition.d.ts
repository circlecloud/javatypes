declare namespace org {
    namespace apache {
        namespace catalina {
            namespace valves {
                namespace rewrite {
                    namespace RewriteCond {
                        // @ts-ignore
                        class ResourceCondition extends org.apache.catalina.valves.rewrite.RewriteCond.Condition {
                            // @ts-ignore
                            constructor()
                            /**
                             * 0: -d (is directory ?)
                             * 1: -f (is regular file ?)
                             * 2: -s (is regular file with size ?)
                             */
                            // @ts-ignore
                            public type: number /*int*/
                            // @ts-ignore
                            public evaluate(value: java.lang.String | string, resolver: org.apache.catalina.valves.rewrite.Resolver): boolean
                        }
                    }
                }
            }
        }
    }
}
