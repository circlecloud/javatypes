declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace adapters {
                    // @ts-ignore
                    class AbstractVector extends java.lang.Object implements java.lang.Cloneable {
                        // @ts-ignore
                        constructor(x: number /*int*/, y: number /*int*/, z: number /*int*/)
                        // @ts-ignore
                        constructor(x: number /*double*/, y: number /*double*/, z: number /*double*/)
                        // @ts-ignore
                        constructor(x: number /*float*/, y: number /*float*/, z: number /*float*/)
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        x: number /*double*/
                        // @ts-ignore
                        y: number /*double*/
                        // @ts-ignore
                        z: number /*double*/
                        // @ts-ignore
                        public add(vec: io.lumine.xikage.mythicmobs.adapters.AbstractVector): io.lumine.xikage.mythicmobs.adapters.AbstractVector
                        // @ts-ignore
                        public subtract(vec: io.lumine.xikage.mythicmobs.adapters.AbstractVector): io.lumine.xikage.mythicmobs.adapters.AbstractVector
                        // @ts-ignore
                        public multiply(vec: io.lumine.xikage.mythicmobs.adapters.AbstractVector): io.lumine.xikage.mythicmobs.adapters.AbstractVector
                        // @ts-ignore
                        public multiply(m: number /*int*/): io.lumine.xikage.mythicmobs.adapters.AbstractVector
                        // @ts-ignore
                        public multiply(m: number /*double*/): io.lumine.xikage.mythicmobs.adapters.AbstractVector
                        // @ts-ignore
                        public multiply(m: number /*float*/): io.lumine.xikage.mythicmobs.adapters.AbstractVector
                        // @ts-ignore
                        public divide(vec: io.lumine.xikage.mythicmobs.adapters.AbstractVector): io.lumine.xikage.mythicmobs.adapters.AbstractVector
                        // @ts-ignore
                        public copy(vec: io.lumine.xikage.mythicmobs.adapters.AbstractVector): io.lumine.xikage.mythicmobs.adapters.AbstractVector
                        // @ts-ignore
                        public length(): number /*double*/
                        // @ts-ignore
                        public lengthSquared(): number /*double*/
                        // @ts-ignore
                        public getX(): number /*double*/
                        // @ts-ignore
                        public getBlockX(): number /*int*/
                        // @ts-ignore
                        public getY(): number /*double*/
                        // @ts-ignore
                        public getBlockY(): number /*int*/
                        // @ts-ignore
                        public getZ(): number /*double*/
                        // @ts-ignore
                        public getBlockZ(): number /*int*/
                        // @ts-ignore
                        public setX(x: number /*int*/): io.lumine.xikage.mythicmobs.adapters.AbstractVector
                        // @ts-ignore
                        public setX(x: number /*double*/): io.lumine.xikage.mythicmobs.adapters.AbstractVector
                        // @ts-ignore
                        public setX(x: number /*float*/): io.lumine.xikage.mythicmobs.adapters.AbstractVector
                        // @ts-ignore
                        public setY(y: number /*int*/): io.lumine.xikage.mythicmobs.adapters.AbstractVector
                        // @ts-ignore
                        public setY(y: number /*double*/): io.lumine.xikage.mythicmobs.adapters.AbstractVector
                        // @ts-ignore
                        public setY(y: number /*float*/): io.lumine.xikage.mythicmobs.adapters.AbstractVector
                        // @ts-ignore
                        public setZ(z: number /*int*/): io.lumine.xikage.mythicmobs.adapters.AbstractVector
                        // @ts-ignore
                        public setZ(z: number /*double*/): io.lumine.xikage.mythicmobs.adapters.AbstractVector
                        // @ts-ignore
                        public setZ(z: number /*float*/): io.lumine.xikage.mythicmobs.adapters.AbstractVector
                        // @ts-ignore
                        public normalize(): io.lumine.xikage.mythicmobs.adapters.AbstractVector
                        // @ts-ignore
                        public rotate(degrees: number /*float*/): io.lumine.xikage.mythicmobs.adapters.AbstractVector
                        // @ts-ignore
                        public equals(obj: java.lang.Object | any): boolean
                        // @ts-ignore
                        public hashCode(): number /*int*/
                        // @ts-ignore
                        public clone(): io.lumine.xikage.mythicmobs.adapters.AbstractVector
                        // @ts-ignore
                        public toString(): string
                        // @ts-ignore
                        public toLocation(world: io.lumine.xikage.mythicmobs.adapters.AbstractWorld): io.lumine.xikage.mythicmobs.adapters.AbstractLocation
                        // @ts-ignore
                        public toLocation(world: io.lumine.xikage.mythicmobs.adapters.AbstractWorld, yaw: number /*float*/, pitch: number /*float*/): io.lumine.xikage.mythicmobs.adapters.AbstractLocation
                        // @ts-ignore
                        public static getEpsilon(): number /*double*/
                        // @ts-ignore
                        public dot(other: io.lumine.xikage.mythicmobs.adapters.AbstractVector): number /*double*/
                        // @ts-ignore
                        public angle(other: io.lumine.xikage.mythicmobs.adapters.AbstractVector): number /*float*/
                    }
                }
            }
        }
    }
}
