declare namespace io {
    namespace lumine {
        namespace utils {
            namespace metadata {
                // @ts-ignore
                class Metadata extends java.lang.Object {
                    // @ts-ignore
                    public static provide(obj: java.lang.Object | any): io.lumine.utils.metadata.MetadataMap
                    // @ts-ignore
                    public static provideForPlayer(player: Player): io.lumine.utils.metadata.MetadataMap
                    // @ts-ignore
                    public static lookupPlayersWithKey<T>(key: io.lumine.utils.metadata.MetadataKey<T>): java.util.Map<Player, T>
                    // @ts-ignore
                    public static provideForEntity(entity: Entity): io.lumine.utils.metadata.MetadataMap
                    // @ts-ignore
                    public static lookupEntitiesWithKey<T>(key: io.lumine.utils.metadata.MetadataKey<T>): java.util.Map<Entity, T>
                    // @ts-ignore
                    public static provideForWorld(world: World): io.lumine.utils.metadata.MetadataMap
                    // @ts-ignore
                    public static lookupWorldsWithKey<T>(key: io.lumine.utils.metadata.MetadataKey<T>): java.util.Map<World, T>
                }
            }
        }
    }
}
