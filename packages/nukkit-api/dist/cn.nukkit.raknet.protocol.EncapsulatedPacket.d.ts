declare namespace cn {
    namespace nukkit {
        namespace raknet {
            namespace protocol {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class EncapsulatedPacket extends java.lang.Object implements java.lang.Cloneable {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public reliability: number /*int*/
                    // @ts-ignore
                    public hasSplit: boolean
                    // @ts-ignore
                    public length: number /*int*/
                    // @ts-ignore
                    public messageIndex: java.lang.Integer | number
                    // @ts-ignore
                    public orderIndex: java.lang.Integer | number
                    // @ts-ignore
                    public orderChannel: java.lang.Integer | number
                    // @ts-ignore
                    public splitCount: java.lang.Integer | number
                    // @ts-ignore
                    public splitID: java.lang.Integer | number
                    // @ts-ignore
                    public splitIndex: java.lang.Integer | number
                    // @ts-ignore
                    public buffer: number /*byte*/[]
                    // @ts-ignore
                    public needACK: boolean
                    // @ts-ignore
                    public identifierACK: java.lang.Integer | number
                    // @ts-ignore
                    public getOffset(): number /*int*/
                    // @ts-ignore
                    public static fromBinary(binary: number /*byte*/[]): cn.nukkit.raknet.protocol.EncapsulatedPacket
                    // @ts-ignore
                    public static fromBinary(binary: number /*byte*/[], internal: boolean): cn.nukkit.raknet.protocol.EncapsulatedPacket
                    // @ts-ignore
                    public getTotalLength(): number /*int*/
                    // @ts-ignore
                    public toBinary(): number /*byte*/[]
                    // @ts-ignore
                    public toBinary(internal: boolean): number /*byte*/[]
                    // @ts-ignore
                    public toString(): string
                    // @ts-ignore
                    public clone(): cn.nukkit.raknet.protocol.EncapsulatedPacket
                }
            }
        }
    }
}
