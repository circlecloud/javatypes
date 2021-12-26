declare namespace io {
    namespace lumine {
        namespace utils {
            namespace serialize {
                // @ts-ignore
                class Locus extends java.lang.Object implements io.lumine.utils.gson.GsonSerializable {
                    // @ts-ignore
                    public static deserialize(element: JsonElement): io.lumine.utils.serialize.Locus
                    // @ts-ignore
                    public static of(x: number /*double*/, y: number /*double*/, z: number /*double*/): io.lumine.utils.serialize.Locus
                    // @ts-ignore
                    public static of(location: Location): io.lumine.utils.serialize.Locus
                    // @ts-ignore
                    public static of(block: Block): io.lumine.utils.serialize.Locus
                    // @ts-ignore
                    public getX(): number /*double*/
                    // @ts-ignore
                    public getY(): number /*double*/
                    // @ts-ignore
                    public getZ(): number /*double*/
                    // @ts-ignore
                    public toVector(): Vector
                    // @ts-ignore
                    public toLocation(world: java.lang.String | string): Location
                    // @ts-ignore
                    public toLocation(world: World): Location
                    // @ts-ignore
                    public floor(): io.lumine.utils.serialize.Locus
                    // @ts-ignore
                    public getRelative(face: BlockFace): io.lumine.utils.serialize.Locus
                    // @ts-ignore
                    public getRelative(face: BlockFace, distance: number /*double*/): io.lumine.utils.serialize.Locus
                    // @ts-ignore
                    public add(vector3i: Vector): io.lumine.utils.serialize.Locus
                    // @ts-ignore
                    public add(x: number /*double*/, y: number /*double*/, z: number /*double*/): io.lumine.utils.serialize.Locus
                    // @ts-ignore
                    public subtract(vector3i: Vector): io.lumine.utils.serialize.Locus
                    // @ts-ignore
                    public subtract(x: number /*double*/, y: number /*double*/, z: number /*double*/): io.lumine.utils.serialize.Locus
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
