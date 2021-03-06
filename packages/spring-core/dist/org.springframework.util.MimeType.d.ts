declare namespace org {
    namespace springframework {
        namespace util {
            /**
             * Represents a MIME Type, as originally defined in RFC 2046 and subsequently
             * used in other Internet protocols including HTTP.
             * <p>This class, however, does not contain support for the q-parameters used
             * in HTTP content negotiation. Those can be found in the subclass
             * {@code org.springframework.http.MediaType} in the {@code spring-web} module.
             * <p>Consists of a {@linkplain #getType() type} and a {@linkplain #getSubtype() subtype}.
             * Also has functionality to parse MIME Type values from a {@code String} using
             * {@link #valueOf(String)}. For more parsing options see {@link MimeTypeUtils}.
             * @author Arjen Poutsma
             * @author Juergen Hoeller
             * @author Rossen Stoyanchev
             * @author Sam Brannen
             * @since 4.0
             * @see MimeTypeUtils
             */
            // @ts-ignore
            class MimeType extends java.lang.Object implements java.lang.Comparable<org.springframework.util.MimeType>, java.io.Serializable {
                /**
                 * Create a new {@code MimeType} for the given primary type.
                 * <p>The {@linkplain #getSubtype() subtype} is set to <code>"&#42;"</code>,
                 * and the parameters are empty.
                 * @param type the primary type
                 * @throws IllegalArgumentException if any of the parameters contains illegal characters
                 */
                // @ts-ignore
                constructor(type: java.lang.String | string)
                /**
                 * Create a new {@code MimeType} for the given primary type and subtype.
                 * <p>The parameters are empty.
                 * @param type the primary type
                 * @param subtype the subtype
                 * @throws IllegalArgumentException if any of the parameters contains illegal characters
                 */
                // @ts-ignore
                constructor(type: java.lang.String | string, subtype: java.lang.String | string)
                /**
                 * Create a new {@code MimeType} for the given type, subtype, and character set.
                 * @param type the primary type
                 * @param subtype the subtype
                 * @param charset the character set
                 * @throws IllegalArgumentException if any of the parameters contains illegal characters
                 */
                // @ts-ignore
                constructor(type: java.lang.String | string, subtype: java.lang.String | string, charset: java.nio.charset.Charset)
                /**
                 * Copy-constructor that copies the type, subtype, parameters of the given {@code MimeType},
                 * and allows to set the specified character set.
                 * @param other the other MimeType
                 * @param charset the character set
                 * @throws IllegalArgumentException if any of the parameters contains illegal characters
                 * @since 4.3
                 */
                // @ts-ignore
                constructor(other: org.springframework.util.MimeType, charset: java.nio.charset.Charset)
                /**
                 * Copy-constructor that copies the type and subtype of the given {@code MimeType},
                 * and allows for different parameter.
                 * @param other the other MimeType
                 * @param parameters the parameters (may be {#code null})
                 * @throws IllegalArgumentException if any of the parameters contains illegal characters
                 */
                // @ts-ignore
                constructor(other: org.springframework.util.MimeType, parameters: java.util.Map<java.lang.String | string, java.lang.String | string>)
                /**
                 * Create a new {@code MimeType} for the given type, subtype, and parameters.
                 * @param type the primary type
                 * @param subtype the subtype
                 * @param parameters the parameters (may be {#code null})
                 * @throws IllegalArgumentException if any of the parameters contains illegal characters
                 */
                // @ts-ignore
                constructor(type: java.lang.String | string, subtype: java.lang.String | string, parameters: java.util.Map<java.lang.String | string, java.lang.String | string>)
                // @ts-ignore
                static readonly WILDCARD_TYPE: java.lang.String | string
                // @ts-ignore
                checkParameters(attribute: java.lang.String | string, value: java.lang.String | string): void
                // @ts-ignore
                unquote(s: java.lang.String | string): string
                /**
                 * Indicates whether the {@linkplain #getType() type} is the wildcard character
                 * <code>&#42;</code> or not.
                 */
                // @ts-ignore
                public isWildcardType(): boolean
                /**
                 * Indicates whether the {@linkplain #getSubtype() subtype} is the wildcard
                 * character <code>&#42;</code> or the wildcard character followed by a suffix
                 * (e.g. <code>&#42;+xml</code>).
                 * @return whether the subtype is a wildcard
                 */
                // @ts-ignore
                public isWildcardSubtype(): boolean
                /**
                 * Indicates whether this MIME Type is concrete, i.e. whether neither the type
                 * nor the subtype is a wildcard character <code>&#42;</code>.
                 * @return whether this MIME Type is concrete
                 */
                // @ts-ignore
                public isConcrete(): boolean
                /**
                 * Return the primary type.
                 */
                // @ts-ignore
                public getType(): string
                /**
                 * Return the subtype.
                 */
                // @ts-ignore
                public getSubtype(): string
                /**
                 * Return the character set, as indicated by a {@code charset} parameter, if any.
                 * @return the character set, or {#code null} if not available
                 * @since 4.3
                 */
                // @ts-ignore
                public getCharset(): java.nio.charset.Charset
                /**
                 * Return a generic parameter value, given a parameter name.
                 * @param name the parameter name
                 * @return the parameter value, or {#code null} if not present
                 */
                // @ts-ignore
                public getParameter(name: java.lang.String | string): string
                /**
                 * Return all generic parameter values.
                 * @return a read-only map (possibly empty, never {#code null})
                 */
                // @ts-ignore
                public getParameters(): java.util.Map<java.lang.String | string, java.lang.String | string>
                /**
                 * Indicate whether this MIME Type includes the given MIME Type.
                 * <p>For instance, {@code text/*} includes {@code text/plain} and {@code text/html},
                 * and {@code application/*+xml} includes {@code application/soap+xml}, etc.
                 * This method is <b>not</b> symmetric.
                 * @param other the reference MIME Type with which to compare
                 * @return {#code true} if this MIME Type includes the given MIME Type;
                 *  {@code false} otherwise
                 */
                // @ts-ignore
                public includes(other: org.springframework.util.MimeType): boolean
                /**
                 * Indicate whether this MIME Type is compatible with the given MIME Type.
                 * <p>For instance, {@code text/*} is compatible with {@code text/plain},
                 * {@code text/html}, and vice versa. In effect, this method is similar to
                 * {@link #includes}, except that it <b>is</b> symmetric.
                 * @param other the reference MIME Type with which to compare
                 * @return {#code true} if this MIME Type is compatible with the given MIME Type;
                 *  {@code false} otherwise
                 */
                // @ts-ignore
                public isCompatibleWith(other: org.springframework.util.MimeType): boolean
                /**
                 * Similar to {@link #equals(Object)} but based on the type and subtype
                 * only, i.e. ignoring parameters.
                 * @param other the other mime type to compare to
                 * @return whether the two mime types have the same type and subtype
                 * @since 5.1.4
                 */
                // @ts-ignore
                public equalsTypeAndSubtype(other: org.springframework.util.MimeType): boolean
                /**
                 * Unlike {@link Collection#contains(Object)} which relies on
                 * {@link MimeType#equals(Object)}, this method only checks the type and the
                 * subtype, but otherwise ignores parameters.
                 * @param mimeTypes the list of mime types to perform the check against
                 * @return whether the list contains the given mime type
                 * @since 5.1.4
                 */
                // @ts-ignore
                public isPresentIn(mimeTypes: java.util.Collection<any> | Array<any>): boolean
                // @ts-ignore
                public equals(other: java.lang.Object | any): boolean
                // @ts-ignore
                public hashCode(): number /*int*/
                // @ts-ignore
                public toString(): string
                // @ts-ignore
                appendTo(builder: java.lang.StringBuilder): void
                /**
                 * Compares this MIME Type to another alphabetically.
                 * @param other the MIME Type to compare to
                 * @see MimeTypeUtils#sortBySpecificity(List)
                 */
                // @ts-ignore
                public compareTo(other: org.springframework.util.MimeType): number /*int*/
                /**
                 * Parse the given String value into a {@code MimeType} object,
                 * with this method name following the 'valueOf' naming convention
                 * (as supported by {@link org.springframework.core.convert.ConversionService}.
                 * @see MimeTypeUtils#parseMimeType(String)
                 */
                // @ts-ignore
                public static valueOf(value: java.lang.String | string): org.springframework.util.MimeType
            }
        }
    }
}
