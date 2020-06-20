declare namespace org {
    namespace springframework {
        namespace context {
            namespace support {
                /**
                 * Empty {@link MessageSource} that delegates all calls to the parent MessageSource.
                 * If no parent is available, it simply won't resolve any message.
                 * <p>Used as placeholder by AbstractApplicationContext, if the context doesn't
                 * define its own MessageSource. Not intended for direct use in applications.
                 * @author Juergen Hoeller
                 * @since 1.1.5
                 * @see AbstractApplicationContext
                 */
                // @ts-ignore
                class DelegatingMessageSource extends org.springframework.context.support.MessageSourceSupport implements org.springframework.context.HierarchicalMessageSource {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    setParentMessageSource(parent: org.springframework.context.MessageSource): void
                    // @ts-ignore
                    getParentMessageSource(): org.springframework.context.MessageSource
                    // @ts-ignore
                    getMessage(code: string, args: any[], defaultMessage: string, locale: java.util.Locale): java.lang.String
                    // @ts-ignore
                    getMessage(code: string, args: any[], locale: java.util.Locale): java.lang.String
                    // @ts-ignore
                    getMessage(resolvable: org.springframework.context.MessageSourceResolvable, locale: java.util.Locale): java.lang.String
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}
