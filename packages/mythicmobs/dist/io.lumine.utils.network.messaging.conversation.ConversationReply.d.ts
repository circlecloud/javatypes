declare namespace io {
    namespace lumine {
        namespace utils {
            namespace network {
                namespace messaging {
                    namespace conversation {
                        // @ts-ignore
                        class ConversationReply<R extends io.lumine.utils.network.messaging.conversation.ConversationMessage> extends java.lang.Object {
                            // @ts-ignore
                            public static noReply<R extends io.lumine.utils.network.messaging.conversation.ConversationMessage>(): io.lumine.utils.network.messaging.conversation.ConversationReply<R>
                            // @ts-ignore
                            public static of<R extends io.lumine.utils.network.messaging.conversation.ConversationMessage>(reply: R): io.lumine.utils.network.messaging.conversation.ConversationReply<R>
                            // @ts-ignore
                            public static ofCompletableFuture<R extends io.lumine.utils.network.messaging.conversation.ConversationMessage>(futureReply: java.util.concurrent.CompletableFuture<R>): io.lumine.utils.network.messaging.conversation.ConversationReply<R>
                            // @ts-ignore
                            public static ofPromise<R extends io.lumine.utils.network.messaging.conversation.ConversationMessage>(promiseReply: io.lumine.utils.promise.Promise<R>): io.lumine.utils.network.messaging.conversation.ConversationReply<R>
                            // @ts-ignore
                            public hasReply(): boolean
                            // @ts-ignore
                            public getReply(): io.lumine.utils.promise.Promise<R>
                            // @ts-ignore
                            public equals(obj: java.lang.Object | any): boolean
                            // @ts-ignore
                            public hashCode(): number /*int*/
                            // @ts-ignore
                            public toString(): string
                        }
                    }
                }
            }
        }
    }
}
