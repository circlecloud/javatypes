declare namespace io {
    namespace lumine {
        namespace utils {
            namespace serialize {
                // @ts-ignore
                class Region extends java.lang.Object implements io.lumine.utils.gson.GsonSerializable {
                    // @ts-ignore
                    public static deserialize(element: JsonElement): io.lumine.utils.serialize.Region
                    // @ts-ignore
                    public static of(a: io.lumine.utils.serialize.Position, b: io.lumine.utils.serialize.Position): io.lumine.utils.serialize.Region
                    // @ts-ignore
                    public inRegion(pos: io.lumine.utils.serialize.Position): boolean
                    // @ts-ignore
                    public inRegion(loc: Location): boolean
                    // @ts-ignore
                    public inRegion(x: number /*double*/, y: number /*double*/, z: number /*double*/): boolean
                    // @ts-ignore
                    public getMin(): io.lumine.utils.serialize.Position
                    // @ts-ignore
                    public getMax(): io.lumine.utils.serialize.Position
                    // @ts-ignore
                    public getWidth(): number /*double*/
                    // @ts-ignore
                    public getHeight(): number /*double*/
                    // @ts-ignore
                    public getDepth(): number /*double*/
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
