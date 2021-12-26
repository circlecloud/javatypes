declare namespace io {
    namespace lumine {
        namespace utils {
            namespace serialize {
                // @ts-ignore
                class ChunkPosition extends java.lang.Object implements io.lumine.utils.gson.GsonSerializable {
                    // @ts-ignore
                    public static deserialize(element: JsonElement): io.lumine.utils.serialize.ChunkPosition
                    // @ts-ignore
                    public static of(x: number /*int*/, z: number /*int*/, world: java.lang.String | string): io.lumine.utils.serialize.ChunkPosition
                    // @ts-ignore
                    public static of(x: number /*int*/, z: number /*int*/, world: World): io.lumine.utils.serialize.ChunkPosition
                    // @ts-ignore
                    public static of(location: Chunk): io.lumine.utils.serialize.ChunkPosition
                    // @ts-ignore
                    public getX(): number /*int*/
                    // @ts-ignore
                    public getZ(): number /*int*/
                    // @ts-ignore
                    public getWorld(): string
                    // @ts-ignore
                    public toChunk(): Chunk
                    // @ts-ignore
                    public contains(block: io.lumine.utils.serialize.BlockPosition): boolean
                    // @ts-ignore
                    public contains(position: io.lumine.utils.serialize.Position): boolean
                    // @ts-ignore
                    public getBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/): io.lumine.utils.serialize.BlockPosition
                    // @ts-ignore
                    public blocks(): Array<io.lumine.utils.serialize.BlockPosition>
                    // @ts-ignore
                    public getRelative(face: BlockFace): io.lumine.utils.serialize.ChunkPosition
                    // @ts-ignore
                    public getRelative(face: BlockFace, distance: number /*int*/): io.lumine.utils.serialize.ChunkPosition
                    // @ts-ignore
                    public add(x: number /*int*/, z: number /*int*/): io.lumine.utils.serialize.ChunkPosition
                    // @ts-ignore
                    public subtract(x: number /*int*/, z: number /*int*/): io.lumine.utils.serialize.ChunkPosition
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
