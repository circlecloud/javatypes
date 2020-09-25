declare namespace org {
    namespace springframework {
        namespace web {
            namespace util {
                namespace DefaultUriBuilderFactory {
                    /**
                     * Enum to represent multiple URI encoding strategies.
                     * @see #setEncodingMode
                     */
                    // @ts-ignore
                    class EncodingMode extends java.lang.Enum<org.springframework.web.util.DefaultUriBuilderFactory.EncodingMode> {
                        /**
                         * Pre-encode the URI template first, then strictly encode URI variables
                         * when expanded, with the following rules:
                         * <ul>
                         * <li>For the URI template replace <em>only</em> non-ASCII and illegal
                         * (within a given URI component type) characters with escaped octets.
                         * <li>For URI variables do the same and also replace characters with
                         * reserved meaning.
                         * </ul>
                         * <p>For most cases, this mode is most likely to give the expected
                         * result because in treats URI variables as opaque data to be fully
                         * encoded, while {@link #URI_COMPONENT} by comparison is useful only
                         * if intentionally expanding URI variables with reserved characters.
                         * @since 5.0.8
                         * @see UriComponentsBuilder#encode()
                         */
                        // @ts-ignore
                        public static readonly TEMPLATE_AND_VALUES: org.springframework.web.util.DefaultUriBuilderFactory.EncodingMode
                        /**
                         * Does not encode the URI template and instead applies strict encoding
                         * to URI variables via {@link UriUtils#encodeUriVariables} prior to
                         * expanding them into the template.
                         * @see UriUtils#encodeUriVariables(Object...)
                         * @see UriUtils#encodeUriVariables(Map)
                         */
                        // @ts-ignore
                        public static readonly VALUES_ONLY: org.springframework.web.util.DefaultUriBuilderFactory.EncodingMode
                        /**
                         * Expand URI variables first, and then encode the resulting URI
                         * component values, replacing <em>only</em> non-ASCII and illegal
                         * (within a given URI component type) characters, but not characters
                         * with reserved meaning.
                         * @see UriComponents#encode()
                         */
                        // @ts-ignore
                        public static readonly URI_COMPONENT: org.springframework.web.util.DefaultUriBuilderFactory.EncodingMode
                        /**
                         * No encoding should be applied.
                         */
                        // @ts-ignore
                        public static readonly NONE: org.springframework.web.util.DefaultUriBuilderFactory.EncodingMode
                        // @ts-ignore
                        public static values(): org.springframework.web.util.DefaultUriBuilderFactory.EncodingMode[]
                        // @ts-ignore
                        public static valueOf(name: java.lang.String | string): org.springframework.web.util.DefaultUriBuilderFactory.EncodingMode
                    }
                }
            }
        }
    }
}
