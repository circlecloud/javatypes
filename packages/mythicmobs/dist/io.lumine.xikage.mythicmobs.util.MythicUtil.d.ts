declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace util {
                    // @ts-ignore
                    class MythicUtil extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public static readonly DEGTORAD: number /*float*/
                        // @ts-ignore
                        public static readonly RADTODEG: number /*float*/
                        // @ts-ignore
                        public static matchNumber(s: java.lang.String | string, i: number /*double*/): boolean
                        // @ts-ignore
                        public static getPrivateField(fieldName: java.lang.String | string, clazz: java.lang.Class<any>, object: java.lang.Object | any): any
                        // @ts-ignore
                        public static setPrivateField(fieldName: java.lang.String | string, clazz: java.lang.Class<any>, object: java.lang.Object | any, value: java.lang.Object | any): void
                        // @ts-ignore
                        public static getTargetedEntity(player: Player): LivingEntity
                        // @ts-ignore
                        public static sendFakeBlockChange(player: Player, block: Block, mat: Material): void
                        // @ts-ignore
                        public static restoreFakeBlockChange(player: Player, block: Block): void
                        // @ts-ignore
                        public static rotateVector(v: Vector, degrees: number /*float*/): void
                        // @ts-ignore
                        public static calculateLaunchAngle(from: Location, to: Location, v: number /*double*/, elevation: number /*double*/, g: number /*double*/): number
                        // @ts-ignore
                        public static calculateHangtime(launchAngle: number /*double*/, v: number /*double*/, elev: number /*double*/, g: number /*double*/): number /*double*/
                        // @ts-ignore
                        public static normalizeVector(victor: Vector): Vector
                        // @ts-ignore
                        public static moveBukkit(loc: Location, offset: Vector): Location
                        // @ts-ignore
                        public static moveBukkit(loc: Location, dx: number /*double*/, dy: number /*double*/, dz: number /*double*/): Location
                        // @ts-ignore
                        public static rotateBukkit(yaw: number /*float*/, pitch: number /*float*/, value: Vector): Vector
                        // @ts-ignore
                        public static rotateBukkit(yaw: number /*float*/, pitch: number /*float*/, x: number /*double*/, y: number /*double*/, z: number /*double*/): Vector
                        // @ts-ignore
                        public static move(loc: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, offset: io.lumine.xikage.mythicmobs.adapters.AbstractVector): io.lumine.xikage.mythicmobs.adapters.AbstractLocation
                        // @ts-ignore
                        public static move(loc: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, dx: number /*double*/, dy: number /*double*/, dz: number /*double*/): io.lumine.xikage.mythicmobs.adapters.AbstractLocation
                        // @ts-ignore
                        public static rotate(yaw: number /*float*/, pitch: number /*float*/, value: io.lumine.xikage.mythicmobs.adapters.AbstractVector): io.lumine.xikage.mythicmobs.adapters.AbstractVector
                        // @ts-ignore
                        public static rotate(yaw: number /*float*/, pitch: number /*float*/, x: number /*double*/, y: number /*double*/, z: number /*double*/): io.lumine.xikage.mythicmobs.adapters.AbstractVector
                        // @ts-ignore
                        public static getUUIDFromString(s: java.lang.String | string): java.util.UUID
                        // @ts-ignore
                        public static getMD5(input: java.lang.String | string): string
                        // @ts-ignore
                        public static wrapString(s: java.lang.String | string, l: number /*int*/): string[]
                    }
                }
            }
        }
    }
}
