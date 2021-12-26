declare namespace io {
    namespace lumine {
        namespace utils {
            namespace network {
                namespace messaging {
                    namespace conversation {
                        // @ts-ignore
                        interface ConversationChannel<T extends io.lumine.utils.network.messaging.conversation.ConversationMessage, R extends io.lumine.utils.network.messaging.conversation.ConversationMessage> extends io.lumine.utils.terminable.Terminable {
                            // @ts-ignore
                            getName(): string
                            // @ts-ignore
                            getOutgoingChannel(): io.lumine.utils.network.messaging.Channel<T>
                            // @ts-ignore
                            getReplyChannel(): io.lumine.utils.network.messaging.Channel<R>
                            // @ts-ignore
                            newAgent(): io.lumine.utils.network.messaging.conversation.ConversationChannelAgent<T, R>
                            // @ts-ignore
                            newAgent(listener: io.lumine.utils.network.messaging.conversation.ConversationChannelListener<T, R>): io.lumine.utils.network.messaging.conversation.ConversationChannelAgent<T, R>
                            // @ts-ignore
                            sendMessage(p0: T, p1: io.lumine.utils.network.messaging.conversation.ConversationReplyListener<R>, p2: number /*long*/, p3: java.util.concurrent.TimeUnit): io.lumine.utils.promise.Promise<java.lang.Void>
                            // @ts-ignore
                            sendMessage(p0: java.lang.String | string, p1: T, p2: io.lumine.utils.network.messaging.conversation.ConversationReplyListener<R>, p3: number /*long*/, p4: java.util.concurrent.TimeUnit): io.lumine.utils.promise.Promise<java.lang.Void>
                            // @ts-ignore
                            terminate(): boolean
                        }
                    }
                }
            }
        }
    }
}
