declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace permission {
                    /**
                     * A subject data implementation storing all contained data in memory.
                     * <p>This class is thread-safe.</p>
                     */
                    // @ts-ignore
                    class MemorySubjectData extends java.lang.Object implements org.spongepowered.api.service.permission.SubjectData {
                        /**
                         * Creates a new subject data instance, using the provided service to
                         * request instances of permission subjects.
                         * @param service The service to request subjects from
                         */
                        // @ts-ignore
                        constructor(service: org.spongepowered.api.service.permission.PermissionService)
                        // @ts-ignore
                        getAllPermissions(): java.util.Map<java.util.Set<org.spongepowered.api.service.context.Context>, java.util.Map<java.lang.String, java.lang.Boolean>>
                        /**
                         * Gets the calculated node tree representation of the permissions for this
                         * subject data instance. If no data is present for the given context,
                         * returns null.
                         * @param contexts The contexts to get a node tree for
                         * @return The node tree
                         */
                        // @ts-ignore
                        getNodeTree(contexts: Array<org.spongepowered.api.service.context.Context>): org.spongepowered.api.service.permission.NodeTree
                        // @ts-ignore
                        getPermissions(contexts: Array<org.spongepowered.api.service.context.Context>): java.util.Map<java.lang.String, java.lang.Boolean>
                        // @ts-ignore
                        setPermission(contexts: Array<org.spongepowered.api.service.context.Context>, permission: string, value: org.spongepowered.api.util.Tristate): java.util.concurrent.CompletableFuture<java.lang.Boolean>
                        // @ts-ignore
                        clearPermissions(): java.util.concurrent.CompletableFuture<java.lang.Boolean>
                        // @ts-ignore
                        clearPermissions(context: Array<org.spongepowered.api.service.context.Context>): java.util.concurrent.CompletableFuture<java.lang.Boolean>
                        // @ts-ignore
                        getAllParents(): java.util.Map<java.util.Set<org.spongepowered.api.service.context.Context>, java.util.List<org.spongepowered.api.service.permission.SubjectReference>>
                        // @ts-ignore
                        getParents(contexts: Array<org.spongepowered.api.service.context.Context>): java.util.List<org.spongepowered.api.service.permission.SubjectReference>
                        // @ts-ignore
                        addParent(contexts: Array<org.spongepowered.api.service.context.Context>, parent: org.spongepowered.api.service.permission.SubjectReference): java.util.concurrent.CompletableFuture<java.lang.Boolean>
                        // @ts-ignore
                        removeParent(contexts: Array<org.spongepowered.api.service.context.Context>, parent: org.spongepowered.api.service.permission.SubjectReference): java.util.concurrent.CompletableFuture<java.lang.Boolean>
                        // @ts-ignore
                        clearParents(): java.util.concurrent.CompletableFuture<java.lang.Boolean>
                        // @ts-ignore
                        clearParents(contexts: Array<org.spongepowered.api.service.context.Context>): java.util.concurrent.CompletableFuture<java.lang.Boolean>
                        // @ts-ignore
                        getAllOptions(): java.util.Map<java.util.Set<org.spongepowered.api.service.context.Context>, java.util.Map<java.lang.String, java.lang.String>>
                        // @ts-ignore
                        getOptions(contexts: Array<org.spongepowered.api.service.context.Context>): java.util.Map<java.lang.String, java.lang.String>
                        // @ts-ignore
                        setOption(contexts: Array<org.spongepowered.api.service.context.Context>, key: string, value: string): java.util.concurrent.CompletableFuture<java.lang.Boolean>
                        // @ts-ignore
                        clearOptions(contexts: Array<org.spongepowered.api.service.context.Context>): java.util.concurrent.CompletableFuture<java.lang.Boolean>
                        // @ts-ignore
                        clearOptions(): java.util.concurrent.CompletableFuture<java.lang.Boolean>
                    }
                }
            }
        }
    }
}
