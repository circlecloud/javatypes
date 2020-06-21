declare namespace cn {
    namespace nukkit {
        namespace math {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class Vector2 extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(x: number /*double*/)
                // @ts-ignore
                constructor(x: number /*double*/, y: number /*double*/)
                // @ts-ignore
                public readonly x: number /*double*/
                // @ts-ignore
                public readonly y: number /*double*/
                // @ts-ignore
                public getX(): number /*double*/
                // @ts-ignore
                public getY(): number /*double*/
                // @ts-ignore
                public getFloorX(): number /*int*/
                // @ts-ignore
                public getFloorY(): number /*int*/
                // @ts-ignore
                public add(x: number /*double*/): cn.nukkit.math.Vector2
                // @ts-ignore
                public add(x: number /*double*/, y: number /*double*/): cn.nukkit.math.Vector2
                // @ts-ignore
                public add(x: cn.nukkit.math.Vector2): cn.nukkit.math.Vector2
                // @ts-ignore
                public subtract(x: number /*double*/): cn.nukkit.math.Vector2
                // @ts-ignore
                public subtract(x: number /*double*/, y: number /*double*/): cn.nukkit.math.Vector2
                // @ts-ignore
                public subtract(x: cn.nukkit.math.Vector2): cn.nukkit.math.Vector2
                // @ts-ignore
                public ceil(): cn.nukkit.math.Vector2
                // @ts-ignore
                public floor(): cn.nukkit.math.Vector2
                // @ts-ignore
                public round(): cn.nukkit.math.Vector2
                // @ts-ignore
                public abs(): cn.nukkit.math.Vector2
                // @ts-ignore
                public multiply(number: number /*double*/): cn.nukkit.math.Vector2
                // @ts-ignore
                public divide(number: number /*double*/): cn.nukkit.math.Vector2
                // @ts-ignore
                public distance(x: number /*double*/): number /*double*/
                // @ts-ignore
                public distance(x: number /*double*/, y: number /*double*/): number /*double*/
                // @ts-ignore
                public distance(vector: cn.nukkit.math.Vector2): number /*double*/
                // @ts-ignore
                public distanceSquared(x: number /*double*/): number /*double*/
                // @ts-ignore
                public distanceSquared(x: number /*double*/, y: number /*double*/): number /*double*/
                // @ts-ignore
                public distanceSquared(vector: cn.nukkit.math.Vector2): number /*double*/
                // @ts-ignore
                public length(): number /*double*/
                // @ts-ignore
                public lengthSquared(): number /*double*/
                // @ts-ignore
                public normalize(): cn.nukkit.math.Vector2
                // @ts-ignore
                public dot(v: cn.nukkit.math.Vector2): number /*double*/
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
