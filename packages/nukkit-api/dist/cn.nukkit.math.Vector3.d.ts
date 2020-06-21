declare namespace cn {
    namespace nukkit {
        namespace math {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class Vector3 extends java.lang.Object implements java.lang.Cloneable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(x: number /*double*/)
                // @ts-ignore
                constructor(x: number /*double*/, y: number /*double*/)
                // @ts-ignore
                constructor(x: number /*double*/, y: number /*double*/, z: number /*double*/)
                // @ts-ignore
                public x: number /*double*/
                // @ts-ignore
                public y: number /*double*/
                // @ts-ignore
                public z: number /*double*/
                // @ts-ignore
                public getX(): number /*double*/
                // @ts-ignore
                public getY(): number /*double*/
                // @ts-ignore
                public getZ(): number /*double*/
                // @ts-ignore
                public getFloorX(): number /*int*/
                // @ts-ignore
                public getFloorY(): number /*int*/
                // @ts-ignore
                public getFloorZ(): number /*int*/
                // @ts-ignore
                public getChunkX(): number /*int*/
                // @ts-ignore
                public getChunkZ(): number /*int*/
                // @ts-ignore
                public getRight(): number /*double*/
                // @ts-ignore
                public getUp(): number /*double*/
                // @ts-ignore
                public getForward(): number /*double*/
                // @ts-ignore
                public getSouth(): number /*double*/
                // @ts-ignore
                public getWest(): number /*double*/
                // @ts-ignore
                public add(x: number /*double*/): cn.nukkit.math.Vector3
                // @ts-ignore
                public add(x: number /*double*/, y: number /*double*/): cn.nukkit.math.Vector3
                // @ts-ignore
                public add(x: number /*double*/, y: number /*double*/, z: number /*double*/): cn.nukkit.math.Vector3
                // @ts-ignore
                public add(x: cn.nukkit.math.Vector3): cn.nukkit.math.Vector3
                // @ts-ignore
                public subtract(): cn.nukkit.math.Vector3
                // @ts-ignore
                public subtract(x: number /*double*/): cn.nukkit.math.Vector3
                // @ts-ignore
                public subtract(x: number /*double*/, y: number /*double*/): cn.nukkit.math.Vector3
                // @ts-ignore
                public subtract(x: number /*double*/, y: number /*double*/, z: number /*double*/): cn.nukkit.math.Vector3
                // @ts-ignore
                public subtract(x: cn.nukkit.math.Vector3): cn.nukkit.math.Vector3
                // @ts-ignore
                public multiply(number: number /*double*/): cn.nukkit.math.Vector3
                // @ts-ignore
                public divide(number: number /*double*/): cn.nukkit.math.Vector3
                // @ts-ignore
                public ceil(): cn.nukkit.math.Vector3
                // @ts-ignore
                public floor(): cn.nukkit.math.Vector3
                // @ts-ignore
                public round(): cn.nukkit.math.Vector3
                // @ts-ignore
                public abs(): cn.nukkit.math.Vector3
                // @ts-ignore
                public getSide(face: cn.nukkit.math.BlockFace): cn.nukkit.math.Vector3
                // @ts-ignore
                public getSide(face: cn.nukkit.math.BlockFace, step: number /*int*/): cn.nukkit.math.Vector3
                // @ts-ignore
                public up(): cn.nukkit.math.Vector3
                // @ts-ignore
                public up(step: number /*int*/): cn.nukkit.math.Vector3
                // @ts-ignore
                public down(): cn.nukkit.math.Vector3
                // @ts-ignore
                public down(step: number /*int*/): cn.nukkit.math.Vector3
                // @ts-ignore
                public north(): cn.nukkit.math.Vector3
                // @ts-ignore
                public north(step: number /*int*/): cn.nukkit.math.Vector3
                // @ts-ignore
                public south(): cn.nukkit.math.Vector3
                // @ts-ignore
                public south(step: number /*int*/): cn.nukkit.math.Vector3
                // @ts-ignore
                public east(): cn.nukkit.math.Vector3
                // @ts-ignore
                public east(step: number /*int*/): cn.nukkit.math.Vector3
                // @ts-ignore
                public west(): cn.nukkit.math.Vector3
                // @ts-ignore
                public west(step: number /*int*/): cn.nukkit.math.Vector3
                // @ts-ignore
                public distance(pos: cn.nukkit.math.Vector3): number /*double*/
                // @ts-ignore
                public distanceSquared(pos: cn.nukkit.math.Vector3): number /*double*/
                // @ts-ignore
                public maxPlainDistance(): number /*double*/
                // @ts-ignore
                public maxPlainDistance(x: number /*double*/): number /*double*/
                // @ts-ignore
                public maxPlainDistance(x: number /*double*/, z: number /*double*/): number /*double*/
                // @ts-ignore
                public maxPlainDistance(vector: cn.nukkit.math.Vector2): number /*double*/
                // @ts-ignore
                public maxPlainDistance(x: cn.nukkit.math.Vector3): number /*double*/
                // @ts-ignore
                public length(): number /*double*/
                // @ts-ignore
                public lengthSquared(): number /*double*/
                // @ts-ignore
                public normalize(): cn.nukkit.math.Vector3
                // @ts-ignore
                public dot(v: cn.nukkit.math.Vector3): number /*double*/
                // @ts-ignore
                public cross(v: cn.nukkit.math.Vector3): cn.nukkit.math.Vector3
                /**
                 * Returns a new vector with x value equal to the second parameter, along the line between this vector and the
                 * passed in vector, or null if not possible.
                 * @param v vector
                 * @param x x value
                 * @return intermediate vector
                 */
                // @ts-ignore
                public getIntermediateWithXValue(v: cn.nukkit.math.Vector3, x: number /*double*/): cn.nukkit.math.Vector3
                /**
                 * Returns a new vector with y value equal to the second parameter, along the line between this vector and the
                 * passed in vector, or null if not possible.
                 * @param v vector
                 * @param y y value
                 * @return intermediate vector
                 */
                // @ts-ignore
                public getIntermediateWithYValue(v: cn.nukkit.math.Vector3, y: number /*double*/): cn.nukkit.math.Vector3
                /**
                 * Returns a new vector with z value equal to the second parameter, along the line between this vector and the
                 * passed in vector, or null if not possible.
                 * @param v vector
                 * @param z z value
                 * @return intermediate vector
                 */
                // @ts-ignore
                public getIntermediateWithZValue(v: cn.nukkit.math.Vector3, z: number /*double*/): cn.nukkit.math.Vector3
                // @ts-ignore
                public setComponents(x: number /*double*/, y: number /*double*/, z: number /*double*/): cn.nukkit.math.Vector3
                // @ts-ignore
                public toString(): string
                // @ts-ignore
                public equals(obj: java.lang.Object | any): boolean
                // @ts-ignore
                public hashCode(): number /*int*/
                // @ts-ignore
                public rawHashCode(): number /*int*/
                // @ts-ignore
                public clone(): cn.nukkit.math.Vector3
                // @ts-ignore
                public asVector3f(): cn.nukkit.math.Vector3f
                // @ts-ignore
                public asBlockVector3(): cn.nukkit.math.BlockVector3
            }
        }
    }
}
