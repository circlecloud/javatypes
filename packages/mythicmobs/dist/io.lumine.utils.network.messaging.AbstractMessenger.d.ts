declare namespace io {
    namespace lumine {
        namespace utils {
            namespace network {
                namespace messaging {
                    // @ts-ignore
                    class AbstractMessenger extends java.lang.Object implements io.lumine.utils.network.messaging.Messenger {
                        // @ts-ignore
                        constructor(outgoingMessages: java.util.function$.BiConsumer<java.lang.String | string, number /*byte*/[]>, outgoingToMessages: io.lumine.utils.functions.TriConsumer<java.lang.String | string, java.lang.String | string, number /*byte*/[]> | io.lumine.utils.function$s.TriConsumer<java.lang.String | string, java.lang.String | string, number /*byte*/[]>, notifySub: java.util.function$.Consumer<java.lang.String | string>, notifyUnsub: java.util.function$.Consumer<java.lang.String | string>)
                        // @ts-ignore
                        public registerIncomingMessage(channel: java.lang.String | string, sender: java.lang.String | string, message: number /*byte*/[]): void
                        // @ts-ignore
                        public getChannel<T>(name: java.lang.String | string, type: object): io.lumine.utils.network.messaging.Channel<T>
                    }
                }
            }
        }
    }
}
