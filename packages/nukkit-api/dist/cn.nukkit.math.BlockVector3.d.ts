declare namespace cn {
    namespace nukkit {
        namespace math {
            // @ts-ignore
            class BlockVector3 extends java.lang.Object implements java.lang.Cloneable {
                // @ts-ignore
                constructor(x: number /*int*/, y: number /*int*/, z: number /*int*/)
                // @ts-ignore
                constructor()
                // @ts-ignore
                public x: number /*int*/
                // @ts-ignore
                public y: number /*int*/
                // @ts-ignore
                public z: number /*int*/
                // @ts-ignore
                public setComponents(x: number /*int*/, y: number /*int*/, z: number /*int*/): cn.nukkit.math.BlockVector3
                // @ts-ignore
                public getX(): number /*int*/
                // @ts-ignore
                public getY(): number /*int*/
                // @ts-ignore
                public getZ(): number /*int*/
                // @ts-ignore
                public add(x: number /*double*/): cn.nukkit.math.Vector3
                // @ts-ignore
                public add(x: number /*double*/, y: number /*double*/): cn.nukkit.math.Vector3
                // @ts-ignore
                public add(x: number /*double*/, y: number /*double*/, z: number /*double*/): cn.nukkit.math.Vector3
                // @ts-ignore
                public add(x: cn.nukkit.math.Vector3): cn.nukkit.math.Vector3
                // @ts-ignore
                public subtract(x: number /*double*/): cn.nukkit.math.Vector3
                // @ts-ignore
                public subtract(x: number /*double*/, y: number /*double*/): cn.nukkit.math.Vector3
                // @ts-ignore
                public subtract(x: number /*double*/, y: number /*double*/, z: number /*double*/): cn.nukkit.math.Vector3
                // @ts-ignore
                public subtract(x: cn.nukkit.math.Vector3): cn.nukkit.math.Vector3
                // @ts-ignore
                public add(x: number /*int*/): cn.nukkit.math.BlockVector3
                // @ts-ignore
                public add(x: number /*int*/, y: number /*int*/): cn.nukkit.math.BlockVector3
                // @ts-ignore
                public add(x: number /*int*/, y: number /*int*/, z: number /*int*/): cn.nukkit.math.BlockVector3
                // @ts-ignore
                public add(x: cn.nukkit.math.BlockVector3): cn.nukkit.math.BlockVector3
                // @ts-ignore
                public subtract(): cn.nukkit.math.BlockVector3
                // @ts-ignore
                public subtract(x: number /*int*/): cn.nukkit.math.BlockVector3
                // @ts-ignore
                public subtract(x: number /*int*/, y: number /*int*/): cn.nukkit.math.BlockVector3
                // @ts-ignore
                public subtract(x: number /*int*/, y: number /*int*/, z: number /*int*/): cn.nukkit.math.BlockVector3
                // @ts-ignore
                public subtract(x: cn.nukkit.math.BlockVector3): cn.nukkit.math.BlockVector3
                // @ts-ignore
                public multiply(number: number /*int*/): cn.nukkit.math.BlockVector3
                // @ts-ignore
                public divide(number: number /*int*/): cn.nukkit.math.BlockVector3
                // @ts-ignore
                public getSide(face: cn.nukkit.math.BlockFace): cn.nukkit.math.BlockVector3
                // @ts-ignore
                public getSide(face: cn.nukkit.math.BlockFace, step: number /*int*/): cn.nukkit.math.BlockVector3
                // @ts-ignore
                public up(): cn.nukkit.math.BlockVector3
                // @ts-ignore
                public up(step: number /*int*/): cn.nukkit.math.BlockVector3
                // @ts-ignore
                public down(): cn.nukkit.math.BlockVector3
                // @ts-ignore
                public down(step: number /*int*/): cn.nukkit.math.BlockVector3
                // @ts-ignore
                public north(): cn.nukkit.math.BlockVector3
                // @ts-ignore
                public north(step: number /*int*/): cn.nukkit.math.BlockVector3
                // @ts-ignore
                public south(): cn.nukkit.math.BlockVector3
                // @ts-ignore
                public south(step: number /*int*/): cn.nukkit.math.BlockVector3
                // @ts-ignore
                public east(): cn.nukkit.math.BlockVector3
                // @ts-ignore
                public east(step: number /*int*/): cn.nukkit.math.BlockVector3
                // @ts-ignore
                public west(): cn.nukkit.math.BlockVector3
                // @ts-ignore
                public west(step: number /*int*/): cn.nukkit.math.BlockVector3
                // @ts-ignore
                public distance(pos: cn.nukkit.math.Vector3): number /*double*/
                // @ts-ignore
                public distance(pos: cn.nukkit.math.BlockVector3): number /*double*/
                // @ts-ignore
                public distanceSquared(pos: cn.nukkit.math.Vector3): number /*double*/
                // @ts-ignore
                public distanceSquared(pos: cn.nukkit.math.BlockVector3): number /*double*/
                // @ts-ignore
                public distanceSquared(x: number /*double*/, y: number /*double*/, z: number /*double*/): number /*double*/
                // @ts-ignore
                public equals(o: java.lang.Object | any): boolean
                // @ts-ignore
                public hashCode(): number /*int*/
                // @ts-ignore
                public toString(): string
                // @ts-ignore
                public clone(): cn.nukkit.math.BlockVector3
                // @ts-ignore
                public asVector3(): cn.nukkit.math.Vector3
                // @ts-ignore
                public asVector3f(): cn.nukkit.math.Vector3f
            }
        }
    }
}
