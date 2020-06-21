declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace http {
                    /**
                     * Memory-efficient repository for Mime Headers. When the object is recycled, it
                     * will keep the allocated headers[] and all the MimeHeaderField - no GC is generated.
                     * For input headers it is possible to use the MessageByte for Fields - so no GC
                     * will be generated.
                     * The only garbage is generated when using the String for header names/values -
                     * this can't be avoided when the servlet calls header methods, but is easy
                     * to avoid inside tomcat. The goal is to use _only_ MessageByte-based Fields,
                     * and reduce to 0 the memory overhead of tomcat.
                     * TODO:
                     * XXX one-buffer parsing - for http ( other protocols don't need that )
                     * XXX remove unused methods
                     * XXX External enumerations, with 0 GC.
                     * XXX use HeaderName ID
                     * @author dac#eng.sun.com
                     * @author James Todd [gonzo#eng.sun.com]
                     * @author Costin Manolache
                     * @author kevin seguin
                     */
                    // @ts-ignore
                    class MimeHeaders extends java.lang.Object {
                        /**
                         * Creates a new MimeHeaders object using a default buffer size.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Initial size - should be == average number of headers per request
                         * XXX  make it configurable ( fine-tuning of web-apps )
                         */
                        // @ts-ignore
                        public static readonly DEFAULT_HEADER_SIZE: number /*int*/
                        /**
                         * Set limit on the number of header fields.
                         * @param limit The new limit
                         */
                        // @ts-ignore
                        public setLimit(limit: number /*int*/): void
                        /**
                         * Clears all header fields.
                         */
                        // @ts-ignore
                        public recycle(): void
                        /**
                         * Clears all header fields.
                         */
                        // @ts-ignore
                        public clear(): void
                        /**
                         * EXPENSIVE!!!  only for debugging.
                         */
                        // @ts-ignore
                        public toString(): string
                        // @ts-ignore
                        public duplicate(source: org.apache.tomcat.util.http.MimeHeaders): void
                        /**
                         * @return the current number of header fields.
                         */
                        // @ts-ignore
                        public size(): number /*int*/
                        /**
                         * @param n The header index
                         * @return the Nth header name, or null if there is no such header.
                         *  This may be used to iterate through all header fields.
                         */
                        // @ts-ignore
                        public getName(n: number /*int*/): org.apache.tomcat.util.buf.MessageBytes
                        /**
                         * @param n The header index
                         * @return the Nth header value, or null if there is no such header.
                         *  This may be used to iterate through all header fields.
                         */
                        // @ts-ignore
                        public getValue(n: number /*int*/): org.apache.tomcat.util.buf.MessageBytes
                        /**
                         * Find the index of a header with the given name.
                         * @param name The header name
                         * @param starting Index on which to start looking
                         * @return the header index
                         */
                        // @ts-ignore
                        public findHeader(name: java.lang.String | string, starting: number /*int*/): number /*int*/
                        /**
                         * Returns an enumeration of strings representing the header field names.
                         * Field names may appear multiple times in this enumeration, indicating
                         * that multiple fields with that name exist in this header.
                         * @return the enumeration
                         */
                        // @ts-ignore
                        public names(): java.util.Enumeration<java.lang.String | string>
                        // @ts-ignore
                        public values(name: java.lang.String | string): java.util.Enumeration<java.lang.String | string>
                        /**
                         * Create a new named header , return the MessageBytes
                         * container for the new value
                         * @param name The header name
                         * @return the message bytes container for the value
                         */
                        // @ts-ignore
                        public addValue(name: java.lang.String | string): org.apache.tomcat.util.buf.MessageBytes
                        /**
                         * Create a new named header using un-translated byte[].
                         * The conversion to chars can be delayed until
                         * encoding is known.
                         * @param b The header name bytes
                         * @param startN Offset
                         * @param len Length
                         * @return the message bytes container for the value
                         */
                        // @ts-ignore
                        public addValue(b: number /*byte*/[], startN: number /*int*/, len: number /*int*/): org.apache.tomcat.util.buf.MessageBytes
                        /**
                         * Allow "set" operations, which removes all current values
                         * for this header.
                         * @param name The header name
                         * @return the message bytes container for the value
                         */
                        // @ts-ignore
                        public setValue(name: java.lang.String | string): org.apache.tomcat.util.buf.MessageBytes
                        /**
                         * Finds and returns a header field with the given name.  If no such
                         * field exists, null is returned.  If more than one such field is
                         * in the header, an arbitrary one is returned.
                         * @param name The header name
                         * @return the value
                         */
                        // @ts-ignore
                        public getValue(name: java.lang.String | string): org.apache.tomcat.util.buf.MessageBytes
                        /**
                         * Finds and returns a unique header field with the given name. If no such
                         * field exists, null is returned. If the specified header field is not
                         * unique then an {@link IllegalArgumentException} is thrown.
                         * @param name The header name
                         * @return the value if unique
                         * @throws IllegalArgumentException if the header has multiple values
                         */
                        // @ts-ignore
                        public getUniqueValue(name: java.lang.String | string): org.apache.tomcat.util.buf.MessageBytes
                        // @ts-ignore
                        public getHeader(name: java.lang.String | string): string
                        /**
                         * Removes a header field with the specified name.  Does nothing
                         * if such a field could not be found.
                         * @param name the name of the header field to be removed
                         */
                        // @ts-ignore
                        public removeHeader(name: java.lang.String | string): void
                    }
                }
            }
        }
    }
}
