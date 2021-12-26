declare namespace io {
    namespace lumine {
        namespace utils {
            namespace events {
                namespace Events {
                    // @ts-ignore
                    interface DefaultFilters {
                        // @ts-ignore
                        ignoreCancelled<T extends Cancellable>(): java.util.function$.Predicate<T>
                        // @ts-ignore
                        ignoreSameBlock<T extends PlayerMoveEvent>(): java.util.function$.Predicate<T>
                        // @ts-ignore
                        ignoreSameBlockAndY<T extends PlayerMoveEvent>(): java.util.function$.Predicate<T>
                        // @ts-ignore
                        ignoreSameChunk<T extends PlayerMoveEvent>(): java.util.function$.Predicate<T>
                        // @ts-ignore
                        entityHasMetadata<T extends EntityEvent>(p0: io.lumine.utils.metadata.MetadataKey<any>): java.util.function$.Predicate<T>
                        // @ts-ignore
                        playerHasMetadata<T extends PlayerEvent>(p0: io.lumine.utils.metadata.MetadataKey<any>): java.util.function$.Predicate<T>
                    }
                }
            }
        }
    }
}
