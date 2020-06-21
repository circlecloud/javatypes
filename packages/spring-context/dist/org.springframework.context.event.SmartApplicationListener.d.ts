declare namespace org {
    namespace springframework {
        namespace context {
            namespace event {
                /**
                 * Extended variant of the standard {@link ApplicationListener} interface,
                 * exposing further metadata such as the supported event and source type.
                 * <p>For full introspection of generic event types, consider implementing
                 * the {@link GenericApplicationListener} interface instead.
                 * @author Juergen Hoeller
                 * @since 3.0
                 * @see GenericApplicationListener
                 * @see GenericApplicationListenerAdapter
                 */
                // @ts-ignore
                interface SmartApplicationListener extends org.springframework.context.ApplicationListener<org.springframework.context.ApplicationEvent> {
                    /**
                     * Determine whether this listener actually supports the given event type.
                     * @param eventType the event type (never {#code null})
                     */
                    // @ts-ignore
                    supportsEventType(eventType: java.lang.Class<any>): boolean
                    /**
                     * Determine whether this listener actually supports the given source type.
                     * <p>The default implementation always returns {@code true}.
                     * @param sourceType the source type, or {#code null} if no source
                     */
                    // @ts-ignore
                    supportsSourceType(sourceType: java.lang.Class<any>): boolean
                    /**
                     * Determine this listener's order in a set of listeners for the same event.
                     * <p>The default implementation returns {@link #LOWEST_PRECEDENCE}.
                     */
                    // @ts-ignore
                    getOrder(): number /*int*/
                }
            }
        }
    }
}
