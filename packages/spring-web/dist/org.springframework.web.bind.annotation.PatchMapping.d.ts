declare namespace org {
    namespace springframework {
        namespace web {
            namespace bind {
                namespace annotation {
                    /**
                     * Annotation for mapping HTTP {@code PATCH} requests onto specific handler
                     * methods.
                     * <p>Specifically, {@code @PatchMapping} is a <em>composed annotation</em> that
                     * acts as a shortcut for {@code @RequestMapping(method = RequestMethod.PATCH)}.
                     * @author Sam Brannen
                     * @since 4.3
                     * @see GetMapping
                     * @see PostMapping
                     * @see PutMapping
                     * @see DeleteMapping
                     * @see RequestMapping
                     */
                    // @ts-ignore
                    abstract class PatchMapping implements java.lang.annotation.Annotation {
                    }
                }
            }
        }
    }
}
