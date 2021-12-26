declare namespace io {
    namespace lumine {
        namespace utils {
            namespace network {
                namespace messaging {
                    namespace conversation {
                        // @ts-ignore
                        class SimpleConversationChannel<T extends io.lumine.utils.network.messaging.conversation.ConversationMessage, R extends io.lumine.utils.network.messaging.conversation.ConversationMessage> extends java.lang.Object implements io.lumine.utils.network.messaging.conversation.ConversationChannel<T, R> {
                            // @ts-ignore
                            constructor(messenger: io.lumine.utils.network.messaging.Messenger, name: java.lang.String | string, outgoingType: object, replyType: object)
                            // @ts-ignore
                            public getName(): string
                            // @ts-ignore
                            public getOutgoingChannel(): io.lumine.utils.network.messaging.Channel<T>
                            // @ts-ignore
                            public getReplyChannel(): io.lumine.utils.network.messaging.Channel<R>
                            // @ts-ignore
                            public newAgent(): io.lumine.utils.network.messaging.conversation.ConversationChannelAgent<T, R>
                            // @ts-ignore
                            public sendMessage(message: T, replyListener: io.lumine.utils.network.messaging.conversation.ConversationReplyListener<R>, timeoutDuration: number /*long*/, unit: java.util.concurrent.TimeUnit): io.lumine.utils.promise.Promise<java.lang.Void>
                            // @ts-ignore
                            public sendMessage(server: java.lang.String | string, message: T, replyListener: io.lumine.utils.network.messaging.conversation.ConversationReplyListener<R>, timeoutDuration: number /*long*/, unit: java.util.concurrent.TimeUnit): io.lumine.utils.promise.Promise<java.lang.Void>
                            // @ts-ignore
                            public terminate(): boolean
                        }
                    }
                }
            }
        }
    }
}
