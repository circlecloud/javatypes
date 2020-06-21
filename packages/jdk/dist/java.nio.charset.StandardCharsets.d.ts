declare namespace java {
    namespace nio {
        namespace charset {
            /**
             * Constant definitions for the standard {@link Charset Charsets}. These
             * charsets are guaranteed to be available on every implementation of the Java
             * platform.
             * @see <a href="Charset#standard">Standard Charsets</a>
             * @since 1.7
             */
            // @ts-ignore
            class StandardCharsets extends java.lang.Object {
                /**
                 * Seven-bit ASCII, a.k.a. ISO646-US, a.k.a. the Basic Latin block of the
                 * Unicode character set
                 */
                // @ts-ignore
                public static readonly US_ASCII: java.nio.charset.Charset
                /**
                 * ISO Latin Alphabet No. 1, a.k.a. ISO-LATIN-1
                 */
                // @ts-ignore
                public static readonly ISO_8859_1: java.nio.charset.Charset
                /**
                 * Eight-bit UCS Transformation Format
                 */
                // @ts-ignore
                public static readonly UTF_8: java.nio.charset.Charset
                /**
                 * Sixteen-bit UCS Transformation Format, big-endian byte order
                 */
                // @ts-ignore
                public static readonly UTF_16BE: java.nio.charset.Charset
                /**
                 * Sixteen-bit UCS Transformation Format, little-endian byte order
                 */
                // @ts-ignore
                public static readonly UTF_16LE: java.nio.charset.Charset
                /**
                 * Sixteen-bit UCS Transformation Format, byte order identified by an
                 * optional byte-order mark
                 */
                // @ts-ignore
                public static readonly UTF_16: java.nio.charset.Charset
            }
        }
    }
}
