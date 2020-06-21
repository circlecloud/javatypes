declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace impl {
                    /**
                     * Abstract implementation of {@link MessageEvent}. Contains a
                     * {@link org.spongepowered.api.event.message.MessageEvent.MessageFormatter}
                     * instance to hold the message data.
                     */
                    // @ts-ignore
                    abstract class AbstractMessageEvent extends org.spongepowered.api.event.impl.AbstractEvent implements org.spongepowered.api.event.message.MessageEvent {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        formatter: org.spongepowered.api.event.message.MessageEvent.MessageFormatter
                        // @ts-ignore
                        originalMessage: org.spongepowered.api.text.Text
                        // @ts-ignore
                        init(): void
                    }
                }
            }
        }
    }
}
