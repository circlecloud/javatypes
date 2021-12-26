declare namespace io {
    namespace lumine {
        namespace utils {
            namespace serialize {
                // @ts-ignore
                class BlockRegion extends java.lang.Object implements io.lumine.utils.gson.GsonSerializable {
                    // @ts-ignore
                    public static deserialize(element: JsonElement): io.lumine.utils.serialize.BlockRegion
                    // @ts-ignore
                    public static of(a: io.lumine.utils.serialize.BlockPosition, b: io.lumine.utils.serialize.BlockPosition): io.lumine.utils.serialize.BlockRegion
                    // @ts-ignore
                    public inRegion(pos: io.lumine.utils.serialize.BlockPosition): boolean
                    // @ts-ignore
                    public inRegion(block: Block): boolean
                    // @ts-ignore
                    public inRegion(x: number /*int*/, y: number /*int*/, z: number /*int*/): boolean
                    // @ts-ignore
                    public getMin(): io.lumine.utils.serialize.BlockPosition
                    // @ts-ignore
                    public getMax(): io.lumine.utils.serialize.BlockPosition
                    // @ts-ignore
                    public getWidth(): number /*int*/
                    // @ts-ignore
                    public getHeight(): number /*int*/
                    // @ts-ignore
                    public getDepth(): number /*int*/
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
