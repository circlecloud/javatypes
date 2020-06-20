declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace pagination {
                    /**
                     * This service allows pagination of output to users.
                     */
                    // @ts-ignore
                    interface PaginationService {
                        /**
                         * Gets a new pagination builder to send paginated output to a player.
                         * @return The pagination builder
                         */
                        // @ts-ignore
                        builder(): org.spongepowered.api.service.pagination.PaginationList.Builder
                    }
                }
            }
        }
    }
}
