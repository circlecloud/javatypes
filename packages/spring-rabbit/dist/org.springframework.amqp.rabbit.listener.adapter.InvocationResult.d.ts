declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace listener {
                    namespace adapter {
                        /**
                         * The result of a listener method invocation.
                         * @author Gary Russell
                         * @since 2.1
                         */
                        // @ts-ignore
                        class InvocationResult extends java.lang.Object {
                            // @ts-ignore
                            constructor(result: java.lang.Object | any, sendTo: Expression, returnType: java.lang.reflect.Type)
                            // @ts-ignore
                            public getReturnValue(): any
                            // @ts-ignore
                            public getSendTo(): Expression
                            // @ts-ignore
                            public getReturnType(): java.lang.reflect.Type
                            // @ts-ignore
                            public toString(): string
                        }
                    }
                }
            }
        }
    }
}
