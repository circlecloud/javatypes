declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                /**
                 * Represents a transform. It is 2 dimensional and discrete. It will never cause
                 * aliasing.
                 * <p>Rotations are performed around tile centers unless the tile corner flags
                 * are set to true. To prevent aliasing, quarter turn rotations are only legal
                 * on block centers or corners. Half turns can be performed additionally on line
                 * centers.</p>
                 */
                // @ts-ignore
                class DiscreteTransform2 extends java.lang.Object {
                    /**
                     * Represents an identity transformation. Does nothing!
                     */
                    // @ts-ignore
                    public static readonly IDENTITY: org.spongepowered.api.util.DiscreteTransform2
                    /**
                     * Returns the matrix representation of the transform. It is 3D to allow it
                     * to include a translation.
                     * @return The matrix for this transform
                     */
                    // @ts-ignore
                    public getMatrix(): Matrix3d
                    /**
                     * Transforms a vector using this transforms.
                     * @param vector The original vector
                     * @return The transformed vector
                     */
                    // @ts-ignore
                    public transform(vector: Vector2i): Vector2i
                    /**
                     * Transform a vector represented as a pair of coordinates using this
                     * transform.
                     * @param x The x coordinate of the original vector
                     * @param y The y coordinate of the original vector
                     * @return The transformed vector
                     */
                    // @ts-ignore
                    public transform(x: number /*int*/, y: number /*int*/): Vector2i
                    /**
                     * Transforms the x coordinate of a vector using this transform. Only
                     * creates a new object on the first call.
                     * @param vector The original vector
                     * @return The transformed x coordinate
                     */
                    // @ts-ignore
                    public transformX(vector: Vector2i): number /*int*/
                    /**
                     * Transforms the x coordinate of a vector using this transform. Only
                     * creates a new object on the first call.
                     * @param x The x coordinate of the original vector
                     * @param y The y coordinate of the original vector
                     * @return The transformed x coordinate
                     */
                    // @ts-ignore
                    public transformX(x: number /*int*/, y: number /*int*/): number /*int*/
                    /**
                     * Transforms the y coordinate of a vector using this transform. Only
                     * creates a new object on the first call.
                     * @param vector The original vector
                     * @return The transformed y coordinate
                     */
                    // @ts-ignore
                    public transformY(vector: Vector2i): number /*int*/
                    /**
                     * Transforms the y coordinate of a vector using this transform. Only
                     * creates a new object on the first call.
                     * @param x The x coordinate of the original vector
                     * @param y The y coordinate of the original vector
                     * @return The transformed y coordinate
                     */
                    // @ts-ignore
                    public transformY(x: number /*int*/, y: number /*int*/): number /*int*/
                    /**
                     * Inverts the transform and returns it as a new transform.
                     * @return The inverse of this transform
                     */
                    // @ts-ignore
                    public invert(): org.spongepowered.api.util.DiscreteTransform2
                    /**
                     * Returns a transform that is the composition of this transform and the
                     * given transform. The result will apply this transformation after the
                     * given one.
                     * @param that The transform to compose with
                     * @return The new composed transform
                     */
                    // @ts-ignore
                    public compose(that: org.spongepowered.api.util.DiscreteTransform2): org.spongepowered.api.util.DiscreteTransform2
                    /**
                     * Returns a transform that is the composition of the given transform with
                     * this transform. The result will apply the given transformation after
                     * this one.
                     * @param that The transform to compose with
                     * @return The new composed transform
                     */
                    // @ts-ignore
                    public andThen(that: org.spongepowered.api.util.DiscreteTransform2): org.spongepowered.api.util.DiscreteTransform2
                    /**
                     * Adds a translation to this transform and returns it as a new transform.
                     * @param vector The translation vector
                     * @return The translated transform as a copy
                     */
                    // @ts-ignore
                    public withTranslation(vector: Vector2i): org.spongepowered.api.util.DiscreteTransform2
                    /**
                     * Adds a translation to this transform and returns it as a new transform.
                     * @param x The x coordinate of the translation
                     * @param y The y coordinate of the translation
                     * @return The translated transform as a copy
                     */
                    // @ts-ignore
                    public withTranslation(x: number /*int*/, y: number /*int*/): org.spongepowered.api.util.DiscreteTransform2
                    /**
                     * Adds a scale factor to this transform and returns it as a new transform.
                     * This factor must be non-zero.
                     * @param a The scale factor
                     * @return The scaled transform as a copy
                     */
                    // @ts-ignore
                    public withScale(a: number /*int*/): org.spongepowered.api.util.DiscreteTransform2
                    /**
                     * Adds a scale factor for each axis to this transform and returns it as a
                     * new transform. The factors must be non-zero.
                     * @param vector The scale vector
                     * @return The scaled transform as a copy
                     */
                    // @ts-ignore
                    public withScale(vector: Vector2i): org.spongepowered.api.util.DiscreteTransform2
                    /**
                     * Adds a scale factor for each axis to this transform and returns it as a
                     * new transform. The factors must be non-zero.
                     * @param x The scale factor on x
                     * @param y The scale factor on y
                     * @return The scaled transform as a copy
                     */
                    // @ts-ignore
                    public withScale(x: number /*int*/, y: number /*int*/): org.spongepowered.api.util.DiscreteTransform2
                    /**
                     * Adds a rotation to this transform, in the xy plane, around the origin and
                     * returns it as a new transform. The rotation is given is quarter turns.
                     * The actual rotation is {@code quarterTurns * 90}. The rotation is around
                     * the block center, not the corner.
                     * @param quarterTurns The number of quarter turns in this rotation
                     * @return The rotated transform as a copy
                     */
                    // @ts-ignore
                    public withRotation(quarterTurns: number /*int*/): org.spongepowered.api.util.DiscreteTransform2
                    /**
                     * Adds a a rotation to this transform, in the xy plane, around a given
                     * point, and returns it as a new transform. The rotation is given is
                     * quarter turns. The actual rotation is {@code quarterTurns * 90}. The tile
                     * corner flag changes the point to be the tile upper corner instead of the
                     * center.
                     * @param quarterTurns The number of quarter turns in this rotation
                     * @param point The point of rotation, as tile coordinates
                     * @param tileCorner Whether or not to use the corner of the tile instead of
                     *         the center
                     * @return The rotated transform as a copy
                     */
                    // @ts-ignore
                    public withRotation(quarterTurns: number /*int*/, point: Vector2i, tileCorner: boolean): org.spongepowered.api.util.DiscreteTransform2
                    /**
                     * Adds a a rotation to this transform, in the xy plane, around a given
                     * point, and returns it as a new transform. The rotation is given is half
                     * turns. The actual rotation is {@code halfTurns * 180}. The tile corner
                     * flags change the point to be the tile corner or edge instead of the
                     * center. When both flags are false, the center is used. When only one is
                     * true the edge on the opposite axis to the flag is used. When both are
                     * true the upper corner is used.
                     * @param halfTurns The number of half turns in this rotation
                     * @param point The point of rotation, as tile coordinates
                     * @param tileCornerX Whether or not to use the corner of the tile instead
                     *         of the center on the x axis
                     * @param tileCornerY Whether or not to use the corner of the tile instead
                     *         of the center on the y axis
                     * @return The rotated transform as a copy
                     */
                    // @ts-ignore
                    public withRotation(halfTurns: number /*int*/, point: Vector2i, tileCornerX: boolean, tileCornerY: boolean): org.spongepowered.api.util.DiscreteTransform2
                    /**
                     * Adds another transformation to this transformation and returns int as a
                     * new transform.
                     * @param transform The transformation to add
                     * @return The added transforms as a copy
                     */
                    // @ts-ignore
                    public withTransformation(transform: org.spongepowered.api.util.DiscreteTransform2): org.spongepowered.api.util.DiscreteTransform2
                    /**
                     * Returns a new transform from the given transformation matrix, if the
                     * resulting transform would be discrete.
                     * @param matrix The matrix to use for the transform
                     * @return The new transform, or {#link Optional#empty()}
                     */
                    // @ts-ignore
                    public static of(matrix: Matrix3d): java.util.Optional<org.spongepowered.api.util.DiscreteTransform2>
                    /**
                     * Returns a new transform representing a translation.
                     * @param vector The translation vector
                     * @return The new translation transform
                     */
                    // @ts-ignore
                    public static fromTranslation(vector: Vector2i): org.spongepowered.api.util.DiscreteTransform2
                    /**
                     * Returns a new transform representing a translation.
                     * @param x The x coordinate of the translation
                     * @param y The y coordinate of the translation
                     * @return The new translation transform
                     */
                    // @ts-ignore
                    public static fromTranslation(x: number /*int*/, y: number /*int*/): org.spongepowered.api.util.DiscreteTransform2
                    /**
                     * Returns a new transform representing a scaling.
                     * The scale factor must be non-zero.
                     * @param a The scale factor
                     * @return The new scale transform
                     */
                    // @ts-ignore
                    public static fromScale(a: number /*int*/): org.spongepowered.api.util.DiscreteTransform2
                    /**
                     * Returns a new transform representing a scaling on each axis. The scale
                     * factors must be non-zero.
                     * @param vector The scale vector
                     * @return The new scale transform
                     */
                    // @ts-ignore
                    public static fromScale(vector: Vector2i): org.spongepowered.api.util.DiscreteTransform2
                    /**
                     * Returns a new transform representing a scaling on each axis. The scale
                     * factors must be non-zero.
                     * @param x The scale factor on x
                     * @param y The scale factor on y
                     * @return The new scale transform
                     */
                    // @ts-ignore
                    public static fromScale(x: number /*int*/, y: number /*int*/): org.spongepowered.api.util.DiscreteTransform2
                    /**
                     * Returns a new transform representing a rotation in the xy plane around
                     * the origin. The rotation is given is quarter turns. The actual rotation
                     * is {@code quarterTurns * 90}. The rotation is around the block center,
                     * not the corner.
                     * @param quarterTurns The number of quarter turns in this rotation
                     * @return The new rotation transform
                     */
                    // @ts-ignore
                    public static fromRotation(quarterTurns: number /*int*/): org.spongepowered.api.util.DiscreteTransform2
                    /**
                     * Returns a new transform representing a rotation in the xy plane, around a
                     * given point. The rotation is given is quarter turns. The actual rotation
                     * is {@code quarterTurns * 90}. The tile corner flag change the point to be
                     * the tile corner instead of the center.
                     * @param quarterTurns The number of quarter turns in this rotation
                     * @param point The point of rotation, as tile coordinates
                     * @param tileCorner Whether or not to use the corner of the tile instead of
                     *         the center
                     * @return The new rotation transform
                     */
                    // @ts-ignore
                    public static fromRotation(quarterTurns: number /*int*/, point: Vector2i, tileCorner: boolean): org.spongepowered.api.util.DiscreteTransform2
                    /**
                     * Returns a new transform representing a rotation in the xy plane, around a
                     * given point. The rotation is given is half turns. The actual rotation is
                     * {@code halfTurns * 180}. The tile corner flags change the point to be the
                     * tile corner or edge instead of the center. When both flags are false, the
                     * center is used. When only one is true the edge on the opposite axis to
                     * the flag is used. When both are true the upper corner is used.
                     * @param halfTurns The number of half turns in this rotation
                     * @param point The point of rotation, as tile coordinates
                     * @param tileCornerX Whether or not to use the corner of the tile instead
                     *         of the center on the x axis
                     * @param tileCornerY Whether or not to use the corner of the tile instead
                     *         of the center on the y axis
                     * @return The new rotation transform
                     */
                    // @ts-ignore
                    public static fromRotation(halfTurns: number /*int*/, point: Vector2i, tileCornerX: boolean, tileCornerY: boolean): org.spongepowered.api.util.DiscreteTransform2
                    /**
                     * Returns a new transform representing a centered rotation of an area of
                     * tiles. The rotation is given is quarter turns. The actual rotation is
                     * {@code quarterTurns * 90}. Areas with differing parities on the axes can
                     * only be rotated by multiples of 180 degrees.
                     * @param quarterTurns The amount of quarter turns in this rotation
                     * @param size The size of the area to rotate
                     * @return The new rotation transform
                     */
                    // @ts-ignore
                    public static rotationAroundCenter(quarterTurns: number /*int*/, size: Vector2i): org.spongepowered.api.util.DiscreteTransform2
                }
            }
        }
    }
}
