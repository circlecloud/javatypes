declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace volatilecode {
                    namespace handlers {
                        // @ts-ignore
                        interface VolatileWorldHandler {
                            // @ts-ignore
                            registerWorldAccess(p0: World): void
                            // @ts-ignore
                            unregisterWorldAccess(p0: World): void
                            // @ts-ignore
                            isChunkLoaded(world: io.lumine.xikage.mythicmobs.adapters.AbstractWorld, x: number /*int*/, z: number /*int*/): boolean
                        }
                    }
                }
            }
        }
    }
}
