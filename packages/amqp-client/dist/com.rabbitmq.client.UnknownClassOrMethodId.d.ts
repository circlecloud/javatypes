declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Thrown when the protocol handlers detect an unknown class number or
             * method number.
             */
            // @ts-ignore
            class UnknownClassOrMethodId extends java.io.IOException {
                // @ts-ignore
                constructor(classId: number /*int*/)
                // @ts-ignore
                constructor(classId: number /*int*/, methodId: number /*int*/)
                // @ts-ignore
                readonly classId: number /*int*/
                // @ts-ignore
                readonly methodId: number /*int*/
                // @ts-ignore
                toString(): string
            }
        }
    }
}
