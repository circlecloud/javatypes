declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace adapters {
                    // @ts-ignore
                    class AbstractLocation extends java.lang.Object implements java.lang.Cloneable {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(world: io.lumine.xikage.mythicmobs.adapters.AbstractWorld, x: number /*double*/, y: number /*double*/, z: number /*double*/)
                        // @ts-ignore
                        constructor(world: io.lumine.xikage.mythicmobs.adapters.AbstractWorld, x: number /*double*/, y: number /*double*/, z: number /*double*/, yaw: number /*float*/, pitch: number /*float*/)
                        // @ts-ignore
                        public setX(x: number /*double*/): void
                        // @ts-ignore
                        public getX(): number /*double*/
                        // @ts-ignore
                        public setY(y: number /*double*/): void
                        // @ts-ignore
                        public getY(): number /*double*/
                        // @ts-ignore
                        public setZ(z: number /*double*/): void
                        // @ts-ignore
                        public getZ(): number /*double*/
                        // @ts-ignore
                        public getBlockX(): number /*int*/
                        // @ts-ignore
                        public getBlockY(): number /*int*/
                        // @ts-ignore
                        public getBlockZ(): number /*int*/
                        // @ts-ignore
                        public getChunkX(): number /*int*/
                        // @ts-ignore
                        public getChunkZ(): number /*int*/
                        // @ts-ignore
                        public getYaw(): number /*float*/
                        // @ts-ignore
                        public setYaw(yaw: number /*float*/): void
                        // @ts-ignore
                        public getPitch(): number /*float*/
                        // @ts-ignore
                        public setPitch(pitch: number /*float*/): void
                        // @ts-ignore
                        public getWorld(): io.lumine.xikage.mythicmobs.adapters.AbstractWorld
                        // @ts-ignore
                        public distance(t: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): number /*double*/
                        // @ts-ignore
                        public distanceSquared(t: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): number /*double*/
                        // @ts-ignore
                        public distance2D(t: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): number /*double*/
                        // @ts-ignore
                        public distance2DSquared(t: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): number /*double*/
                        // @ts-ignore
                        public add(xA: number /*double*/, yA: number /*double*/, zA: number /*double*/): io.lumine.xikage.mythicmobs.adapters.AbstractLocation
                        // @ts-ignore
                        public getDirection(): io.lumine.xikage.mythicmobs.adapters.AbstractVector
                        // @ts-ignore
                        public add(vec: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): io.lumine.xikage.mythicmobs.adapters.AbstractLocation
                        // @ts-ignore
                        public add(vec: io.lumine.xikage.mythicmobs.adapters.AbstractVector): io.lumine.xikage.mythicmobs.adapters.AbstractLocation
                        // @ts-ignore
                        public subtract(x: number /*double*/, y: number /*double*/, z: number /*double*/): io.lumine.xikage.mythicmobs.adapters.AbstractLocation
                        // @ts-ignore
                        public subtract(vec: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): io.lumine.xikage.mythicmobs.adapters.AbstractLocation
                        // @ts-ignore
                        public subtract(vec: io.lumine.xikage.mythicmobs.adapters.AbstractVector): io.lumine.xikage.mythicmobs.adapters.AbstractLocation
                        // @ts-ignore
                        public multiply(m: number /*double*/): io.lumine.xikage.mythicmobs.adapters.AbstractLocation
                        // @ts-ignore
                        public zero(): io.lumine.xikage.mythicmobs.adapters.AbstractLocation
                        // @ts-ignore
                        public toVector(): io.lumine.xikage.mythicmobs.adapters.AbstractVector
                        // @ts-ignore
                        public equals(obj: java.lang.Object | any): boolean
                        // @ts-ignore
                        public toString(): string
                        // @ts-ignore
                        public hashCode(): number /*int*/
                        // @ts-ignore
                        public clone(): io.lumine.xikage.mythicmobs.adapters.AbstractLocation
                        // @ts-ignore
                        public isLoaded(): boolean
                        // @ts-ignore
                        public getBiome(): io.lumine.xikage.mythicmobs.adapters.AbstractBiome
                    }
                }
            }
        }
    }
}
