declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Public API for abstract AMQP content header objects.
             */
            // @ts-ignore
            interface ContentHeader extends java.lang.Cloneable {
                /**
                 * Retrieve the class ID (see the spec for a list of allowable IDs).
                 * @return class ID of this ContentHeader. Properly an unsigned short, i.e. only the lowest 16 bits are significant
                 */
                // @ts-ignore
                getClassId(): number /*int*/
                /**
                 * Retrieve the class name, eg "basic" (see the spec for a list of these).
                 * @return class name of this ContentHeader
                 */
                // @ts-ignore
                getClassName(): string
                /**
                 * A debugging utility - enable properties to be appended to a string buffer for use as trace messages.
                 * @param buffer a place to append the properties as a string
                 */
                // @ts-ignore
                appendPropertyDebugStringTo(buffer: java.lang.StringBuilder): void
            }
        }
    }
}
