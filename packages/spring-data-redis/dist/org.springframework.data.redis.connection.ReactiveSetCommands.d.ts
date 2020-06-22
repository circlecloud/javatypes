declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Redis Set commands executed using reactive infrastructure.
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 2.0
                     */
                    // @ts-ignore
                    interface ReactiveSetCommands {
                        /**
                         * Add given {@literal value} to set at {@literal key}.
                         * @param key must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/sadd">Redis Documentation: SADD</a>
                         */
                        // @ts-ignore
                        sAdd(key: java.nio.ByteBuffer, value: java.nio.ByteBuffer): object
                        /**
                         * Add given {@literal values} to set at {@literal key}.
                         * @param key must not be {#literal null}.
                         * @param values must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/sadd">Redis Documentation: SADD</a>
                         */
                        // @ts-ignore
                        sAdd(key: java.nio.ByteBuffer, values: java.util.Collection<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>): object
                        /**
                         * Add given {@link SAddCommand#getValues()} to set at {@link SAddCommand#getKey()}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/sadd">Redis Documentation: SADD</a>
                         */
                        // @ts-ignore
                        sAdd(commands: object): object
                        /**
                         * Remove given {@literal value} from set at {@literal key} and return the number of removed elements.
                         * @param key must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/srem">Redis Documentation: SREM</a>
                         */
                        // @ts-ignore
                        sRem(key: java.nio.ByteBuffer, value: java.nio.ByteBuffer): object
                        /**
                         * Remove given {@literal values} from set at {@literal key} and return the number of removed elements.
                         * @param key must not be {#literal null}.
                         * @param values must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/srem">Redis Documentation: SREM</a>
                         */
                        // @ts-ignore
                        sRem(key: java.nio.ByteBuffer, values: java.util.Collection<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>): object
                        /**
                         * Remove given {@link SRemCommand#getValues()} from set at {@link SRemCommand#getKey()}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/srem">Redis Documentation: SREM</a>
                         */
                        // @ts-ignore
                        sRem(commands: object): object
                        /**
                         * Remove and return a random member from set at {@literal key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/spop">Redis Documentation: SPOP</a>
                         */
                        // @ts-ignore
                        sPop(key: java.nio.ByteBuffer): object
                        /**
                         * Remove and return {@code count} random members from set at {@code key}.
                         * @param key must not be {#literal null}.
                         * @param count number of random members to pop from the set.
                         * @return 
                         * @see <a href="https://redis.io/commands/spop">Redis Documentation: SPOP</a>
                         */
                        // @ts-ignore
                        sPop(key: java.nio.ByteBuffer, count: number /*long*/): object
                        /**
                         * Remove and return a random member from set at {@literal key}.
                         * @param command must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/spop">Redis Documentation: SPOP</a>
                         */
                        // @ts-ignore
                        sPop(command: org.springframework.data.redis.connection.ReactiveSetCommands.SPopCommand): object
                        /**
                         * Remove and return a random member from set at {@link KeyCommand#getKey()}
                         * @param commands
                         * @return 
                         * @see <a href="https://redis.io/commands/spop">Redis Documentation: SPOP</a>
                         */
                        // @ts-ignore
                        sPop(commands: object): object
                        /**
                         * Move {@literal value} from {@literal sourceKey} to {@literal destinationKey}
                         * @param sourceKey must not be {#literal null}.
                         * @param destinationKey must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/smove">Redis Documentation: SMOVE</a>
                         */
                        // @ts-ignore
                        sMove(sourceKey: java.nio.ByteBuffer, destinationKey: java.nio.ByteBuffer, value: java.nio.ByteBuffer): object
                        /**
                         * Move {@link SMoveCommand#getValue()} from {@link SMoveCommand#getKey()} to {@link SMoveCommand#getDestination()}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/smove">Redis Documentation: SMOVE</a>
                         */
                        // @ts-ignore
                        sMove(commands: object): object
                        /**
                         * Get size of set at {@literal key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/scard">Redis Documentation: SCARD</a>
                         */
                        // @ts-ignore
                        sCard(key: java.nio.ByteBuffer): object
                        /**
                         * Get size of set at {@link KeyCommand#getKey()}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/scard">Redis Documentation: SCARD</a>
                         */
                        // @ts-ignore
                        sCard(commands: object): object
                        /**
                         * Check if set at {@literal key} contains {@literal value}.
                         * @param key must not be {#literal null}.
                         * @param value must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/sismember">Redis Documentation: SISMEMBER</a>
                         */
                        // @ts-ignore
                        sIsMember(key: java.nio.ByteBuffer, value: java.nio.ByteBuffer): object
                        /**
                         * Check if set at {@link SIsMemberCommand#getKey()} contains {@link SIsMemberCommand#getKey()}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/sismember">Redis Documentation: SISMEMBER</a>
                         */
                        // @ts-ignore
                        sIsMember(commands: object): object
                        /**
                         * Returns the members intersecting all given sets at {@literal keys}.
                         * @param keys must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/sinter">Redis Documentation: SINTER</a>
                         */
                        // @ts-ignore
                        sInter(keys: java.util.Collection<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>): object
                        /**
                         * Returns the members intersecting all given sets at {@link SInterCommand#getKeys()}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/sinter">Redis Documentation: SINTER</a>
                         */
                        // @ts-ignore
                        sInter(commands: object): object
                        /**
                         * Intersect all given sets at {@literal keys} and store result in {@literal destinationKey}.
                         * @param destinationKey must not be {#literal null}.
                         * @param keys must not be {#literal null}.
                         * @return size of set stored a {#literal destinationKey}.
                         * @see <a href="https://redis.io/commands/sinterstore">Redis Documentation: SINTERSTORE</a>
                         */
                        // @ts-ignore
                        sInterStore(destinationKey: java.nio.ByteBuffer, keys: java.util.Collection<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>): object
                        /**
                         * Intersect all given sets at {@literal keys} and store result in {@literal destinationKey}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/sinterstore">Redis Documentation: SINTERSTORE</a>
                         */
                        // @ts-ignore
                        sInterStore(commands: object): object
                        /**
                         * Returns the members intersecting all given sets at {@literal keys}.
                         * @param keys must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/sunion">Redis Documentation: SUNION</a>
                         */
                        // @ts-ignore
                        sUnion(keys: java.util.Collection<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>): object
                        /**
                         * Returns the members intersecting all given sets at {@link SInterCommand#getKeys()}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/sunion">Redis Documentation: SUNION</a>
                         */
                        // @ts-ignore
                        sUnion(commands: object): object
                        /**
                         * Union all given sets at {@literal keys} and store result in {@literal destinationKey}.
                         * @param destinationKey must not be {#literal null}.
                         * @param keys must not be {#literal null}.
                         * @return size of set stored a {#literal destinationKey}.
                         * @see <a href="https://redis.io/commands/sunionstore">Redis Documentation: SUNIONSTORE</a>
                         */
                        // @ts-ignore
                        sUnionStore(destinationKey: java.nio.ByteBuffer, keys: java.util.Collection<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>): object
                        /**
                         * Union all given sets at {@literal keys} and store result in {@literal destinationKey}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/sunionstore">Redis Documentation: SUNIONSTORE</a>
                         */
                        // @ts-ignore
                        sUnionStore(commands: object): object
                        /**
                         * Returns the diff of the members of all given sets at {@literal keys}.
                         * @param keys must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/sdiff">Redis Documentation: SDIFF</a>
                         */
                        // @ts-ignore
                        sDiff(keys: java.util.Collection<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>): object
                        /**
                         * Returns the diff of the members of all given sets at {@link SInterCommand#getKeys()}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/sdiff">Redis Documentation: SDIFF</a>
                         */
                        // @ts-ignore
                        sDiff(commands: object): object
                        /**
                         * Diff all given sets at {@literal keys} and store result in {@literal destinationKey}.
                         * @param destinationKey must not be {#literal null}.
                         * @param keys must not be {#literal null}.
                         * @return size of set stored a {#literal destinationKey}.
                         * @see <a href="https://redis.io/commands/sdiffstore">Redis Documentation: SDIFFSTORE</a>
                         */
                        // @ts-ignore
                        sDiffStore(destinationKey: java.nio.ByteBuffer, keys: java.util.Collection<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>): object
                        /**
                         * Diff all given sets at {@literal keys} and store result in {@literal destinationKey}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/sdiffstore">Redis Documentation: SDIFFSTORE</a>
                         */
                        // @ts-ignore
                        sDiffStore(commands: object): object
                        /**
                         * Get all elements of set at {@literal key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/smembers">Redis Documentation: SMEMBERS</a>
                         */
                        // @ts-ignore
                        sMembers(key: java.nio.ByteBuffer): object
                        /**
                         * Get all elements of set at {@link KeyCommand#getKey()}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/smembers">Redis Documentation: SMEMBERS</a>
                         */
                        // @ts-ignore
                        sMembers(commands: object): object
                        /**
                         * Use a {@link Flux} to iterate over members in the set at {@code key}. The resulting {@link Flux} acts as a cursor
                         * and issues {@code SSCAN} commands itself as long as the subscriber signals demand.
                         * @param key must not be {#literal null}.
                         * @return the {#link Flux} emitting the raw {@link ByteBuffer members} one by one.
                         * @throws IllegalArgumentException when options is {#literal null}.
                         * @see <a href="https://redis.io/commands/sscan">Redis Documentation: SSCAN</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        sScan(key: java.nio.ByteBuffer): object
                        /**
                         * Use a {@link Flux} to iterate over members in the set at {@code key} given {@link ScanOptions}. The resulting
                         * {@link Flux} acts as a cursor and issues {@code SSCAN} commands itself as long as the subscriber signals demand.
                         * @param key must not be {#literal null}.
                         * @param options must not be {#literal null}. Use {@link ScanOptions#NONE} instead.
                         * @return the {#link Flux} emitting the raw {@link ByteBuffer members} one by one.
                         * @throws IllegalArgumentException when one of the required arguments is {#literal null}.
                         * @see <a href="https://redis.io/commands/sscan">Redis Documentation: SSCAN</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        sScan(key: java.nio.ByteBuffer, options: org.springframework.data.redis.core.ScanOptions): object
                        /**
                         * Use a {@link Flux} to iterate over members in the set at {@code key}. The resulting {@link Flux} acts as a cursor
                         * and issues {@code SSCAN} commands itself as long as the subscriber signals demand.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/sscan">Redis Documentation: SSCAN</a>
                         * @since 2.1
                         */
                        // @ts-ignore
                        sScan(commands: object): object
                        /**
                         * Get random element from set at {@literal key}.
                         * @param key must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/srandmember">Redis Documentation: SRANDMEMBER</a>
                         */
                        // @ts-ignore
                        sRandMember(key: java.nio.ByteBuffer): object
                        /**
                         * Get {@literal count} random elements from set at {@literal key}.
                         * @param key must not be {#literal null}.
                         * @param count must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/srandmember">Redis Documentation: SRANDMEMBER</a>
                         */
                        // @ts-ignore
                        sRandMember(key: java.nio.ByteBuffer, count: java.lang.Long | number): object
                        /**
                         * Get {@link SRandMembersCommand#getCount()} random elements from set at {@link SRandMembersCommand#getKey()}.
                         * @param commands must not be {#literal null}.
                         * @return 
                         * @see <a href="https://redis.io/commands/srandmember">Redis Documentation: SRANDMEMBER</a>
                         */
                        // @ts-ignore
                        sRandMember(commands: object): object
                    }
                }
            }
        }
    }
}
