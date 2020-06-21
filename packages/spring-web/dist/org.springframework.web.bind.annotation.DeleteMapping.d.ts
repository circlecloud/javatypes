declare namespace org {
    namespace springframework {
        namespace web {
            namespace bind {
                namespace annotation {
                    /**
                     * Annotation for mapping HTTP {@code DELETE} requests onto specific handler
                     * methods.
                     * <p>Specifically, {@code @DeleteMapping} is a <em>composed annotation</em> that
                     * acts as a shortcut for {@code @RequestMapping(method = RequestMethod.DELETE)}.
                     * @author Sam Brannen
                     * @since 4.3
                     * @see GetMapping
                     * @see PostMapping
                     * @see PutMapping
                     * @see PatchMapping
                     * @see RequestMapping
                     */
                    // @ts-ignore
                    abstract class DeleteMapping implements java.lang.annotation.Annotation {
                    }
                }
            }
        }
    }
}
