declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace annotation {
                    /**
                     * Annotates a {@link CatalogType} class to specify a set of special catalog
                     * classes which act as the catalog for the annotated type. The annotated class
                     * must extend {@link CatalogType}, and the specified catalog classes should be
                     * queryable or otherwise serve constant instances of the cataloged type.
                     * <p>All Classes mentioned in the CatalogedBy annotation must meet the
                     * following requirements:</p>
                     * <ul>
                     * <li>The values served by catalog classes must remain the same and valid
                     * at all times.</li>
                     * <li>The variables in catalog classes may link to null if the given value is
                     * no longer valid and no appropriate alternative can be found. If no
                     * alternative could be found and if there probably won't be a new one in the
                     * future then the field should be marked as deprecated and should be removed
                     * after a grace period or with the next big release of minecraft, SpongeAPI or
                     * the containing artifact.</li>
                     * <li>It is possible for two or more different variables to link to the same
                     * value. This includes both simple "well known" aliases and features that been
                     * merged together or that were originally very similar and one has been
                     * removed.</li>
                     * <li>It is also possible that one or more values are not listed in the
                     * catalog classes (Especially plugin or mod provided ones).</li>
                     * </ul>
                     * </p>
                     */
                    // @ts-ignore
                    class CatalogedBy implements java.lang.annotation.Annotation {
                    }
                }
            }
        }
    }
}
