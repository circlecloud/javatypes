declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace permission {
                    /**
                     * Represents a reference to a given subject.
                     * <p>SubjectReferences should be used when a subject needs to be represented,
                     * but the backing Subject is not needed.</p>
                     * <p>SubjectReferences are unique to a given PermissionService, and will not
                     * resolve to the correct service if the provider changes.</p>
                     * <p>Note that implementations of this interface should be capable of
                     * resolving the reference to a real subject.</p>
                     * <p>Instances can be obtained using
                     * {@link PermissionService#newSubjectReference(String, String)},
                     * {@link SubjectCollection#newSubjectReference(String)} or
                     * {@link Subject#asSubjectReference()}.</p>
                     */
                    // @ts-ignore
                    interface SubjectReference {
                        /**
                         * Gets the identifier of the collection containing the subject
                         * being referenced.
                         * @return The identifier of the collection holding this subject
                         */
                        // @ts-ignore
                        getCollectionIdentifier(): string
                        /**
                         * Gets the identifier of the subject.
                         * @return The subject identifier
                         */
                        // @ts-ignore
                        getSubjectIdentifier(): string
                        /**
                         * Resolves and returns the Subject being referenced.
                         * <p>The returned future will complete exceptionally if the subject
                         * collection with the given identifier cannot be loaded.</p>
                         * @return The subject being referenced by this instance.
                         */
                        // @ts-ignore
                        resolve(): java.util.concurrent.CompletableFuture<org.spongepowered.api.service.permission.Subject>
                    }
                }
            }
        }
    }
}
