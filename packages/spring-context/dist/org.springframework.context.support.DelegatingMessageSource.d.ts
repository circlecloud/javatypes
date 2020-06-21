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
                    public setParentMessageSource(parent: org.springframework.context.MessageSource): void
                    // @ts-ignore
                    public getParentMessageSource(): org.springframework.context.MessageSource
                    // @ts-ignore
                    public getMessage(code: java.lang.String | string, args: java.lang.Object[] | any[], defaultMessage: java.lang.String | string, locale: java.util.Locale): string
                    // @ts-ignore
                    public getMessage(code: java.lang.String | string, args: java.lang.Object[] | any[], locale: java.util.Locale): string
                    // @ts-ignore
                    public getMessage(resolvable: org.springframework.context.MessageSourceResolvable, locale: java.util.Locale): string
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
