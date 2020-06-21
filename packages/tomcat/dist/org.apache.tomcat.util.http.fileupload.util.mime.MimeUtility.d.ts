declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace http {
                    namespace fileupload {
                        namespace util {
                            namespace mime {
                                /**
                                 * Utility class to decode MIME texts.
                                 * @since 1.3
                                 */
                                // @ts-ignore
                                class MimeUtility extends java.lang.Object {
                                    /**
                                     * Decode a string of text obtained from a mail header into
                                     * its proper form.  The text generally will consist of a
                                     * string of tokens, some of which may be encoded using
                                     * base64 encoding.
                                     * @param text   The text to decode.
                                     * @return The decoded text string.
                                     * @throws UnsupportedEncodingException if the detected encoding in the input text is not supported.
                                     */
                                    // @ts-ignore
                                    public static decodeText(text: java.lang.String | string): string
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
