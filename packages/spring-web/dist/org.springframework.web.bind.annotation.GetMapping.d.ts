declare namespace org {
    namespace springframework {
        namespace web {
            namespace bind {
                namespace annotation {
                    /**
                     * Annotation for mapping HTTP {@code GET} requests onto specific handler
                     * methods.
                     * <p>Specifically, {@code @GetMapping} is a <em>composed annotation</em> that
                     * acts as a shortcut for {@code @RequestMapping(method = RequestMethod.GET)}.
                     * @author Sam Brannen
                     * @since 4.3
                     * @see PostMapping
                     * @see PutMapping
                     * @see DeleteMapping
                     * @see PatchMapping
                     * @see RequestMapping
                     */
                    // @ts-ignore
                    abstract class GetMapping implements java.lang.annotation.Annotation {
                    }
                }
            }
        }
    }
}
