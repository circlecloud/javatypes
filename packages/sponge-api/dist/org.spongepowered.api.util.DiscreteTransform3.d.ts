declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                /**
                 * Represents a transform. It is 3 dimensional and discrete.
                 * It will never cause aliasing.
                 * <p>Rotations are performed around block centers unless
                 * the block corner flags are set to true. To prevent
                 * aliasing, quarter turn rotations are only legal on
                 * block centers or corners. Half turns can be performed
                 * additionally on edge and face centers.</p>
                 */
                // @ts-ignore
                class DiscreteTransform3 extends java.lang.Object {
                    /**
                     * Represents an identity transformation. Does nothing!
                     */
                    // @ts-ignore
                    public static readonly IDENTITY: org.spongepowered.api.util.DiscreteTransform3
                    /**
                     * Returns the matrix representation of the transform.
                     * It is 4D to allow it to include a translation.
                     * @return The matrix for this transform
                     */
                    // @ts-ignore
                    public getMatrix(): Matrix4d
                    /**
                     * Transforms a vector using this transforms.
                     * @param vector The original vector
                     * @return The transformed vector
                     */
                    // @ts-ignore
                    public transform(vector: Vector3i): Vector3i
                    /**
                     * Transform a vector represented as a pair of
                     * coordinates using this transform.
                     * @param x The x coordinate of the original vector
                     * @param y The y coordinate of the original vector
                     * @param z The z coordinate of the original vector
                     * @return The transformed vector
                     */
                    // @ts-ignore
                    public transform(x: number /*int*/, y: number /*int*/, z: number /*int*/): Vector3i
                    /**
                     * Transforms the x coordinate of a vector
                     * using this transform. Only creates a new
                     * object on the first call.
                     * @param vector The original vector
                     * @return The transformed x coordinate
                     */
                    // @ts-ignore
                    public transformX(vector: Vector3i): number /*int*/
                    /**
                     * Transforms the x coordinate of a vector
                     * using this transform. Only creates a new
                     * object on the first call.
                     * @param x The x coordinate of the original vector
                     * @param y The y coordinate of the original vector
                     * @param z The z coordinate of the original vector
                     * @return The transformed x coordinate
                     */
                    // @ts-ignore
                    public transformX(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                    /**
                     * Transforms the y coordinate of a vector
                     * using this transform. Only creates a new
                     * object on the first call.
                     * @param vector The original vector
                     * @return The transformed y coordinate
                     */
                    // @ts-ignore
                    public transformY(vector: Vector3i): number /*int*/
                    /**
                     * Transforms the y coordinate of a vector
                     * using this transform. Only creates a new
                     * object on the first call.
                     * @param x The x coordinate of the original vector
                     * @param y The y coordinate of the original vector
                     * @param z The z coordinate of the original vector
                     * @return The transformed y coordinate
                     */
                    // @ts-ignore
                    public transformY(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                    /**
                     * Transforms the z coordinate of a vector
                     * using this transform. Only creates a new
                     * object on the first call.
                     * @param vector The original vector
                     * @return The transformed z coordinate
                     */
                    // @ts-ignore
                    public transformZ(vector: Vector3i): number /*int*/
                    /**
                     * Transforms the z coordinate of a vector
                     * using this transform. Only creates a new
                     * object on the first call.
                     * @param x The x coordinate of the original vector
                     * @param y The y coordinate of the original vector
                     * @param z The z coordinate of the original vector
                     * @return The transformed z coordinate
                     */
                    // @ts-ignore
                    public transformZ(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                    /**
                     * Inverts the transform and returns it as a new transform.
                     * @return The inverse of this transform
                     */
                    // @ts-ignore
                    public invert(): org.spongepowered.api.util.DiscreteTransform3
                    /**
                     * Returns a transform that is the composition of this transform and the
                     * given transform. The result will apply this transformation after the
                     * given one.
                     * @param that The transform to compose with
                     * @return The new composed transform
                     */
                    // @ts-ignore
                    public compose(that: org.spongepowered.api.util.DiscreteTransform3): org.spongepowered.api.util.DiscreteTransform3
                    /**
                     * Returns a transform that is the composition of the given transform with
                     * this transform. The result will apply the given transformation after this
                     * one.
                     * @param that The transform to compose with
                     * @return The new composed transform
                     */
                    // @ts-ignore
                    public andThen(that: org.spongepowered.api.util.DiscreteTransform3): org.spongepowered.api.util.DiscreteTransform3
                    /**
                     * Adds a translation to this transform and returns
                     * it as a new transform.
                     * @param vector The translation vector
                     * @return The translated transform as a copy
                     */
                    // @ts-ignore
                    public withTranslation(vector: Vector3i): org.spongepowered.api.util.DiscreteTransform3
                    /**
                     * Adds a translation to this transform and returns
                     * it as a new transform.
                     * @param x The x coordinate of the translation
                     * @param y The y coordinate of the translation
                     * @param z The z coordinate of the translation
                     * @return The translated transform as a copy
                     */
                    // @ts-ignore
                    public withTranslation(x: number /*int*/, y: number /*int*/, z: number /*int*/): org.spongepowered.api.util.DiscreteTransform3
                    /**
                     * Adds a scale factor to this transform and returns
                     * it as a new transform. This factor must be non-zero.
                     * @param a The scale factor
                     * @return The scaled transform as a copy
                     */
                    // @ts-ignore
                    public withScale(a: number /*int*/): org.spongepowered.api.util.DiscreteTransform3
                    /**
                     * Adds a scale factor for each axis to this transform
                     * and returns it as a new transform. The factors must
                     * be non-zero.
                     * @param vector The scale vector
                     * @return The scaled transform as a copy
                     */
                    // @ts-ignore
                    public withScale(vector: Vector3i): org.spongepowered.api.util.DiscreteTransform3
                    /**
                     * Adds a scale factor for each axis to this transform
                     * and returns it as a new transform. The factors must
                     * be non-zero.
                     * @param x The scale factor on x
                     * @param y The scale factor on y
                     * @param z The scale factor on z
                     * @return The scaled transform as a copy
                     */
                    // @ts-ignore
                    public withScale(x: number /*int*/, y: number /*int*/, z: number /*int*/): org.spongepowered.api.util.DiscreteTransform3
                    /**
                     * Adds a rotation to this transform, around an axis,
                     * around the origin and returns it as a new transform.
                     * The rotation is given is quarter turns.
                     * The actual rotation is {@code quarterTurns * 90}.
                     * The rotation is around the block center, not the corner.
                     * @param quarterTurns The number of quarter turns in this rotation
                     * @param axis The axis to rotate around
                     * @return The rotated transform as a copy
                     */
                    // @ts-ignore
                    public withRotation(quarterTurns: number /*int*/, axis: org.spongepowered.api.util.Axis): org.spongepowered.api.util.DiscreteTransform3
                    /**
                     * Adds a a rotation to this transform, around an axis,
                     * around a given point, and returns it as a new transform.
                     * The rotation is given is quarter turns. The actual rotation
                     * is {@code quarterTurns * 90}. The block corner flag changes
                     * the point to be the block upper corner instead of the center.
                     * @param quarterTurns The number of quarter turns in this rotation
                     * @param axis The axis to rotate around
                     * @param point The point of rotation, as block coordinates
                     * @param blockCorner Whether or not to use the corner of the block
                     *      instead of the center
                     * @return The rotated transform as a copy
                     */
                    // @ts-ignore
                    public withRotation(quarterTurns: number /*int*/, axis: org.spongepowered.api.util.Axis, point: Vector3i, blockCorner: boolean): org.spongepowered.api.util.DiscreteTransform3
                    /**
                     * Adds a a rotation to this transform, around an axis,
                     * around a given point. The rotation is given is half turns.
                     * The actual rotation is {@code halfTurns * 180}. The block corner
                     * flags change the point to be the block corner or edge instead
                     * of the center. When all flags are false, the center is used.
                     * When only one is true the face traversed by the axis of flag is used.
                     * When two are true the edge in the direction of the remaining flag
                     * is used. When all are true the upper corner is used.
                     * @param halfTurns The number of half turns in this rotation
                     * @param axis The axis to rotate around
                     * @param point The point of rotation, as block coordinates
                     * @param blockCornerX Whether or not to use the corner of the block
                     *      instead of the center on the x axis
                     * @param blockCornerY Whether or not to use the corner of the block
                     *      instead of the center on the y axis
                     * @param blockCornerZ Whether or not to use the corner of the block
                     *      instead of the center on the z axis
                     * @return The rotated transform as a copy
                     */
                    // @ts-ignore
                    public withRotation(halfTurns: number /*int*/, axis: org.spongepowered.api.util.Axis, point: Vector3i, blockCornerX: boolean, blockCornerY: boolean, blockCornerZ: boolean): org.spongepowered.api.util.DiscreteTransform3
                    /**
                     * Adds another transformation to this transformation and
                     * returns int as a new transform.
                     * @param transform The transformation to add
                     * @return The added transforms as a copy
                     */
                    // @ts-ignore
                    public withTransformation(transform: org.spongepowered.api.util.DiscreteTransform3): org.spongepowered.api.util.DiscreteTransform3
                    /**
                     * Returns a new transform from the given transformation matrix, if the
                     * resulting transform would be discrete.
                     * @param matrix The matrix to use for the transform
                     * @return The new transform, or {#link Optional#empty()}
                     */
                    // @ts-ignore
                    public static of(matrix: Matrix4d): java.util.Optional<org.spongepowered.api.util.DiscreteTransform3>
                    /**
                     * Returns a new transform representing a translation.
                     * @param vector The translation vector
                     * @return The new translation transform
                     */
                    // @ts-ignore
                    public static fromTranslation(vector: Vector3i): org.spongepowered.api.util.DiscreteTransform3
                    /**
                     * Returns a new transform representing a translation.
                     * @param x The x coordinate of the translation
                     * @param y The y coordinate of the translation
                     * @param z The z coordinate of the translation
                     * @return The new translation transform
                     */
                    // @ts-ignore
                    public static fromTranslation(x: number /*int*/, y: number /*int*/, z: number /*int*/): org.spongepowered.api.util.DiscreteTransform3
                    /**
                     * Returns a new transform representing a scaling.
                     * The scale factor must be non-zero.
                     * @param a The scale factor
                     * @return The new scale transform
                     */
                    // @ts-ignore
                    public static fromScale(a: number /*int*/): org.spongepowered.api.util.DiscreteTransform3
                    /**
                     * Returns a new transform representing a scaling on each axis.
                     * The scale factors must be non-zero.
                     * @param vector The scale vector
                     * @return The new scale transform
                     */
                    // @ts-ignore
                    public static fromScale(vector: Vector3i): org.spongepowered.api.util.DiscreteTransform3
                    /**
                     * Returns a new transform representing a scaling on each axis.
                     * The scale factors must be non-zero.
                     * @param x The scale factor on x
                     * @param y The scale factor on y
                     * @param z The scale factor on z
                     * @return The new scale transform
                     */
                    // @ts-ignore
                    public static fromScale(x: number /*int*/, y: number /*int*/, z: number /*int*/): org.spongepowered.api.util.DiscreteTransform3
                    /**
                     * Returns a new transform representing a rotation around an
                     * axis around the origin. The rotation is given is quarter turns.
                     * The actual rotation is {@code quarterTurns * 90}.
                     * The rotation is around the block center, not the corner.
                     * @param quarterTurns The number of quarter turns in this rotation
                     * @param axis The axis to rotate around
                     * @return The new rotation transform
                     */
                    // @ts-ignore
                    public static fromRotation(quarterTurns: number /*int*/, axis: org.spongepowered.api.util.Axis): org.spongepowered.api.util.DiscreteTransform3
                    /**
                     * Returns a new transform representing a rotation around an axis,
                     * around a given point. The rotation is given is quarter turns.
                     * The actual rotation is {@code quarterTurns * 90}. The block corner
                     * flag change the point to be the block corner instead of the center.
                     * @param quarterTurns The number of quarter turns in this rotation
                     * @param axis The axis to rotate around
                     * @param point The point of rotation, as block coordinates
                     * @param blockCorner Whether or not to use the corner of the block
                     *      instead of the center
                     * @return The new rotation transform
                     */
                    // @ts-ignore
                    public static fromRotation(quarterTurns: number /*int*/, axis: org.spongepowered.api.util.Axis, point: Vector3i, blockCorner: boolean): org.spongepowered.api.util.DiscreteTransform3
                    /**
                     * Returns a new transform representing a rotation around an axis,
                     * around a given point. The rotation is given in half turns.
                     * The actual rotation is {@code halfTurns * 180}. When all flags are
                     * false, the center is used. When only one is true the face traversed
                     * by the axis of flag is used. When two are true the edge in the
                     * direction of the remaining flag is used. When all are true the
                     * upper corner is used.
                     * @param halfTurns The number of half turns in this rotation
                     * @param axis The axis to rotate around
                     * @param point The point of rotation, as block coordinates
                     * @param blockCornerX Whether or not to use the corner of the block
                     *      instead of the center on the x axis
                     * @param blockCornerY Whether or not to use the corner of the block
                     *      instead of the center on the y axis
                     * @param blockCornerZ Whether or not to use the corner of the block
                     *      instead of the center on the z axis
                     * @return The new rotation transform
                     */
                    // @ts-ignore
                    public static fromRotation(halfTurns: number /*int*/, axis: org.spongepowered.api.util.Axis, point: Vector3i, blockCornerX: boolean, blockCornerY: boolean, blockCornerZ: boolean): org.spongepowered.api.util.DiscreteTransform3
                    /**
                     * Returns a new transform representing a centered rotation of an volume
                     * of blocks. The rotation is given is quarter turns. The actual rotation
                     * is {@code quarterTurns * 90}. Volumes with differing parities on the
                     * axes can only be rotated by multiples of 180 degrees.
                     * @param quarterTurns The amount of quarter turns in this rotation
                     * @param axis Axis for rotation
                     * @param size The size of the volume to rotate
                     * @return The new rotation transform
                     */
                    // @ts-ignore
                    public static rotationAroundCenter(quarterTurns: number /*int*/, axis: org.spongepowered.api.util.Axis, size: Vector3i): org.spongepowered.api.util.DiscreteTransform3
                }
            }
        }
    }
}
