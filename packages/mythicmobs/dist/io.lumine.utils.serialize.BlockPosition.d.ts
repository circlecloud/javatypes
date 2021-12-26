declare namespace io {
    namespace lumine {
        namespace utils {
            namespace serialize {
                // @ts-ignore
                class BlockPosition extends java.lang.Object implements io.lumine.utils.gson.GsonSerializable {
                    // @ts-ignore
                    public static deserialize(element: JsonElement): io.lumine.utils.serialize.BlockPosition
                    // @ts-ignore
                    public static of(x: number /*int*/, y: number /*int*/, z: number /*int*/, world: java.lang.String | string): io.lumine.utils.serialize.BlockPosition
                    // @ts-ignore
                    public static of(x: number /*int*/, y: number /*int*/, z: number /*int*/, world: World): io.lumine.utils.serialize.BlockPosition
                    // @ts-ignore
                    public static of(location: Location): io.lumine.utils.serialize.BlockPosition
                    // @ts-ignore
                    public static of(block: Block): io.lumine.utils.serialize.BlockPosition
                    // @ts-ignore
                    public getX(): number /*int*/
                    // @ts-ignore
                    public getY(): number /*int*/
                    // @ts-ignore
                    public getZ(): number /*int*/
                    // @ts-ignore
                    public getWorld(): string
                    // @ts-ignore
                    public toLocation(): Location
                    // @ts-ignore
                    public toVector(): Vector
                    // @ts-ignore
                    public toBlock(): Block
                    // @ts-ignore
                    public toPosition(): io.lumine.utils.serialize.Position
                    // @ts-ignore
                    public toPositionCenter(): io.lumine.utils.serialize.Position
                    // @ts-ignore
                    public toChunk(): io.lumine.utils.serialize.ChunkPosition
                    // @ts-ignore
                    public contains(position: io.lumine.utils.serialize.Position): boolean
                    // @ts-ignore
                    public getRelative(face: BlockFace): io.lumine.utils.serialize.BlockPosition
                    // @ts-ignore
                    public getRelative(face: BlockFace, distance: number /*int*/): io.lumine.utils.serialize.BlockPosition
                    // @ts-ignore
                    public add(vector3i: Vector): io.lumine.utils.serialize.BlockPosition
                    // @ts-ignore
                    public add(x: number /*int*/, y: number /*int*/, z: number /*int*/): io.lumine.utils.serialize.BlockPosition
                    // @ts-ignore
                    public subtract(x: number /*int*/, y: number /*int*/, z: number /*int*/): io.lumine.utils.serialize.BlockPosition
                    // @ts-ignore
                    public regionWith(other: io.lumine.utils.serialize.BlockPosition): io.lumine.utils.serialize.BlockRegion
                    // @ts-ignore
                    public serialize(): JsonObject
                    // @ts-ignore
                    public equals(o: java.lang.Object | any): boolean
                    // @ts-ignore
                    public hashCode(): number /*int*/
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
