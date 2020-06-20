declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                /**
                 * Represents the immutable world attributes of an {@link Entity}. Comprised of
                 * a {@link Location} and two {@link Vector3d} representing the rotation and the
                 * scale. The implementation may internally use a location or a separate extent
                 * and position. Be wary that calling {@link #getLocation()} could result in
                 * object creation.
                 * <p>A transform might not have an extent if it is invalid. In this case all
                 * methods which return a reference to it will throw
                 * {@link IllegalStateException}.</p>
                 * <p>This is an entity transform, not a model one. These values are subject to
                 * interpretation by the implementation and may trigger animations depending on
                 * the target model.</p>
                 * <p>Even though Minecraft doesn't currently support entity scales it is part
                 * of the transform in case it gets added later. For now this return
                 * {@link Vector3d#ONE}.</p>
                 * @param <E> The extent containing the transform
                 */
                // @ts-ignore
                class Transform<E extends org.spongepowered.api.world.extent.Extent> extends java.lang.Object {
                    /**
                     * Creates a new {@link Transform} based on the provided {@link Location}.
                     * @param location The provided location that provides the
                     *      extent, and position
                     */
                    // @ts-ignore
                    constructor(location: org.spongepowered.api.world.Location<E>)
                    /**
                     * Creates a new {@link Transform} with the provided {@link Extent extent}.
                     * The default position is {@link Vector3d#ZERO}.
                     * @param extent The extent to use
                     */
                    // @ts-ignore
                    constructor(extent: E extends org.spongepowered.api.world.extent.Extent)
                    /**
                     * Creates a new {@link Transform} with the provided {@link Extent extent}
                     * and {@link Vector3d position}.
                     * @param extent The extent to use
                     * @param position The position to use
                     */
                    // @ts-ignore
                    constructor(extent: E extends org.spongepowered.api.world.extent.Extent, position: Vector3d)
                    /**
                     * Creates a new {@link Transform} with the provided {@link Extent extent},
                     * {@link Vector3d position}, and {@link Vector3d rotation}.
                     * @param extent The extent to use
                     * @param position The position to use
                     * @param rotation The rotation to use
                     */
                    // @ts-ignore
                    constructor(extent: E extends org.spongepowered.api.world.extent.Extent, position: Vector3d, rotation: Vector3d)
                    /**
                     * Creates a new {@link Transform} with the provided {@link Location},
                     * {@link Vector3d rotation}, and {@link Vector3d scale}.
                     * @param location The location to use, providing the extent and position
                     * @param rotation The rotation to use
                     * @param scale The scale to use
                     */
                    // @ts-ignore
                    constructor(location: org.spongepowered.api.world.Location<E>, rotation: Vector3d, scale: Vector3d)
                    /**
                     * Creates a new {@link Transform}.
                     * @param extent The extent to use
                     * @param position The position to use
                     * @param rotation The rotation to use
                     * @param scale The scale to use
                     */
                    // @ts-ignore
                    constructor(extent: E extends org.spongepowered.api.world.extent.Extent, position: Vector3d, rotation: Vector3d, scale: Vector3d)
                    /**
                     * Gets the {@link Location} this transform contains. This is the position
                     * and the extent.
                     * @return The location
                     * @throws IllegalStateException If the transform doesn't have an extent
                     */
                    // @ts-ignore
                    getLocation(): org.spongepowered.api.world.Location<E>
                    /**
                     * Creates a copy of this transform and sets the {@link Location}. This sets
                     * both the position and the extent.
                     * @param location The new location
                     * @return A new transform
                     */
                    // @ts-ignore
                    setLocation(location: org.spongepowered.api.world.Location<E>): org.spongepowered.api.entity.Transform<E>
                    /**
                     * Gets the {@link Extent} this transform contains.
                     * <p>Note: This can be null if the {@link Extent} is unloaded and garbage
                     * collected.</p>
                     * @return The extent
                     * @throws IllegalStateException If the transform doesn't have an extent
                     */
                    // @ts-ignore
                    getExtent(): E
                    /**
                     * Creates a copy of this transform and sets the {@link Extent}.
                     * @param extent The new extent
                     * @return A new transform
                     */
                    // @ts-ignore
                    setExtent(extent: E extends org.spongepowered.api.world.extent.Extent): org.spongepowered.api.entity.Transform<E>
                    /**
                     * Gets the coordinates of this transform.
                     * @return The coordinates
                     */
                    // @ts-ignore
                    getPosition(): Vector3d
                    /**
                     * Creates a copy of this transform while setting the position of the new
                     * one.
                     * @param position The position
                     * @return A new transform
                     */
                    // @ts-ignore
                    setPosition(position: Vector3d): org.spongepowered.api.entity.Transform<E>
                    /**
                     * Gets the rotation of this transform, as a {@link Vector3d}.
                     * <p>The format of the rotation is represented by:</p>
                     * <ul>
                     * <li><code>x -> pitch</code></li>
                     * <li><code>y -> yaw</code></li>
                     * <li><code>z -> roll</code></li>
                     * </ul>
                     * @return The rotation vector
                     */
                    // @ts-ignore
                    getRotation(): Vector3d
                    /**
                     * Creates a copy of this transform and sets the rotation.
                     * <p>The format of the rotation is represented by:</p>
                     * <ul>
                     * <li><code>x -> pitch</code></li>
                     * <li><code>y -> yaw</code></li>
                     * <li><code>z -> roll</code></li>
                     * </ul>
                     * @param rotation The new rotation
                     * @return A new transform
                     */
                    // @ts-ignore
                    setRotation(rotation: Quaterniond): org.spongepowered.api.entity.Transform<E>
                    /**
                     * Creates a copy of this transform and sets the rotation as a quaternion.
                     * <p>Quaternions are objectively better than the Euler angles preferred by
                     * Minecraft. This is for compatibility with the flow-math library.</p>
                     * @param rotation The new rotation
                     * @return A new transform
                     */
                    // @ts-ignore
                    setRotation(rotation: Vector3d): org.spongepowered.api.entity.Transform<E>
                    /**
                     * Returns the rotation as a quaternion.
                     * <p>Quaternions are objectively better than the Euler angles preferred by
                     * Minecraft. This is for compatibility with the flow-math library.</p>
                     * @return The rotation
                     */
                    // @ts-ignore
                    getRotationAsQuaternion(): Quaterniond
                    /**
                     * Gets the pitch component of this transform rotation.
                     * @return The pitch
                     */
                    // @ts-ignore
                    getPitch(): double
                    /**
                     * Gets the yaw component of this transform rotation.
                     * @return The yaw
                     */
                    // @ts-ignore
                    getYaw(): double
                    /**
                     * Gets the roll component of this transform rotation.
                     * @return The roll
                     */
                    // @ts-ignore
                    getRoll(): double
                    /**
                     * Gets the scale of the transform for each axis.
                     * @return The scale
                     */
                    // @ts-ignore
                    getScale(): Vector3d
                    /**
                     * Creates a copy of this transform and sets the scale for each axis.
                     * @param scale The scale
                     * @return A new transform
                     */
                    // @ts-ignore
                    setScale(scale: Vector3d): org.spongepowered.api.entity.Transform<E>
                    /**
                     * "Adds" another transform to this one. This is equivalent to adding the
                     * translation, rotation and scale individually.
                     * <p>Returns the results as a new copy.</p>
                     * @param other The transform to add
                     * @return A new transform
                     */
                    // @ts-ignore
                    add(other: org.spongepowered.api.entity.Transform<E>): org.spongepowered.api.entity.Transform<E>
                    /**
                     * Adds a translation to this transform.
                     * <p>Returns the results as a new copy.</p>
                     * @param translation The translation to add
                     * @return A new transform
                     */
                    // @ts-ignore
                    addTranslation(translation: Vector3d): org.spongepowered.api.entity.Transform<E>
                    /**
                     * Adds a rotation to this transform. Returns the results as a new copy.
                     * @param rotation The rotation to add
                     * @return A new transform
                     */
                    // @ts-ignore
                    addRotation(rotation: Vector3d): org.spongepowered.api.entity.Transform<E>
                    /**
                     * Adds a rotation to this transform.
                     * <p>Quaternions are objectively better than the Euler angles preferred by
                     * Minecraft. This is the preferred method when dealing with rotation
                     * additions. This is for compatibility with the flow-math library.</p>
                     * <p>Returns the results as a new copy.</p>
                     * @param rotation The rotation to add
                     * @return A new transform
                     */
                    // @ts-ignore
                    addRotation(rotation: Quaterniond): org.spongepowered.api.entity.Transform<E>
                    /**
                     * "Adds" a scale to this transform. Scales are multiplicative, so this
                     * actually multiplies the current scale.
                     * <p>Returns the results as a new copy.</p>
                     * @param scale The scale to add
                     * @return A new transform
                     */
                    // @ts-ignore
                    addScale(scale: Vector3d): org.spongepowered.api.entity.Transform<E>
                    /**
                     * Returns a matrix representation of this transform.
                     * <p>This includes the position, rotation and scale. To apply the transform
                     * to a vector, use the following:</p>
                     * <blockquote><code>Vector3d original = ...;<br />
                     * Transform transform = ...;<br /><br />
                     * Vector3d transformed =
                     * transform.toMatrix().transform(original.toVector4(1)).toVector3();<br />
                     * }</code></blockquote>
                     * <p>This converts the original 3D vector to 4D by appending 1 as the w
                     * coordinate, applies the transformation, then converts it back to 3D by
                     * dropping the w coordinate.</p>
                     * <p>Using a 4D matrix and a w coordinate with value 1 is what allows for
                     * the position to be included in the transformation applied by the matrix.
                     * </p>
                     * @return The transform as a matrix
                     */
                    // @ts-ignore
                    toMatrix(): Matrix4d
                    /**
                     * Returns if this {@link Transform} is still valid.
                     * <p>Examples of invalid Transforms are:</p>
                     * <ul>
                     * <li>A Transform without an {@link Extent}</li>
                     * <li>A Transform whose {@link Extent} object is no longer present</li>
                     * <li>A Transform whose coordinates are illegal (defined by the
                     * implementation)</li>
                     * </ul>
                     * @return True if valid, false if not
                     */
                    // @ts-ignore
                    isValid(): boolean
                    // @ts-ignore
                    hashCode(): int
                    // @ts-ignore
                    equals(other: any): boolean
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}
