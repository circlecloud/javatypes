declare namespace cn {
    namespace nukkit {
        namespace math {
            // @ts-ignore
            class BlockFace extends java.lang.Enum<cn.nukkit.math.BlockFace> {
                // @ts-ignore
                public static readonly DOWN: cn.nukkit.math.BlockFace
                // @ts-ignore
                public static readonly UP: cn.nukkit.math.BlockFace
                // @ts-ignore
                public static readonly NORTH: cn.nukkit.math.BlockFace
                // @ts-ignore
                public static readonly SOUTH: cn.nukkit.math.BlockFace
                // @ts-ignore
                public static readonly WEST: cn.nukkit.math.BlockFace
                // @ts-ignore
                public static readonly EAST: cn.nukkit.math.BlockFace
                // @ts-ignore
                public static values(): cn.nukkit.math.BlockFace[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): cn.nukkit.math.BlockFace
                /**
                 * Get a BlockFace by it's index (0-5). The order is D-U-N-S-W-E
                 * @param index BlockFace index
                 * @return block face
                 */
                // @ts-ignore
                public static fromIndex(index: number /*int*/): cn.nukkit.math.BlockFace
                /**
                 * Get a BlockFace by it's horizontal index (0-3). The order is S-W-N-E
                 * @param index BlockFace index
                 * @return block face
                 */
                // @ts-ignore
                public static fromHorizontalIndex(index: number /*int*/): cn.nukkit.math.BlockFace
                /**
                 * Get the BlockFace corresponding to the given angle (0-360). An angle of 0 is SOUTH, an angle of 90 would be WEST
                 * @param angle horizontal angle
                 * @return block face
                 */
                // @ts-ignore
                public static fromHorizontalAngle(angle: number /*double*/): cn.nukkit.math.BlockFace
                // @ts-ignore
                public static fromAxis(axisDirection: cn.nukkit.math.BlockFace.AxisDirection, axis: cn.nukkit.math.BlockFace.Axis): cn.nukkit.math.BlockFace
                /**
                 * Choose a random BlockFace using the given Random
                 * @param rand random number generator
                 * @return block face
                 */
                // @ts-ignore
                public static random(rand: java.util.Random): cn.nukkit.math.BlockFace
                /**
                 * Get the index of this BlockFace (0-5). The order is D-U-N-S-W-E
                 * @return index
                 */
                // @ts-ignore
                public getIndex(): number /*int*/
                /**
                 * Get the horizontal index of this BlockFace (0-3). The order is S-W-N-E
                 * @return horizontal index
                 */
                // @ts-ignore
                public getHorizontalIndex(): number /*int*/
                /**
                 * Get the angle of this BlockFace (0-360)
                 * @return horizontal angle
                 */
                // @ts-ignore
                public getHorizontalAngle(): number /*float*/
                /**
                 * Get the name of this BlockFace (up, down, north, etc.)
                 * @return name
                 */
                // @ts-ignore
                public getName(): string
                /**
                 * Get the Axis of this BlockFace
                 * @return axis
                 */
                // @ts-ignore
                public getAxis(): cn.nukkit.math.BlockFace.Axis
                /**
                 * Get the AxisDirection of this BlockFace
                 * @return axis direction
                 */
                // @ts-ignore
                public getAxisDirection(): cn.nukkit.math.BlockFace.AxisDirection
                /**
                 * Get the unit vector of this BlockFace
                 * @return vector
                 */
                // @ts-ignore
                public getUnitVector(): cn.nukkit.math.Vector3
                /**
                 * Returns an offset that addresses the block in front of this BlockFace
                 * @return x offset
                 */
                // @ts-ignore
                public getXOffset(): number /*int*/
                /**
                 * Returns an offset that addresses the block in front of this BlockFace
                 * @return y offset
                 */
                // @ts-ignore
                public getYOffset(): number /*int*/
                /**
                 * Returns an offset that addresses the block in front of this BlockFace
                 * @return x offset
                 */
                // @ts-ignore
                public getZOffset(): number /*int*/
                /**
                 * Get the opposite BlockFace (e.g. DOWN ==&gt; UP)
                 * @return block face
                 */
                // @ts-ignore
                public getOpposite(): cn.nukkit.math.BlockFace
                /**
                 * Rotate this BlockFace around the Y axis clockwise (NORTH =&gt; EAST =&gt; SOUTH =&gt; WEST =&gt; NORTH)
                 * @return block face
                 */
                // @ts-ignore
                public rotateY(): cn.nukkit.math.BlockFace
                /**
                 * Rotate this BlockFace around the Y axis counter-clockwise (NORTH =&gt; WEST =&gt; SOUTH =&gt; EAST =&gt; NORTH)
                 * @return block face
                 */
                // @ts-ignore
                public rotateYCCW(): cn.nukkit.math.BlockFace
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
