declare namespace io {
    namespace lumine {
        namespace utils {
            namespace network {
                namespace messaging {
                    namespace conversation {
                        // @ts-ignore
                        interface ConversationChannelAgent<T extends io.lumine.utils.network.messaging.conversation.ConversationMessage, R extends io.lumine.utils.network.messaging.conversation.ConversationMessage> extends io.lumine.utils.terminable.Terminable {
                            // @ts-ignore
                            getChannel(): io.lumine.utils.network.messaging.conversation.ConversationChannel<T, R>
                            // @ts-ignore
                            getListeners(): Array<io.lumine.utils.network.messaging.conversation.ConversationChannelListener<T, R>>
                            // @ts-ignore
                            hasListeners(): boolean
                            // @ts-ignore
                            addListener(p0: io.lumine.utils.network.messaging.conversation.ConversationChannelListener<T, R>): boolean
                            // @ts-ignore
                            removeListener(p0: io.lumine.utils.network.messaging.conversation.ConversationChannelListener<T, R>): boolean
                            // @ts-ignore
                            terminate(): boolean
                        }
                    }
                }
            }
        }
    }
}
