declare namespace org {
    namespace bukkit {
        namespace util {
            /**
             * EulerAngle is used to represent 3 angles, one for each
             * axis (x, y, z). The angles are in radians
             */
            // @ts-ignore
            class EulerAngle extends java.lang.Object {
                /**
                 * Creates a EularAngle with each axis set to the
                 * passed angle in radians
                 * @param x the angle for the x axis in radians
                 * @param y the angle for the y axis in radians
                 * @param z the angle for the z axis in radians
                 */
                // @ts-ignore
                constructor(x: number /*double*/, y: number /*double*/, z: number /*double*/)
                /**
                 * A EulerAngle with every axis set to 0
                 */
                // @ts-ignore
                readonly ZERO: org.bukkit.util.EulerAngle
                /**
                 * Returns the angle on the x axis in radians
                 * @return the angle in radians
                 */
                // @ts-ignore
                getX(): double
                /**
                 * Returns the angle on the y axis in radians
                 * @return the angle in radians
                 */
                // @ts-ignore
                getY(): double
                /**
                 * Returns the angle on the z axis in radians
                 * @return the angle in radians
                 */
                // @ts-ignore
                getZ(): double
                /**
                 * Return a EulerAngle which is the result of changing
                 * the x axis to the passed angle
                 * @param x the angle in radians
                 * @return the resultant EulerAngle
                 */
                // @ts-ignore
                setX(x: number /*double*/): org.bukkit.util.EulerAngle
                /**
                 * Return a EulerAngle which is the result of changing
                 * the y axis to the passed angle
                 * @param y the angle in radians
                 * @return the resultant EulerAngle
                 */
                // @ts-ignore
                setY(y: number /*double*/): org.bukkit.util.EulerAngle
                /**
                 * Return a EulerAngle which is the result of changing
                 * the z axis to the passed angle
                 * @param z the angle in radians
                 * @return the resultant EulerAngle
                 */
                // @ts-ignore
                setZ(z: number /*double*/): org.bukkit.util.EulerAngle
                /**
                 * Creates a new EulerAngle which is the result of adding
                 * the x, y, z components to this EulerAngle
                 * @param x the angle to add to the x axis in radians
                 * @param y the angle to add to the y axis in radians
                 * @param z the angle to add to the z axis in radians
                 * @return the resultant EulerAngle
                 */
                // @ts-ignore
                add(x: number /*double*/, y: number /*double*/, z: number /*double*/): org.bukkit.util.EulerAngle
                /**
                 * Creates a new EulerAngle which is the result of subtracting
                 * the x, y, z components to this EulerAngle
                 * @param x the angle to subtract to the x axis in radians
                 * @param y the angle to subtract to the y axis in radians
                 * @param z the angle to subtract to the z axis in radians
                 * @return the resultant EulerAngle
                 */
                // @ts-ignore
                subtract(x: number /*double*/, y: number /*double*/, z: number /*double*/): org.bukkit.util.EulerAngle
                // @ts-ignore
                equals(o: any): boolean
                // @ts-ignore
                hashCode(): int
            }
        }
    }
}
