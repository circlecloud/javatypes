declare namespace org {
    namespace springframework {
        namespace http {
            /**
             * Represents an HTTP (byte) range for use with the HTTP {@code "Range"} header.
             * @author Arjen Poutsma
             * @author Juergen Hoeller
             * @since 4.2
             * @see <a href="https://tools.ietf.org/html/rfc7233">HTTP/1.1: Range Requests</a>
             * @see HttpHeaders#setRange(List)
             * @see HttpHeaders#getRange()
             */
            // @ts-ignore
            class HttpRange extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Turn a {@code Resource} into a {@link ResourceRegion} using the range
                 * information contained in the current {@code HttpRange}.
                 * @param resource the {#code Resource} to select the region from
                 * @return the selected region of the given {#code Resource}
                 * @since 4.3
                 */
                // @ts-ignore
                toResourceRegion(resource: Resource): ResourceRegion
                /**
                 * Return the start of the range given the total length of a representation.
                 * @param length the length of the representation
                 * @return the start of this range for the representation
                 */
                // @ts-ignore
                abstract getRangeStart(length: number /*long*/): long
                /**
                 * Return the end of the range (inclusive) given the total length of a representation.
                 * @param length the length of the representation
                 * @return the end of the range for the representation
                 */
                // @ts-ignore
                abstract getRangeEnd(length: number /*long*/): long
                /**
                 * Create an {@code HttpRange} from the given position to the end.
                 * @param firstBytePos the first byte position
                 * @return a byte range that ranges from {#code firstPos} till the end
                 * @see <a href="https://tools.ietf.org/html/rfc7233#section-2.1">Byte Ranges</a>
                 */
                // @ts-ignore
                createByteRange(firstBytePos: number /*long*/): org.springframework.http.HttpRange
                /**
                 * Create a {@code HttpRange} from the given fist to last position.
                 * @param firstBytePos the first byte position
                 * @param lastBytePos the last byte position
                 * @return a byte range that ranges from {#code firstPos} till {@code lastPos}
                 * @see <a href="https://tools.ietf.org/html/rfc7233#section-2.1">Byte Ranges</a>
                 */
                // @ts-ignore
                createByteRange(firstBytePos: number /*long*/, lastBytePos: number /*long*/): org.springframework.http.HttpRange
                /**
                 * Create an {@code HttpRange} that ranges over the last given number of bytes.
                 * @param suffixLength the number of bytes for the range
                 * @return a byte range that ranges over the last {#code suffixLength} number of bytes
                 * @see <a href="https://tools.ietf.org/html/rfc7233#section-2.1">Byte Ranges</a>
                 */
                // @ts-ignore
                createSuffixRange(suffixLength: number /*long*/): org.springframework.http.HttpRange
                /**
                 * Parse the given, comma-separated string into a list of {@code HttpRange} objects.
                 * <p>This method can be used to parse an {@code Range} header.
                 * @param ranges the string to parse
                 * @return the list of ranges
                 * @throws IllegalArgumentException if the string cannot be parsed
                 *  or if the number of ranges is greater than 100
                 */
                // @ts-ignore
                parseRanges(ranges: string): java.util.List<org.springframework.http.HttpRange>
                /**
                 * Convert each {@code HttpRange} into a {@code ResourceRegion}, selecting the
                 * appropriate segment of the given {@code Resource} using HTTP Range information.
                 * @param ranges the list of ranges
                 * @param resource the resource to select the regions from
                 * @return the list of regions for the given resource
                 * @throws IllegalArgumentException if the sum of all ranges exceeds the resource length
                 * @since 4.3
                 */
                // @ts-ignore
                toResourceRegions(ranges: Array<org.springframework.http.HttpRange>, resource: Resource): java.util.List<ResourceRegion>
                /**
                 * Return a string representation of the given list of {@code HttpRange} objects.
                 * <p>This method can be used to for an {@code Range} header.
                 * @param ranges the ranges to create a string of
                 * @return the string representation
                 */
                // @ts-ignore
                toString(ranges: Array<org.springframework.http.HttpRange>): java.lang.String
            }
        }
    }
}
