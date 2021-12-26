declare namespace io {
    namespace lumine {
        namespace utils {
            namespace events {
                // @ts-ignore
                interface ProtocolSubscription extends io.lumine.utils.events.Subscription {
                    // @ts-ignore
                    getPackets(): Array<PacketType>
                }
            }
        }
    }
}
