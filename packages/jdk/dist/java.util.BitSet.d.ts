declare namespace java {
    namespace util {
        /**
         * This class implements a vector of bits that grows as needed. Each
         * component of the bit set has a {@code boolean} value. The
         * bits of a {@code BitSet} are indexed by nonnegative integers.
         * Individual indexed bits can be examined, set, or cleared. One
         * {@code BitSet} may be used to modify the contents of another
         * {@code BitSet} through logical AND, logical inclusive OR, and
         * logical exclusive OR operations.
         * <p>By default, all bits in the set initially have the value
         * {@code false}.
         * <p>Every bit set has a current size, which is the number of bits
         * of space currently in use by the bit set. Note that the size is
         * related to the implementation of a bit set, so it may change with
         * implementation. The length of a bit set relates to logical length
         * of a bit set and is defined independently of implementation.
         * <p>Unless otherwise noted, passing a null parameter to any of the
         * methods in a {@code BitSet} will result in a
         * {@code NullPointerException}.
         * <p>A {@code BitSet} is not safe for multithreaded use without
         * external synchronization.
         * @author Arthur van Hoff
         * @author Michael McCloskey
         * @author Martin Buchholz
         * @since JDK1.0
         */
        // @ts-ignore
        class BitSet extends java.lang.Object implements java.lang.Cloneable, java.io.Serializable {
            /**
             * Creates a new bit set. All bits are initially {@code false}.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a bit set whose initial size is large enough to explicitly
             * represent bits with indices in the range {@code 0} through
             * {@code nbits-1}. All bits are initially {@code false}.
             * @param nbits the initial size of the bit set
             * @throws NegativeArraySizeException if the specified initial size
             *          is negative
             */
            // @ts-ignore
            constructor(nbits: number /*int*/)
            /**
             * Returns a new bit set containing all the bits in the given long array.
             * <p>More precisely,
             * <br>{@code BitSet.valueOf(longs).get(n) == ((longs[n/64] & (1L<<(n%64))) != 0)}
             * <br>for all {@code n < 64 * longs.length}.
             * <p>This method is equivalent to
             * {@code BitSet.valueOf(LongBuffer.wrap(longs))}.
             * @param longs a long array containing a little-endian representation
             *         of a sequence of bits to be used as the initial bits of the
             *         new bit set
             * @return a {#code BitSet} containing all the bits in the long array
             * @since 1.7
             */
            // @ts-ignore
            public static valueOf(longs: number /*long*/[]): java.util.BitSet
            /**
             * Returns a new bit set containing all the bits in the given long
             * buffer between its position and limit.
             * <p>More precisely,
             * <br>{@code BitSet.valueOf(lb).get(n) == ((lb.get(lb.position()+n/64) & (1L<<(n%64))) != 0)}
             * <br>for all {@code n < 64 * lb.remaining()}.
             * <p>The long buffer is not modified by this method, and no
             * reference to the buffer is retained by the bit set.
             * @param lb a long buffer containing a little-endian representation
             *         of a sequence of bits between its position and limit, to be
             *         used as the initial bits of the new bit set
             * @return a {#code BitSet} containing all the bits in the buffer in the
             *          specified range
             * @since 1.7
             */
            // @ts-ignore
            public static valueOf(lb: java.nio.LongBuffer): java.util.BitSet
            /**
             * Returns a new bit set containing all the bits in the given byte array.
             * <p>More precisely,
             * <br>{@code BitSet.valueOf(bytes).get(n) == ((bytes[n/8] & (1<<(n%8))) != 0)}
             * <br>for all {@code n <  8 * bytes.length}.
             * <p>This method is equivalent to
             * {@code BitSet.valueOf(ByteBuffer.wrap(bytes))}.
             * @param bytes a byte array containing a little-endian
             *         representation of a sequence of bits to be used as the
             *         initial bits of the new bit set
             * @return a {#code BitSet} containing all the bits in the byte array
             * @since 1.7
             */
            // @ts-ignore
            public static valueOf(bytes: number /*byte*/[]): java.util.BitSet
            /**
             * Returns a new bit set containing all the bits in the given byte
             * buffer between its position and limit.
             * <p>More precisely,
             * <br>{@code BitSet.valueOf(bb).get(n) == ((bb.get(bb.position()+n/8) & (1<<(n%8))) != 0)}
             * <br>for all {@code n < 8 * bb.remaining()}.
             * <p>The byte buffer is not modified by this method, and no
             * reference to the buffer is retained by the bit set.
             * @param bb a byte buffer containing a little-endian representation
             *         of a sequence of bits between its position and limit, to be
             *         used as the initial bits of the new bit set
             * @return a {#code BitSet} containing all the bits in the buffer in the
             *          specified range
             * @since 1.7
             */
            // @ts-ignore
            public static valueOf(bb: java.nio.ByteBuffer): java.util.BitSet
            /**
             * Returns a new byte array containing all the bits in this bit set.
             * <p>More precisely, if
             * <br>{@code byte[] bytes = s.toByteArray();}
             * <br>then {@code bytes.length == (s.length()+7)/8} and
             * <br>{@code s.get(n) == ((bytes[n/8] & (1<<(n%8))) != 0)}
             * <br>for all {@code n < 8 * bytes.length}.
             * @return a byte array containing a little-endian representation
             *          of all the bits in this bit set
             * @since 1.7
             */
            // @ts-ignore
            public toByteArray(): number /*byte*/[]
            /**
             * Returns a new long array containing all the bits in this bit set.
             * <p>More precisely, if
             * <br>{@code long[] longs = s.toLongArray();}
             * <br>then {@code longs.length == (s.length()+63)/64} and
             * <br>{@code s.get(n) == ((longs[n/64] & (1L<<(n%64))) != 0)}
             * <br>for all {@code n < 64 * longs.length}.
             * @return a long array containing a little-endian representation
             *          of all the bits in this bit set
             * @since 1.7
             */
            // @ts-ignore
            public toLongArray(): number /*long*/[]
            /**
             * Sets the bit at the specified index to the complement of its
             * current value.
             * @param bitIndex the index of the bit to flip
             * @throws IndexOutOfBoundsException if the specified index is negative
             * @since 1.4
             */
            // @ts-ignore
            public flip(bitIndex: number /*int*/): void
            /**
             * Sets each bit from the specified {@code fromIndex} (inclusive) to the
             * specified {@code toIndex} (exclusive) to the complement of its current
             * value.
             * @param fromIndex index of the first bit to flip
             * @param toIndex index after the last bit to flip
             * @throws IndexOutOfBoundsException if {#code fromIndex} is negative,
             *          or {@code toIndex} is negative, or {@code fromIndex} is
             *          larger than {@code toIndex}
             * @since 1.4
             */
            // @ts-ignore
            public flip(fromIndex: number /*int*/, toIndex: number /*int*/): void
            /**
             * Sets the bit at the specified index to {@code true}.
             * @param bitIndex a bit index
             * @throws IndexOutOfBoundsException if the specified index is negative
             * @since JDK1.0
             */
            // @ts-ignore
            public set(bitIndex: number /*int*/): void
            /**
             * Sets the bit at the specified index to the specified value.
             * @param bitIndex a bit index
             * @param value a boolean value to set
             * @throws IndexOutOfBoundsException if the specified index is negative
             * @since 1.4
             */
            // @ts-ignore
            public set(bitIndex: number /*int*/, value: boolean): void
            /**
             * Sets the bits from the specified {@code fromIndex} (inclusive) to the
             * specified {@code toIndex} (exclusive) to {@code true}.
             * @param fromIndex index of the first bit to be set
             * @param toIndex index after the last bit to be set
             * @throws IndexOutOfBoundsException if {#code fromIndex} is negative,
             *          or {@code toIndex} is negative, or {@code fromIndex} is
             *          larger than {@code toIndex}
             * @since 1.4
             */
            // @ts-ignore
            public set(fromIndex: number /*int*/, toIndex: number /*int*/): void
            /**
             * Sets the bits from the specified {@code fromIndex} (inclusive) to the
             * specified {@code toIndex} (exclusive) to the specified value.
             * @param fromIndex index of the first bit to be set
             * @param toIndex index after the last bit to be set
             * @param value value to set the selected bits to
             * @throws IndexOutOfBoundsException if {#code fromIndex} is negative,
             *          or {@code toIndex} is negative, or {@code fromIndex} is
             *          larger than {@code toIndex}
             * @since 1.4
             */
            // @ts-ignore
            public set(fromIndex: number /*int*/, toIndex: number /*int*/, value: boolean): void
            /**
             * Sets the bit specified by the index to {@code false}.
             * @param bitIndex the index of the bit to be cleared
             * @throws IndexOutOfBoundsException if the specified index is negative
             * @since JDK1.0
             */
            // @ts-ignore
            public clear(bitIndex: number /*int*/): void
            /**
             * Sets the bits from the specified {@code fromIndex} (inclusive) to the
             * specified {@code toIndex} (exclusive) to {@code false}.
             * @param fromIndex index of the first bit to be cleared
             * @param toIndex index after the last bit to be cleared
             * @throws IndexOutOfBoundsException if {#code fromIndex} is negative,
             *          or {@code toIndex} is negative, or {@code fromIndex} is
             *          larger than {@code toIndex}
             * @since 1.4
             */
            // @ts-ignore
            public clear(fromIndex: number /*int*/, toIndex: number /*int*/): void
            /**
             * Sets all of the bits in this BitSet to {@code false}.
             * @since 1.4
             */
            // @ts-ignore
            public clear(): void
            /**
             * Returns the value of the bit with the specified index. The value
             * is {@code true} if the bit with the index {@code bitIndex}
             * is currently set in this {@code BitSet}; otherwise, the result
             * is {@code false}.
             * @param bitIndex   the bit index
             * @return the value of the bit with the specified index
             * @throws IndexOutOfBoundsException if the specified index is negative
             */
            // @ts-ignore
            public get(bitIndex: number /*int*/): boolean
            /**
             * Returns a new {@code BitSet} composed of bits from this {@code BitSet}
             * from {@code fromIndex} (inclusive) to {@code toIndex} (exclusive).
             * @param fromIndex index of the first bit to include
             * @param toIndex index after the last bit to include
             * @return a new {#code BitSet} from a range of this {@code BitSet}
             * @throws IndexOutOfBoundsException if {#code fromIndex} is negative,
             *          or {@code toIndex} is negative, or {@code fromIndex} is
             *          larger than {@code toIndex}
             * @since 1.4
             */
            // @ts-ignore
            public get(fromIndex: number /*int*/, toIndex: number /*int*/): java.util.BitSet
            /**
             * Returns the index of the first bit that is set to {@code true}
             * that occurs on or after the specified starting index. If no such
             * bit exists then {@code -1} is returned.
             * <p>To iterate over the {@code true} bits in a {@code BitSet},
             * use the following loop:
             * <pre> {@code
             * for (int i = bs.nextSetBit(0); i >= 0; i = bs.nextSetBit(i+1)) {
             * // operate on index i here
             * if (i == Integer.MAX_VALUE) {
             * break; // or (i+1) would overflow
             * }
             * }}</pre>
             * @param fromIndex the index to start checking from (inclusive)
             * @return the index of the next set bit, or {#code -1} if there
             *          is no such bit
             * @throws IndexOutOfBoundsException if the specified index is negative
             * @since 1.4
             */
            // @ts-ignore
            public nextSetBit(fromIndex: number /*int*/): number /*int*/
            /**
             * Returns the index of the first bit that is set to {@code false}
             * that occurs on or after the specified starting index.
             * @param fromIndex the index to start checking from (inclusive)
             * @return the index of the next clear bit
             * @throws IndexOutOfBoundsException if the specified index is negative
             * @since 1.4
             */
            // @ts-ignore
            public nextClearBit(fromIndex: number /*int*/): number /*int*/
            /**
             * Returns the index of the nearest bit that is set to {@code true}
             * that occurs on or before the specified starting index.
             * If no such bit exists, or if {@code -1} is given as the
             * starting index, then {@code -1} is returned.
             * <p>To iterate over the {@code true} bits in a {@code BitSet},
             * use the following loop:
             * <pre> {@code
             * for (int i = bs.length(); (i = bs.previousSetBit(i-1)) >= 0; ) {
             * // operate on index i here
             * }}</pre>
             * @param fromIndex the index to start checking from (inclusive)
             * @return the index of the previous set bit, or {#code -1} if there
             *          is no such bit
             * @throws IndexOutOfBoundsException if the specified index is less
             *          than {#code -1}
             * @since 1.7
             */
            // @ts-ignore
            public previousSetBit(fromIndex: number /*int*/): number /*int*/
            /**
             * Returns the index of the nearest bit that is set to {@code false}
             * that occurs on or before the specified starting index.
             * If no such bit exists, or if {@code -1} is given as the
             * starting index, then {@code -1} is returned.
             * @param fromIndex the index to start checking from (inclusive)
             * @return the index of the previous clear bit, or {#code -1} if there
             *          is no such bit
             * @throws IndexOutOfBoundsException if the specified index is less
             *          than {#code -1}
             * @since 1.7
             */
            // @ts-ignore
            public previousClearBit(fromIndex: number /*int*/): number /*int*/
            /**
             * Returns the "logical size" of this {@code BitSet}: the index of
             * the highest set bit in the {@code BitSet} plus one. Returns zero
             * if the {@code BitSet} contains no set bits.
             * @return the logical size of this {#code BitSet}
             * @since 1.2
             */
            // @ts-ignore
            public length(): number /*int*/
            /**
             * Returns true if this {@code BitSet} contains no bits that are set
             * to {@code true}.
             * @return boolean indicating whether this {#code BitSet} is empty
             * @since 1.4
             */
            // @ts-ignore
            public isEmpty(): boolean
            /**
             * Returns true if the specified {@code BitSet} has any bits set to
             * {@code true} that are also set to {@code true} in this {@code BitSet}.
             * @param set {#code BitSet} to intersect with
             * @return boolean indicating whether this {#code BitSet} intersects
             *          the specified {@code BitSet}
             * @since 1.4
             */
            // @ts-ignore
            public intersects(set: java.util.BitSet): boolean
            /**
             * Returns the number of bits set to {@code true} in this {@code BitSet}.
             * @return the number of bits set to {#code true} in this {@code BitSet}
             * @since 1.4
             */
            // @ts-ignore
            public cardinality(): number /*int*/
            /**
             * Performs a logical <b>AND</b> of this target bit set with the
             * argument bit set. This bit set is modified so that each bit in it
             * has the value {@code true} if and only if it both initially
             * had the value {@code true} and the corresponding bit in the
             * bit set argument also had the value {@code true}.
             * @param set a bit set
             */
            // @ts-ignore
            public and(set: java.util.BitSet): void
            /**
             * Performs a logical <b>OR</b> of this bit set with the bit set
             * argument. This bit set is modified so that a bit in it has the
             * value {@code true} if and only if it either already had the
             * value {@code true} or the corresponding bit in the bit set
             * argument has the value {@code true}.
             * @param set a bit set
             */
            // @ts-ignore
            public or(set: java.util.BitSet): void
            /**
             * Performs a logical <b>XOR</b> of this bit set with the bit set
             * argument. This bit set is modified so that a bit in it has the
             * value {@code true} if and only if one of the following
             * statements holds:
             * <ul>
             * <li>The bit initially has the value {@code true}, and the
             * corresponding bit in the argument has the value {@code false}.
             * <li>The bit initially has the value {@code false}, and the
             * corresponding bit in the argument has the value {@code true}.
             * </ul>
             * @param set a bit set
             */
            // @ts-ignore
            public xor(set: java.util.BitSet): void
            /**
             * Clears all of the bits in this {@code BitSet} whose corresponding
             * bit is set in the specified {@code BitSet}.
             * @param set the {#code BitSet} with which to mask this
             *          {@code BitSet}
             * @since 1.2
             */
            // @ts-ignore
            public andNot(set: java.util.BitSet): void
            /**
             * Returns the hash code value for this bit set. The hash code depends
             * only on which bits are set within this {@code BitSet}.
             * <p>The hash code is defined to be the result of the following
             * calculation:
             * <pre> {@code
             * public int hashCode() {
             * long h = 1234;
             * long[] words = toLongArray();
             * for (int i = words.length; --i >= 0; )
             * h ^= words[i] * (i + 1);
             * return (int)((h >> 32) ^ h);
             * }}</pre>
             * Note that the hash code changes if the set of bits is altered.
             * @return the hash code value for this bit set
             */
            // @ts-ignore
            public hashCode(): number /*int*/
            /**
             * Returns the number of bits of space actually in use by this
             * {@code BitSet} to represent bit values.
             * The maximum element in the set is the size - 1st element.
             * @return the number of bits currently in this bit set
             */
            // @ts-ignore
            public size(): number /*int*/
            /**
             * Compares this object against the specified object.
             * The result is {@code true} if and only if the argument is
             * not {@code null} and is a {@code Bitset} object that has
             * exactly the same set of bits set to {@code true} as this bit
             * set. That is, for every nonnegative {@code int} index {@code k},
             * <pre>((BitSet)obj).get(k) == this.get(k)</pre>
             * must be true. The current sizes of the two bit sets are not compared.
             * @param obj the object to compare with
             * @return {#code true} if the objects are the same;
             *          {@code false} otherwise
             * @see #size()
             */
            // @ts-ignore
            public equals(obj: java.lang.Object | any): boolean
            /**
             * Cloning this {@code BitSet} produces a new {@code BitSet}
             * that is equal to it.
             * The clone of the bit set is another bit set that has exactly the
             * same bits set to {@code true} as this bit set.
             * @return a clone of this bit set
             * @see #size()
             */
            // @ts-ignore
            public clone(): any
            /**
             * Returns a string representation of this bit set. For every index
             * for which this {@code BitSet} contains a bit in the set
             * state, the decimal representation of that index is included in
             * the result. Such indices are listed in order from lowest to
             * highest, separated by ",&nbsp;" (a comma and a space) and
             * surrounded by braces, resulting in the usual mathematical
             * notation for a set of integers.
             * <p>Example:
             * <pre>
             * BitSet drPepper = new BitSet();</pre>
             * Now {@code drPepper.toString()} returns "{@code {}}".
             * <pre>
             * drPepper.set(2);</pre>
             * Now {@code drPepper.toString()} returns "{@code {2}}".
             * <pre>
             * drPepper.set(4);
             * drPepper.set(10);</pre>
             * Now {@code drPepper.toString()} returns "{@code {2, 4, 10}}".
             * @return a string representation of this bit set
             */
            // @ts-ignore
            public toString(): string
            /**
             * Returns a stream of indices for which this {@code BitSet}
             * contains a bit in the set state. The indices are returned
             * in order, from lowest to highest. The size of the stream
             * is the number of bits in the set state, equal to the value
             * returned by the {@link #cardinality()} method.
             * <p>The bit set must remain constant during the execution of the
             * terminal stream operation.  Otherwise, the result of the terminal
             * stream operation is undefined.
             * @return a stream of integers representing set indices
             * @since 1.8
             */
            // @ts-ignore
            public stream(): java.util.stream.IntStream
        }
    }
}
