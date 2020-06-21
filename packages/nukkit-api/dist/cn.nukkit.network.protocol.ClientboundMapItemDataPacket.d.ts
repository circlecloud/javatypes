declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                /**
                 * Created by CreeperFace on 5.3.2017.
                 */
                // @ts-ignore
                class ClientboundMapItemDataPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public eids: number /*int*/[]
                    // @ts-ignore
                    public mapId: number /*long*/
                    // @ts-ignore
                    public update: number /*int*/
                    // @ts-ignore
                    public scale: number /*byte*/
                    // @ts-ignore
                    public isLocked: boolean
                    // @ts-ignore
                    public width: number /*int*/
                    // @ts-ignore
                    public height: number /*int*/
                    // @ts-ignore
                    public offsetX: number /*int*/
                    // @ts-ignore
                    public offsetZ: number /*int*/
                    // @ts-ignore
                    public dimensionId: number /*byte*/
                    // @ts-ignore
                    public decorators: cn.nukkit.network.protocol.ClientboundMapItemDataPacket.MapDecorator[]
                    // @ts-ignore
                    public colors: number /*int*/[]
                    // @ts-ignore
                    public image: java.awt.image.BufferedImage
                    // @ts-ignore
                    public static readonly TEXTURE_UPDATE: number /*int*/
                    // @ts-ignore
                    public static readonly DECORATIONS_UPDATE: number /*int*/
                    // @ts-ignore
                    public static readonly ENTITIES_UPDATE: number /*int*/
                    // @ts-ignore
                    public pid(): number /*byte*/
                    // @ts-ignore
                    public decode(): void
                    // @ts-ignore
                    public encode(): void
                }
            }
        }
    }
}
