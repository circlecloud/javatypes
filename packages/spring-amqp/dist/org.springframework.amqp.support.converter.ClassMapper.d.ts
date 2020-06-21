declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace support {
                namespace converter {
                    /**
                     * Strategy for setting metadata on messages such that one can create the class
                     * that needs to be instantiated when receiving a message.
                     * @author Mark Pollack
                     * @author James Carr
                     */
                    // @ts-ignore
                    interface ClassMapper {
                        // @ts-ignore
                        fromClass(clazz: java.lang.Class<any>, properties: org.springframework.amqp.core.MessageProperties): void
                        // @ts-ignore
                        toClass(properties: org.springframework.amqp.core.MessageProperties): java.lang.Class<any>
                    }
                }
            }
        }
    }
}
