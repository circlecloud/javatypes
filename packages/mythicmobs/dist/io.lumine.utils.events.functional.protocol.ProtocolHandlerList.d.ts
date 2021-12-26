declare namespace io {
    namespace lumine {
        namespace utils {
            namespace events {
                namespace functional {
                    namespace protocol {
                        // @ts-ignore
                        interface ProtocolHandlerList extends io.lumine.utils.events.functional.FunctionalHandlerList<PacketEvent, io.lumine.utils.events.ProtocolSubscription> {
                            // @ts-ignore
                            consumer(handler: java.util.function$.Consumer<any>): io.lumine.utils.events.function$al.protocol.ProtocolHandlerList
                            // @ts-ignore
                            biConsumer(p0: java.util.function$.BiConsumer<io.lumine.utils.events.ProtocolSubscription, any>): io.lumine.utils.events.function$al.protocol.ProtocolHandlerList
                        }
                    }
                }
            }
        }
    }
}
