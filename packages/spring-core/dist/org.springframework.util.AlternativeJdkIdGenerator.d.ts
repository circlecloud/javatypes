declare namespace org {
    namespace springframework {
        namespace util {
            /**
             * An {@link IdGenerator} that uses {@link SecureRandom} for the initial seed and
             * {@link Random} thereafter, instead of calling {@link UUID#randomUUID()} every
             * time as {@link org.springframework.util.JdkIdGenerator JdkIdGenerator} does.
             * This provides a better balance between securely random ids and performance.
             * @author Rossen Stoyanchev
             * @author Rob Winch
             * @since 4.0
             */
            // @ts-ignore
            class AlternativeJdkIdGenerator extends java.lang.Object implements org.springframework.util.IdGenerator {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public generateId(): java.util.UUID
            }
        }
    }
}
