declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace support {
                    /**
                     * FactoryBean for creating Expression instances.
                     * @author Mark Fisher
                     * @author Gary Russell
                     * @since 1.4
                     */
                    // @ts-ignore
                    class ExpressionFactoryBean extends java.lang.Object {
                        // @ts-ignore
                        constructor(expressionString: java.lang.String | string)
                        // @ts-ignore
                        public setParserConfiguration(parserConfiguration: SpelParserConfiguration): void
                        // @ts-ignore
                        public getObjectType(): java.lang.Class<any>
                        // @ts-ignore
                        createInstance(): Expression
                    }
                }
            }
        }
    }
}
