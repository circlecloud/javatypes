declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace plugin {
                /**
                 * An annotation used to describe and mark a Sponge plugin.
                 */
                // @ts-ignore
                abstract class Plugin implements java.lang.annotation.Annotation {
                    /**
                     * The pattern plugin IDs must match. Plugin IDs must be lower case, and
                     * start with an alphabetic character. It may only contain alphanumeric
                     * characters, dashes or underscores. It cannot be longer than
                     * 64 characters.
                     */
                    // @ts-ignore
                    readonly ID_PATTERN: java.util.regex.Pattern
                }
            }
        }
    }
}
