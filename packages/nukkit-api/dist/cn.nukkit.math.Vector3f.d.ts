declare namespace cn {
    namespace nukkit {
        namespace math {
            // @ts-ignore
            class Vector3f extends java.lang.Object implements java.lang.Cloneable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(x: number /*float*/)
                // @ts-ignore
                constructor(x: number /*float*/, y: number /*float*/)
                // @ts-ignore
                constructor(x: number /*float*/, y: number /*float*/, z: number /*float*/)
                // @ts-ignore
                public static readonly SIDE_DOWN: number /*int*/
                // @ts-ignore
                public static readonly SIDE_UP: number /*int*/
                // @ts-ignore
                public static readonly SIDE_NORTH: number /*int*/
                // @ts-ignore
                public static readonly SIDE_SOUTH: number /*int*/
                // @ts-ignore
                public static readonly SIDE_WEST: number /*int*/
                // @ts-ignore
                public static readonly SIDE_EAST: number /*int*/
                // @ts-ignore
                public x: number /*float*/
                // @ts-ignore
                public y: number /*float*/
                // @ts-ignore
                public z: number /*float*/
                // @ts-ignore
                public getX(): number /*float*/
                // @ts-ignore
                public getY(): number /*float*/
                // @ts-ignore
                public getZ(): number /*float*/
                // @ts-ignore
                public getFloorX(): number /*int*/
                // @ts-ignore
                public getFloorY(): number /*int*/
                // @ts-ignore
                public getFloorZ(): number /*int*/
                // @ts-ignore
                public getRight(): number /*float*/
                // @ts-ignore
                public getUp(): number /*float*/
                // @ts-ignore
                public getForward(): number /*float*/
                // @ts-ignore
                public getSouth(): number /*float*/
                // @ts-ignore
                public getWest(): number /*float*/
                // @ts-ignore
                public add(x: number /*float*/): cn.nukkit.math.Vector3f
                // @ts-ignore
                public add(x: number /*float*/, y: number /*float*/): cn.nukkit.math.Vector3f
                // @ts-ignore
                public add(x: number /*float*/, y: number /*float*/, z: number /*float*/): cn.nukkit.math.Vector3f
                // @ts-ignore
                public add(x: cn.nukkit.math.Vector3f): cn.nukkit.math.Vector3f
                // @ts-ignore
                public subtract(): cn.nukkit.math.Vector3f
                // @ts-ignore
                public subtract(x: number /*float*/): cn.nukkit.math.Vector3f
                // @ts-ignore
                public subtract(x: number /*float*/, y: number /*float*/): cn.nukkit.math.Vector3f
                // @ts-ignore
                public subtract(x: number /*float*/, y: number /*float*/, z: number /*float*/): cn.nukkit.math.Vector3f
                // @ts-ignore
                public subtract(x: cn.nukkit.math.Vector3f): cn.nukkit.math.Vector3f
                // @ts-ignore
                public multiply(number: number /*float*/): cn.nukkit.math.Vector3f
                // @ts-ignore
                public divide(number: number /*float*/): cn.nukkit.math.Vector3f
                // @ts-ignore
                public ceil(): cn.nukkit.math.Vector3f
                // @ts-ignore
                public floor(): cn.nukkit.math.Vector3f
                // @ts-ignore
                public round(): cn.nukkit.math.Vector3f
                // @ts-ignore
                public abs(): cn.nukkit.math.Vector3f
                // @ts-ignore
                public getSide(side: number /*int*/): cn.nukkit.math.Vector3f
                // @ts-ignore
                public getSide(side: number /*int*/, step: number /*int*/): cn.nukkit.math.Vector3f
                // @ts-ignore
                public static getOppositeSide(side: number /*int*/): number /*int*/
                // @ts-ignore
                public distance(pos: cn.nukkit.math.Vector3f): number /*double*/
                // @ts-ignore
                public distanceSquared(pos: cn.nukkit.math.Vector3f): number /*double*/
                // @ts-ignore
                public maxPlainDistance(): number /*float*/
                // @ts-ignore
                public maxPlainDistance(x: number /*float*/): number /*float*/
                // @ts-ignore
                public maxPlainDistance(x: number /*float*/, z: number /*float*/): number /*float*/
                // @ts-ignore
                public maxPlainDistance(vector: cn.nukkit.math.Vector2f): number /*float*/
                // @ts-ignore
                public maxPlainDistance(x: cn.nukkit.math.Vector3f): number /*float*/
                // @ts-ignore
                public length(): number /*double*/
                // @ts-ignore
                public lengthSquared(): number /*float*/
                // @ts-ignore
                public normalize(): cn.nukkit.math.Vector3f
                // @ts-ignore
                public dot(v: cn.nukkit.math.Vector3f): number /*float*/
                // @ts-ignore
                public cross(v: cn.nukkit.math.Vector3f): cn.nukkit.math.Vector3f
                // @ts-ignore
                public getIntermediateWithXValue(v: cn.nukkit.math.Vector3f, x: number /*float*/): cn.nukkit.math.Vector3f
                // @ts-ignore
                public getIntermediateWithYValue(v: cn.nukkit.math.Vector3f, y: number /*float*/): cn.nukkit.math.Vector3f
                // @ts-ignore
                public getIntermediateWithZValue(v: cn.nukkit.math.Vector3f, z: number /*float*/): cn.nukkit.math.Vector3f
                // @ts-ignore
                public setComponents(x: number /*float*/, y: number /*float*/, z: number /*float*/): cn.nukkit.math.Vector3f
                // @ts-ignore
                public toString(): string
                // @ts-ignore
                public equals(obj: java.lang.Object | any): boolean
                // @ts-ignore
                public rawHashCode(): number /*int*/
                // @ts-ignore
                public clone(): cn.nukkit.math.Vector3f
                // @ts-ignore
                public asVector3(): cn.nukkit.math.Vector3
                // @ts-ignore
                public asBlockVector3(): cn.nukkit.math.BlockVector3
            }
        }
    }
}
