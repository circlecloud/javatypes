declare namespace io {
    namespace lumine {
        namespace utils {
            namespace events {
                namespace functional {
                    namespace protocol {
                        // @ts-ignore
                        interface ProtocolSubscriptionBuilder extends io.lumine.utils.events.functional.SubscriptionBuilder<PacketEvent> {
                            // @ts-ignore
                            newBuilder(...packets: PacketType[]): io.lumine.utils.events.function$al.protocol.ProtocolSubscriptionBuilder
                            // @ts-ignore
                            newBuilder(priority: ListenerPriority, ...packets: PacketType[]): io.lumine.utils.events.function$al.protocol.ProtocolSubscriptionBuilder
                            // @ts-ignore
                            expireIf(predicate: java.util.function$.Predicate<PacketEvent>): io.lumine.utils.events.function$al.protocol.ProtocolSubscriptionBuilder
                            // @ts-ignore
                            expireAfter(duration: number /*long*/, unit: java.util.concurrent.TimeUnit): io.lumine.utils.events.function$al.protocol.ProtocolSubscriptionBuilder
                            // @ts-ignore
                            expireAfter(maxCalls: number /*long*/): io.lumine.utils.events.function$al.protocol.ProtocolSubscriptionBuilder
                            // @ts-ignore
                            filter(p0: java.util.function$.Predicate<PacketEvent>): io.lumine.utils.events.function$al.protocol.ProtocolSubscriptionBuilder
                            // @ts-ignore
                            expireIf(p0: java.util.function$.BiPredicate<io.lumine.utils.events.ProtocolSubscription, PacketEvent>, ...p1: io.lumine.utils.events.functional.ExpiryTestStage[] | io.lumine.utils.events.function$al.ExpiryTestStage[]): io.lumine.utils.events.function$al.protocol.ProtocolSubscriptionBuilder
                            // @ts-ignore
                            exceptionConsumer(p0: java.util.function$.BiConsumer<any, java.lang.Throwable | Error>): io.lumine.utils.events.function$al.protocol.ProtocolSubscriptionBuilder
                            // @ts-ignore
                            handlers(): io.lumine.utils.events.function$al.protocol.ProtocolHandlerList
                            // @ts-ignore
                            handler(handler: java.util.function$.Consumer<any>): io.lumine.utils.events.ProtocolSubscription
                            // @ts-ignore
                            biHandler(handler: java.util.function$.BiConsumer<io.lumine.utils.events.ProtocolSubscription, any>): io.lumine.utils.events.ProtocolSubscription
                        }
                    }
                }
            }
        }
    }
}
