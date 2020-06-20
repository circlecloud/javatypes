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
                    class AbstractJavaTypeMapper extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        readonly DEFAULT_CLASSID_FIELD_NAME: string
                        // @ts-ignore
                        readonly DEFAULT_CONTENT_CLASSID_FIELD_NAME: string
                        // @ts-ignore
                        readonly DEFAULT_KEY_CLASSID_FIELD_NAME: string
                        // @ts-ignore
                        getClassIdFieldName(): java.lang.String
                        // @ts-ignore
                        getContentClassIdFieldName(): java.lang.String
                        // @ts-ignore
                        getKeyClassIdFieldName(): java.lang.String
                        // @ts-ignore
                        setIdClassMapping(idClassMapping: java.util.Map<java.lang.String, java.lang.Class<any>>): void
                        // @ts-ignore
                        setBeanClassLoader(classLoader: java.lang.ClassLoader): void
                        // @ts-ignore
                        getClassLoader(): java.lang.ClassLoader
                        // @ts-ignore
                        addHeader(properties: org.springframework.amqp.core.MessageProperties, headerName: string, clazz: java.lang.Class<any>): void
                        // @ts-ignore
                        retrieveHeader(properties: org.springframework.amqp.core.MessageProperties, headerName: string): java.lang.String
                        // @ts-ignore
                        retrieveHeaderAsString(properties: org.springframework.amqp.core.MessageProperties, headerName: string): java.lang.String
                        // @ts-ignore
                        getIdClassMapping(): java.util.Map<java.lang.String, java.lang.Class<?>>
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
