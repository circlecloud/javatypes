declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                namespace types {
                    // @ts-ignore
                    class EntityLink extends java.lang.Object {
                        // @ts-ignore
                        constructor(fromEntityUniquieId: number /*long*/, toEntityUniquieId: number /*long*/, type: number /*byte*/, immediate: boolean)
                        // @ts-ignore
                        public static readonly TYPE_REMOVE: number /*byte*/
                        // @ts-ignore
                        public static readonly TYPE_RIDER: number /*byte*/
                        // @ts-ignore
                        public static readonly TYPE_PASSENGER: number /*byte*/
                        // @ts-ignore
                        public fromEntityUniquieId: number /*long*/
                        // @ts-ignore
                        public toEntityUniquieId: number /*long*/
                        // @ts-ignore
                        public type: number /*byte*/
                        // @ts-ignore
                        public immediate: boolean
                    }
                }
            }
        }
    }
}
