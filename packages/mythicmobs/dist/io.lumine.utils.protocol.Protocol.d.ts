declare namespace io {
    namespace lumine {
        namespace utils {
            namespace protocol {
                // @ts-ignore
                class Protocol extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static subscribe(...packets: PacketType[]): io.lumine.utils.events.function$al.protocol.ProtocolSubscriptionBuilder
                    // @ts-ignore
                    public static subscribe(priority: ListenerPriority, ...packets: PacketType[]): io.lumine.utils.events.function$al.protocol.ProtocolSubscriptionBuilder
                    // @ts-ignore
                    public static manager(): ProtocolManager
                    // @ts-ignore
                    public static sendPacket(player: Player, packet: PacketContainer): void
                    // @ts-ignore
                    public static broadcastPacket(packet: PacketContainer): void
                    // @ts-ignore
                    public static broadcastPacket(players: java.lang.Iterable<Player>, packet: PacketContainer): void
                }
            }
        }
    }
}
