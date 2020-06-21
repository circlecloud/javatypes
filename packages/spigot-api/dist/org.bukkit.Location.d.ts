declare namespace org {
    namespace bukkit {
        /**
         * Represents a 3-dimensional position in a world.
         * <br>
         * No constraints are placed on any angular values other than that they be
         * specified in degrees. This means that negative angles or angles of greater
         * magnitude than 360 are valid, but may be normalized to any other equivalent
         * representation by the implementation.
         */
        // @ts-ignore
        class Location extends java.lang.Object implements java.lang.Cloneable, org.bukkit.configuration.serialization.ConfigurationSerializable {
            /**
             * Constructs a new Location with the given coordinates
             * @param world The world in which this location resides
             * @param x The x-coordinate of this new location
             * @param y The y-coordinate of this new location
             * @param z The z-coordinate of this new location
             */
            // @ts-ignore
            constructor(world: org.bukkit.World, x: number /*double*/, y: number /*double*/, z: number /*double*/)
            /**
             * Constructs a new Location with the given coordinates and direction
             * @param world The world in which this location resides
             * @param x The x-coordinate of this new location
             * @param y The y-coordinate of this new location
             * @param z The z-coordinate of this new location
             * @param yaw The absolute rotation on the x-plane, in degrees
             * @param pitch The absolute rotation on the y-plane, in degrees
             */
            // @ts-ignore
            constructor(world: org.bukkit.World, x: number /*double*/, y: number /*double*/, z: number /*double*/, yaw: number /*float*/, pitch: number /*float*/)
            /**
             * Sets the world that this location resides in
             * @param world New world that this location resides in
             */
            // @ts-ignore
            public setWorld(world: org.bukkit.World): void
            /**
             * Checks if world in this location is present and loaded.
             * @return true if is loaded, otherwise false
             */
            // @ts-ignore
            public isWorldLoaded(): boolean
            /**
             * Gets the world that this location resides in
             * @return World that contains this location, or {#code null} if it is not set
             * @throws IllegalArgumentException when world is unloaded
             * @see #isWorldLoaded()
             */
            // @ts-ignore
            public getWorld(): org.bukkit.World
            /**
             * Gets the chunk at the represented location
             * @return Chunk at the represented location
             */
            // @ts-ignore
            public getChunk(): org.bukkit.Chunk
            /**
             * Gets the block at the represented location
             * @return Block at the represented location
             */
            // @ts-ignore
            public getBlock(): org.bukkit.block.Block
            /**
             * Sets the x-coordinate of this location
             * @param x X-coordinate
             */
            // @ts-ignore
            public setX(x: number /*double*/): void
            /**
             * Gets the x-coordinate of this location
             * @return x-coordinate
             */
            // @ts-ignore
            public getX(): number /*double*/
            /**
             * Gets the floored value of the X component, indicating the block that
             * this location is contained with.
             * @return block X
             */
            // @ts-ignore
            public getBlockX(): number /*int*/
            /**
             * Sets the y-coordinate of this location
             * @param y y-coordinate
             */
            // @ts-ignore
            public setY(y: number /*double*/): void
            /**
             * Gets the y-coordinate of this location
             * @return y-coordinate
             */
            // @ts-ignore
            public getY(): number /*double*/
            /**
             * Gets the floored value of the Y component, indicating the block that
             * this location is contained with.
             * @return block y
             */
            // @ts-ignore
            public getBlockY(): number /*int*/
            /**
             * Sets the z-coordinate of this location
             * @param z z-coordinate
             */
            // @ts-ignore
            public setZ(z: number /*double*/): void
            /**
             * Gets the z-coordinate of this location
             * @return z-coordinate
             */
            // @ts-ignore
            public getZ(): number /*double*/
            /**
             * Gets the floored value of the Z component, indicating the block that
             * this location is contained with.
             * @return block z
             */
            // @ts-ignore
            public getBlockZ(): number /*int*/
            /**
             * Sets the yaw of this location, measured in degrees.
             * <ul>
             * <li>A yaw of 0 or 360 represents the positive z direction.
             * <li>A yaw of 180 represents the negative z direction.
             * <li>A yaw of 90 represents the negative x direction.
             * <li>A yaw of 270 represents the positive x direction.
             * </ul>
             * Increasing yaw values are the equivalent of turning to your
             * right-facing, increasing the scale of the next respective axis, and
             * decreasing the scale of the previous axis.
             * @param yaw new rotation's yaw
             */
            // @ts-ignore
            public setYaw(yaw: number /*float*/): void
            /**
             * Gets the yaw of this location, measured in degrees.
             * <ul>
             * <li>A yaw of 0 or 360 represents the positive z direction.
             * <li>A yaw of 180 represents the negative z direction.
             * <li>A yaw of 90 represents the negative x direction.
             * <li>A yaw of 270 represents the positive x direction.
             * </ul>
             * Increasing yaw values are the equivalent of turning to your
             * right-facing, increasing the scale of the next respective axis, and
             * decreasing the scale of the previous axis.
             * @return the rotation's yaw
             */
            // @ts-ignore
            public getYaw(): number /*float*/
            /**
             * Sets the pitch of this location, measured in degrees.
             * <ul>
             * <li>A pitch of 0 represents level forward facing.
             * <li>A pitch of 90 represents downward facing, or negative y
             * direction.
             * <li>A pitch of -90 represents upward facing, or positive y direction.
             * </ul>
             * Increasing pitch values the equivalent of looking down.
             * @param pitch new incline's pitch
             */
            // @ts-ignore
            public setPitch(pitch: number /*float*/): void
            /**
             * Gets the pitch of this location, measured in degrees.
             * <ul>
             * <li>A pitch of 0 represents level forward facing.
             * <li>A pitch of 90 represents downward facing, or negative y
             * direction.
             * <li>A pitch of -90 represents upward facing, or positive y direction.
             * </ul>
             * Increasing pitch values the equivalent of looking down.
             * @return the incline's pitch
             */
            // @ts-ignore
            public getPitch(): number /*float*/
            /**
             * Gets a unit-vector pointing in the direction that this Location is
             * facing.
             * @return a vector pointing the direction of this location's {#link
             *      #getPitch() pitch} and {@link #getYaw() yaw}
             */
            // @ts-ignore
            public getDirection(): org.bukkit.util.Vector
            /**
             * Sets the {@link #getYaw() yaw} and {@link #getPitch() pitch} to point
             * in the direction of the vector.
             * @param vector the direction vector
             * @return the same location
             */
            // @ts-ignore
            public setDirection(vector: org.bukkit.util.Vector): org.bukkit.Location
            /**
             * Adds the location by another.
             * @see Vector
             * @param vec The other location
             * @return the same location
             * @throws IllegalArgumentException for differing worlds
             */
            // @ts-ignore
            public add(vec: org.bukkit.Location): org.bukkit.Location
            /**
             * Adds the location by a vector.
             * @see Vector
             * @param vec Vector to use
             * @return the same location
             */
            // @ts-ignore
            public add(vec: org.bukkit.util.Vector): org.bukkit.Location
            /**
             * Adds the location by another. Not world-aware.
             * @see Vector
             * @param x X coordinate
             * @param y Y coordinate
             * @param z Z coordinate
             * @return the same location
             */
            // @ts-ignore
            public add(x: number /*double*/, y: number /*double*/, z: number /*double*/): org.bukkit.Location
            /**
             * Subtracts the location by another.
             * @see Vector
             * @param vec The other location
             * @return the same location
             * @throws IllegalArgumentException for differing worlds
             */
            // @ts-ignore
            public subtract(vec: org.bukkit.Location): org.bukkit.Location
            /**
             * Subtracts the location by a vector.
             * @see Vector
             * @param vec The vector to use
             * @return the same location
             */
            // @ts-ignore
            public subtract(vec: org.bukkit.util.Vector): org.bukkit.Location
            /**
             * Subtracts the location by another. Not world-aware and
             * orientation independent.
             * @see Vector
             * @param x X coordinate
             * @param y Y coordinate
             * @param z Z coordinate
             * @return the same location
             */
            // @ts-ignore
            public subtract(x: number /*double*/, y: number /*double*/, z: number /*double*/): org.bukkit.Location
            /**
             * Gets the magnitude of the location, defined as sqrt(x^2+y^2+z^2). The
             * value of this method is not cached and uses a costly square-root
             * function, so do not repeatedly call this method to get the location's
             * magnitude. NaN will be returned if the inner result of the sqrt()
             * function overflows, which will be caused if the length is too long. Not
             * world-aware and orientation independent.
             * @return the magnitude
             * @see Vector
             */
            // @ts-ignore
            public length(): number /*double*/
            /**
             * Gets the magnitude of the location squared. Not world-aware and
             * orientation independent.
             * @return the magnitude
             * @see Vector
             */
            // @ts-ignore
            public lengthSquared(): number /*double*/
            /**
             * Get the distance between this location and another. The value of this
             * method is not cached and uses a costly square-root function, so do not
             * repeatedly call this method to get the location's magnitude. NaN will
             * be returned if the inner result of the sqrt() function overflows, which
             * will be caused if the distance is too long.
             * @param o The other location
             * @return the distance
             * @throws IllegalArgumentException for differing worlds
             * @see Vector
             */
            // @ts-ignore
            public distance(o: org.bukkit.Location): number /*double*/
            /**
             * Get the squared distance between this location and another.
             * @param o The other location
             * @return the distance
             * @throws IllegalArgumentException for differing worlds
             * @see Vector
             */
            // @ts-ignore
            public distanceSquared(o: org.bukkit.Location): number /*double*/
            /**
             * Performs scalar multiplication, multiplying all components with a
             * scalar. Not world-aware.
             * @param m The factor
             * @return the same location
             * @see Vector
             */
            // @ts-ignore
            public multiply(m: number /*double*/): org.bukkit.Location
            /**
             * Zero this location's components. Not world-aware.
             * @return the same location
             * @see Vector
             */
            // @ts-ignore
            public zero(): org.bukkit.Location
            // @ts-ignore
            public equals(obj: java.lang.Object | any): boolean
            // @ts-ignore
            public hashCode(): number /*int*/
            // @ts-ignore
            public toString(): string
            /**
             * Constructs a new {@link Vector} based on this Location
             * @return New Vector containing the coordinates represented by this
             *      Location
             */
            // @ts-ignore
            public toVector(): org.bukkit.util.Vector
            // @ts-ignore
            public clone(): org.bukkit.Location
            /**
             * Check if each component of this Location is finite.
             * @throws IllegalArgumentException if any component is not finite
             */
            // @ts-ignore
            public checkFinite(): void
            /**
             * Safely converts a double (location coordinate) to an int (block
             * coordinate)
             * @param loc Precise coordinate
             * @return Block coordinate
             */
            // @ts-ignore
            public static locToBlock(loc: number /*double*/): number /*int*/
            // @ts-ignore
            public serialize(): java.util.Map<java.lang.String | string, java.lang.Object | any>
            /**
             * Required method for deserialization
             * @param args map to deserialize
             * @return deserialized location
             * @throws IllegalArgumentException if the world don't exists
             * @see ConfigurationSerializable
             */
            // @ts-ignore
            public static deserialize(args: java.util.Map<java.lang.String | string, java.lang.Object | any>): org.bukkit.Location
            /**
             * Normalizes the given yaw angle to a value between <code>+/-180</code>
             * degrees.
             * @param yaw the yaw in degrees
             * @return the normalized yaw in degrees
             * @see Location#getYaw()
             */
            // @ts-ignore
            public static normalizeYaw(yaw: number /*float*/): number /*float*/
            /**
             * Normalizes the given pitch angle to a value between <code>+/-90</code>
             * degrees.
             * @param pitch the pitch in degrees
             * @return the normalized pitch in degrees
             * @see Location#getPitch()
             */
            // @ts-ignore
            public static normalizePitch(pitch: number /*float*/): number /*float*/
        }
    }
}
