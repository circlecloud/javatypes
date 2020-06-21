declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace permission {
                    /**
                     * Represents a provider of permissions data.
                     * <p>This is the interface that a permissions plugin must implement and
                     * register to provide permissions for users on the server. Subject related
                     * method calls on Players and Users are redirected to the active permission
                     * service.</p>
                     * <p>Implementations of PermissionService are expected to be thread-safe.</p>
                     * <p>Distinctions are made throughout the service between data which is
                     * currently available, and data which may exist, but is not currently
                     * loaded.</p>
                     * <p>Methods prefixed with "get" will typically only return data if it is
                     * already loaded into memory. Methods prefixed with "load" however will load
                     * data into memory if necessary.</p>
                     * <p>{@link CompletableFuture}s are used throughout the service in situations
                     * where it is possible that calls may take a considerable time to execute.
                     * {@link CompletableFuture#thenAcceptAsync(Consumer, Executor)} can be used to
                     * run a callback once the method has completed. Alternatively,
                     * {@link CompletableFuture#join()} can be used, but care should be taken to
                     * avoid blocking the server thread.</p>
                     */
                    // @ts-ignore
                    interface PermissionService extends org.spongepowered.api.service.context.ContextualService<org.spongepowered.api.service.permission.Subject> {
                        /**
                         * The standard identifier for the collection which stores users.
                         */
                        // @ts-ignore
                        readonly SUBJECTS_USER: java.lang.String | string
                        /**
                         * The standard identifier for the collection which stores groups.
                         */
                        // @ts-ignore
                        readonly SUBJECTS_GROUP: java.lang.String | string
                        /**
                         * The standard identifier for the collection which stores "system"
                         * subjects.
                         * <p>These are subjects which store data for objects within the
                         * server. For example, the server "console".</p>
                         */
                        // @ts-ignore
                        readonly SUBJECTS_SYSTEM: java.lang.String | string
                        /**
                         * The standard identifier for the collection which stores default subjects.
                         * <p>By convention, the {@link #getDefaults()} subject is stored in this
                         * collection under the name "default", and each {@link SubjectCollection}s
                         * {@link SubjectCollection#getDefaults()} subject is stored in this
                         * collection with the same identifier as the parent collection.</p>
                         */
                        // @ts-ignore
                        readonly SUBJECTS_DEFAULT: java.lang.String | string
                        /**
                         * The standard identifier for the collection which stores command block
                         * subjects.
                         */
                        // @ts-ignore
                        readonly SUBJECTS_COMMAND_BLOCK: java.lang.String | string
                        /**
                         * The standard identifier for the collection which stores role templates.
                         * <p>Role templates are registered alongside {@link PermissionDescription}s,
                         * via {@link PermissionDescription.Builder#assign(String, boolean)}.</p>
                         */
                        // @ts-ignore
                        readonly SUBJECTS_ROLE_TEMPLATE: java.lang.String | string
                        /**
                         * Returns the subject collection which holds users.
                         * <p>User identifiers are expected to be UUIDs in RFC4122 string format
                         * (This *does* have dashes).</p>
                         * <p>This method should return the same SubjectCollection as the result of
                         * invoking {@link #loadCollection(String)} with {@link #SUBJECTS_USER}.</p>
                         * @return A subject collection for users
                         */
                        // @ts-ignore
                        getUserSubjects(): org.spongepowered.api.service.permission.SubjectCollection
                        /**
                         * Returns the subject collection which holds groups.
                         * <p>This method should return the same SubjectCollection as the result of
                         * invoking {@link #loadCollection(String)} with {@link #SUBJECTS_GROUP}.</p>
                         * @return A subject collection for groups
                         */
                        // @ts-ignore
                        getGroupSubjects(): org.spongepowered.api.service.permission.SubjectCollection
                        /**
                         * Gets the subject holding data that is applied by default to all
                         * subjects.
                         * <p>This subject is at the root of all inheritance trees, below
                         * even SubjectCollection defaults, meaning it has the lowest
                         * priority when all other weighting is equal.</p>
                         * <p>Note: This data may be persisted, so plugins that add
                         * permissions to this subject must take care to not override
                         * permissions already set or modified.</p>
                         * <p>It is also recommended to use
                         * {@link Subject#getTransientSubjectData()} where possible to avoid
                         * persisting unnecessary data.</p>
                         * <p>Assigning default permissions should be used sparingly, and by
                         * convention, only in situations where "default" game behaviour is restored
                         * by granting a certain permission.</p>
                         * @return The subject holding defaults for all other subjects.
                         */
                        // @ts-ignore
                        getDefaults(): org.spongepowered.api.service.permission.Subject
                        /**
                         * Returns a predicate which determines whether or not a given identifier
                         * is valid for a subject collection held by this service.
                         * <p>It is expected that as a minimum, the standard identifiers expressed
                         * as static parameters in this class will pass the predicate.</p>
                         * @return The predicate
                         */
                        // @ts-ignore
                        getIdentifierValidityPredicate(): java.util.function$.Predicate<java.lang.String | string>
                        /**
                         * Loads and returns a subject collection with the given identifier.
                         * <p>The returned future will complete exceptionally if the subject
                         * collection with the given identifier cannot be loaded.</p>
                         * <p>A {@link IllegalArgumentException} will be thrown directly by this
                         * method if the identifier does not pass the identifier validity
                         * predicate.</p>
                         * @param identifier The identifier. All identifiers are case-insensitive
                         * @return A subject collection for the given identifier
                         * @throws IllegalArgumentException If the collection identifier does not
                         *                                   pass the validity predicate for this
                         *                                   service
                         */
                        // @ts-ignore
                        loadCollection(identifier: java.lang.String | string): java.util.concurrent.CompletableFuture<org.spongepowered.api.service.permission.SubjectCollection>
                        /**
                         * Returns a subject collection with the given identifier, if the
                         * collection is already loaded within this service.
                         * <p>It is important to note that a subject collection with the given
                         * identifier may still exist, even if this method returns an empty
                         * optional. Checking for the presence of a subject collection should
                         * be done using {@link #hasCollection(String)}.</p>
                         * <p>If the collection identifier does not pass the validity predicate,
                         * this method will return an empty optional, and not throw an
                         * exception.</p>
                         * @param identifier The identifier
                         * @return A subject collection for the given identifier
                         */
                        // @ts-ignore
                        getCollection(identifier: java.lang.String | string): java.util.Optional<org.spongepowered.api.service.permission.SubjectCollection>
                        /**
                         * Returns whether a subject collection with the given identifier currently
                         * exists.
                         * @param identifier The identifier of the subject collection
                         * @return If the collection currently exists
                         */
                        // @ts-ignore
                        hasCollection(identifier: java.lang.String | string): java.util.concurrent.CompletableFuture<java.lang.Boolean>
                        /**
                         * Returns an immutable copy of all currently loaded subject collections
                         * held by this permission service.
                         * @return The loaded collections for this service
                         */
                        // @ts-ignore
                        getLoadedCollections(): java.util.Map<java.lang.String | string, org.spongepowered.api.service.permission.SubjectCollection>
                        /**
                         * Returns a set of the subject collection identifiers known to this
                         * service.
                         * @return A set of collection identifiers
                         */
                        // @ts-ignore
                        getAllIdentifiers(): java.util.concurrent.CompletableFuture<java.util.Set<java.lang.String | string> | Array<java.lang.String | string>>
                        /**
                         * Creates a new subject reference to represent the expressed subject.
                         * <p>Note that instances of SubjectReference must be capable of resolving
                         * the identifier to a Subject without being passed a reference to the
                         * service.</p>
                         * <p>A {@link IllegalArgumentException} will be thrown directly by this
                         * method if either identifiers do not pass the identifier validity
                         * predicates.</p>
                         * @param collectionIdentifier The identifier of the collection holding the
                         *                              subject
                         * @param subjectIdentifier The identifier of the subject
                         * @return A subject reference to represent the expressed subject
                         * @throws IllegalArgumentException If either identifiers do not pass the
                         *                                   the validity predicates for this
                         *                                   service / the collection.
                         */
                        // @ts-ignore
                        newSubjectReference(collectionIdentifier: java.lang.String | string, subjectIdentifier: java.lang.String | string): org.spongepowered.api.service.permission.SubjectReference
                        /**
                         * Creates a new description builder for the given plugin's permission.
                         * @param plugin The plugin to create permission descriptions for
                         * @return The newly created permission description builder
                         * @throws IllegalArgumentException if plugin is not a plugin instance
                         */
                        // @ts-ignore
                        newDescriptionBuilder(plugin: java.lang.Object | any): org.spongepowered.api.service.permission.PermissionDescription.Builder
                        /**
                         * Gets the registered or generated {@link PermissionDescription} for the
                         * given permission if available.
                         * <p>If the given permission is not defined itself this might also return
                         * the associated permission template.</p>
                         * @param permission The permission to get the description for
                         * @return The description for the given permission or
                         *          {#link Optional#empty()}
                         */
                        // @ts-ignore
                        getDescription(permission: java.lang.String | string): java.util.Optional<org.spongepowered.api.service.permission.PermissionDescription>
                        /**
                         * Gets a immutable collection containing all registered or generated
                         * {@link PermissionDescription}s.
                         * <p>Implementations may generate descriptions automatically for
                         * permissions in use on the server, based upon permissions stored in
                         * subject data, or based upon checks being performed.</p>
                         * @return An immutable collection contain all registered or generated
                         *          descriptions
                         */
                        // @ts-ignore
                        getDescriptions(): Array<org.spongepowered.api.service.permission.PermissionDescription>
                    }
                }
            }
        }
    }
}
