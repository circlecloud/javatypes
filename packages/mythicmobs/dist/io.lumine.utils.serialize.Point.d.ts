declare namespace io {
    namespace lumine {
        namespace utils {
            namespace serialize {
                // @ts-ignore
                class Point extends java.lang.Object implements io.lumine.utils.gson.GsonSerializable {
                    // @ts-ignore
                    public static deserialize(element: JsonElement): io.lumine.utils.serialize.Point
                    // @ts-ignore
                    public static of(position: io.lumine.utils.serialize.Position, direction: io.lumine.utils.serialize.Direction): io.lumine.utils.serialize.Point
                    // @ts-ignore
                    public static of(location: Location): io.lumine.utils.serialize.Point
                    // @ts-ignore
                    public getPosition(): io.lumine.utils.serialize.Position
                    // @ts-ignore
                    public getDirection(): io.lumine.utils.serialize.Direction
                    // @ts-ignore
                    public toLocation(): Location
                    // @ts-ignore
                    public add(x: number /*double*/, y: number /*double*/, z: number /*double*/): io.lumine.utils.serialize.Point
                    // @ts-ignore
                    public subtract(x: number /*double*/, y: number /*double*/, z: number /*double*/): io.lumine.utils.serialize.Point
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
