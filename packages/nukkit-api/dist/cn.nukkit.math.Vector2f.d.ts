declare namespace cn {
    namespace nukkit {
        namespace math {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class Vector2f extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(x: number /*float*/)
                // @ts-ignore
                constructor(x: number /*float*/, y: number /*float*/)
                // @ts-ignore
                public readonly x: number /*float*/
                // @ts-ignore
                public readonly y: number /*float*/
                // @ts-ignore
                public getX(): number /*float*/
                // @ts-ignore
                public getY(): number /*float*/
                // @ts-ignore
                public getFloorX(): number /*int*/
                // @ts-ignore
                public getFloorY(): number /*int*/
                // @ts-ignore
                public add(x: number /*float*/): cn.nukkit.math.Vector2f
                // @ts-ignore
                public add(x: number /*float*/, y: number /*float*/): cn.nukkit.math.Vector2f
                // @ts-ignore
                public add(x: cn.nukkit.math.Vector2f): cn.nukkit.math.Vector2f
                // @ts-ignore
                public subtract(x: number /*float*/): cn.nukkit.math.Vector2f
                // @ts-ignore
                public subtract(x: number /*float*/, y: number /*float*/): cn.nukkit.math.Vector2f
                // @ts-ignore
                public subtract(x: cn.nukkit.math.Vector2f): cn.nukkit.math.Vector2f
                // @ts-ignore
                public ceil(): cn.nukkit.math.Vector2f
                // @ts-ignore
                public floor(): cn.nukkit.math.Vector2f
                // @ts-ignore
                public round(): cn.nukkit.math.Vector2f
                // @ts-ignore
                public abs(): cn.nukkit.math.Vector2f
                // @ts-ignore
                public multiply(number: number /*float*/): cn.nukkit.math.Vector2f
                // @ts-ignore
                public divide(number: number /*float*/): cn.nukkit.math.Vector2f
                // @ts-ignore
                public distance(x: number /*float*/): number /*double*/
                // @ts-ignore
                public distance(x: number /*float*/, y: number /*float*/): number /*double*/
                // @ts-ignore
                public distance(vector: cn.nukkit.math.Vector2f): number /*double*/
                // @ts-ignore
                public distanceSquared(x: number /*float*/): number /*double*/
                // @ts-ignore
                public distanceSquared(x: number /*float*/, y: number /*float*/): number /*double*/
                // @ts-ignore
                public distanceSquared(vector: cn.nukkit.math.Vector2f): number /*double*/
                // @ts-ignore
                public length(): number /*double*/
                // @ts-ignore
                public lengthSquared(): number /*float*/
                // @ts-ignore
                public normalize(): cn.nukkit.math.Vector2f
                // @ts-ignore
                public dot(v: cn.nukkit.math.Vector2f): number /*float*/
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
