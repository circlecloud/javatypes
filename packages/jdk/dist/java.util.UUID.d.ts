declare namespace java {
    namespace util {
        /**
         * A class that represents an immutable universally unique identifier (UUID).
         * A UUID represents a 128-bit value.
         * <p> There exist different variants of these global identifiers.  The methods
         * of this class are for manipulating the Leach-Salz variant, although the
         * constructors allow the creation of any variant of UUID (described below).
         * <p> The layout of a variant 2 (Leach-Salz) UUID is as follows:
         * The most significant long consists of the following unsigned fields:
         * <pre>
         * 0xFFFFFFFF00000000 time_low
         * 0x00000000FFFF0000 time_mid
         * 0x000000000000F000 version
         * 0x0000000000000FFF time_hi
         * </pre>
         * The least significant long consists of the following unsigned fields:
         * <pre>
         * 0xC000000000000000 variant
         * 0x3FFF000000000000 clock_seq
         * 0x0000FFFFFFFFFFFF node
         * </pre>
         * <p> The variant field contains a value which identifies the layout of the
         * {@code UUID}.  The bit layout described above is valid only for a {@code
         * UUID} with a variant value of 2, which indicates the Leach-Salz variant.
         * <p> The version field holds a value that describes the type of this {@code
         * UUID}.  There are four different basic types of UUIDs: time-based, DCE
         * security, name-based, and randomly generated UUIDs.  These types have a
         * version value of 1, 2, 3 and 4, respectively.
         * <p> For more information including algorithms used to create {@code UUID}s,
         * see <a href="http://www.ietf.org/rfc/rfc4122.txt"> <i>RFC&nbsp;4122: A
         * Universally Unique IDentifier (UUID) URN Namespace</i></a>, section 4.2
         * &quot;Algorithms for Creating a Time-Based UUID&quot;.
         * @since 1.5
         */
        // @ts-ignore
        class UUID extends java.lang.Object implements java.io.Serializable, java.lang.Comparable<java.util.UUID> {
            /**
             * Constructs a new {@code UUID} using the specified data.  {@code
             * mostSigBits} is used for the most significant 64 bits of the {@code
             * UUID} and {@code leastSigBits} becomes the least significant 64 bits of
             * the {@code UUID}.
             * @param mostSigBits
             *          The most significant bits of the {#code UUID}
             * @param leastSigBits
             *          The least significant bits of the {#code UUID}
             */
            // @ts-ignore
            constructor(mostSigBits: number /*long*/, leastSigBits: number /*long*/)
            /**
             * Static factory to retrieve a type 4 (pseudo randomly generated) UUID.
             * The {@code UUID} is generated using a cryptographically strong pseudo
             * random number generator.
             * @return A randomly generated {#code UUID}
             */
            // @ts-ignore
            public static randomUUID(): java.util.UUID
            /**
             * Static factory to retrieve a type 3 (name based) {@code UUID} based on
             * the specified byte array.
             * @param name
             *          A byte array to be used to construct a {#code UUID}
             * @return A {#code UUID} generated from the specified array
             */
            // @ts-ignore
            public static nameUUIDFromBytes(name: number /*byte*/[]): java.util.UUID
            /**
             * Creates a {@code UUID} from the string standard representation as
             * described in the {@link #toString} method.
             * @param name
             *          A string that specifies a {#code UUID}
             * @return A {#code UUID} with the specified value
             * @throws IllegalArgumentException
             *           If name does not conform to the string representation as
             *           described in {#link #toString}
             */
            // @ts-ignore
            public static fromString(name: java.lang.String | string): java.util.UUID
            /**
             * Returns the least significant 64 bits of this UUID's 128 bit value.
             * @return The least significant 64 bits of this UUID's 128 bit value
             */
            // @ts-ignore
            public getLeastSignificantBits(): number /*long*/
            /**
             * Returns the most significant 64 bits of this UUID's 128 bit value.
             * @return The most significant 64 bits of this UUID's 128 bit value
             */
            // @ts-ignore
            public getMostSignificantBits(): number /*long*/
            /**
             * The version number associated with this {@code UUID}.  The version
             * number describes how this {@code UUID} was generated.
             * The version number has the following meaning:
             * <ul>
             * <li>1    Time-based UUID
             * <li>2    DCE security UUID
             * <li>3    Name-based UUID
             * <li>4    Randomly generated UUID
             * </ul>
             * @return The version number of this {#code UUID}
             */
            // @ts-ignore
            public version(): number /*int*/
            /**
             * The variant number associated with this {@code UUID}.  The variant
             * number describes the layout of the {@code UUID}.
             * The variant number has the following meaning:
             * <ul>
             * <li>0    Reserved for NCS backward compatibility
             * <li>2    <a href="http://www.ietf.org/rfc/rfc4122.txt">IETF&nbsp;RFC&nbsp;4122</a>
             * (Leach-Salz), used by this class
             * <li>6    Reserved, Microsoft Corporation backward compatibility
             * <li>7    Reserved for future definition
             * </ul>
             * @return The variant number of this {#code UUID}
             */
            // @ts-ignore
            public variant(): number /*int*/
            /**
             * The timestamp value associated with this UUID.
             * <p> The 60 bit timestamp value is constructed from the time_low,
             * time_mid, and time_hi fields of this {@code UUID}.  The resulting
             * timestamp is measured in 100-nanosecond units since midnight,
             * October 15, 1582 UTC.
             * <p> The timestamp value is only meaningful in a time-based UUID, which
             * has version type 1.  If this {@code UUID} is not a time-based UUID then
             * this method throws UnsupportedOperationException.
             * @throws UnsupportedOperationException
             *          If this UUID is not a version 1 UUID
             * @return The timestamp of this {#code UUID}.
             */
            // @ts-ignore
            public timestamp(): number /*long*/
            /**
             * The clock sequence value associated with this UUID.
             * <p> The 14 bit clock sequence value is constructed from the clock
             * sequence field of this UUID.  The clock sequence field is used to
             * guarantee temporal uniqueness in a time-based UUID.
             * <p> The {@code clockSequence} value is only meaningful in a time-based
             * UUID, which has version type 1.  If this UUID is not a time-based UUID
             * then this method throws UnsupportedOperationException.
             * @return The clock sequence of this {#code UUID}
             * @throws UnsupportedOperationException
             *           If this UUID is not a version 1 UUID
             */
            // @ts-ignore
            public clockSequence(): number /*int*/
            /**
             * The node value associated with this UUID.
             * <p> The 48 bit node value is constructed from the node field of this
             * UUID.  This field is intended to hold the IEEE 802 address of the machine
             * that generated this UUID to guarantee spatial uniqueness.
             * <p> The node value is only meaningful in a time-based UUID, which has
             * version type 1.  If this UUID is not a time-based UUID then this method
             * throws UnsupportedOperationException.
             * @return The node value of this {#code UUID}
             * @throws UnsupportedOperationException
             *           If this UUID is not a version 1 UUID
             */
            // @ts-ignore
            public node(): number /*long*/
            /**
             * Returns a {@code String} object representing this {@code UUID}.
             * <p> The UUID string representation is as described by this BNF:
             * <blockquote><pre>
             * {@code
             * UUID                   = <time_low> "-" <time_mid> "-"
             * <time_high_and_version> "-"
             * <variant_and_sequence> "-"
             * <node>
             * time_low               = 4*<hexOctet>
             * time_mid               = 2*<hexOctet>
             * time_high_and_version  = 2*<hexOctet>
             * variant_and_sequence   = 2*<hexOctet>
             * node                   = 6*<hexOctet>
             * hexOctet               = <hexDigit><hexDigit>
             * hexDigit               =
             * "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
             * | "a" | "b" | "c" | "d" | "e" | "f"
             * | "A" | "B" | "C" | "D" | "E" | "F"
             * }</pre></blockquote>
             * @return A string representation of this {#code UUID}
             */
            // @ts-ignore
            public toString(): string
            /**
             * Returns a hash code for this {@code UUID}.
             * @return A hash code value for this {#code UUID}
             */
            // @ts-ignore
            public hashCode(): number /*int*/
            /**
             * Compares this object to the specified object.  The result is {@code
             * true} if and only if the argument is not {@code null}, is a {@code UUID}
             * object, has the same variant, and contains the same value, bit for bit,
             * as this {@code UUID}.
             * @param obj
             *          The object to be compared
             * @return {#code true} if the objects are the same; {@code false}
             *           otherwise
             */
            // @ts-ignore
            public equals(obj: java.lang.Object | any): boolean
            /**
             * Compares this UUID with the specified UUID.
             * <p> The first of two UUIDs is greater than the second if the most
             * significant field in which the UUIDs differ is greater for the first
             * UUID.
             * @param val
             *          {#code UUID} to which this {@code UUID} is to be compared
             * @return -1, 0 or 1 as this {#code UUID} is less than, equal to, or
             *           greater than {@code val}
             */
            // @ts-ignore
            public compareTo(val: java.util.UUID): number /*int*/
        }
    }
}
