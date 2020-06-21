declare namespace org {
    namespace springframework {
        namespace util {
            namespace MimeType {
                /**
                 * Comparator to sort {@link MimeType MimeTypes} in order of specificity.
                 * @param <T> the type of mime types that may be compared by this comparator
                 */
                // @ts-ignore
                class SpecificityComparator<T extends org.springframework.util.MimeType> extends java.lang.Object implements java.util.Comparator<T> {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public compare(mimeType1: T, mimeType2: T): number /*int*/
                    // @ts-ignore
                    compareParameters(mimeType1: T, mimeType2: T): number /*int*/
                }
            }
        }
    }
}
