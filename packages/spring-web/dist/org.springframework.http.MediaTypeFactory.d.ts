declare namespace org {
    namespace springframework {
        namespace http {
            /**
             * A factory delegate for resolving {@link MediaType} objects
             * from {@link Resource} handles or filenames.
             * @author Juergen Hoeller
             * @author Arjen Poutsma
             * @since 5.0
             */
            // @ts-ignore
            class MediaTypeFactory extends java.lang.Object {
                /**
                 * Determine a media type for the given resource, if possible.
                 * @param resource the resource to introspect
                 * @return the corresponding media type, or {#code null} if none found
                 */
                // @ts-ignore
                public static getMediaType(resource: Resource): java.util.Optional<org.springframework.http.MediaType>
                /**
                 * Determine the media types for the given file name, if possible.
                 * @param filename the file name plus extension
                 * @return the corresponding media types, or an empty list if none found
                 */
                // @ts-ignore
                public static getMediaTypes(filename: java.lang.String | string): Array<org.springframework.http.MediaType>
            }
        }
    }
}
