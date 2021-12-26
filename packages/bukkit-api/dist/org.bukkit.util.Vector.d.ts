declare namespace org {
    namespace bukkit {
        namespace util {
            /**
             * Represents a mutable vector. Because the components of Vectors are mutable,
             * storing Vectors long term may be dangerous if passing code modifies the
             * Vector later. If you want to keep around a Vector, it may be wise to call
             * <code>clone()</code> in order to get a copy.
             */
            // @ts-ignore
            class Vector extends java.lang.Object implements java.lang.Cloneable, org.bukkit.configuration.serialization.ConfigurationSerializable {
                /**
                 * Construct the vector with all components as 0.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Construct the vector with provided integer components.
                 * @param x X component
                 * @param y Y component
                 * @param z Z component
                 */
                // @ts-ignore
                constructor(x: number /*int*/, y: number /*int*/, z: number /*int*/)
                /**
                 * Construct the vector with provided double components.
                 * @param x X component
                 * @param y Y component
                 * @param z Z component
                 */
                // @ts-ignore
                constructor(x: number /*double*/, y: number /*double*/, z: number /*double*/)
                /**
                 * Construct the vector with provided float components.
                 * @param x X component
                 * @param y Y component
                 * @param z Z component
                 */
                // @ts-ignore
                constructor(x: number /*float*/, y: number /*float*/, z: number /*float*/)
                // @ts-ignore
                x: number /*double*/
                // @ts-ignore
                y: number /*double*/
                // @ts-ignore
                z: number /*double*/
                /**
                 * Adds a vector to this one
                 * @param vec The other vector
                 * @return the same vector
                 */
                // @ts-ignore
                public add(vec: org.bukkit.util.Vector): org.bukkit.util.Vector
                /**
                 * Subtracts a vector from this one.
                 * @param vec The other vector
                 * @return the same vector
                 */
                // @ts-ignore
                public subtract(vec: org.bukkit.util.Vector): org.bukkit.util.Vector
                /**
                 * Multiplies the vector by another.
                 * @param vec The other vector
                 * @return the same vector
                 */
                // @ts-ignore
                public multiply(vec: org.bukkit.util.Vector): org.bukkit.util.Vector
                /**
                 * Divides the vector by another.
                 * @param vec The other vector
                 * @return the same vector
                 */
                // @ts-ignore
                public divide(vec: org.bukkit.util.Vector): org.bukkit.util.Vector
                /**
                 * Copies another vector
                 * @param vec The other vector
                 * @return the same vector
                 */
                // @ts-ignore
                public copy(vec: org.bukkit.util.Vector): org.bukkit.util.Vector
                /**
                 * Gets the magnitude of the vector, defined as sqrt(x^2+y^2+z^2). The
                 * value of this method is not cached and uses a costly square-root
                 * function, so do not repeatedly call this method to get the vector's
                 * magnitude. NaN will be returned if the inner result of the sqrt()
                 * function overflows, which will be caused if the length is too long.
                 * @return the magnitude
                 */
                // @ts-ignore
                public length(): number /*double*/
                /**
                 * Gets the magnitude of the vector squared.
                 * @return the magnitude
                 */
                // @ts-ignore
                public lengthSquared(): number /*double*/
                /**
                 * Get the distance between this vector and another. The value of this
                 * method is not cached and uses a costly square-root function, so do not
                 * repeatedly call this method to get the vector's magnitude. NaN will be
                 * returned if the inner result of the sqrt() function overflows, which
                 * will be caused if the distance is too long.
                 * @param o The other vector
                 * @return the distance
                 */
                // @ts-ignore
                public distance(o: org.bukkit.util.Vector): number /*double*/
                /**
                 * Get the squared distance between this vector and another.
                 * @param o The other vector
                 * @return the distance
                 */
                // @ts-ignore
                public distanceSquared(o: org.bukkit.util.Vector): number /*double*/
                /**
                 * Gets the angle between this vector and another in radians.
                 * @param other The other vector
                 * @return angle in radians
                 */
                // @ts-ignore
                public angle(other: org.bukkit.util.Vector): number /*float*/
                /**
                 * Sets this vector to the midpoint between this vector and another.
                 * @param other The other vector
                 * @return this same vector (now a midpoint)
                 */
                // @ts-ignore
                public midpoint(other: org.bukkit.util.Vector): org.bukkit.util.Vector
                /**
                 * Gets a new midpoint vector between this vector and another.
                 * @param other The other vector
                 * @return a new midpoint vector
                 */
                // @ts-ignore
                public getMidpoint(other: org.bukkit.util.Vector): org.bukkit.util.Vector
                /**
                 * Performs scalar multiplication, multiplying all components with a
                 * scalar.
                 * @param m The factor
                 * @return the same vector
                 */
                // @ts-ignore
                public multiply(m: number /*int*/): org.bukkit.util.Vector
                /**
                 * Performs scalar multiplication, multiplying all components with a
                 * scalar.
                 * @param m The factor
                 * @return the same vector
                 */
                // @ts-ignore
                public multiply(m: number /*double*/): org.bukkit.util.Vector
                /**
                 * Performs scalar multiplication, multiplying all components with a
                 * scalar.
                 * @param m The factor
                 * @return the same vector
                 */
                // @ts-ignore
                public multiply(m: number /*float*/): org.bukkit.util.Vector
                /**
                 * Calculates the dot product of this vector with another. The dot product
                 * is defined as x1*x2+y1*y2+z1*z2. The returned value is a scalar.
                 * @param other The other vector
                 * @return dot product
                 */
                // @ts-ignore
                public dot(other: org.bukkit.util.Vector): number /*double*/
                /**
                 * Calculates the cross product of this vector with another. The cross
                 * product is defined as:
                 * <ul>
                 * <li>x = y1 * z2 - y2 * z1
                 * <li>y = z1 * x2 - z2 * x1
                 * <li>z = x1 * y2 - x2 * y1
                 * </ul>
                 * @param o The other vector
                 * @return the same vector
                 */
                // @ts-ignore
                public crossProduct(o: org.bukkit.util.Vector): org.bukkit.util.Vector
                /**
                 * Calculates the cross product of this vector with another without mutating
                 * the original. The cross product is defined as:
                 * <ul>
                 * <li>x = y1 * z2 - y2 * z1
                 * <li>y = z1 * x2 - z2 * x1
                 * <li>z = x1 * y2 - x2 * y1
                 * </ul>
                 * @param o The other vector
                 * @return a new vector
                 */
                // @ts-ignore
                public getCrossProduct(o: org.bukkit.util.Vector): org.bukkit.util.Vector
                /**
                 * Converts this vector to a unit vector (a vector with length of 1).
                 * @return the same vector
                 */
                // @ts-ignore
                public normalize(): org.bukkit.util.Vector
                /**
                 * Zero this vector's components.
                 * @return the same vector
                 */
                // @ts-ignore
                public zero(): org.bukkit.util.Vector
                /**
                 * Returns whether this vector is in an axis-aligned bounding box.
                 * <p>
                 * The minimum and maximum vectors given must be truly the minimum and
                 * maximum X, Y and Z components.
                 * @param min Minimum vector
                 * @param max Maximum vector
                 * @return whether this vector is in the AABB
                 */
                // @ts-ignore
                public isInAABB(min: org.bukkit.util.Vector, max: org.bukkit.util.Vector): boolean
                /**
                 * Returns whether this vector is within a sphere.
                 * @param origin Sphere origin.
                 * @param radius Sphere radius
                 * @return whether this vector is in the sphere
                 */
                // @ts-ignore
                public isInSphere(origin: org.bukkit.util.Vector, radius: number /*double*/): boolean
                /**
                 * Returns if a vector is normalized
                 * @return whether the vector is normalised
                 */
                // @ts-ignore
                public isNormalized(): boolean
                /**
                 * Rotates the vector around the x axis.
                 * <p>
                 * This piece of math is based on the standard rotation matrix for vectors
                 * in three dimensional space. This matrix can be found here:
                 * <a href="https://en.wikipedia.org/wiki/Rotation_matrix#Basic_rotations">Rotation
                 * Matrix</a>.
                 * @param angle the angle to rotate the vector about. This angle is passed
                 *  in radians
                 * @return the same vector
                 */
                // @ts-ignore
                public rotateAroundX(angle: number /*double*/): org.bukkit.util.Vector
                /**
                 * Rotates the vector around the y axis.
                 * <p>
                 * This piece of math is based on the standard rotation matrix for vectors
                 * in three dimensional space. This matrix can be found here:
                 * <a href="https://en.wikipedia.org/wiki/Rotation_matrix#Basic_rotations">Rotation
                 * Matrix</a>.
                 * @param angle the angle to rotate the vector about. This angle is passed
                 *  in radians
                 * @return the same vector
                 */
                // @ts-ignore
                public rotateAroundY(angle: number /*double*/): org.bukkit.util.Vector
                /**
                 * Rotates the vector around the z axis
                 * <p>
                 * This piece of math is based on the standard rotation matrix for vectors
                 * in three dimensional space. This matrix can be found here:
                 * <a href="https://en.wikipedia.org/wiki/Rotation_matrix#Basic_rotations">Rotation
                 * Matrix</a>.
                 * @param angle the angle to rotate the vector about. This angle is passed
                 *  in radians
                 * @return the same vector
                 */
                // @ts-ignore
                public rotateAroundZ(angle: number /*double*/): org.bukkit.util.Vector
                /**
                 * Rotates the vector around a given arbitrary axis in 3 dimensional space.
                 * <p>
                 * Rotation will follow the general Right-Hand-Rule, which means rotation
                 * will be counterclockwise when the axis is pointing towards the observer.
                 * <p>
                 * This method will always make sure the provided axis is a unit vector, to
                 * not modify the length of the vector when rotating. If you are experienced
                 * with the scaling of a non-unit axis vector, you can use
                 * {@link Vector#rotateAroundNonUnitAxis(Vector, double)}.
                 * @param axis the axis to rotate the vector around. If the passed vector is
                 *  not of length 1, it gets copied and normalized before using it for the
                 *  rotation. Please use {#link Vector#normalize()} on the instance before
                 *  passing it to this method
                 * @param angle the angle to rotate the vector around the axis
                 * @return the same vector
                 * @throws IllegalArgumentException if the provided axis vector instance is
                 *  null
                 */
                // @ts-ignore
                public rotateAroundAxis(axis: org.bukkit.util.Vector, angle: number /*double*/): org.bukkit.util.Vector
                /**
                 * Rotates the vector around a given arbitrary axis in 3 dimensional space.
                 * <p>
                 * Rotation will follow the general Right-Hand-Rule, which means rotation
                 * will be counterclockwise when the axis is pointing towards the observer.
                 * <p>
                 * Note that the vector length will change accordingly to the axis vector
                 * length. If the provided axis is not a unit vector, the rotated vector
                 * will not have its previous length. The scaled length of the resulting
                 * vector will be related to the axis vector. If you are not perfectly sure
                 * about the scaling of the vector, use
                 * {@link Vector#rotateAroundAxis(Vector, double)}
                 * @param axis the axis to rotate the vector around.
                 * @param angle the angle to rotate the vector around the axis
                 * @return the same vector
                 * @throws IllegalArgumentException if the provided axis vector instance is
                 *  null
                 */
                // @ts-ignore
                public rotateAroundNonUnitAxis(axis: org.bukkit.util.Vector, angle: number /*double*/): org.bukkit.util.Vector
                /**
                 * Gets the X component.
                 * @return The X component.
                 */
                // @ts-ignore
                public getX(): number /*double*/
                /**
                 * Gets the floored value of the X component, indicating the block that
                 * this vector is contained with.
                 * @return block X
                 */
                // @ts-ignore
                public getBlockX(): number /*int*/
                /**
                 * Gets the Y component.
                 * @return The Y component.
                 */
                // @ts-ignore
                public getY(): number /*double*/
                /**
                 * Gets the floored value of the Y component, indicating the block that
                 * this vector is contained with.
                 * @return block y
                 */
                // @ts-ignore
                public getBlockY(): number /*int*/
                /**
                 * Gets the Z component.
                 * @return The Z component.
                 */
                // @ts-ignore
                public getZ(): number /*double*/
                /**
                 * Gets the floored value of the Z component, indicating the block that
                 * this vector is contained with.
                 * @return block z
                 */
                // @ts-ignore
                public getBlockZ(): number /*int*/
                /**
                 * Set the X component.
                 * @param x The new X component.
                 * @return This vector.
                 */
                // @ts-ignore
                public setX(x: number /*int*/): org.bukkit.util.Vector
                /**
                 * Set the X component.
                 * @param x The new X component.
                 * @return This vector.
                 */
                // @ts-ignore
                public setX(x: number /*double*/): org.bukkit.util.Vector
                /**
                 * Set the X component.
                 * @param x The new X component.
                 * @return This vector.
                 */
                // @ts-ignore
                public setX(x: number /*float*/): org.bukkit.util.Vector
                /**
                 * Set the Y component.
                 * @param y The new Y component.
                 * @return This vector.
                 */
                // @ts-ignore
                public setY(y: number /*int*/): org.bukkit.util.Vector
                /**
                 * Set the Y component.
                 * @param y The new Y component.
                 * @return This vector.
                 */
                // @ts-ignore
                public setY(y: number /*double*/): org.bukkit.util.Vector
                /**
                 * Set the Y component.
                 * @param y The new Y component.
                 * @return This vector.
                 */
                // @ts-ignore
                public setY(y: number /*float*/): org.bukkit.util.Vector
                /**
                 * Set the Z component.
                 * @param z The new Z component.
                 * @return This vector.
                 */
                // @ts-ignore
                public setZ(z: number /*int*/): org.bukkit.util.Vector
                /**
                 * Set the Z component.
                 * @param z The new Z component.
                 * @return This vector.
                 */
                // @ts-ignore
                public setZ(z: number /*double*/): org.bukkit.util.Vector
                /**
                 * Set the Z component.
                 * @param z The new Z component.
                 * @return This vector.
                 */
                // @ts-ignore
                public setZ(z: number /*float*/): org.bukkit.util.Vector
                /**
                 * Checks to see if two objects are equal.
                 * <p>
                 * Only two Vectors can ever return true. This method uses a fuzzy match
                 * to account for floating point errors. The epsilon can be retrieved
                 * with epsilon.
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object | any): boolean
                /**
                 * Returns a hash code for this vector
                 * @return hash code
                 */
                // @ts-ignore
                public hashCode(): number /*int*/
                /**
                 * Get a new vector.
                 * @return vector
                 */
                // @ts-ignore
                public clone(): org.bukkit.util.Vector
                /**
                 * Returns this vector's components as x,y,z.
                 */
                // @ts-ignore
                public toString(): string
                /**
                 * Gets a Location version of this vector with yaw and pitch being 0.
                 * @param world The world to link the location to.
                 * @return the location
                 */
                // @ts-ignore
                public toLocation(world: org.bukkit.World): org.bukkit.Location
                /**
                 * Gets a Location version of this vector.
                 * @param world The world to link the location to.
                 * @param yaw The desired yaw.
                 * @param pitch The desired pitch.
                 * @return the location
                 */
                // @ts-ignore
                public toLocation(world: org.bukkit.World, yaw: number /*float*/, pitch: number /*float*/): org.bukkit.Location
                /**
                 * Get the block vector of this vector.
                 * @return A block vector.
                 */
                // @ts-ignore
                public toBlockVector(): org.bukkit.util.BlockVector
                /**
                 * Check if each component of this Vector is finite.
                 * @throws IllegalArgumentException if any component is not finite
                 */
                // @ts-ignore
                public checkFinite(): void
                /**
                 * Get the threshold used for equals().
                 * @return The epsilon.
                 */
                // @ts-ignore
                public static getEpsilon(): number /*double*/
                /**
                 * Gets the minimum components of two vectors.
                 * @param v1 The first vector.
                 * @param v2 The second vector.
                 * @return minimum
                 */
                // @ts-ignore
                public static getMinimum(v1: org.bukkit.util.Vector, v2: org.bukkit.util.Vector): org.bukkit.util.Vector
                /**
                 * Gets the maximum components of two vectors.
                 * @param v1 The first vector.
                 * @param v2 The second vector.
                 * @return maximum
                 */
                // @ts-ignore
                public static getMaximum(v1: org.bukkit.util.Vector, v2: org.bukkit.util.Vector): org.bukkit.util.Vector
                /**
                 * Gets a random vector with components having a random value between 0
                 * and 1.
                 * @return A random vector.
                 */
                // @ts-ignore
                public static getRandom(): org.bukkit.util.Vector
                // @ts-ignore
                public serialize(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                // @ts-ignore
                public static deserialize(args: java.util.Map<java.lang.String | string, java.lang.Object | any>): org.bukkit.util.Vector
            }
        }
    }
}
