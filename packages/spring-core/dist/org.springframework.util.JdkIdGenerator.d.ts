declare namespace org {
    namespace springframework {
        namespace util {
            /**
             * An {@link IdGenerator} that calls {@link java.util.UUID#randomUUID()}.
             * @author Rossen Stoyanchev
             * @since 4.1.5
             */
            // @ts-ignore
            class JdkIdGenerator extends java.lang.Object implements org.springframework.util.IdGenerator {
                // @ts-ignore
                constructor()
                // @ts-ignore
                generateId(): java.util.UUID
            }
        }
    }
}
