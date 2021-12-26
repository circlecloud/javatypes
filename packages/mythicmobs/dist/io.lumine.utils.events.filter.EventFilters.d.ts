declare namespace io {
    namespace lumine {
        namespace utils {
            namespace events {
                namespace filter {
                    // @ts-ignore
                    class EventFilters extends java.lang.Object {
                        // @ts-ignore
                        public static ignoreCancelled<T extends Cancellable>(): java.util.function$.Predicate<T>
                        // @ts-ignore
                        public static ignoreNotCancelled<T extends Cancellable>(): java.util.function$.Predicate<T>
                        // @ts-ignore
                        public static ignoreDisallowedLogin<T extends PlayerLoginEvent>(): java.util.function$.Predicate<T>
                        // @ts-ignore
                        public static ignoreDisallowedPreLogin<T extends AsyncPlayerPreLoginEvent>(): java.util.function$.Predicate<T>
                        // @ts-ignore
                        public static ignoreSameBlock<T extends PlayerMoveEvent>(): java.util.function$.Predicate<T>
                        // @ts-ignore
                        public static ignoreSameBlockAndY<T extends PlayerMoveEvent>(): java.util.function$.Predicate<T>
                        // @ts-ignore
                        public static ignoreSameChunk<T extends PlayerMoveEvent>(): java.util.function$.Predicate<T>
                        // @ts-ignore
                        public static entityHasMetadata<T extends EntityEvent>(key: io.lumine.utils.metadata.MetadataKey<any>): java.util.function$.Predicate<T>
                        // @ts-ignore
                        public static playerHasMetadata<T extends PlayerEvent>(key: io.lumine.utils.metadata.MetadataKey<any>): java.util.function$.Predicate<T>
                        // @ts-ignore
                        public static playerHasPermission<T extends PlayerEvent>(permission: java.lang.String | string): java.util.function$.Predicate<T>
                    }
                }
            }
        }
    }
}
