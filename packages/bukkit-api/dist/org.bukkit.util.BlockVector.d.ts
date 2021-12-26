declare namespace org {
    namespace bukkit {
        namespace util {
            /**
             * A vector with a hash function that floors the X, Y, Z components, a la
             * BlockVector in WorldEdit. BlockVectors can be used in hash sets and
             * hash maps. Be aware that BlockVectors are mutable, but it is important
             * that BlockVectors are never changed once put into a hash set or hash map.
             */
            // @ts-ignore
            class BlockVector extends org.bukkit.util.Vector {
                /**
                 * Construct the vector with all components as 0.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Construct the vector with another vector.
                 * @param vec The other vector.
                 */
                // @ts-ignore
                constructor(vec: org.bukkit.util.Vector)
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
                /**
                 * Checks if another object is equivalent.
                 * @param obj The other object
                 * @return whether the other object is equivalent
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object | any): boolean
                /**
                 * Returns a hash code for this vector.
                 * @return hash code
                 */
                // @ts-ignore
                public hashCode(): number /*int*/
                /**
                 * Get a new block vector.
                 * @return vector
                 */
                // @ts-ignore
                public clone(): org.bukkit.util.BlockVector
                // @ts-ignore
                public static deserialize(args: java.util.Map<java.lang.String | string, java.lang.Object | any>): org.bukkit.util.BlockVector
            }
        }
    }
}
