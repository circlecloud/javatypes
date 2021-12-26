declare namespace io {
    namespace lumine {
        namespace utils {
            namespace serialize {
                // @ts-ignore
                class Direction extends java.lang.Object implements io.lumine.utils.gson.GsonSerializable {
                    // @ts-ignore
                    public static readonly ZERO: io.lumine.utils.serialize.Direction
                    // @ts-ignore
                    public static deserialize(element: JsonElement): io.lumine.utils.serialize.Direction
                    // @ts-ignore
                    public static of(yaw: number /*float*/, pitch: number /*float*/): io.lumine.utils.serialize.Direction
                    // @ts-ignore
                    public static from(location: Location): io.lumine.utils.serialize.Direction
                    // @ts-ignore
                    public getYaw(): number /*float*/
                    // @ts-ignore
                    public getPitch(): number /*float*/
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
