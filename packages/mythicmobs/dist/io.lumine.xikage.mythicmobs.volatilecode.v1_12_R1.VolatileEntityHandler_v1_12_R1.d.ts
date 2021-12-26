declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace volatilecode {
                    namespace v1_12_R1 {
                        // @ts-ignore
                        class VolatileEntityHandler_v1_12_R1 extends java.lang.Object implements io.lumine.xikage.mythicmobs.volatilecode.handlers.VolatileEntityHandler {
                            // @ts-ignore
                            constructor(handler: io.lumine.xikage.mythicmobs.volatilecode.VolatileCodeHandler)
                            // @ts-ignore
                            public setLocation(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, location: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): void
                            // @ts-ignore
                            public setLocation(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, x: number /*double*/, y: number /*double*/, z: number /*double*/, yaw: number /*float*/, pitch: number /*float*/): void
                            // @ts-ignore
                            public setLocation(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, x: number /*double*/, y: number /*double*/, z: number /*double*/, yaw: number /*float*/, pitch: number /*float*/, noRotation: boolean, noGravity: boolean): void
                            // @ts-ignore
                            public isEntityInMotion(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): boolean
                            // @ts-ignore
                            public setHitBox(target: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, a0: number /*double*/, a1: number /*double*/, a2: number /*double*/): void
                            // @ts-ignore
                            public setItemPosition(target: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, ol: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): void
                            // @ts-ignore
                            public sendEntityTeleportPacket(target: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): void
                            // @ts-ignore
                            public setEntityRotation(target: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, pitch: number /*float*/, yaw: number /*float*/): void
                            // @ts-ignore
                            public setArmorStandNoGravity(target: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): void
                            // @ts-ignore
                            public addNBTData(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, key: java.lang.String | string, value: io.lumine.xikage.mythicmobs.util.jnbt.Tag): io.lumine.xikage.mythicmobs.adapters.AbstractEntity
                            // @ts-ignore
                            public getNBTData(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): io.lumine.xikage.mythicmobs.util.jnbt.CompoundTag
                            // @ts-ignore
                            public setNBTData(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, compoundTag: io.lumine.xikage.mythicmobs.util.jnbt.CompoundTag): io.lumine.xikage.mythicmobs.adapters.AbstractEntity
                            // @ts-ignore
                            public setSkybox(target: io.lumine.xikage.mythicmobs.adapters.AbstractPlayer, skybox: number /*int*/): void
                        }
                    }
                }
            }
        }
    }
}
