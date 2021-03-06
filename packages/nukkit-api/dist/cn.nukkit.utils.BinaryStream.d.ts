declare namespace cn {
    namespace nukkit {
        namespace utils {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class BinaryStream extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(buffer: number /*byte*/[])
                // @ts-ignore
                constructor(buffer: number /*byte*/[], offset: number /*int*/)
                // @ts-ignore
                public offset: number /*int*/
                // @ts-ignore
                public reset(): cn.nukkit.utils.BinaryStream
                // @ts-ignore
                public setBuffer(buffer: number /*byte*/[]): void
                // @ts-ignore
                public setBuffer(buffer: number /*byte*/[], offset: number /*int*/): void
                // @ts-ignore
                public getOffset(): number /*int*/
                // @ts-ignore
                public setOffset(offset: number /*int*/): void
                // @ts-ignore
                public getBuffer(): number /*byte*/[]
                // @ts-ignore
                public getCount(): number /*int*/
                // @ts-ignore
                public get(): number /*byte*/[]
                // @ts-ignore
                public get(len: number /*int*/): number /*byte*/[]
                // @ts-ignore
                public put(bytes: number /*byte*/[]): void
                // @ts-ignore
                public getLong(): number /*long*/
                // @ts-ignore
                public putLong(l: number /*long*/): void
                // @ts-ignore
                public getInt(): number /*int*/
                // @ts-ignore
                public putInt(i: number /*int*/): void
                // @ts-ignore
                public getLLong(): number /*long*/
                // @ts-ignore
                public putLLong(l: number /*long*/): void
                // @ts-ignore
                public getLInt(): number /*int*/
                // @ts-ignore
                public putLInt(i: number /*int*/): void
                // @ts-ignore
                public getShort(): number /*int*/
                // @ts-ignore
                public putShort(s: number /*int*/): void
                // @ts-ignore
                public getLShort(): number /*int*/
                // @ts-ignore
                public putLShort(s: number /*int*/): void
                // @ts-ignore
                public getFloat(): number /*float*/
                // @ts-ignore
                public getFloat(accuracy: number /*int*/): number /*float*/
                // @ts-ignore
                public putFloat(v: number /*float*/): void
                // @ts-ignore
                public getLFloat(): number /*float*/
                // @ts-ignore
                public getLFloat(accuracy: number /*int*/): number /*float*/
                // @ts-ignore
                public putLFloat(v: number /*float*/): void
                // @ts-ignore
                public getTriad(): number /*int*/
                // @ts-ignore
                public putTriad(triad: number /*int*/): void
                // @ts-ignore
                public getLTriad(): number /*int*/
                // @ts-ignore
                public putLTriad(triad: number /*int*/): void
                // @ts-ignore
                public getBoolean(): boolean
                // @ts-ignore
                public putBoolean(bool: boolean): void
                // @ts-ignore
                public getByte(): number /*int*/
                // @ts-ignore
                public putByte(b: number /*byte*/): void
                /**
                 * Reads a list of Attributes from the stream.
                 * @return Attribute[]
                 */
                // @ts-ignore
                public getAttributeList(): cn.nukkit.entity.Attribute[]
                /**
                 * Writes a list of Attributes to the packet buffer using the standard format.
                 */
                // @ts-ignore
                public putAttributeList(attributes: cn.nukkit.entity.Attribute[]): void
                // @ts-ignore
                public putUUID(uuid: java.util.UUID): void
                // @ts-ignore
                public getUUID(): java.util.UUID
                // @ts-ignore
                public putSkin(skin: cn.nukkit.entity.data.Skin): void
                // @ts-ignore
                public getSkin(): cn.nukkit.entity.data.Skin
                // @ts-ignore
                public putImage(image: cn.nukkit.utils.SerializedImage): void
                // @ts-ignore
                public getImage(): cn.nukkit.utils.SerializedImage
                // @ts-ignore
                public getSlot(): cn.nukkit.item.Item
                // @ts-ignore
                public putSlot(item: cn.nukkit.item.Item): void
                // @ts-ignore
                public getRecipeIngredient(): cn.nukkit.item.Item
                // @ts-ignore
                public putRecipeIngredient(ingredient: cn.nukkit.item.Item): void
                // @ts-ignore
                public getByteArray(): number /*byte*/[]
                // @ts-ignore
                public putByteArray(b: number /*byte*/[]): void
                // @ts-ignore
                public getString(): string
                // @ts-ignore
                public putString(string: java.lang.String | string): void
                // @ts-ignore
                public getUnsignedVarInt(): number /*long*/
                // @ts-ignore
                public putUnsignedVarInt(v: number /*long*/): void
                // @ts-ignore
                public getVarInt(): number /*int*/
                // @ts-ignore
                public putVarInt(v: number /*int*/): void
                // @ts-ignore
                public getVarLong(): number /*long*/
                // @ts-ignore
                public putVarLong(v: number /*long*/): void
                // @ts-ignore
                public getUnsignedVarLong(): number /*long*/
                // @ts-ignore
                public putUnsignedVarLong(v: number /*long*/): void
                // @ts-ignore
                public getBlockVector3(): cn.nukkit.math.BlockVector3
                // @ts-ignore
                public getSignedBlockPosition(): cn.nukkit.math.BlockVector3
                // @ts-ignore
                public putSignedBlockPosition(v: cn.nukkit.math.BlockVector3): void
                // @ts-ignore
                public putBlockVector3(v: cn.nukkit.math.BlockVector3): void
                // @ts-ignore
                public putBlockVector3(x: number /*int*/, y: number /*int*/, z: number /*int*/): void
                // @ts-ignore
                public getVector3f(): cn.nukkit.math.Vector3f
                // @ts-ignore
                public putVector3f(v: cn.nukkit.math.Vector3f): void
                // @ts-ignore
                public putVector3f(x: number /*float*/, y: number /*float*/, z: number /*float*/): void
                // @ts-ignore
                public putGameRules(gameRules: cn.nukkit.level.GameRules): void
                /**
                 * Reads and returns an EntityUniqueID
                 * @return int
                 */
                // @ts-ignore
                public getEntityUniqueId(): number /*long*/
                /**
                 * Writes an EntityUniqueID
                 */
                // @ts-ignore
                public putEntityUniqueId(eid: number /*long*/): void
                /**
                 * Reads and returns an EntityRuntimeID
                 */
                // @ts-ignore
                public getEntityRuntimeId(): number /*long*/
                /**
                 * Writes an EntityUniqueID
                 */
                // @ts-ignore
                public putEntityRuntimeId(eid: number /*long*/): void
                // @ts-ignore
                public getBlockFace(): cn.nukkit.math.BlockFace
                // @ts-ignore
                public putBlockFace(face: cn.nukkit.math.BlockFace): void
                // @ts-ignore
                public putEntityLink(link: cn.nukkit.network.protocol.types.EntityLink): void
                // @ts-ignore
                public getEntityLink(): cn.nukkit.network.protocol.types.EntityLink
                // @ts-ignore
                public feof(): boolean
            }
        }
    }
}
