declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace support {
                namespace converter {
                    /**
                     * Abstract type mapper.
                     * @author Mark Pollack
                     * @author Sam Nelson
                     * @author Andreas Asplund
                     * @author Gary Russell
                     */
                    // @ts-ignore
                    abstract class AbstractJavaTypeMapper extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public static readonly DEFAULT_CLASSID_FIELD_NAME: java.lang.String | string
                        // @ts-ignore
                        public static readonly DEFAULT_CONTENT_CLASSID_FIELD_NAME: java.lang.String | string
                        // @ts-ignore
                        public static readonly DEFAULT_KEY_CLASSID_FIELD_NAME: java.lang.String | string
                        // @ts-ignore
                        public getClassIdFieldName(): string
                        // @ts-ignore
                        public getContentClassIdFieldName(): string
                        // @ts-ignore
                        public getKeyClassIdFieldName(): string
                        // @ts-ignore
                        public setIdClassMapping(idClassMapping: java.util.Map<java.lang.String | string, java.lang.Class<any>>): void
                        // @ts-ignore
                        public setBeanClassLoader(classLoader: java.lang.ClassLoader): void
                        // @ts-ignore
                        getClassLoader(): java.lang.ClassLoader
                        // @ts-ignore
                        addHeader(properties: org.springframework.amqp.core.MessageProperties, headerName: java.lang.String | string, clazz: java.lang.Class<any>): void
                        // @ts-ignore
                        retrieveHeader(properties: org.springframework.amqp.core.MessageProperties, headerName: java.lang.String | string): string
                        // @ts-ignore
                        retrieveHeaderAsString(properties: org.springframework.amqp.core.MessageProperties, headerName: java.lang.String | string): string
                        // @ts-ignore
                        public getIdClassMapping(): java.util.Map<java.lang.String | string, java.lang.Class<any>>
                        // @ts-ignore
                        hasInferredTypeHeader(properties: org.springframework.amqp.core.MessageProperties): boolean
                        // @ts-ignore
                        fromInferredTypeHeader(properties: org.springframework.amqp.core.MessageProperties): JavaType
                    }
                }
            }
        }
    }
}
