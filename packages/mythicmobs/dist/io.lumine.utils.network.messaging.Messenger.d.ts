declare namespace io {
    namespace lumine {
        namespace utils {
            namespace network {
                namespace messaging {
                    // @ts-ignore
                    interface Messenger {
                        // @ts-ignore
                        getChannel<T>(p0: java.lang.String | string, p1: object): io.lumine.utils.network.messaging.Channel<T>
                        // @ts-ignore
                        getConversationChannel<T extends io.lumine.utils.network.messaging.conversation.ConversationMessage, R extends io.lumine.utils.network.messaging.conversation.ConversationMessage>(name: java.lang.String | string, type: object, replyType: object): io.lumine.utils.network.messaging.conversation.ConversationChannel<T, R>
                    }
                }
            }
        }
    }
}
