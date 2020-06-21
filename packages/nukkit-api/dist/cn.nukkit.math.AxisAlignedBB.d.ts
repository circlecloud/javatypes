declare namespace cn {
    namespace nukkit {
        namespace math {
            // @ts-ignore
            interface AxisAlignedBB extends java.lang.Cloneable {
                // @ts-ignore
                setBounds(minX: number /*double*/, minY: number /*double*/, minZ: number /*double*/, maxX: number /*double*/, maxY: number /*double*/, maxZ: number /*double*/): cn.nukkit.math.AxisAlignedBB
                // @ts-ignore
                addCoord(x: number /*double*/, y: number /*double*/, z: number /*double*/): cn.nukkit.math.AxisAlignedBB
                // @ts-ignore
                grow(x: number /*double*/, y: number /*double*/, z: number /*double*/): cn.nukkit.math.AxisAlignedBB
                // @ts-ignore
                expand(x: number /*double*/, y: number /*double*/, z: number /*double*/): cn.nukkit.math.AxisAlignedBB
                // @ts-ignore
                offset(x: number /*double*/, y: number /*double*/, z: number /*double*/): cn.nukkit.math.AxisAlignedBB
                // @ts-ignore
                shrink(x: number /*double*/, y: number /*double*/, z: number /*double*/): cn.nukkit.math.AxisAlignedBB
                // @ts-ignore
                contract(x: number /*double*/, y: number /*double*/, z: number /*double*/): cn.nukkit.math.AxisAlignedBB
                // @ts-ignore
                setBB(bb: cn.nukkit.math.AxisAlignedBB): cn.nukkit.math.AxisAlignedBB
                // @ts-ignore
                getOffsetBoundingBox(x: number /*double*/, y: number /*double*/, z: number /*double*/): cn.nukkit.math.AxisAlignedBB
                // @ts-ignore
                calculateXOffset(bb: cn.nukkit.math.AxisAlignedBB, x: number /*double*/): number /*double*/
                // @ts-ignore
                calculateYOffset(bb: cn.nukkit.math.AxisAlignedBB, y: number /*double*/): number /*double*/
                // @ts-ignore
                calculateZOffset(bb: cn.nukkit.math.AxisAlignedBB, z: number /*double*/): number /*double*/
                // @ts-ignore
                intersectsWith(bb: cn.nukkit.math.AxisAlignedBB): boolean
                // @ts-ignore
                isVectorInside(vector: cn.nukkit.math.Vector3): boolean
                // @ts-ignore
                getAverageEdgeLength(): number /*double*/
                // @ts-ignore
                isVectorInYZ(vector: cn.nukkit.math.Vector3): boolean
                // @ts-ignore
                isVectorInXZ(vector: cn.nukkit.math.Vector3): boolean
                // @ts-ignore
                isVectorInXY(vector: cn.nukkit.math.Vector3): boolean
                // @ts-ignore
                calculateIntercept(pos1: cn.nukkit.math.Vector3, pos2: cn.nukkit.math.Vector3): cn.nukkit.level.MovingObjectPosition
                // @ts-ignore
                setMinX(minX: number /*double*/): void
                // @ts-ignore
                setMinY(minY: number /*double*/): void
                // @ts-ignore
                setMinZ(minZ: number /*double*/): void
                // @ts-ignore
                setMaxX(maxX: number /*double*/): void
                // @ts-ignore
                setMaxY(maxY: number /*double*/): void
                // @ts-ignore
                setMaxZ(maxZ: number /*double*/): void
                // @ts-ignore
                getMinX(): number /*double*/
                // @ts-ignore
                getMinY(): number /*double*/
                // @ts-ignore
                getMinZ(): number /*double*/
                // @ts-ignore
                getMaxX(): number /*double*/
                // @ts-ignore
                getMaxY(): number /*double*/
                // @ts-ignore
                getMaxZ(): number /*double*/
                // @ts-ignore
                clone(): cn.nukkit.math.AxisAlignedBB
                // @ts-ignore
                forEach(action: cn.nukkit.math.AxisAlignedBB.BBConsumer<any>): void
            }
        }
    }
}
