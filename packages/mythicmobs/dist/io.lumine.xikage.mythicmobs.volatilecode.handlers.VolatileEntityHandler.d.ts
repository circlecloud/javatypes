declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace volatilecode {
                    namespace handlers {
                        // @ts-ignore
                        interface VolatileEntityHandler {
                            // @ts-ignore
                            addNBTData(p0: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, p1: java.lang.String | string, p2: io.lumine.xikage.mythicmobs.util.jnbt.Tag): io.lumine.xikage.mythicmobs.adapters.AbstractEntity
                            // @ts-ignore
                            getNBTData(p0: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): io.lumine.xikage.mythicmobs.util.jnbt.CompoundTag
                            // @ts-ignore
                            setNBTData(p0: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, p1: io.lumine.xikage.mythicmobs.util.jnbt.CompoundTag): io.lumine.xikage.mythicmobs.adapters.AbstractEntity
                            // @ts-ignore
                            isEntityInMotion(p0: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): boolean
                            // @ts-ignore
                            setLocation(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, location: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): void
                            // @ts-ignore
                            setLocation(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, x: number /*double*/, y: number /*double*/, z: number /*double*/, yaw: number /*float*/, pitch: number /*float*/): void
                            // @ts-ignore
                            setLocation(p0: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, p1: number /*double*/, p2: number /*double*/, p3: number /*double*/, p4: number /*float*/, p5: number /*float*/, p6: boolean, p7: boolean): void
                            // @ts-ignore
                            setHitBox(target: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, a0: number /*double*/, a1: number /*double*/, a2: number /*double*/): void
                            // @ts-ignore
                            setItemPosition(target: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, ol: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): void
                            // @ts-ignore
                            sendEntityTeleportPacket(target: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): void
                            // @ts-ignore
                            setEntityRotation(p0: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, p1: number /*float*/, p2: number /*float*/): void
                            // @ts-ignore
                            setArmorStandNoGravity(p0: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): void
                            // @ts-ignore
                            setSkybox(p0: io.lumine.xikage.mythicmobs.adapters.AbstractPlayer, p1: number /*int*/): void
                        }
                    }
                }
            }
        }
    }
}
