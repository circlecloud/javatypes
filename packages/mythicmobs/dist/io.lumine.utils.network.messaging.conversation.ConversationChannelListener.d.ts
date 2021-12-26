declare namespace io {
    namespace lumine {
        namespace utils {
            namespace network {
                namespace messaging {
                    namespace conversation {
                        // @ts-ignore
                        interface ConversationChannelListener<T extends io.lumine.utils.network.messaging.conversation.ConversationMessage, R extends io.lumine.utils.network.messaging.conversation.ConversationMessage> {
                            // @ts-ignore
                            onMessage(p0: io.lumine.utils.network.messaging.conversation.ConversationChannelAgent<T, R>, p1: java.lang.String | string, p2: T): io.lumine.utils.network.messaging.conversation.ConversationReply<R>
                        }
                    }
                }
            }
        }
    }
}
