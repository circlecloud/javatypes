declare namespace org {
    namespace springframework {
        namespace web {
            namespace bind {
                namespace annotation {
                    /**
                     * Annotation for mapping HTTP {@code PUT} requests onto specific handler
                     * methods.
                     * <p>Specifically, {@code @PutMapping} is a <em>composed annotation</em> that
                     * acts as a shortcut for {@code @RequestMapping(method = RequestMethod.PUT)}.
                     * @author Sam Brannen
                     * @since 4.3
                     * @see GetMapping
                     * @see PostMapping
                     * @see DeleteMapping
                     * @see PatchMapping
                     * @see RequestMapping
                     */
                    // @ts-ignore
                    abstract class PutMapping implements java.lang.annotation.Annotation {
                    }
                }
            }
        }
    }
}
