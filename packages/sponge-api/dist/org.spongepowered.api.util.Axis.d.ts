declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                /**
                 * Represents a three dimensional cartesian axis.
                 */
                // @ts-ignore
                class Axis extends java.lang.Enum<org.spongepowered.api.util.Axis> implements org.spongepowered.api.util.Cycleable<org.spongepowered.api.util.Axis> {
                    // @ts-ignore
                    values(): org.spongepowered.api.util.Axis[]
                    // @ts-ignore
                    valueOf(name: string): org.spongepowered.api.util.Axis
                    /**
                     * Gets the closest horizontal direction from the given vector. If the
                     * vector is the 0-Vector, this method returns {@link #X}. If the vector has
                     * the same length in a horizontal and vertical direction, a horizontal axis
                     * will be returned. If the vector has the same length in x and in z
                     * direction {@link #X} will be returned.
                     * @param vector The vector to convert to a axis
                     * @return The closest axis.
                     */
                    // @ts-ignore
                    getClosest(vector: Vector3d): org.spongepowered.api.util.Axis
                    /**
                     * Returns whether the given vector is along this axis.
                     * @param vector The vector to test
                     * @return True if it is along this axis
                     */
                    // @ts-ignore
                    isVectorAlongAxis(vector: Vector3d): boolean
                    /**
                     * Gets the component of the vector denoted by this axis.
                     * @param vector3d The vector
                     * @return The value of the component
                     */
                    // @ts-ignore
                    getComponent(vector3d: Vector3d): double
                    /**
                     * Gets the direction of the vector's component denoted by this axis.
                     * @param vector3d The vector
                     * @return The direction of the component
                     */
                    // @ts-ignore
                    getDirection(vector3d: Vector3d): org.spongepowered.api.util.AxisDirection
                    /**
                     * Gets the Vector3d backing this axis.
                     * @return the Vector3d
                     */
                    // @ts-ignore
                    toVector3d(): Vector3d
                    /**
                     * Gets the Vector3d with the given {@link AxisDirection}.
                     * @param axisDirection The direction along the axis.
                     * @return the Vector3d
                     */
                    // @ts-ignore
                    toVector3dWithDirection(axisDirection: org.spongepowered.api.util.AxisDirection): Vector3d
                    // @ts-ignore
                    cycleNext(): org.spongepowered.api.util.Axis
                }
            }
        }
    }
}
