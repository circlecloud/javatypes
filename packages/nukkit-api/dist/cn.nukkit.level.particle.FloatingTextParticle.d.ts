declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace particle {
                /**
                 * Created on 2015/11/21 by xtypr.
                 * Package cn.nukkit.level.particle in project Nukkit .
                 */
                // @ts-ignore
                class FloatingTextParticle extends cn.nukkit.level.particle.Particle {
                    // @ts-ignore
                    constructor(location: cn.nukkit.level.Location, title: java.lang.String | string)
                    // @ts-ignore
                    constructor(location: cn.nukkit.level.Location, title: java.lang.String | string, text: java.lang.String | string)
                    // @ts-ignore
                    constructor(pos: cn.nukkit.math.Vector3, title: java.lang.String | string)
                    // @ts-ignore
                    constructor(pos: cn.nukkit.math.Vector3, title: java.lang.String | string, text: java.lang.String | string)
                    // @ts-ignore
                    uuid: java.util.UUID
                    // @ts-ignore
                    readonly level: cn.nukkit.level.Level
                    // @ts-ignore
                    entityId: number /*long*/
                    // @ts-ignore
                    invisible: boolean
                    // @ts-ignore
                    metadata: cn.nukkit.entity.data.EntityMetadata
                    // @ts-ignore
                    public getText(): string
                    // @ts-ignore
                    public setText(text: java.lang.String | string): void
                    // @ts-ignore
                    public getTitle(): string
                    // @ts-ignore
                    public setTitle(title: java.lang.String | string): void
                    // @ts-ignore
                    public isInvisible(): boolean
                    // @ts-ignore
                    public setInvisible(invisible: boolean): void
                    // @ts-ignore
                    public setInvisible(): void
                    // @ts-ignore
                    public getEntityId(): number /*long*/
                    // @ts-ignore
                    public encode(): cn.nukkit.network.protocol.DataPacket[]
                }
            }
        }
    }
}
