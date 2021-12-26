declare namespace io {
    namespace lumine {
        namespace utils {
            namespace network {
                namespace messaging {
                    namespace conversation {
                        // @ts-ignore
                        interface ConversationReplyListener<R extends io.lumine.utils.network.messaging.conversation.ConversationMessage> {
                            // @ts-ignore
                            of<R extends io.lumine.utils.network.messaging.conversation.ConversationMessage>(onReply: java.util.function$.Function<any, io.lumine.utils.network.messaging.conversation.ConversationReplyListener.RegistrationAction>): io.lumine.utils.network.messaging.conversation.ConversationReplyListener<R>
                            // @ts-ignore
                            onReply(p0: R): io.lumine.utils.network.messaging.conversation.ConversationReplyListener.RegistrationAction
                            // @ts-ignore
                            onTimeout(p0: java.util.List<R> | Array<R>): void
                        }
                    }
                }
            }
        }
    }
}
